import { world } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe((event) => {
    const {damagingEntity,hitEntity} = event;
    const caramelos = [{ identificador: 'serp:rare_candy_max', nivel: 10000, particula: "serp:exp_max" },
                       { identificador: 'serp:rare_candy_xl',  nivel: 650,   particula: "serp:exp_xl" },
                       { identificador: 'serp:rare_candy_l',   nivel: 450,   particula: "serp:exp_l" },
                       { identificador: 'serp:rare_candy_m',   nivel: 250,   particula: "serp:exp_m" },        
                       { identificador: 'serp:rare_candy_s',   nivel: 75,    particula: "serp:exp_s" },
                       { identificador: 'serp:rare_candy_xs',  nivel: 55,    particula: "serp:exp_xs" }];

    if (damagingEntity.typeId=="minecraft:player"&&hitEntity.typeId.startsWith("pokemon:p")&&!hitEntity.hasTag("battle")&&!hitEntity.hasTag("defeated")){
        const itemStack = damagingEntity?.getComponent("equippable")?.getEquipment("Mainhand");
        const buscadueño = hitEntity?.getTags().find(tag => tag.startsWith("owner"))?.split("%&%");
        if(buscadueño[1]!==damagingEntity.id) return;
        const buscatag = damagingEntity?.getTags().find(tag => tag.startsWith(`team${buscadueño[2]}`));
        let buscatag2 = buscatag.split("/");

       const caramelo = caramelos.find(c => c.identificador == itemStack.typeId);
       let nivelActual = Number(buscatag2[8]);
       if (nivelActual >= 10000) return;
       nivelActual += caramelo.nivel;
       if (nivelActual > 10000) nivelActual = 10000;
       buscatag2[8] = nivelActual;
       const nuevoTag = buscatag2.join("/");
       damagingEntity.removeTag(buscatag);
       damagingEntity.addTag(nuevoTag);

    if (itemStack.amount > 1){itemStack.amount -= 1;
        damagingEntity?.getComponent("equippable").setEquipment("Mainhand", itemStack);} 
    else {damagingEntity?.getComponent("equippable").setEquipment("Mainhand", undefined);}
    damagingEntity.playSound("serp.levelup", hitEntity.location);
    hitEntity.runCommand(`particle ${caramelo.particula} ~ ~1 ~`);}
});