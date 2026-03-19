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
        ["po_groudon_shrine:trigger",  "serp:groudon_offering",  "groudonn"],
        ["po_articuno_shrine:trigger", "serp:articuno_offering", "articuno"],
        ["po_zapdos_shrine:trigger",   "serp:zapdos_offering",   "zapdos"],
        ["po_moltres_shrine:trigger",  "serp:moltres_offering",  "moltres"],
        ["po_mew_shrine:trigger",      "serp:mew_offering",      "meww"],
        ["po_rayquaza_shrine:trigger", "serp:rayquaza_offering", "rayquaza"],
        ["po_kyogre_shrine:trigger",   "serp:kyogre_offering",   "kyogre"],
        ["po_lugia_shrine:trigger",    "serp:lugia_offering",    "lugia"]
    ];


    for (const [id, itemId, func] of shrines) {

        register(id, {
            onPlayerInteract(ev) {
                const player = ev.player;
                const inv = player.getComponent("minecraft:inventory")?.container;
                const slot = player.selectedSlotIndex ?? player.selectedSlot;
                const item = inv?.getItem(slot);

                if (!item || item.typeId !== itemId) {
                    player.sendMessage("§cBạn phải cầm đúng Offering để triệu hồi!");
                    return;
                }

                player.runCommandAsync(`clear @s ${itemId} 1`);
                player.runCommandAsync(`function ${func}`);
            }
        });

    }


register("po_zygarde_shrine:trigger", {
    onPlayerInteract(ev) {
        const player = ev.player;
        const inv = player.getComponent("minecraft:inventory")?.container;
        if (!inv) return;

        const slot = player.selectedSlotIndex ?? player.selectedSlot;
        const handItem = inv.getItem(slot);

        if (!handItem || handItem.typeId !== "serp:zygarde_cell") {
            player.sendMessage("§cBạn phải cầm Zygarde Cell trên tay!");
            return;
        }
        
        const total = countItem(inv, "serp:zygarde_cell");

        // 100% → 50% → 10%
        if (total >= 100) {
            player.runCommandAsync("clear @s serp:zygarde_cell 100");
            player.runCommandAsync("give @s serp:zygarde_100_offering 1");
            player.runCommandAsync("function zygarde_100");
            player.sendMessage("§aTriệu hồi §eZygarde 100% §athành công!");
            return;
        }

        if (total >= 50) {
            player.runCommandAsync("clear @s serp:zygarde_cell 50");
            player.runCommandAsync("give @s serp:zygarde_50_offering 1");
            player.runCommandAsync("function zygarde_50");
            player.sendMessage("§aTriệu hồi §eZygarde 50% §athành công!");
            return;
        }

        if (total >= 10) {
            player.runCommandAsync("clear @s serp:zygarde_cell 10");
            player.runCommandAsync("give @s serp:zygarde_10_offering 1");
            player.runCommandAsync("function zygarde_10");
            player.sendMessage("§aTriệu hồi §eZygarde 10% §athành công!");
            return;
        }

        player.sendMessage(`§cCần ít nhất 10 Zygarde Cell (hiện có ${total})`);
    }
});


});




system.afterEvents.itemUse.subscribe(ev => {
    const player = ev.source;
    const item = ev.itemStack?.typeId;

    const offeringList = {
        "serp:groudon_offering":   "groudonn",
        "serp:articuno_offering":  "articuno",
        "serp:zapdos_offering":    "zapdos",
        "serp:moltres_offering":   "moltres",
        "serp:mew_offering":       "meww",
        "serp:rayquaza_offering":  "rayquaza",
        "serp:kyogre_offering":    "kyogre",
        "serp:lugia_offering":     "lugia",
        "serp:zygarde_10_offering":"zygarde_10",
        "serp:zygarde_50_offering":"zygarde_50",
        "serp:zygarde_100_offering":"zygarde_100"
    };

    if (item in offeringList) {
        player.runCommandAsync(`function ${offeringList[item]}`);
        player.runCommandAsync(`clear @s ${item} 1`);
    }
});
