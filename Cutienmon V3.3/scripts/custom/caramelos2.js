import { world } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe((event) => {
    const {damagingEntity,hitEntity} = event;
    const caramelos = [{ identificador: 'serp:dynamax_candy_xl', nivel: 6, particula: "serp:dyn_xl" },
                       { identificador: 'serp:dynamax_candy_l',  nivel: 4,   particula: "serp:dyn_l" },
                       { identificador: 'serp:dynamax_candy_m',   nivel: 2,   particula: "serp:dyn_m" }];

    if (damagingEntity.typeId=="minecraft:player"&&hitEntity.typeId.startsWith("pokemon:p")&&!hitEntity.hasTag("battle")&&!hitEntity.hasTag("defeated")){
        const itemStack = damagingEntity?.getComponent("equippable")?.getEquipment("Mainhand");
        const buscadueño = hitEntity?.getTags().find(tag => tag.startsWith("owner"))?.split("%&%");
        if(buscadueño[1]!==damagingEntity.id) return;
        const buscatag = damagingEntity?.getTags().find(tag => tag.startsWith(`team${buscadueño[2]}`));
        let buscatag2 = buscatag.split("/");

       const caramelo = caramelos.find(c => c.identificador == itemStack.typeId);
       let nivelActual = Number(buscatag2[13]);
       if (nivelActual >= 10) return;
       nivelActual += caramelo.nivel;
       if (nivelActual > 10) nivelActual = 10;
       buscatag2[13] = nivelActual;
       const nuevoTag = buscatag2.join("/");
       damagingEntity.removeTag(buscatag);
       damagingEntity.addTag(nuevoTag);

    if (itemStack.amount > 1){itemStack.amount -= 1;
        damagingEntity?.getComponent("equippable").setEquipment("Mainhand", itemStack);} 
    else {damagingEntity?.getComponent("equippable").setEquipment("Mainhand", undefined);}
    damagingEntity.playSound("serp.levelup", hitEntity.location);
    hitEntity.runCommand(`particle ${caramelo.particula} ~ ~1 ~`);}
});