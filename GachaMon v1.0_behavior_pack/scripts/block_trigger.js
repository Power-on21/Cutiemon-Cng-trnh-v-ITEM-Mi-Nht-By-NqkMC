import { system, world } from '@minecraft/server';
import { decrementStack, getOppositeDirection, DirectionType, cardinalSides, randomFunction } from './utils/helper';
import { directionToVector3 } from './utils/math';

world.beforeEvents.worldInitialize.subscribe(initEvent => {
  initEvent.blockComponentRegistry.registerCustomComponent('serp_gacha_machine_black:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function gacha_spin"); },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_gacha_machine:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function gacha_spin"); },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_gacha_machine_light_gray:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function gacha_spin"); },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_gacha_machine_blue:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function gacha_spin"); },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_gacha_machine_cyan:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function gacha_spin"); },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_gacha_machine_gray:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function gacha_spin"); },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_gacha_machine_brown:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function gacha_spin"); },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_gacha_machine_lime:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function gacha_spin"); },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_gacha_machine_green:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function gacha_spin"); },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_gacha_machine_light_blue:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function gacha_spin"); },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_gacha_machine_orange:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function gacha_spin"); },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_megagacha_machine:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function mega_gacha"); },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_gacha_machine_white:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function gacha_spin"); },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_gacha_machine_purple:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function gacha_spin"); },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_gacha_machine_red:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function gacha_spin"); },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_gacha_machine_yellow:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function gacha_spin"); },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_gacha_machine_magenta:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function gacha_spin"); },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_gacha_machine_pink:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function gacha_spin"); },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_wildgacha_machine:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function wildgach_random"); },
});

initEvent.blockComponentRegistry.registerCustomComponent('serp_megagacha_machine_black:trigger', {
  onPlayerInteract: e => { e.player.runCommand("function mega_gacha"); },
});

});
