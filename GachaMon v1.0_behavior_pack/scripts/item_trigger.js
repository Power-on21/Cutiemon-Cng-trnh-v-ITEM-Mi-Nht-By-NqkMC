import { system, world } from '@minecraft/server';
import { decrementStack, getOppositeDirection, DirectionType, cardinalSides, randomFunction } from './utils/helper';
import { directionToVector3 } from './utils/math';

world.beforeEvents.worldInitialize.subscribe(initEvent => { initEvent.itemComponentRegistry.registerCustomComponent('gacha_pokeball_capsule:trigger', {
  onUse: e => { e.source.runCommand("function pokecapsule_random"); },
});

initEvent.itemComponentRegistry.registerCustomComponent('gacha_mega_capsule:trigger', {
  onUse: e => { e.source.runCommand("function megacapsule_random"); },
});

initEvent.itemComponentRegistry.registerCustomComponent('gacha_wild_capsule:trigger', {
  onUse: e => { e.source.runCommand("function select_random"); },
});

initEvent.itemComponentRegistry.registerCustomComponent('gacha_ultraball_capsule:trigger', {
  onUse: e => { e.source.runCommand("function ultracapsule_random"); },
});

initEvent.itemComponentRegistry.registerCustomComponent('gacha_superball_capsule:trigger', {
  onUse: e => { e.source.runCommand("function supercapsule_random"); },
});

initEvent.itemComponentRegistry.registerCustomComponent('gacha_masterball_capsule:trigger', {
  onUse: e => { e.source.runCommand("function mastercapsule_random"); },
});
 });

