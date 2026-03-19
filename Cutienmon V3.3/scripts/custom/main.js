import { world, system, MolangVariableMap } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe((event) => {
    const mentas = [
        { identificador: 'serp:mint_active', naturaleza: 1 },
        { identificador: 'serp:mint_kind', naturaleza: 2 },
        { identificador: 'serp:mint_loose', naturaleza: 3 },        
        { identificador: 'serp:mint_tame', naturaleza: 4 },
        { identificador: 'serp:mint_placid', naturaleza: 5 },
        { identificador: 'serp:mint_affable', naturaleza: 6 },        
        { identificador: 'serp:mint_bold', naturaleza: 7 },
        { identificador: 'serp:mint_strong', naturaleza: 8 },
        { identificador: 'serp:mint_scared', naturaleza: 9 },        
        { identificador: 'serp:mint_rare', naturaleza: 10 },
        { identificador: 'serp:mint_agitated', naturaleza: 11 },
        { identificador: 'serp:mint_cautious', naturaleza: 12 },        
        { identificador: 'serp:mint_gross', naturaleza: 13 },
        { identificador: 'serp:mint_modest', naturaleza: 14 },
        { identificador: 'serp:mint_serene', naturaleza: 15 },        
        { identificador: 'serp:mint_chereful', naturaleza: 16 },
        { identificador: 'serp:mint_docile', naturaleza: 17 },
        { identificador: 'serp:mint_sullen', naturaleza: 18 },        
        { identificador: 'serp:mint_daring', naturaleza: 19 },
        { identificador: 'serp:mint_serious', naturaleza: 20 },
        { identificador: 'serp:mint_crazy', naturaleza: 21 },        
        { identificador: 'serp:mint_firm', naturaleza: 22 },
        { identificador: 'serp:mint_naive', naturaleza: 23 },
        { identificador: 'serp:mint_mischievous', naturaleza: 24 },        
        { identificador: 'serp:mint_timid', naturaleza: 25 }
    ];

    const { damagingEntity, hitEntity } = event;
    if (damagingEntity.typeId == "minecraft:player") {
        const container = damagingEntity.getComponent("equippable");
        const itemStack = container.getEquipment("Mainhand");

        if (hitEntity.typeId.startsWith("pokemon:p")) {
            const ownerTag = hitEntity.getTags().find(tag => tag.startsWith(`owner`));
            if (!ownerTag) return;

            const buscadueño = ownerTag.split("%&%");
            if (buscadueño[1] == damagingEntity.id) {
                const buscatag = damagingEntity.getTags().find(tag => tag.startsWith(`team${buscadueño[2]}`));
                if (!buscatag) return;

                let buscatag2 = buscatag.split("/");

                for (const menta of mentas) {
                    if (itemStack && itemStack.typeId == menta.identificador) {
                        
                        buscatag2[9] = menta.naturaleza;
                        buscatag2 = buscatag2.join(`/`);
                        damagingEntity.removeTag(`${buscatag}`);
                        damagingEntity.addTag(`${buscatag2}`);

                        if (itemStack.amount > 1) {
                            itemStack.amount -= 1;
                            container.setEquipment("Mainhand", itemStack);
                        } else {
                            container.setEquipment("Mainhand", undefined);
                        };

                        const dimension = hitEntity.dimension;

                        dimension.playSound("random.levelup", hitEntity.location);

hitEntity.runCommand("particle minecraft:happy_village ~~~");
                    }
                }
            }
        }
    }
});