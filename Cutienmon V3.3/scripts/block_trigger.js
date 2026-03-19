import { system, world } from '@minecraft/server';
import { decrementStack, getOppositeDirection, DirectionType, cardinalSides, randomFunction } from './utils/helper';
import { directionToVector3 } from './utils/math';

world.beforeEvents.worldInitialize.subscribe(initEvent => {
  initEvent.blockComponentRegistry.registerCustomComponent('serp_blue_mint_seeds:trigger', {
  onRandomTick: e => { const growth = e.block.permutation.getState("pa:growth");

if (growth >= 2) return;

const growthChance = 1 / 3;
if (Math.random() > growthChance) return;

const effectLocation = e.block.center();
            
e.dimension.spawnParticle("minecraft:crop_growth_emitter", effectLocation);
e.block.setPermutation(e.block.permutation.withState("pa:growth", growth + 1));
 },
onPlayerInteract: e => { if (!e.player) return;

const equippable = e.player.getComponent("minecraft:equippable");
if (!equippable) return;

const mainhand = equippable.getEquipmentSlot("Mainhand");
if (!mainhand.hasItem() || mainhand.typeId !== "minecraft:bone_meal")
    return;

let growth = e.block.permutation.getState("pa:growth");

if (growth >= 2) return;

growth += 1;
e.block.setPermutation(e.block.permutation.withState("pa:growth", growth));

if (mainhand.amount > 1) mainhand.amount--;
else mainhand.setItem(undefined);

const effectLocation = e.block.center();
e.dimension.playSound("item.bone_meal.use", effectLocation);
e.dimension.spawnParticle("minecraft:crop_growth_emitter", effectLocation);
 },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_cyan_mint_seeds:trigger', {
  onRandomTick: e => { const growth = e.block.permutation.getState("pa:growth");

if (growth >= 2) return;

const growthChance = 1 / 3;
if (Math.random() > growthChance) return;

const effectLocation = e.block.center();
            
e.dimension.spawnParticle("minecraft:crop_growth_emitter", effectLocation);
e.block.setPermutation(e.block.permutation.withState("pa:growth", growth + 1));
 },
onPlayerInteract: e => { if (!e.player) return;

const equippable = e.player.getComponent("minecraft:equippable");
if (!equippable) return;

const mainhand = equippable.getEquipmentSlot("Mainhand");
if (!mainhand.hasItem() || mainhand.typeId !== "minecraft:bone_meal")
    return;

let growth = e.block.permutation.getState("pa:growth");

if (growth >= 2) return;

growth += 1;
e.block.setPermutation(e.block.permutation.withState("pa:growth", growth));

if (mainhand.amount > 1) mainhand.amount--;
else mainhand.setItem(undefined);

const effectLocation = e.block.center();
e.dimension.playSound("item.bone_meal.use", effectLocation);
e.dimension.spawnParticle("minecraft:crop_growth_emitter", effectLocation);
 },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_green_mint_seeds:trigger', {
  onRandomTick: e => { const growth = e.block.permutation.getState("pa:growth");

if (growth >= 2) return;

const growthChance = 1 / 3;
if (Math.random() > growthChance) return;

const effectLocation = e.block.center();
            
e.dimension.spawnParticle("minecraft:crop_growth_emitter", effectLocation);
e.block.setPermutation(e.block.permutation.withState("pa:growth", growth + 1));
 },
onPlayerInteract: e => { if (!e.player) return;

const equippable = e.player.getComponent("minecraft:equippable");
if (!equippable) return;

const mainhand = equippable.getEquipmentSlot("Mainhand");
if (!mainhand.hasItem() || mainhand.typeId !== "minecraft:bone_meal")
    return;

let growth = e.block.permutation.getState("pa:growth");

if (growth >= 2) return;

growth += 1;
e.block.setPermutation(e.block.permutation.withState("pa:growth", growth));

if (mainhand.amount > 1) mainhand.amount--;
else mainhand.setItem(undefined);

const effectLocation = e.block.center();
e.dimension.playSound("item.bone_meal.use", effectLocation);
e.dimension.spawnParticle("minecraft:crop_growth_emitter", effectLocation);
 },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_pink_mint_seeds:trigger', {
  onRandomTick: e => { const growth = e.block.permutation.getState("pa:growth");

if (growth >= 2) return;

const growthChance = 1 / 3;
if (Math.random() > growthChance) return;

const effectLocation = e.block.center();
            
e.dimension.spawnParticle("minecraft:crop_growth_emitter", effectLocation);
e.block.setPermutation(e.block.permutation.withState("pa:growth", growth + 1));
 },
onPlayerInteract: e => { if (!e.player) return;

const equippable = e.player.getComponent("minecraft:equippable");
if (!equippable) return;

const mainhand = equippable.getEquipmentSlot("Mainhand");
if (!mainhand.hasItem() || mainhand.typeId !== "minecraft:bone_meal")
    return;

let growth = e.block.permutation.getState("pa:growth");

if (growth >= 2) return;

growth += 1;
e.block.setPermutation(e.block.permutation.withState("pa:growth", growth));

if (mainhand.amount > 1) mainhand.amount--;
else mainhand.setItem(undefined);

const effectLocation = e.block.center();
e.dimension.playSound("item.bone_meal.use", effectLocation);
e.dimension.spawnParticle("minecraft:crop_growth_emitter", effectLocation);
 },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_red_mint_seeds:trigger', {
  onRandomTick: e => { const growth = e.block.permutation.getState("pa:growth");

if (growth >= 2) return;

const growthChance = 1 / 3;
if (Math.random() > growthChance) return;

const effectLocation = e.block.center();
            
e.dimension.spawnParticle("minecraft:crop_growth_emitter", effectLocation);
e.block.setPermutation(e.block.permutation.withState("pa:growth", growth + 1));
 },
onPlayerInteract: e => { if (!e.player) return;

const equippable = e.player.getComponent("minecraft:equippable");
if (!equippable) return;

const mainhand = equippable.getEquipmentSlot("Mainhand");
if (!mainhand.hasItem() || mainhand.typeId !== "minecraft:bone_meal")
    return;

let growth = e.block.permutation.getState("pa:growth");

if (growth >= 2) return;

growth += 1;
e.block.setPermutation(e.block.permutation.withState("pa:growth", growth));

if (mainhand.amount > 1) mainhand.amount--;
else mainhand.setItem(undefined);

const effectLocation = e.block.center();
e.dimension.playSound("item.bone_meal.use", effectLocation);
e.dimension.spawnParticle("minecraft:crop_growth_emitter", effectLocation);
 },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_white_mint_seeds:trigger', {
  onRandomTick: e => { const growth = e.block.permutation.getState("pa:growth");

if (growth >= 2) return;

const growthChance = 1 / 3;
if (Math.random() > growthChance) return;

const effectLocation = e.block.center();
            
e.dimension.spawnParticle("minecraft:crop_growth_emitter", effectLocation);
e.block.setPermutation(e.block.permutation.withState("pa:growth", growth + 1));
 },
onPlayerInteract: e => { if (!e.player) return;

const equippable = e.player.getComponent("minecraft:equippable");
if (!equippable) return;

const mainhand = equippable.getEquipmentSlot("Mainhand");
if (!mainhand.hasItem() || mainhand.typeId !== "minecraft:bone_meal")
    return;

let growth = e.block.permutation.getState("pa:growth");

if (growth >= 2) return;

growth += 1;
e.block.setPermutation(e.block.permutation.withState("pa:growth", growth));

if (mainhand.amount > 1) mainhand.amount--;
else mainhand.setItem(undefined);

const effectLocation = e.block.center();
e.dimension.playSound("item.bone_meal.use", effectLocation);
e.dimension.spawnParticle("minecraft:crop_growth_emitter", effectLocation);
 },
});

});
