import { system, world, BlockPermutation } from "@minecraft/server";

const chests = ["po:gilded_chest"];

world.afterEvents.playerPlaceBlock.subscribe((ev) => {
    const { block, dimension } = ev;
    if (block && chests.includes(block.getItemStack()?.typeId)) {
        system.run(() => {
            let target = dimension.spawnEntity("pa:custom_chest", block.bottomCenter());
            target.nameTag = `tile.${block.typeId}.name`;
        })
    }
})

function removeEntityAndDropInventory(entity) {
    const inventory = entity.getComponent("inventory")?.container;

    if (!inventory) {
        entity.remove();
        return;
    }

    for (let i = 0; i < inventory.size; i++) {
        const item = inventory.getItem(i);

        if (item) entity.dimension.spawnItem(item, entity.location);
    }
    entity.removeTag('custom_chest:opened');
    entity.remove();
}


world.afterEvents.entityHitEntity.subscribe(ev => {
    const { hitEntity } = ev;

    if (hitEntity.typeId !== "pa:custom_chest") return;

    let block = hitEntity.dimension.getBlock(hitEntity.location);

    block.dimension.runCommand(`setblock ${block.x} ${block.y} ${block.z} air destroy`);
    removeEntityAndDropInventory(hitEntity);
});


world.afterEvents.playerInteractWithEntity.subscribe(ev => {
    const { target } = ev;

    if (target.typeId !== "pa:custom_chest") return;
    let block = target.dimension.getBlock(target.location)

    target.addTag('custom_chest:opened')
    block.setPermutation(
        BlockPermutation.resolve(block.typeId, {
            "custom_chest:opened": true,
            "minecraft:cardinal_direction": block.permutation.getState("minecraft:cardinal_direction")
        })
    )
    target.dimension.playSound('random.chestopen', target.location);
});

system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity: entity }) => {
    if (id === "better_chests:death") {
        removeEntityAndDropInventory(entity);
    }

    if (id === "custom_chest:close") {
        if (entity.hasTag('custom_chest:opened')) {
            let block = entity.dimension.getBlock(entity.location);
            try {
                block.setPermutation(
                BlockPermutation.resolve(block.typeId, {
                    "custom_chest:opened": false,
                    "minecraft:cardinal_direction": block.permutation.getState("minecraft:cardinal_direction")
                })
            );
            } catch (error) {
                entity.removeTag('custom_chest:opened');
            }
            entity.dimension.playSound('random.chestclosed', entity.location);
            entity.removeTag('custom_chest:opened');
        }
    }
})
