import { system, world } from '@minecraft/server';
import { decrementStack, getOppositeDirection, DirectionType, cardinalSides, randomFunction } from './utils/helper';
import { directionToVector3 } from './utils/math';

world.beforeEvents.worldInitialize.subscribe(initEvent => { initEvent.itemComponentRegistry.registerCustomComponent('serp_black_edible_dye:trigger', {
  onConsume: e => {
  e.source.removeEffect("minecraft:absorption");
e.source.removeEffect("minecraft:blindness");
e.source.removeEffect("minecraft:bad_omen");
e.source.removeEffect("minecraft:conduit_power");
e.source.removeEffect("minecraft:fire_resistance");
e.source.removeEffect("minecraft:health_boost");
e.source.removeEffect("minecraft:instant_health");
e.source.removeEffect("minecraft:hunger");
e.source.removeEffect("minecraft:jump_boost");
e.source.removeEffect("minecraft:mining_fatigue");
e.source.removeEffect("minecraft:night_vision");
e.source.removeEffect("minecraft:regeneration");
e.source.removeEffect("minecraft:saturation");
e.source.removeEffect("minecraft:slowness");
e.source.removeEffect("minecraft:strength");
e.source.removeEffect("minecraft:weakness");
e.source.removeEffect("minecraft:fatal_poison");
e.source.removeEffect("minecraft:haste");
e.source.removeEffect("minecraft:village_hero");
e.source.removeEffect("minecraft:instant_damage");
e.source.removeEffect("minecraft:invisibility");
e.source.removeEffect("minecraft:levitation");
e.source.removeEffect("minecraft:nausea");
e.source.removeEffect("minecraft:poison");
e.source.removeEffect("minecraft:resistance");
e.source.removeEffect("minecraft:slow_falling");
e.source.removeEffect("minecraft:speed");
e.source.removeEffect("minecraft:water_breathing");
e.source.removeEffect("minecraft:wither");
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_blue_edible_dye:trigger', {
  onConsume: e => {
  e.source.removeEffect("minecraft:absorption");
e.source.removeEffect("minecraft:blindness");
e.source.removeEffect("minecraft:bad_omen");
e.source.removeEffect("minecraft:conduit_power");
e.source.removeEffect("minecraft:fire_resistance");
e.source.removeEffect("minecraft:health_boost");
e.source.removeEffect("minecraft:instant_health");
e.source.removeEffect("minecraft:hunger");
e.source.removeEffect("minecraft:jump_boost");
e.source.removeEffect("minecraft:mining_fatigue");
e.source.removeEffect("minecraft:night_vision");
e.source.removeEffect("minecraft:regeneration");
e.source.removeEffect("minecraft:saturation");
e.source.removeEffect("minecraft:slowness");
e.source.removeEffect("minecraft:strength");
e.source.removeEffect("minecraft:weakness");
e.source.removeEffect("minecraft:fatal_poison");
e.source.removeEffect("minecraft:haste");
e.source.removeEffect("minecraft:village_hero");
e.source.removeEffect("minecraft:instant_damage");
e.source.removeEffect("minecraft:invisibility");
e.source.removeEffect("minecraft:levitation");
e.source.removeEffect("minecraft:nausea");
e.source.removeEffect("minecraft:poison");
e.source.removeEffect("minecraft:resistance");
e.source.removeEffect("minecraft:slow_falling");
e.source.removeEffect("minecraft:speed");
e.source.removeEffect("minecraft:water_breathing");
e.source.removeEffect("minecraft:wither");
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_candied_apple10:trigger', {
  onConsume: e => {
  e.source.addEffect("minecraft:speed", 200, {amplifier: 1});
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_candied_apple:trigger', {
  onConsume: e => {
  e.source.addEffect("minecraft:speed", 200, {amplifier: 1});
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_brown_edible_dye:trigger', {
  onConsume: e => {
  e.source.removeEffect("minecraft:absorption");
e.source.removeEffect("minecraft:blindness");
e.source.removeEffect("minecraft:bad_omen");
e.source.removeEffect("minecraft:conduit_power");
e.source.removeEffect("minecraft:fire_resistance");
e.source.removeEffect("minecraft:health_boost");
e.source.removeEffect("minecraft:instant_health");
e.source.removeEffect("minecraft:hunger");
e.source.removeEffect("minecraft:jump_boost");
e.source.removeEffect("minecraft:mining_fatigue");
e.source.removeEffect("minecraft:night_vision");
e.source.removeEffect("minecraft:regeneration");
e.source.removeEffect("minecraft:saturation");
e.source.removeEffect("minecraft:slowness");
e.source.removeEffect("minecraft:strength");
e.source.removeEffect("minecraft:weakness");
e.source.removeEffect("minecraft:fatal_poison");
e.source.removeEffect("minecraft:haste");
e.source.removeEffect("minecraft:village_hero");
e.source.removeEffect("minecraft:instant_damage");
e.source.removeEffect("minecraft:invisibility");
e.source.removeEffect("minecraft:levitation");
e.source.removeEffect("minecraft:nausea");
e.source.removeEffect("minecraft:poison");
e.source.removeEffect("minecraft:resistance");
e.source.removeEffect("minecraft:slow_falling");
e.source.removeEffect("minecraft:speed");
e.source.removeEffect("minecraft:water_breathing");
e.source.removeEffect("minecraft:wither");
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_candied_apple12:trigger', {
  onConsume: e => {
  e.source.addEffect("minecraft:speed", 200, {amplifier: 1});
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_candied_apple11:trigger', {
  onConsume: e => {
  e.source.addEffect("minecraft:speed", 200, {amplifier: 1});
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_candied_apple14:trigger', {
  onConsume: e => {
  e.source.addEffect("minecraft:speed", 200, {amplifier: 1});
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_candied_apple15:trigger', {
  onConsume: e => {
  e.source.addEffect("minecraft:speed", 200, {amplifier: 1});
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_candied_apple13:trigger', {
  onConsume: e => {
  e.source.addEffect("minecraft:speed", 200, {amplifier: 1});
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_candied_apple16:trigger', {
  onConsume: e => {
  e.source.addEffect("minecraft:speed", 200, {amplifier: 1});
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_candied_apple5:trigger', {
  onConsume: e => {
  e.source.addEffect("minecraft:speed", 200, {amplifier: 1});
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_candied_apple2:trigger', {
  onConsume: e => {
  e.source.addEffect("minecraft:speed", 200, {amplifier: 1});
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_candied_apple4:trigger', {
  onConsume: e => {
  e.source.addEffect("minecraft:speed", 200, {amplifier: 1});
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_candied_apple3:trigger', {
  onConsume: e => {
  e.source.addEffect("minecraft:speed", 200, {amplifier: 1});
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_candied_apple7:trigger', {
  onConsume: e => {
  e.source.addEffect("minecraft:speed", 200, {amplifier: 1});
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_candied_apple8:trigger', {
  onConsume: e => {
  e.source.addEffect("minecraft:speed", 200, {amplifier: 1});
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_candied_apple6:trigger', {
  onConsume: e => {
  e.source.addEffect("minecraft:speed", 200, {amplifier: 1});
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_candied_apple9:trigger', {
  onConsume: e => {
  e.source.addEffect("minecraft:speed", 200, {amplifier: 1});
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_cyan_edible_dye:trigger', {
  onConsume: e => {
  e.source.removeEffect("minecraft:absorption");
e.source.removeEffect("minecraft:blindness");
e.source.removeEffect("minecraft:bad_omen");
e.source.removeEffect("minecraft:conduit_power");
e.source.removeEffect("minecraft:fire_resistance");
e.source.removeEffect("minecraft:health_boost");
e.source.removeEffect("minecraft:instant_health");
e.source.removeEffect("minecraft:hunger");
e.source.removeEffect("minecraft:jump_boost");
e.source.removeEffect("minecraft:mining_fatigue");
e.source.removeEffect("minecraft:night_vision");
e.source.removeEffect("minecraft:regeneration");
e.source.removeEffect("minecraft:saturation");
e.source.removeEffect("minecraft:slowness");
e.source.removeEffect("minecraft:strength");
e.source.removeEffect("minecraft:weakness");
e.source.removeEffect("minecraft:fatal_poison");
e.source.removeEffect("minecraft:haste");
e.source.removeEffect("minecraft:village_hero");
e.source.removeEffect("minecraft:instant_damage");
e.source.removeEffect("minecraft:invisibility");
e.source.removeEffect("minecraft:levitation");
e.source.removeEffect("minecraft:nausea");
e.source.removeEffect("minecraft:poison");
e.source.removeEffect("minecraft:resistance");
e.source.removeEffect("minecraft:slow_falling");
e.source.removeEffect("minecraft:speed");
e.source.removeEffect("minecraft:water_breathing");
e.source.removeEffect("minecraft:wither");
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_gray_edible_dye:trigger', {
  onConsume: e => {
  e.source.removeEffect("minecraft:absorption");
e.source.removeEffect("minecraft:blindness");
e.source.removeEffect("minecraft:bad_omen");
e.source.removeEffect("minecraft:conduit_power");
e.source.removeEffect("minecraft:fire_resistance");
e.source.removeEffect("minecraft:health_boost");
e.source.removeEffect("minecraft:instant_health");
e.source.removeEffect("minecraft:hunger");
e.source.removeEffect("minecraft:jump_boost");
e.source.removeEffect("minecraft:mining_fatigue");
e.source.removeEffect("minecraft:night_vision");
e.source.removeEffect("minecraft:regeneration");
e.source.removeEffect("minecraft:saturation");
e.source.removeEffect("minecraft:slowness");
e.source.removeEffect("minecraft:strength");
e.source.removeEffect("minecraft:weakness");
e.source.removeEffect("minecraft:fatal_poison");
e.source.removeEffect("minecraft:haste");
e.source.removeEffect("minecraft:village_hero");
e.source.removeEffect("minecraft:instant_damage");
e.source.removeEffect("minecraft:invisibility");
e.source.removeEffect("minecraft:levitation");
e.source.removeEffect("minecraft:nausea");
e.source.removeEffect("minecraft:poison");
e.source.removeEffect("minecraft:resistance");
e.source.removeEffect("minecraft:slow_falling");
e.source.removeEffect("minecraft:speed");
e.source.removeEffect("minecraft:water_breathing");
e.source.removeEffect("minecraft:wither");
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_green_edible_dye:trigger', {
  onConsume: e => {
  e.source.removeEffect("minecraft:absorption");
e.source.removeEffect("minecraft:blindness");
e.source.removeEffect("minecraft:bad_omen");
e.source.removeEffect("minecraft:conduit_power");
e.source.removeEffect("minecraft:fire_resistance");
e.source.removeEffect("minecraft:health_boost");
e.source.removeEffect("minecraft:instant_health");
e.source.removeEffect("minecraft:hunger");
e.source.removeEffect("minecraft:jump_boost");
e.source.removeEffect("minecraft:mining_fatigue");
e.source.removeEffect("minecraft:night_vision");
e.source.removeEffect("minecraft:regeneration");
e.source.removeEffect("minecraft:saturation");
e.source.removeEffect("minecraft:slowness");
e.source.removeEffect("minecraft:strength");
e.source.removeEffect("minecraft:weakness");
e.source.removeEffect("minecraft:fatal_poison");
e.source.removeEffect("minecraft:haste");
e.source.removeEffect("minecraft:village_hero");
e.source.removeEffect("minecraft:instant_damage");
e.source.removeEffect("minecraft:invisibility");
e.source.removeEffect("minecraft:levitation");
e.source.removeEffect("minecraft:nausea");
e.source.removeEffect("minecraft:poison");
e.source.removeEffect("minecraft:resistance");
e.source.removeEffect("minecraft:slow_falling");
e.source.removeEffect("minecraft:speed");
e.source.removeEffect("minecraft:water_breathing");
e.source.removeEffect("minecraft:wither");
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_light_gray_edible_dye:trigger', {
  onConsume: e => {
  e.source.removeEffect("minecraft:absorption");
e.source.removeEffect("minecraft:blindness");
e.source.removeEffect("minecraft:bad_omen");
e.source.removeEffect("minecraft:conduit_power");
e.source.removeEffect("minecraft:fire_resistance");
e.source.removeEffect("minecraft:health_boost");
e.source.removeEffect("minecraft:instant_health");
e.source.removeEffect("minecraft:hunger");
e.source.removeEffect("minecraft:jump_boost");
e.source.removeEffect("minecraft:mining_fatigue");
e.source.removeEffect("minecraft:night_vision");
e.source.removeEffect("minecraft:regeneration");
e.source.removeEffect("minecraft:saturation");
e.source.removeEffect("minecraft:slowness");
e.source.removeEffect("minecraft:strength");
e.source.removeEffect("minecraft:weakness");
e.source.removeEffect("minecraft:fatal_poison");
e.source.removeEffect("minecraft:haste");
e.source.removeEffect("minecraft:village_hero");
e.source.removeEffect("minecraft:instant_damage");
e.source.removeEffect("minecraft:invisibility");
e.source.removeEffect("minecraft:levitation");
e.source.removeEffect("minecraft:nausea");
e.source.removeEffect("minecraft:poison");
e.source.removeEffect("minecraft:resistance");
e.source.removeEffect("minecraft:slow_falling");
e.source.removeEffect("minecraft:speed");
e.source.removeEffect("minecraft:water_breathing");
e.source.removeEffect("minecraft:wither");
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_light_blue_edible_dye:trigger', {
  onConsume: e => {
  e.source.removeEffect("minecraft:absorption");
e.source.removeEffect("minecraft:blindness");
e.source.removeEffect("minecraft:bad_omen");
e.source.removeEffect("minecraft:conduit_power");
e.source.removeEffect("minecraft:fire_resistance");
e.source.removeEffect("minecraft:health_boost");
e.source.removeEffect("minecraft:instant_health");
e.source.removeEffect("minecraft:hunger");
e.source.removeEffect("minecraft:jump_boost");
e.source.removeEffect("minecraft:mining_fatigue");
e.source.removeEffect("minecraft:night_vision");
e.source.removeEffect("minecraft:regeneration");
e.source.removeEffect("minecraft:saturation");
e.source.removeEffect("minecraft:slowness");
e.source.removeEffect("minecraft:strength");
e.source.removeEffect("minecraft:weakness");
e.source.removeEffect("minecraft:fatal_poison");
e.source.removeEffect("minecraft:haste");
e.source.removeEffect("minecraft:village_hero");
e.source.removeEffect("minecraft:instant_damage");
e.source.removeEffect("minecraft:invisibility");
e.source.removeEffect("minecraft:levitation");
e.source.removeEffect("minecraft:nausea");
e.source.removeEffect("minecraft:poison");
e.source.removeEffect("minecraft:resistance");
e.source.removeEffect("minecraft:slow_falling");
e.source.removeEffect("minecraft:speed");
e.source.removeEffect("minecraft:water_breathing");
e.source.removeEffect("minecraft:wither");
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_lime_edible_dye:trigger', {
  onConsume: e => {
  e.source.removeEffect("minecraft:absorption");
e.source.removeEffect("minecraft:blindness");
e.source.removeEffect("minecraft:bad_omen");
e.source.removeEffect("minecraft:conduit_power");
e.source.removeEffect("minecraft:fire_resistance");
e.source.removeEffect("minecraft:health_boost");
e.source.removeEffect("minecraft:instant_health");
e.source.removeEffect("minecraft:hunger");
e.source.removeEffect("minecraft:jump_boost");
e.source.removeEffect("minecraft:mining_fatigue");
e.source.removeEffect("minecraft:night_vision");
e.source.removeEffect("minecraft:regeneration");
e.source.removeEffect("minecraft:saturation");
e.source.removeEffect("minecraft:slowness");
e.source.removeEffect("minecraft:strength");
e.source.removeEffect("minecraft:weakness");
e.source.removeEffect("minecraft:fatal_poison");
e.source.removeEffect("minecraft:haste");
e.source.removeEffect("minecraft:village_hero");
e.source.removeEffect("minecraft:instant_damage");
e.source.removeEffect("minecraft:invisibility");
e.source.removeEffect("minecraft:levitation");
e.source.removeEffect("minecraft:nausea");
e.source.removeEffect("minecraft:poison");
e.source.removeEffect("minecraft:resistance");
e.source.removeEffect("minecraft:slow_falling");
e.source.removeEffect("minecraft:speed");
e.source.removeEffect("minecraft:water_breathing");
e.source.removeEffect("minecraft:wither");
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_magenta_edible_dye:trigger', {
  onConsume: e => {
  e.source.removeEffect("minecraft:absorption");
e.source.removeEffect("minecraft:blindness");
e.source.removeEffect("minecraft:bad_omen");
e.source.removeEffect("minecraft:conduit_power");
e.source.removeEffect("minecraft:fire_resistance");
e.source.removeEffect("minecraft:health_boost");
e.source.removeEffect("minecraft:instant_health");
e.source.removeEffect("minecraft:hunger");
e.source.removeEffect("minecraft:jump_boost");
e.source.removeEffect("minecraft:mining_fatigue");
e.source.removeEffect("minecraft:night_vision");
e.source.removeEffect("minecraft:regeneration");
e.source.removeEffect("minecraft:saturation");
e.source.removeEffect("minecraft:slowness");
e.source.removeEffect("minecraft:strength");
e.source.removeEffect("minecraft:weakness");
e.source.removeEffect("minecraft:fatal_poison");
e.source.removeEffect("minecraft:haste");
e.source.removeEffect("minecraft:village_hero");
e.source.removeEffect("minecraft:instant_damage");
e.source.removeEffect("minecraft:invisibility");
e.source.removeEffect("minecraft:levitation");
e.source.removeEffect("minecraft:nausea");
e.source.removeEffect("minecraft:poison");
e.source.removeEffect("minecraft:resistance");
e.source.removeEffect("minecraft:slow_falling");
e.source.removeEffect("minecraft:speed");
e.source.removeEffect("minecraft:water_breathing");
e.source.removeEffect("minecraft:wither");
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_moomoo_milk:trigger', {
  onConsume: e => {
  e.source.removeEffect("minecraft:absorption");
e.source.removeEffect("minecraft:wither");
e.source.removeEffect("minecraft:water_breathing");
e.source.removeEffect("minecraft:speed");
e.source.removeEffect("minecraft:resistance");
e.source.removeEffect("minecraft:slow_falling");
e.source.removeEffect("minecraft:poison");
e.source.removeEffect("minecraft:nausea");
e.source.removeEffect("minecraft:levitation");
e.source.removeEffect("minecraft:instant_damage");
e.source.removeEffect("minecraft:invisibility");
e.source.removeEffect("minecraft:village_hero");
e.source.removeEffect("minecraft:haste");
e.source.removeEffect("minecraft:fatal_poison");
e.source.removeEffect("minecraft:blindness");
e.source.removeEffect("minecraft:bad_omen");
e.source.removeEffect("minecraft:conduit_power");
e.source.removeEffect("minecraft:fire_resistance");
e.source.removeEffect("minecraft:health_boost");
e.source.removeEffect("minecraft:instant_health");
e.source.removeEffect("minecraft:hunger");
e.source.removeEffect("minecraft:jump_boost");
e.source.removeEffect("minecraft:mining_fatigue");
e.source.removeEffect("minecraft:night_vision");
e.source.removeEffect("minecraft:regeneration");
e.source.removeEffect("minecraft:saturation");
e.source.removeEffect("minecraft:slowness");
e.source.removeEffect("minecraft:strength");
e.source.removeEffect("minecraft:weakness");
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_orange_edible_dye:trigger', {
  onConsume: e => {
  e.source.removeEffect("minecraft:absorption");
e.source.removeEffect("minecraft:blindness");
e.source.removeEffect("minecraft:bad_omen");
e.source.removeEffect("minecraft:conduit_power");
e.source.removeEffect("minecraft:fire_resistance");
e.source.removeEffect("minecraft:health_boost");
e.source.removeEffect("minecraft:instant_health");
e.source.removeEffect("minecraft:hunger");
e.source.removeEffect("minecraft:jump_boost");
e.source.removeEffect("minecraft:mining_fatigue");
e.source.removeEffect("minecraft:night_vision");
e.source.removeEffect("minecraft:regeneration");
e.source.removeEffect("minecraft:saturation");
e.source.removeEffect("minecraft:slowness");
e.source.removeEffect("minecraft:strength");
e.source.removeEffect("minecraft:weakness");
e.source.removeEffect("minecraft:fatal_poison");
e.source.removeEffect("minecraft:haste");
e.source.removeEffect("minecraft:village_hero");
e.source.removeEffect("minecraft:instant_damage");
e.source.removeEffect("minecraft:invisibility");
e.source.removeEffect("minecraft:levitation");
e.source.removeEffect("minecraft:nausea");
e.source.removeEffect("minecraft:poison");
e.source.removeEffect("minecraft:resistance");
e.source.removeEffect("minecraft:slow_falling");
e.source.removeEffect("minecraft:speed");
e.source.removeEffect("minecraft:water_breathing");
e.source.removeEffect("minecraft:wither");
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_pink_edible_dye:trigger', {
  onConsume: e => {
  e.source.removeEffect("minecraft:absorption");
e.source.removeEffect("minecraft:blindness");
e.source.removeEffect("minecraft:bad_omen");
e.source.removeEffect("minecraft:conduit_power");
e.source.removeEffect("minecraft:fire_resistance");
e.source.removeEffect("minecraft:health_boost");
e.source.removeEffect("minecraft:instant_health");
e.source.removeEffect("minecraft:hunger");
e.source.removeEffect("minecraft:jump_boost");
e.source.removeEffect("minecraft:mining_fatigue");
e.source.removeEffect("minecraft:night_vision");
e.source.removeEffect("minecraft:regeneration");
e.source.removeEffect("minecraft:saturation");
e.source.removeEffect("minecraft:slowness");
e.source.removeEffect("minecraft:strength");
e.source.removeEffect("minecraft:weakness");
e.source.removeEffect("minecraft:fatal_poison");
e.source.removeEffect("minecraft:haste");
e.source.removeEffect("minecraft:village_hero");
e.source.removeEffect("minecraft:instant_damage");
e.source.removeEffect("minecraft:invisibility");
e.source.removeEffect("minecraft:levitation");
e.source.removeEffect("minecraft:nausea");
e.source.removeEffect("minecraft:poison");
e.source.removeEffect("minecraft:resistance");
e.source.removeEffect("minecraft:slow_falling");
e.source.removeEffect("minecraft:speed");
e.source.removeEffect("minecraft:water_breathing");
e.source.removeEffect("minecraft:wither");
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_purple_edible_dye:trigger', {
  onConsume: e => {
  e.source.removeEffect("minecraft:absorption");
e.source.removeEffect("minecraft:blindness");
e.source.removeEffect("minecraft:bad_omen");
e.source.removeEffect("minecraft:conduit_power");
e.source.removeEffect("minecraft:fire_resistance");
e.source.removeEffect("minecraft:health_boost");
e.source.removeEffect("minecraft:instant_health");
e.source.removeEffect("minecraft:hunger");
e.source.removeEffect("minecraft:jump_boost");
e.source.removeEffect("minecraft:mining_fatigue");
e.source.removeEffect("minecraft:night_vision");
e.source.removeEffect("minecraft:regeneration");
e.source.removeEffect("minecraft:saturation");
e.source.removeEffect("minecraft:slowness");
e.source.removeEffect("minecraft:strength");
e.source.removeEffect("minecraft:weakness");
e.source.removeEffect("minecraft:fatal_poison");
e.source.removeEffect("minecraft:haste");
e.source.removeEffect("minecraft:village_hero");
e.source.removeEffect("minecraft:instant_damage");
e.source.removeEffect("minecraft:invisibility");
e.source.removeEffect("minecraft:levitation");
e.source.removeEffect("minecraft:nausea");
e.source.removeEffect("minecraft:poison");
e.source.removeEffect("minecraft:resistance");
e.source.removeEffect("minecraft:slow_falling");
e.source.removeEffect("minecraft:speed");
e.source.removeEffect("minecraft:water_breathing");
e.source.removeEffect("minecraft:wither");
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_red_edible_dye:trigger', {
  onConsume: e => {
  e.source.removeEffect("minecraft:absorption");
e.source.removeEffect("minecraft:blindness");
e.source.removeEffect("minecraft:bad_omen");
e.source.removeEffect("minecraft:conduit_power");
e.source.removeEffect("minecraft:fire_resistance");
e.source.removeEffect("minecraft:health_boost");
e.source.removeEffect("minecraft:instant_health");
e.source.removeEffect("minecraft:hunger");
e.source.removeEffect("minecraft:jump_boost");
e.source.removeEffect("minecraft:mining_fatigue");
e.source.removeEffect("minecraft:night_vision");
e.source.removeEffect("minecraft:regeneration");
e.source.removeEffect("minecraft:saturation");
e.source.removeEffect("minecraft:slowness");
e.source.removeEffect("minecraft:strength");
e.source.removeEffect("minecraft:weakness");
e.source.removeEffect("minecraft:fatal_poison");
e.source.removeEffect("minecraft:haste");
e.source.removeEffect("minecraft:village_hero");
e.source.removeEffect("minecraft:instant_damage");
e.source.removeEffect("minecraft:invisibility");
e.source.removeEffect("minecraft:levitation");
e.source.removeEffect("minecraft:nausea");
e.source.removeEffect("minecraft:poison");
e.source.removeEffect("minecraft:resistance");
e.source.removeEffect("minecraft:slow_falling");
e.source.removeEffect("minecraft:speed");
e.source.removeEffect("minecraft:water_breathing");
e.source.removeEffect("minecraft:wither");
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_sugar_block:trigger', {
  onConsume: e => {
  e.source.addEffect("minecraft:speed", 100, {amplifier: 1});
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_white_edible_dye:trigger', {
  onConsume: e => {
  e.source.removeEffect("minecraft:absorption");
e.source.removeEffect("minecraft:blindness");
e.source.removeEffect("minecraft:bad_omen");
e.source.removeEffect("minecraft:conduit_power");
e.source.removeEffect("minecraft:fire_resistance");
e.source.removeEffect("minecraft:health_boost");
e.source.removeEffect("minecraft:instant_health");
e.source.removeEffect("minecraft:hunger");
e.source.removeEffect("minecraft:jump_boost");
e.source.removeEffect("minecraft:mining_fatigue");
e.source.removeEffect("minecraft:night_vision");
e.source.removeEffect("minecraft:regeneration");
e.source.removeEffect("minecraft:saturation");
e.source.removeEffect("minecraft:slowness");
e.source.removeEffect("minecraft:strength");
e.source.removeEffect("minecraft:weakness");
e.source.removeEffect("minecraft:fatal_poison");
e.source.removeEffect("minecraft:haste");
e.source.removeEffect("minecraft:village_hero");
e.source.removeEffect("minecraft:instant_damage");
e.source.removeEffect("minecraft:invisibility");
e.source.removeEffect("minecraft:levitation");
e.source.removeEffect("minecraft:nausea");
e.source.removeEffect("minecraft:poison");
e.source.removeEffect("minecraft:resistance");
e.source.removeEffect("minecraft:slow_falling");
e.source.removeEffect("minecraft:speed");
e.source.removeEffect("minecraft:water_breathing");
e.source.removeEffect("minecraft:wither");
  
},

  
});

initEvent.itemComponentRegistry.registerCustomComponent('serp_yellow_edible_dye:trigger', {
  onConsume: e => {
  e.source.removeEffect("minecraft:absorption");
e.source.removeEffect("minecraft:blindness");
e.source.removeEffect("minecraft:bad_omen");
e.source.removeEffect("minecraft:conduit_power");
e.source.removeEffect("minecraft:fire_resistance");
e.source.removeEffect("minecraft:health_boost");
e.source.removeEffect("minecraft:instant_health");
e.source.removeEffect("minecraft:hunger");
e.source.removeEffect("minecraft:jump_boost");
e.source.removeEffect("minecraft:mining_fatigue");
e.source.removeEffect("minecraft:night_vision");
e.source.removeEffect("minecraft:regeneration");
e.source.removeEffect("minecraft:saturation");
e.source.removeEffect("minecraft:slowness");
e.source.removeEffect("minecraft:strength");
e.source.removeEffect("minecraft:weakness");
e.source.removeEffect("minecraft:fatal_poison");
e.source.removeEffect("minecraft:haste");
e.source.removeEffect("minecraft:village_hero");
e.source.removeEffect("minecraft:instant_damage");
e.source.removeEffect("minecraft:invisibility");
e.source.removeEffect("minecraft:levitation");
e.source.removeEffect("minecraft:nausea");
e.source.removeEffect("minecraft:poison");
e.source.removeEffect("minecraft:resistance");
e.source.removeEffect("minecraft:slow_falling");
e.source.removeEffect("minecraft:speed");
e.source.removeEffect("minecraft:water_breathing");
e.source.removeEffect("minecraft:wither");
  
},

  
});
 });

