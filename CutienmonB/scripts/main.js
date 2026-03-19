import { world, system } from "@minecraft/server";
import * as ui from "@minecraft/server-ui"

import "./pokedrock"


const spawnrule_pokemon = {
p1: {
name: "Bulbasaur",
biomes: ["forest", "the_end"],
blocks: ["minecraft:grass", "minecraft:end_stone"],
spawn_type: "surface",
delay: { min: 32, max: 64 },
spawn_chance: 10
},
p4: {
name: "Charmander",
biomes: ["mesa", "the_end"],
blocks: ["minecraft:sand", "minecraft:end_stone"],
spawn_type: "surface",
delay: { min: 32, max: 64 },
spawn_chance: 10
},
p7: {
name: "Squirtle",
biomes: ["beach", "the_end"],
blocks: ["minecraft:grass", "minecraft:sand", "minecraft:end_stone"],
spawn_type: "surface",
delay: { min: 32, max: 64 },
spawn_chance: 10
},
p10: {
name: "Caterpie",
biomes: ["forest"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 60
},
p11: {
name: "Metapod",
biomes: ["forest"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 30
},
p12: {
name: "Butterfree",
biomes: ["forest"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 10
},
p13: {
name: "Weedle",
biomes: ["forest"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 70
},
p14: {
name: "Kakuna",
biomes: ["forest"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 30
},
p15: {
name: "Beedrill",
biomes: ["flower_forest"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80
},
p16: {
name: "Pidgey",
biomes: ["ocean"],
blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 60
},
p17: {
name: "Pidgeotto",
biomes: ["ocean"],
blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 30
},
p18: {
name: "Pidgeot",
biomes: ["ocean"],
blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 10
},
p19: {
name: "Rattata",
biomes: ["ocean"],
blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 70
},
p20: {
name: "Raticate",
biomes: ["ocean"],
blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 30
},
p1500: {
name: "Rattata (Alola)",
biomes: ["ocean"],
blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
spawn_type: "surface",
delay: { min: 16, max: 32 },
spawn_chance: 60,
weight: 70
},
p1501: {
name: "Raticate (Alola)",
biomes: ["ocean"],
blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
spawn_type: "surface",
delay: { min: 16, max: 32 },
spawn_chance: 60,
weight: 30
},
p21: {
name: "Spearow",
biomes: ["ocean"],
blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80
},
p22: {
name: "Fearow",
biomes: ["extreme_hills"],
blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80
},
p23: {
name: "Ekans",
biomes: ["swamp"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 70
},
p24: {
name: "Arbok",
biomes: ["swamp"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 30
},
p25: {
name: "Pikachu",
biomes: ["forest"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80
},
p1502: {
name: "Raichu (Alola)",
biomes: ["forest"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 16, max: 32 },
spawn_chance: 70
},
p27: {
name: "Sandshrew",
biomes: ["desert"],
blocks: ["minecraft:sand"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 70
},
p28: {
name: "Sandslash",
biomes: ["desert"],
blocks: ["minecraft:sand"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 30
},
p29: {
name: "Nidoran♀",
biomes: ["forest"],
blocks: ["minecraft:grass", "minecraft:snow_layer"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 70
},
p30: {
name: "Nidorina",
biomes: ["forest"],
blocks: ["minecraft:grass", "minecraft:snow_layer"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 30
},
p32: {
name: "Nidoran♂",
biomes: ["forest"],
blocks: ["minecraft:grass", "minecraft:snow_layer"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 70
},
p33: {
name: "Nidorino",
biomes: ["forest"],
blocks: ["minecraft:grass", "minecraft:snow_layer"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 30
},
p35: {
name: "Clefairy",
biomes: ["ocean"],
blocks: ["minecraft:grass", "minecraft:stone"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
brightness: { min: 5, max: 7 }
},
p37: {
name: "Vulpix",
biomes: ["roofed_forest"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80
},
p39: {
name: "Jigglypuff",
biomes: ["monster"],
blocks: ["minecraft:stone"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80
},
p41: {
name: "Zubat",
biomes: ["monster", "the_end"],
spawn_type: "underground",
density_limit: { surface: 1, underground: 10 },
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 70
},
p42: {
name: "Golbat",
biomes: ["monster", "the_end"],
spawn_type: "underground",
density_limit: { surface: 1, underground: 10 },
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 30
},
p43: {
name: "Oddish",
biomes: ["birch_forest"],
blocks: ["minecraft:grass", "minecraft:dirt"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 70
},
p44: {
name: "Gloom",
biomes: ["birch_forest"],
blocks: ["minecraft:grass", "minecraft:dirt"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 30
},
p46: {
name: "Paras",
biomes: ["mooshroom_island"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 70
},
p47: {
name: "Parasect",
biomes: ["mooshroom_island"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 20
},
p48: {
name: "Venonat",
biomes: ["roofed_forest"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 70
},
p49: {
name: "Venomoth",
biomes: ["roofed_forest"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 30
},
p50: {
name: "Diglett",
biomes: ["monster"],
spawn_type: "underground",
density_limit: { surface: 1, underground: 10 },
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 70
},
p51: {
name: "Dugtrio",
biomes: ["monster"],
spawn_type: "underground",
density_limit: { surface: 1, underground: 10 },
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 30
},
p52: {
name: "Meowth",
biomes: ["plains"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 4, max: 8 },
spawn_chance: 60,
weight: 80
},
p53: {
name: "Persian",
biomes: ["plains"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 4, max: 8 },
spawn_chance: 60,
weight: 20
},
p54: {
name: "Psyduck",
biomes: ["river"],
spawn_type: ["surface", "underwater"],
delay: { min: 4, max: 8 },
spawn_chance: 60,
weight: 80
},
p55: {
name: "Golduck",
biomes: ["river"],
spawn_type: ["surface", "underwater"],
delay: { min: 4, max: 8 },
spawn_chance: 60,
weight: 20
},
p56: {
name: "Mankey",
biomes: ["savanna", "mesa"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 4, max: 8 },
spawn_chance: 60,
weight: 70
},
p57: {
name: "Primeape",
biomes: ["savanna", "mesa"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 4, max: 8 },
spawn_chance: 60,
weight: 30
},
p58: {
name: "Growlithe",
biomes: ["plains"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 8, max: 16 },
spawn_chance: 40
},
p60: {
name: "Poliwag",
biomes: ["river"],
spawn_type: ["surface", "underwater"],
delay: { min: 8, max: 16 },
spawn_chance: 40,
weight: 70
},
p61: {
name: "Poliwhirl",
biomes: ["river"],
spawn_type: ["surface", "underwater"],
delay: { min: 8, max: 16 },
spawn_chance: 40,
weight: 30
},
p63: {
name: "Abra",
biomes: ["plains"],
spawn_type: "surface",
delay: { min: 8, max: 16 },
spawn_chance: 40
},
p66: {
name: "Machop",
biomes: ["monster"],
blocks: ["minecraft:stone"],
spawn_type: "surface",
delay: { min: 8, max: 16 },
spawn_chance: 60,
height: { min: 128, max: 196 }
},
p69: {
name: "Bellsprout",
biomes: ["forest"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 70
},
p70: {
name: "Weepinbell",
biomes: ["forest"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 30
},
p72: {
name: "Tentacool",
biomes: ["ocean"],
spawn_type: ["surface", "underwater"],
delay: { min: 4, max: 8 },
spawn_chance: 60,
weight: 70
},
p73: {
name: "Tentacruel",
biomes: ["ocean"],
spawn_type: ["surface", "underwater"],
delay: { min: 4, max: 8 },
spawn_chance: 60,
weight: 30
},
p74: {
name: "Geodude",
biomes: ["monster"],
blocks: ["minecraft:grass", "minecraft:sand"],
spawn_type: ["surface", "underground"],
density_limit: { surface: 1, underground: 10 },
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 70,
altitude: { min: 90 }
},
p75: {
name: "Graveler",
biomes: ["monster"],
blocks: ["minecraft:grass", "minecraft:sand"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 30,
altitude: { min: 90 }
},
p77: {
name: "Ponyta",
biomes: ["mesa"],
spawn_type: "surface",
delay: { min: 4, max: 8 },
spawn_chance: 60,
weight: 70
},
p78: {
name: "Rapidash",
biomes: ["mesa"],
spawn_type: "surface",
delay: { min: 4, max: 8 },
spawn_chance: 60,
weight: 30
},
p1506: {
name: "Ponyta (Galar)",
biomes: ["cherry_grove", "the_end"],
blocks: ["minecraft:grass", "minecraft:end_stone"],
spawn_type: "surface",
delay: { min: 8, max: 16 },
spawn_chance: 50,
weight: 70
},
p1507: {
name: "Rapidash (Galar)",
biomes: ["cherry_grove", "the_end"],
blocks: ["minecraft:grass", "minecraft:end_stone"],
spawn_type: "surface",
delay: { min: 8, max: 16 },
spawn_chance: 50,
weight: 30
},
p79: {
name: "Slowpoke",
biomes: ["beach"],
spawn_type: ["surface", "underwater"],
delay: { min: 8, max: 16 },
spawn_chance: 40,
weight: 70
},
p80: {
name: "Slowbro",
biomes: ["beach"],
spawn_type: ["surface", "underwater"],
delay: { min: 8, max: 16 },
spawn_chance: 40,
weight: 30
},
p81: {
name: "Magnemite",
biomes: ["monster"],
blocks: ["minecraft:stone"],
spawn_type: "surface",
delay: { min: 8, max: 16 },
spawn_chance: 60,
height: { min: 128, max: 196 }
},
p83: {
name: "Farfetch’d",
biomes: ["ocean"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 16, max: 32 },
spawn_chance: 20,
brightness: { min: 0, max: 7 }
},
p84: {
name: "Doduo",
biomes: ["savanna", "mesa"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 4, max: 8 },
spawn_chance: 60,
weight: 70
},
p85: {
name: "Dodrio",
biomes: ["savanna", "mesa"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 4, max: 8 },
spawn_chance: 60,
weight: 30
},
p86: {
name: "Seel",
biomes: ["ocean"],
spawn_type: ["surface", "underwater"],
delay: { min: 16, max: 32 },
spawn_chance: 60,
weight: 70
},
p87: {
name: "Dewgong",
biomes: ["ocean"],
spawn_type: ["surface", "underwater"],
delay: { min: 16, max: 32 },
spawn_chance: 60,
weight: 30
},
p88: {
name: "Grimer",
biomes: ["swamp"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 16, max: 32 },
spawn_chance: 50,
weight: 70
},
p89: {
name: "Muk",
biomes: ["swamp"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 16, max: 32 },
spawn_chance: 50,
weight: 30
},
p90: {
name: "Shellder",
biomes: ["beach", "ocean"],
spawn_type: ["surface", "underwater"],
delay: { min: 4, max: 8 },
spawn_chance: 60
},
p92: {
name: "Gastly",
biomes: ["monster", "nether"],
spawn_type: ["surface", "underground"],
density_limit: { surface: 1, underground: 10 },
delay: { min: 2, max: 4 },
spawn_chance: 80,
brightness: { min: 0, max: 7 },
weight: 70
},
p93: {
name: "Haunter",
biomes: ["monster", "nether"],
spawn_type: ["surface", "underground"],
density_limit: { surface: 1, underground: 10 },
delay: { min: 2, max: 4 },
spawn_chance: 80,
brightness: { min: 0, max: 7 },
weight: 30
},
p95: {
name: "Onix",
biomes: ["monster"],
spawn_type: "underground",
density_limit: { surface: 1, underground: 10 },
delay: { min: 16, max: 32 },
spawn_chance: 20
},
p96: {
name: "Drowzee",
biomes: ["roofed_forest"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 70
},
p97: {
name: "Hypno",
biomes: ["roofed_forest"],
spawn_type: "surface",
delay: { min: 2, max: 4 },
spawn_chance: 80,
weight: 30
},
p98: {
name: "Krabby",
biomes: ["beach", "ocean"],
spawn_type: ["surface", "underwater"],
delay: { min: 16, max: 32 },
spawn_chance: 60
},
p100: {
name: "Voltorb",
biomes: ["monster"],
spawn_type: "underground",
density_limit: { surface: 1, underground: 10 },
delay: { min: 16, max: 32 },
spawn_chance: 50
},
p102: {
name: "Exeggcute",
biomes: ["jungle"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 8, max: 16 },
spawn_chance: 40
},
p104: {
name: "Cubone",
biomes: ["savanna"],
blocks: ["minecraft:grass", "minecraft:sand"],
spawn_type: "surface",
delay: { min: 4, max: 8 },
spawn_chance: 60,
weight: 70
},
p105: {
name: "Marowak",
biomes: ["savanna"],
blocks: ["minecraft:grass", "minecraft:sand"],
spawn_type: "surface",
delay: { min: 4, max: 8 },
spawn_chance: 60,
weight: 30
},
p106: {
name: "Hitmonlee",
biomes: ["monster"],
spawn_type: "underground",
density_limit: { surface: 1, underground: 10 },
delay: { min: 16, max: 32 },
spawn_chance: 20
},
p108: {
name: "Lickitung",
biomes: ["cherry_grove"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 16, max: 32 },
spawn_chance: 10
},
p109: {
name: "Koffing",
biomes: ["mesa"],
spawn_type: ["surface", "underwater"],
delay: { min: 8, max: 16 },
spawn_chance: 40,
weight: 30
},
p110: {
name: "Weezing",
biomes: ["mesa"],
spawn_type: ["surface", "underwater"],
delay: { min: 8, max: 16 },
spawn_chance: 40,
weight: 70
},
p111: {
name: "Rhyhorn",
biomes: ["mesa", "savanna"],
blocks: ["minecraft:grass", "minecraft:sand"],
spawn_type: "surface",
delay: { min: 8, max: 16 },
spawn_chance: 40,
weight: 70
},
p112: {
name: "Rhydon",
biomes: ["mesa", "savanna"],
blocks: ["minecraft:grass", "minecraft:sand"],
spawn_type: "surface",
delay: { min: 8, max: 16 },
spawn_chance: 40,
weight: 30
},
p113: {
name: "Chansey",
biomes: ["savanna"],
blocks: ["minecraft:grass", "minecraft:sand"],
spawn_type: "surface",
delay: { min: 16, max: 32 },
spawn_chance: 10
},
p114: {
name: "Tangela",
biomes: ["savanna"],
blocks: ["minecraft:grass", "minecraft:sand"],
spawn_type: "surface",
delay: { min: 4, max: 8 },
spawn_chance: 50
},
p115: {
name: "Kangaskhan",
biomes: ["savanna"],
blocks: ["minecraft:grass", "minecraft:sand"],
spawn_type: "surface",
delay: { min: 16, max: 32 },
spawn_chance: 10
},
p116: {
name: "Horsea",
biomes: ["ocean", "river"],
spawn_type: ["surface", "underwater"],
delay: { min: 4, max: 8 },
spawn_chance: 60,
weight: 30
},
p117: {
name: "Seadra",
biomes: ["ocean", "river"],
spawn_type: ["surface", "underwater"],
delay: { min: 4, max: 8 },
spawn_chance: 60,
weight: 70
},
p118: {
name: "Goldeen",
biomes: ["ocean", "river"],
spawn_type: ["surface", "underwater"],
delay: { min: 4, max: 8 },
spawn_chance: 60,
weight: 70
},
p119: {
name: "Seaking",
biomes: ["ocean", "river"],
spawn_type: ["surface", "underwater"],
delay: { min: 4, max: 8 },
spawn_chance: 60,
weight: 30
},
p120: {
name: "Staryu",
biomes: ["ocean", "river"],
spawn_type: ["surface", "underwater"],
delay: { min: 16, max: 32 },
spawn_chance: 50,
weight: 70
},
p121: {
name: "Starmie",
biomes: ["ocean", "river"],
spawn_type: ["surface", "underwater"],
delay: { min: 16, max: 32 },
spawn_chance: 50,
weight: 30
},
p122: {
name: "Mr. Mime",
biomes: ["monster"],
spawn_type: "underground",
density_limit: { surface: 1, underground: 10 },
delay: { min: 16, max: 32 },
spawn_chance: 10
},
p123: {
name: "Scyther",
biomes: ["mutated_plains"],
blocks: ["minecraft:grass"],
spawn_type: "surface",
delay: { min: 4, max: 8 },
spawn_chance: 40
},
p126: {
name: "Magmar",
biomes: ["desert"],
blocks: ["minecraft:sand"],
spawn_type: "surface",
delay: { min: 16, max: 32 },
spawn_chance: 80
},
p128: {
name: "Tauros",
biomes: ["savanna"],
spawn_type: "surface",
blocks: ["minecraft:grass"],
delay: { min: 4, max: 8 },
spawn_chance: 60,
density_limit: { surface: 1 }
},
p129: {
name: "Magikarp",
biomes: ["ocean", "river"],
spawn_type: ["surface", "underwater"],
    weight: 80,
    delay: { min: 4, max: 8 },
    spawn_chance: 60,
 
    evolves_to: "p130"
  },
  
  p130: {
  name: "Gyarados",
  biomes: ["ocean", "river"],
  spawn_type: ["surface", "underwater"],
  weight: 20,
  delay: { min: 4, max: 8 },
  spawn_chance: 60,
  density_limit: { surface: 1 }
},

p131: {
  name: "Lapras",
  biomes: ["ocean"],
  spawn_type: ["surface", "underwater"],
  delay: { min: 16, max: 32 },
  spawn_chance: 20,
  density_limit: { surface: 1 }
},

p132: {
  name: "Ditto",
  biomes: ["plains"],
  spawn_type: "surface",
  blocks: ["minecraft:grass"],
  delay: { min: 16, max: 32 },
  spawn_chance: 2,
  density_limit: { surface: 1 }
},

p133: {
  name: "Eevee",
  biomes: ["plains"],
  spawn_type: "surface",
  blocks: ["minecraft:grass"],
  delay: { min: 16, max: 32 },
  spawn_chance: 20,
  density_limit: { surface: 1 }
},

  p143: {
    biomes: ["plains"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    delay: { min: 16, max: 32 },
    spawn_chance: 20,
    density_limit: { surface: 1 }
  },
  
  p147: {
    biomes: ["savanna", "mesa"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 70,
    delay: { min: 32, max: 64 },
    spawn_chance: 10,
 
    evolves_to: "p148"
  },
  
  p148: {
    biomes: ["savanna", "mesa"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 30,
    delay: { min: 32, max: 64 },
    spawn_chance: 10,
    density_limit: { surface: 1 }
  },
  
  p152: {
    biomes: ["forest", "flower_forest", "the_end"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:end_stone"],
    delay: { min: 32, max: 64 },
    spawn_chance: 10,
    density_limit: { surface: 1 }
  },
  
  p155: {
    biomes: ["mesa", "desert", "the_end"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:end_stone"],
    delay: { min: 32, max: 64 },
    spawn_chance: 10,
    density_limit: { surface: 1 }
  },
  
  p1508: {
    biomes: ["mesa", "the_end"],
    spawn_type: "surface",
    blocks: ["minecraft:sand", "minecraft:end_stone"],
    delay: { min: 32, max: 64 },
    spawn_chance: 10,
    density_limit: { surface: 1 }
  },
  
  p158: {
    biomes: ["river"],
    spawn_type: "surface",
    delay: { min: 32, max: 64 },
    spawn_chance: 10,
    density_limit: { surface: 1 }
  },
  
  p161: {
    biomes: ["monster", "the_end"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer", "minecraft:end_stone"],
    weight: 70,
    delay: { min: 2, max: 4 },
    spawn_chance: 80,
 
    evolves_to: "p162"
  },
  
  p162: {
    biomes: ["monster", "the_end"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer", "minecraft:end_stone"],
    weight: 30,
    delay: { min: 2, max: 4 },
    spawn_chance: 80,
    density_limit: { surface: 1 }
  },
  
  p163: {
    biomes: ["monster"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand"],
    brightness: { min: 0, max: 7 },
    weight: 70,
    delay: { min: 2, max: 4 },
    spawn_chance: 80,
 
    evolves_to: "p164"
  },
  
  p164: {
    biomes: ["monster"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand"],
    brightness: { min: 0, max: 7 },
    weight: 30,
    delay: { min: 2, max: 4 },
    spawn_chance: 80,
    density_limit: { surface: 1 }
  },
  
  p165: {
    biomes: ["forest"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:snow_layer"],
    weight: 70,
    delay: { min: 2, max: 4 },
    spawn_chance: 80,
 
    evolves_to: "p166"
  },
  
  p166: {
    biomes: ["forest"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:snow_layer"],
    weight: 30,
    delay: { min: 2, max: 4 },
    spawn_chance: 80,
    density_limit: { surface: 1 }
  },
  
  p167: {
    biomes: ["forest", "monster"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand"],
    brightness: { min: 0, max: 7 },
    weight: 70,
    delay: { min: 2, max: 4 },
    spawn_chance: 80,
 
    evolves_to: "p168"
  },
  
  p168: {
    biomes: ["forest", "monster"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand"],
    brightness: { min: 0, max: 7 },
    weight: 30,
    delay: { min: 2, max: 4 },
    spawn_chance: 80,
    density_limit: { surface: 1 }
  },
  
  p179: {
    biomes: ["taiga", "plains"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
    weight: 60,
    delay: { min: 2, max: 4 },
    spawn_chance: 80,
 
    evolves_to: ["p180", "p181"]
  },
  
  p180: {
    biomes: ["taiga", "plains"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
    weight: 30,
    delay: { min: 2, max: 4 },
    spawn_chance: 80,
    density_limit: { surface: 1 }
  },
  
  p181: {
    biomes: ["taiga", "plains"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
    weight: 10,
    delay: { min: 2, max: 4 },
    spawn_chance: 80,
    density_limit: { surface: 1 }
  },
  
  "sudowoodo_tree": {
    biomes: ["plains"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    delay: { min: 4, max: 8 },
    spawn_chance: 20,
    density_limit: { surface: 1 }
  },
  
  p187: {
    biomes: ["plains"],
    biome_tags: ["mutated"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 60,
    delay: { min: 4, max: 8 },
    spawn_chance: 40,
 
    evolves_to: ["p188", "p189"]
  },
  
  p188: {
    biomes: ["plains"],
    biome_tags: ["mutated"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 30,
    delay: { min: 4, max: 8 },
    spawn_chance: 40,
    density_limit: { surface: 1 }
  },
  
  p189: {
    biomes: ["plains"],
    biome_tags: ["mutated"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 10,
    delay: { min: 4, max: 8 },
    spawn_chance: 40,
    density_limit: { surface: 1 }
  },
  
  p200: {
    biomes: ["monster", "nether"],
    spawn_type: ["surface", "underground"],
    blocks: ["minecraft:grass", "minecraft:sand"],
    brightness: { min: 0, max: 7, adjust_for_weather: false },
    delay: { min: 2, max: 4 },
    spawn_chance: 80,
    density_limit: { surface: 1 }
  },
  
  p203: {
    biomes: ["jungle", "savanna"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 50,
    default_weight: 10
  },
  
  p204: {
    biomes: ["roofed", "forest"],
    biome_tags: ["roofed", "forest"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 30,
    default_weight: 7,
    evolves_to: "p205"
  },
  
  p205: {
    biomes: ["roofed", "forest"],
    biome_tags: ["roofed", "forest"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 70,
    default_weight: 7
  },
  
  p206: {
    biomes: ["monster", "roofed_forest"],
    spawn_type: ["surface", "underground"],
    blocks: ["minecraft:grass"],
    weight: 50,
    default_weight: 1
  },
  
  p214: {
    biomes: ["forest"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 50,
    default_weight: 1
  },
  
  p225: {
    biomes: ["frozen_ocean", "ice_plains"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 50,
    default_weight: 7
  },
  
  p234: {
    biomes: ["ice_plains"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 50,
    default_weight: 10
  },
  
  p241: {
    biomes: ["plains"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 50,
    default_weight: 4
  },
  
  p246: {
    biomes: ["monster"],
    spawn_type: "underground",
    weight: 50,
    default_weight: 1
  },
  
  p261: {
    biomes: ["monster"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
    weight: 70,
    default_weight: 10,
    evolves_to: "p262"
  },
  
  p262: {
    biomes: ["monster"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
    weight: 30,
    default_weight: 10
  },
  
  p263: {
    biomes: ["monster"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
    weight: 70,
    default_weight: 10,
    evolves_to: "p264"
  },
  
  p264: {
    biomes: ["monster"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
    weight: 30,
    default_weight: 10
  },
  
  p265: {
    biomes: ["forest"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 30,
    default_weight: 10,
    evolves_to: ["p266", "p267", "p268", "p269"]
  },
  
  p266: {
    biomes: ["forest"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 20,
    default_weight: 10
  },
  
  p267: {
    biomes: ["forest"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 20,
    default_weight: 10
  },
  
  p268: {
    biomes: ["forest"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 15,
    default_weight: 10
  },
  
  p269: {
    biomes: ["forest"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 15,
    default_weight: 10
  },
  
  p270: {
    biomes: ["swamp", "river"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 70,
    default_weight: 10,
    evolves_to: "p271"
  },
  
  p271: {
    biomes: ["swamp", "river"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 30,
    default_weight: 10
  },
  
  p273: {
    biomes: ["roofed", "forest"],
    biome_tags: ["roofed", "forest"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 70,
    default_weight: 10,
    evolves_to: "p274"
  },
  
  p274: {
    biomes: ["roofed", "forest"],
    biome_tags: ["roofed", "forest"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 30,
    default_weight: 10
  },
  
  p276: {
    biomes: ["ocean"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
    weight: 70,
    default_weight: 10,
    evolves_to: "p277"
  },
  
  p277: {
    biomes: ["ocean"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
    weight: 30,
    default_weight: 10
  },
  
  p280: {
    biomes: ["cherry_grove"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 70,
    default_weight: 4,
    evolves_to: "p281"
  },
  
  p281: {
    biomes: ["cherry_grove"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 30,
    default_weight: 4
  },
  
  p285: {
    biomes: ["jungle"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 50,
    default_weight: 7
  },
  
  p302: {
    biomes: ["monster"],
    spawn_type: "underground",
    weight: 50,
    default_weight: 4
  },
  
  p309: {
    biomes: ["swamp"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 50,
    default_weight: 4
  },
  
  p328: {
    biomes: ["mesa", "desert"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand"],
    weight: 70,
    default_weight: 1,
    evolves_to: "p329"
  },
  
  p329: {
    biomes: ["mesa", "desert"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand"],
    weight: 30,
    default_weight: 1
  },
  
  p349: {
    biomes: ["river"],
    spawn_type: ["surface", "underwater"],
    weight: 50,
    default_weight: 1
  },
  
  p353: {
    biomes: ["monster", "nether"],
    spawn_type: ["surface", "underground"],
    brightness: { min: 0, max: 7, adjust_for_weather: true },
    weight: 70,
    default_weight: 10,
    evolves_to: "p354"
  },
  
  p354: {
    biomes: ["monster", "nether"],
    spawn_type: ["surface", "underground"],
    brightness: { min: 0, max: 7, adjust_for_weather: true },
    weight: 30,
    default_weight: 10
  },
  
  p359: {
    biomes: ["monster"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:stone"],
    brightness: { min: 5, max: 7, adjust_for_weather: false },
    weight: 50,
    default_weight: 1
  },
  
  p371: {
    biomes: ["monster"],
    spawn_type: "surface",
    blocks: ["minecraft:stone"],
    height: { min: 128, max: 196 },
    weight: 70,
    default_weight: 1,
    evolves_to: "p372"
  },
  
  p372: {
    biomes: ["monster"],
    spawn_type: "surface",
    blocks: ["minecraft:stone"],
    height: { min: 128, max: 196 },
    weight: 30,
    default_weight: 1
  },
  
  p374: {
    biomes: ["monster"],
    spawn_type: "surface",
    blocks: ["minecraft:stone"],
    height: { min: 128, max: 196 },
    weight: 50,
    default_weight: 1
  },
  
  p396: {
    biomes: ["ocean"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
    weight: 60,
    default_weight: 10,
    evolves_to: ["p397", "p398"]
  },
  
  p397: {
    biomes: ["ocean"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
    weight: 30,
    default_weight: 10
  },
  
  p398: {
    biomes: ["ocean"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
    weight: 10,
    default_weight: 10
  },
  
  p399: {
    biomes: ["monster"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
    weight: 70,
    default_weight: 10,
    evolves_to: "p400"
  },
  
  p400: {
    biomes: ["monster"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
    weight: 30,
    default_weight: 10
  },
  
  p417: {
    biomes: ["forest"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    weight: 50,
    default_weight: 10
  },
  
  p431: {
    biomes: ["monster"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
    weight: 70,
    default_weight: 7,
    evolves_to: "p432"
  },
  
  p432: {
    biomes: ["monster"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:snow_layer"],
    weight: 30,
    default_weight: 7
  },
  
  p443: {
    biomes: ["desert"],
    spawn_type: "surface",
    blocks: ["minecraft:sand"],
    weight: 70,
    default_weight: 1,
    evolves_to: "p444"
  },
  
  p444: {
    biomes: ["desert"],
    spawn_type: "surface",
    blocks: ["minecraft:sand"],
    weight: 30,
    default_weight: 1
  },
  
  p607: {
    biomes: ["nether"],
    spawn_type: ["surface", "underground"],
    blocks: ["polished_blackstone_bricks", "nether_brick"],
    weight: 70,
    default_weight: 7,
    evolves_to: "p608"
  },
  
  p608: {
    biomes: ["nether"],
    spawn_type: ["surface", "underground"],
    blocks: ["polished_blackstone_bricks", "nether_brick"],
    weight: 30,
    default_weight: 7
  },
  
  p701: {
    biomes: ["monster"],
    spawn_type: "surface",
    height: { min: 128, max: 196 },
    weight: 50,
    default_weight: 7
  },
  
  p884: {
    biomes: ["monster"],
    spawn_type: "underground",
    brightness: { min: 0, max: 7, adjust_for_weather: false },
    weight: 50,
    default_weight: 1
  },
  
  p885: {
    biomes: ["pale_garden"],
    spawn_type: "surface",
    weight: 70,
    default_weight: 1,
    evolves_to: "p886"
  },
  
  p886: {
    biomes: ["pale_garden"],
    spawn_type: "surface",
    weight: 30,
    default_weight: 1
  },
  
  p935: {
    biomes: ["mesa"],
    spawn_type: "surface",
    blocks: ["minecraft:sand"],
    delay: { min: 32, max: 64 },
    spawn_chance: 10,
    density_limit: { surface: 1 }
  },
  
  p971: {
    biomes: ["pale_garden"],
    spawn_type: "surface",
    weight: 50,
    default_weight: 1
  },
  
  p714: {
    biomes: ["monster"],
    spawn_type: "underground",
    delay: { min: 32, max: 64 },
    spawn_chance: 20,
    density_limit: { surface: 1, underground: 10 }
  },
  
  p650: {
    biomes: ["forest"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    delay: { min: 32, max: 64 },
    spawn_chance: 10,
    density_limit: { surface: 1 }
  },
  
  p653: {
    biomes: ["mesa"],
    spawn_type: "surface",
    blocks: ["minecraft:sand"],
    delay: { min: 32, max: 64 },
    spawn_chance: 10,
    density_limit: { surface: 1 }
  },
  
  p1008: {
    biomes: ["the_end"],
    spawn_type: "surface",
    blocks: ["minecraft:purpur_block"],
    delay: { min: 200, max: 400 },
    spawn_chance: 1,
    density_limit: { surface: 1 }
  },
  
  p789: {
    biomes: ["the_end"],
    spawn_type: "surface",
    blocks: ["minecraft:purpur_block"],
    delay: { min: 200, max: 400 },
    spawn_chance: 1,
    density_limit: { surface: 1 }
  },
  
  p656: {
    biomes: ["swamp"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    delay: { min: 32, max: 64 },
    spawn_chance: 5,
    density_limit: { surface: 1 }
  },
  
  p483: {
    biomes: ["the_end"],
    spawn_type: "surface",
    blocks: ["minecraft:end_stone"],
    delay: { min: 2200, max: 2400 },
    spawn_chance: 1,
    density_limit: { surface: 1 }
  },
  
  p484: {
    biomes: ["the_end"],
    spawn_type: "surface",
    blocks: ["minecraft:end_stone"],
    delay: { min: 2200, max: 2400 },
    spawn_chance: 1,
    density_limit: { surface: 1 }
  },
  
  p487: {
    biomes: ["the_end"],
    spawn_type: "surface",
    blocks: ["minecraft:end_stone"],
    delay: { min: 2200, max: 2400 },
    spawn_chance: 1,
    density_limit: { surface: 1 }
  },
  
  p495: {
    biomes: ["forest", "the_end"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:end_stone"],
    delay: { min: 64, max: 128 },
    spawn_chance: 5,
    density_limit: { surface: 1 }
  },
  
  p498: {
    biomes: ["mesa", "the_end"],
    spawn_type: "surface",
    blocks: ["minecraft:sand", "minecraft:end_stone"],
    delay: { min: 64, max: 128 },
    spawn_chance: 5,
    density_limit: { surface: 1 }
  },
  
  p501: {
    biomes: ["beach", "the_end"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:end_stone"],
    delay: { min: 64, max: 128 },
    spawn_chance: 5,
    density_limit: { surface: 1 }
  },
  
  p494: {
    biomes: ["savanna", "mesa"],
    spawn_type: "surface",
    blocks: ["minecraft:grass"],
    delay: { min: 2200, max: 2400 },
    spawn_chance: 1,
    density_limit: { surface: 1 }
  },
  
  p722: {
    biomes: ["forest", "the_end"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:end_stone"],
    delay: { min: 64, max: 128 },
    spawn_chance: 3,
    density_limit: { surface: 1 }
  },
  
  p725: {
    biomes: ["mesa", "the_end"],
    spawn_type: "surface",
    blocks: ["minecraft:sand", "minecraft:end_stone"],
    delay: { min: 64, max: 128 },
    spawn_chance: 3,
    density_limit: { surface: 1 }
  },
  
  p728: {
    biomes: ["beach", "the_end"],
    spawn_type: "surface",
    blocks: ["minecraft:grass", "minecraft:sand", "minecraft:end_stone"],
    delay: { min: 64, max: 128 },
    spawn_chance: 3,
    density_limit: { surface: 1 }
  },
  p1005: {
    biomes: [ "mountain" ],
    spawns_on_surface: true,
 
    spawns_on_block_filter: ["minecraft:stone", "minecraft:grass"],
    entity_type: "pokemon:p1005",
    delay: { min: 128, max: 256 },
    spawn_chance: 50
  },
  p1006: {
    biomes: [ "the_end" ],
    spawns_on_surface: true,
 
    spawns_on_block_filter: ["minecraft:end_stone"],
    entity_type: "pokemon:p1006",
    delay: { min: 600, max: 1200 },
    spawn_chance: 10
  },
  p1007: {
    biomes: [ "the_end" ],
    spawns_on_surface: true,
 
    spawns_on_block_filter: ["minecraft:end_stone"],
    entity_type: "pokemon:p1007",
    delay: { min: 1200, max: 2400 },
    spawn_chance: 5
  },
  p1009: {
    biomes: [ "cherry_grove" ],
    spawns_on_surface: true,
 
    spawns_on_block_filter: ["minecraft:grass"],
    entity_type: "pokemon:p1009",
    delay: { min: 600, max: 1200 },
    spawn_chance: 10
  },
  p1010: {
    biomes: [ "forest" ],
    spawns_on_surface: true,
 
    spawns_on_block_filter: ["minecraft:grass"],
    entity_type: "pokemon:p1010",
    delay: { min: 600, max: 1200 },
    spawn_chance: 10
  }
};

world.afterEvents.itemUse.subscribe(event => {
  const player = event.source;
  const item = event.itemStack;
  if (item?.typeId === "serp:pokeradar") {
      showSpawnUI(player);
  }
});

system.runInterval(() => {
    const dimension = world.getDimension("overworld");
    
    const all_pokemon144 = dimension.getEntities({
        type: "pokemon:p144"
    });
    
    if (all_pokemon144.length > 0) {
        for (const pokemon144 of all_pokemon144) {
            const isDetected = pokemon144.getDynamicProperty("detected");
            
            if (!isDetected) {
                const loc = pokemon144.location;
                
                if (pokemon144.isTamed && pokemon144.getTamedOwner()) {
                  pokemon144.setDynamicProperty("detected", true);
                  continue;
                }  
                const players = world.getAllPlayers();
               for (const player of players) {
               player.onScreenDisplay.setTitle(`§r§eArticuno §ađã xuất hiện!!`);
               world.sendMessage(`§e§l» §r§eArticuno §ađã xuất hiện!! §7Toạ độ x=${loc.x.toFixed(2)}, y=${loc.y.toFixed(2)}, z=${loc.z.toFixed(2)}`)
              }
              
              pokemon144.setDynamicProperty("detected", true);   
            }
        }
    }
	
    const all_pokemon145 = dimension.getEntities({
        type: "pokemon:p145"
    });
    
    if (all_pokemon145.length > 0) {
        for (const pokemon145 of all_pokemon145) {
            const isDetected = pokemon145.getDynamicProperty("detected");
            
            if (!isDetected) {
                const loc = pokemon145.location;
                const players = world.getAllPlayers();
               for (const player of players) {
               player.onScreenDisplay.setTitle(`§r§eZapdos §ađã xuất hiện!!`);
				world.sendMessage(`§e§l» §r§eZapdos §ađã xuất hiện!! §7Toạ độ x=${loc.x.toFixed(2)}, y=${loc.y.toFixed(2)}, z=${loc.z.toFixed(2)}`)
                pokemon145.setDynamicProperty("detected", true);
                }
            }
        }
    }
    
    const all_pokemon146 = dimension.getEntities({
        type: "pokemon:p146"
    });
    
    if (all_pokemon146.length > 0) {
        for (const pokemon146 of all_pokemon146) {
            const isDetected = pokemon146.getDynamicProperty("detected");
            
            if (!isDetected) {
                const loc = pokemon146.location;
                const players = world.getAllPlayers();
               for (const player of players) {
               player.onScreenDisplay.setTitle(`§r§eMoltres §ađã xuất hiện!!`);
                world.sendMessage(`§e§l» §r§eMoltres §ađã xuất hiện!! §7Toạ độ x=${loc.x.toFixed(2)}, y=${loc.y.toFixed(2)}, z=${loc.z.toFixed(2)}`)
                pokemon146.setDynamicProperty("detected", true);
                }
            }
        }
    }
    
    const all_pokemon243 = dimension.getEntities({
        type: "pokemon:p243"
    });
    
    if (all_pokemon243.length > 0) {
        for (const pokemon243 of all_pokemon243) {
            const isDetected = pokemon243.getDynamicProperty("detected");
            
            if (!isDetected) {
                const loc = pokemon243.location;
                const players = world.getAllPlayers();
               for (const player of players) {
               player.onScreenDisplay.setTitle(`§r§eRaikou §ađã xuất hiện!!`);
				world.sendMessage(`§e§l» §r§eRaikou §ađã xuất hiện!! §7Toạ độ x=${loc.x.toFixed(2)}, y=${loc.y.toFixed(2)}, z=${loc.z.toFixed(2)}`)
                pokemon243.setDynamicProperty("detected", true);
                }
            }
        }
    }

    const all_pokemon244 = dimension.getEntities({
        type: "pokemon:p244"
    });
    
    if (all_pokemon244.length > 0) {
        for (const pokemon244 of all_pokemon244) {
            const isDetected = pokemon244.getDynamicProperty("detected");
            
            if (!isDetected) {
                const loc = pokemon244.location;
                const players = world.getAllPlayers();
               for (const player of players) {
               player.onScreenDisplay.setTitle(`§r§eEntei §ađã xuất hiện!!`);
				world.sendMessage(`§e§l» §r§eEntei §ađã xuất hiện!! §7Toạ độ x=${loc.x.toFixed(2)}, y=${loc.y.toFixed(2)}, z=${loc.z.toFixed(2)}`)
                pokemon244.setDynamicProperty("detected", true);
                }
            }
        }
    }

    const all_pokemon245 = dimension.getEntities({
        type: "pokemon:p245"
    });
    
    if (all_pokemon245.length > 0) {
        for (const pokemon245 of all_pokemon245) {
            const isDetected = pokemon245.getDynamicProperty("detected");
            
            if (!isDetected) {
                const loc = pokemon245.location;
                const players = world.getAllPlayers();
               for (const player of players) {
               player.onScreenDisplay.setTitle(`§r§eSuicune §ađã xuất hiện!!`);
				world.sendMessage(`§e§l» §r§eSuicune §ađã xuất hiện!! §7Toạ độ x=${loc.x.toFixed(2)}, y=${loc.y.toFixed(2)}, z=${loc.z.toFixed(2)}`)
                pokemon245.setDynamicProperty("detected", true);
                }
            }
        }
    }

    const all_pokemon249 = dimension.getEntities({
        type: "pokemon:p249"
    });
    
    if (all_pokemon249.length > 0) {
        for (const pokemon249 of all_pokemon249) {
            const isDetected = pokemon249.getDynamicProperty("detected");
            
            if (!isDetected) {
                const loc = pokemon249.location;
                const players = world.getAllPlayers();
               for (const player of players) {
               player.onScreenDisplay.setTitle(`§r§eLugia §ađã xuất hiện!!`);
				world.sendMessage(`§e§l» §r§eLugia §ađã xuất hiện!! §7Toạ độ x=${loc.x.toFixed(2)}, y=${loc.y.toFixed(2)}, z=${loc.z.toFixed(2)}`)
                pokemon249.setDynamicProperty("detected", true);
                }
            }
        }
    }

    const all_pokemon382 = dimension.getEntities({
        type: "pokemon:p382"
    });
    
    if (all_pokemon382.length > 0) {
        for (const pokemon382 of all_pokemon382) {
            const isDetected = pokemon382.getDynamicProperty("detected");
            
            if (!isDetected) {
                const loc = pokemon382.location;
                const players = world.getAllPlayers();
               for (const player of players) {
               player.onScreenDisplay.setTitle(`§r§eKyogre §ađã xuất hiện!!`);
				world.sendMessage(`§e§l» §r§eKyogre §ađã xuất hiện!! §7Toạ độ x=${loc.x.toFixed(2)}, y=${loc.y.toFixed(2)}, z=${loc.z.toFixed(2)}`)
                pokemon382.setDynamicProperty("detected", true);
                }
            }
        }
    }

    const all_pokemon383 = dimension.getEntities({
        type: "pokemon:p383"
    });
    
    if (all_pokemon383.length > 0) {
        for (const pokemon383 of all_pokemon383) {
            const isDetected = pokemon383.getDynamicProperty("detected");
            
            if (!isDetected) {
                const loc = pokemon383.location;
                const players = world.getAllPlayers();
               for (const player of players) {
               player.onScreenDisplay.setTitle(`§r§eGroudon §ađã xuất hiện!!`);
				world.sendMessage(`§e§l» §r§eGroudon §ađã xuất hiện!! §7Toạ độ x=${loc.x.toFixed(2)}, y=${loc.y.toFixed(2)}, z=${loc.z.toFixed(2)}`)
                pokemon383.setDynamicProperty("detected", true);
                }
            }
        }
    }

    const all_pokemon384 = dimension.getEntities({
        type: "pokemon:p384"
    });
    
    if (all_pokemon384.length > 0) {
        for (const pokemon384 of all_pokemon384) {
            const isDetected = pokemon384.getDynamicProperty("detected");
            
            if (!isDetected) {
                const loc = pokemon384.location;
                const players = world.getAllPlayers();
               for (const player of players) {
               player.onScreenDisplay.setTitle(`§r§eRayquaza §ađã xuất hiện!!`);
				world.sendMessage(`§e§l» §r§eRayquaza §ađã xuất hiện!! §7Toạ độ x=${loc.x.toFixed(2)}, y=${loc.y.toFixed(2)}, z=${loc.z.toFixed(2)}`)
                pokemon384.setDynamicProperty("detected", true);
                }
            }
        }
    }

    const all_pokemon385 = dimension.getEntities({
        type: "pokemon:p385"
    });
    
    if (all_pokemon385.length > 0) {
        for (const pokemon385 of all_pokemon385) {
            const isDetected = pokemon385.getDynamicProperty("detected");
            
            if (!isDetected) {
                const loc = pokemon385.location;
                const players = world.getAllPlayers();
               for (const player of players) {
               player.onScreenDisplay.setTitle(`§r§eJirachi §ađã xuất hiện!!`);
				world.sendMessage(`§e§l» §r§eJirachi §ađã xuất hiện!! §7Toạ độ x=${loc.x.toFixed(2)}, y=${loc.y.toFixed(2)}, z=${loc.z.toFixed(2)}`)
                pokemon385.setDynamicProperty("detected", true);
                }
            }
        }
    }

    const all_pokemon386 = dimension.getEntities({
        type: "pokemon:p386"
    });
    
    if (all_pokemon386.length > 0) {
        for (const pokemon386 of all_pokemon386) {
            const isDetected = pokemon386.getDynamicProperty("detected");
            
            if (!isDetected) {
                const loc = pokemon386.location;
                const players = world.getAllPlayers();
               for (const player of players) {
               player.onScreenDisplay.setTitle(`§r§eDeoxys §ađã xuất hiện!!`);
				world.sendMessage(`§e§l» §r§eDeoxys §ađã xuất hiện!! §7Toạ độ x=${loc.x.toFixed(2)}, y=${loc.y.toFixed(2)}, z=${loc.z.toFixed(2)}`)
                pokemon386.setDynamicProperty("detected", true);
                }
            }
        }
    }

}, 10);

/*.          */




function showSpawnUI(player) {
  const biomesMap = new Map();
  const pokemonKeys = Object.keys(spawnrule_pokemon);
  for (let i = 0; i < pokemonKeys.length; i++) {
    const key = pokemonKeys[i];
    const pokemon = spawnrule_pokemon[key];
    
 
    if (pokemon.biomes && pokemon.biomes.length > 0) {
      for (let j = 0; j < pokemon.biomes.length; j++) {
        const biome = pokemon.biomes[j];
        if (!biomesMap.has(biome)) {
          biomesMap.set(biome, []);
        }
        biomesMap.get(biome).push(key);
      }
    }
  }


  const form = new ui.ActionFormData()
    .title("Chọn biome")
    .body("Các biome của Pokemon");

  const biomeKeys = Array.from(biomesMap.keys()).sort();
  for (let i = 0; i < biomeKeys.length; i++) {
    const biome = biomeKeys[i];
    const pokemonCount = biomesMap.get(biome).length;
    form.button(`${biome}\n§c(${pokemonCount} Pokémon)§r`);
  }

  form.show(player).then((response) => {
    if (response.isCanceled) return;

    const selectedBiome = biomeKeys[response.selection];
    showPokemonListInBiome(player, selectedBiome, biomesMap.get(selectedBiome));
  });
}

function showPokemonListInBiome(player, biome, pokemonList) {
  const form = new ui.ActionFormData()
    .title(`Pokémon Trong ${biome}`)
    .body(`Chọn Pokemon để xem chi tiết`);

const sortedList = pokemonList.sort();
for (let i = 0; i < sortedList.length; i++) {
  const key = sortedList[i];
  const pokemon = spawnrule_pokemon[key];

  const name = pokemon.name ? pokemon.name : "Không có tên";
  const chance = pokemon.spawn_chance !== undefined && pokemon.spawn_chance !== null
    ? `${pokemon.spawn_chance}%`
    : "None";

 
  const num = key.substring(1); // เช่น p12 → 12
  
  // path รูป
  const icon = `textures/pokedex/${num}.png`;

  form.button(
    `${name} - ${key}§r\n§cTỉ lệ xuất hiện: ${chance}§r`,
    icon
  );
}

  form.button("§aQuay lại biome");

  form.show(player).then((response) => {
    if (response.isCanceled) return;

    if (response.selection === pokemonList.length) {
      showSpawnUI(player);
      return;
    }

    const selectedKey = pokemonList[response.selection];
    showPokemonDetails(player, selectedKey, biome);
  });
}

function showPokemonDetails(player, pokemonKey, currentBiome = null) {
  const pokemon = spawnrule_pokemon[pokemonKey];
  

  const biomesList = (pokemon.biomes && pokemon.biomes.length > 0) 
    ? pokemon.biomes.join(", ") 
    : "None";
    
  const blocksList = (pokemon.blocks && pokemon.blocks.length > 0) 
    ? pokemon.blocks.join(", ") 
    : "None";
    
  const spawnType = pokemon.spawn_type || "None";
  
  const delayInfo = (pokemon.delay && pokemon.delay.min !== undefined && pokemon.delay.max !== undefined)
    ? `Min: ${pokemon.delay.min} ticks, Max: ${pokemon.delay.max} ticks`
    : "None";
    
  const spawnChance = (pokemon.spawn_chance !== undefined && pokemon.spawn_chance !== null)
    ? `${pokemon.spawn_chance}%`
    : "None";
  

  const detailsText = `
§6=== Chi tiết sinh ra ===§r

§eBiome:§r
${biomesList}

§eTrên Block:§r
${blocksList}

§eKiểu sinh ra:§r ${spawnType}

§eĐộ trễ:§r
${delayInfo}

§eTỉ lệ xuất hiện:§r ${spawnChance}
  `.trim();

  const form = new ui.ActionFormData()
    .title(`§6${pokemonKey} Chi tiết`)
    .body(detailsText)
    .button("§aQuay lại biome§r")
    .button("§cClose§r");

  form.show(player).then((response) => {
    if (response.isCanceled) return;

 
    if (response.selection === 0) {
      if (currentBiome) {
  
        const biomesMap = new Map();
        const allKeys = Object.keys(spawnrule_pokemon);
        for (let i = 0; i < allKeys.length; i++) {
          const key = allKeys[i];
          const pkm = spawnrule_pokemon[key];
          if (pkm.biomes && pkm.biomes.length > 0) {
            for (let j = 0; j < pkm.biomes.length; j++) {
              const biome = pkm.biomes[j];
              if (!biomesMap.has(biome)) {
                biomesMap.set(biome, []);
              }
              biomesMap.get(biome).push(key);
            }
          } else {
            if (!biomesMap.has("None")) {
              biomesMap.set("None", []);
            }
            biomesMap.get("None").push(key);
          }
        }
        showPokemonListInBiome(player, currentBiome, biomesMap.get(currentBiome));
      } else {
        showSpawnUI(player);
      }
    }
  
  });
}

world.afterEvents.entitySpawn.subscribe(ev => {
    const ent = ev.entity;


    if (!ent.typeId.startsWith("pokemon:")) return;

    // generate random size
    const r = Math.random();
    let scale = 1;

    if (r < 0.1) scale = 0.75;      // 10% XS
    else if (r < 0.3) scale = 0.9;  // 20% S
    else if (r < 0.7) scale = 1.0;  // 40% M
    else if (r < 0.9) scale = 1.1;  // 20% L
    else scale = 1.25;              // 10% XL

    // apply scale
    ent.setProperty("pokemon:size", scale);
});