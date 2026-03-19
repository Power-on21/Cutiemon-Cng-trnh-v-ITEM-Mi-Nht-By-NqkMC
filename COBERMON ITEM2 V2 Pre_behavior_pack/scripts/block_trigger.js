import { system, world } from "@minecraft/server";

function countItem(container, typeId) {
    let total = 0;
    for (let i = 0; i < container.size; i++) {
        const item = container.getItem(i);
        if (item && item.typeId === typeId) {
            total += item.amount;
        }
    }
    return total;
}

world.beforeEvents.worldInitialize.subscribe(event => {
    const register = event.blockComponentRegistry.registerCustomComponent.bind(event.blockComponentRegistry);

    const shrines = [
        ["po_cosmicdust_shrine:trigger",  "serp:cosmicdust_offering",  "cosmicdust"],
        ["po_suicune_shrine:trigger", "serp:suicune_treat_offering", "suicune"],
        ["po_entei_shrine:trigger",   "serp:entei_treat_offering",   "entei"],
        ["po_palkia_shrine:trigger",  "serp:palkia_offering",  "palkia"],
        ["po_raikou_shrine:trigger",      "serp:raikou_treat_offering",      "raikou"],
        ["po_dialga_shrine:trigger", "serp:dialga_offering", "dialga"],
        ["po_zekrom_shrine:trigger",   "serp:zekrom_offering",   "zekrom"],
        ["po_reshiram_shrine:trigger",    "serp:reshiram_offering",    "reshiram"]
    ];

    for (const [id, itemId, func] of shrines) {
        register(id, {
            onPlayerInteract(ev) {
                const { player, block } = ev;
                const inv = player.getComponent("minecraft:inventory")?.container;
                const slot = player.selectedSlotIndex ?? player.selectedSlot;
                const item = inv?.getItem(slot);

                if (!item || item.typeId !== itemId) {
                    player.sendMessage("§cKhông Có Vật Phẩm Để Triệu Hồi!");
                    return;
                }

                const { x, y, z } = block.location;
                // Sử dụng Math.floor để đảm bảo tọa độ nguyên và cộng 0.5 để vào tâm block
                const spawnX = (x + 0.5).toFixed(1);
                const spawnY = (y + 1.0).toFixed(1);
                const spawnZ = (z + 0.5).toFixed(1);

                player.runCommandAsync(`clear @s ${itemId} 1`);
                player.runCommandAsync(`execute positioned ${spawnX} ${spawnY} ${spawnZ} run function ${func}`);
            }
        });
    }

    register("po_zygarde_shrine:trigger", {
        onPlayerInteract(ev) {
            const { player, block } = ev;
            const inv = player.getComponent("minecraft:inventory")?.container;
            if (!inv) return;

            const slot = player.selectedSlotIndex ?? player.selectedSlot;
            const handItem = inv.getItem(slot);

            if (!handItem || handItem.typeId !== "serp:zygarde_cell") {
                player.sendMessage("§cPhải cầm Zygarde Cell trên tay!");
                return;
            }
            
            const total = countItem(inv, "serp:zygarde_cell");
            const { x, y, z } = block.location;
            const pos = `${(x + 0.5).toFixed(1)} ${(y + 1.0).toFixed(1)} ${(z + 0.5).toFixed(1)}`;

            if (total >= 100) {
                player.runCommandAsync("clear @s serp:zygarde_cell 100");
                player.runCommandAsync(`execute positioned ${pos} run function zygarde_100`);
                player.sendMessage("§aTriệu hồi §eZygarde 100%!");
            } else if (total >= 50) {
                player.runCommandAsync("clear @s serp:zygarde_cell 50");
                player.runCommandAsync(`execute positioned ${pos} run function zygarde_50`);
                player.sendMessage("§aTriệu hồi §eZygarde 50%!");
            } else if (total >= 10) {
                player.runCommandAsync("clear @s serp:zygarde_cell 10");
                player.runCommandAsync(`execute positioned ${pos} run function zygarde_10`);
                player.sendMessage("§aTriệu hồi §eZygarde 10%!");
            } else {
                player.sendMessage(`§cCần ít nhất 10 Zygarde Cell (Hiện có ${total})`);
            }
        }
    });
});
