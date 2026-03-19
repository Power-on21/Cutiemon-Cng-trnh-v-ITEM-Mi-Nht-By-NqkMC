import { world } from "@minecraft/server";
import {
    ActionFormData,
    MessageFormData,
    ModalFormData
} from "@minecraft/server-ui";
var undoHolder = [];
var count = 0;

world.afterEvents.playerPlaceBlock.subscribe((event) => {
    const player = event.player; // Player that place the block
    const block = event.block; // Block that's placed

    if(block.typeId === "pa:constructor"){
        form.show(player).then(async r => {
            // This will stop the code when the player closes the form
            if (r.canceled) return;
            let response = r.selection;
            let x = event.block.x;
            let y = event.block.y;
            let z = event.block.z;
            player.runCommandAsync(`setblock ${x} ${y} ${z} air`);
    switch (response) {
                case 0:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~20 0 ~4`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save hoiphucpokemon${count} ${x+0} ${y} ${z+0} ${x+19} ${y+4} ${z+3}`);

        allUndoCommand.push({
          "name":`hoiphucpokemon${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load hoiphucpokemon ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 1:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~13 0 ~2`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save bangpk${count} ${x+0} ${y} ${z+0} ${x+12} ${y+11} ${z+1}`);

        allUndoCommand.push({
          "name":`bangpk${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load bangpk ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 2:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~13 0 ~2`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save setpk${count} ${x+0} ${y} ${z+0} ${x+12} ${y+10} ${z+1}`);

        allUndoCommand.push({
          "name":`setpk${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load setpk ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 3:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~13 0 ~2`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save luapk${count} ${x+0} ${y} ${z+0} ${x+12} ${y+11} ${z+1}`);

        allUndoCommand.push({
          "name":`luapk${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load luapk ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 4:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~31 0 ~22`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save trungtampokemon${count} ${x+0} ${y} ${z+0} ${x+30} ${y+15} ${z+21}`);

        allUndoCommand.push({
          "name":`trungtampokemon${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load trungtampokemon ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 5:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~29 0 ~30`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save dautruongbang${count} ${x+0} ${y} ${z+0} ${x+28} ${y+30} ${z+29}`);

        allUndoCommand.push({
          "name":`dautruongbang${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load dautruongbang ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 6:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~29 0 ~30`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save dautruongset${count} ${x+0} ${y} ${z+0} ${x+28} ${y+25} ${z+29}`);

        allUndoCommand.push({
          "name":`dautruongset${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load dautruongset ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 7:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~30 0 ~30`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save dautruonglua${count} ${x+0} ${y} ${z+0} ${x+29} ${y+25} ${z+29}`);

        allUndoCommand.push({
          "name":`dautruonglua${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load dautruonglua ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 8:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~13 0 ~13`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save dencat${count} ${x+0} ${y} ${z+0} ${x+12} ${y+10} ${z+12}`);

        allUndoCommand.push({
          "name":`dencat${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load dencat ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 9:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~13 0 ~13`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save denda${count} ${x+0} ${y} ${z+0} ${x+12} ${y+10} ${z+12}`);

        allUndoCommand.push({
          "name":`denda${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load denda ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 10:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~13 0 ~13`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save denbang${count} ${x+0} ${y} ${z+0} ${x+12} ${y+10} ${z+12}`);

        allUndoCommand.push({
          "name":`denbang${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load denbang ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 11:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~20 0 ~21`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save congtrinh2${count} ${x+0} ${y} ${z+0} ${x+19} ${y+15} ${z+20}`);

        allUndoCommand.push({
          "name":`congtrinh2${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load congtrinh2 ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 12:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~20 0 ~25`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save congtrinh3${count} ${x+0} ${y} ${z+0} ${x+19} ${y+18} ${z+24}`);

        allUndoCommand.push({
          "name":`congtrinh3${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load congtrinh3 ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 13:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~25 0 ~17`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save congtrinhhoopa${count} ${x+0} ${y} ${z+0} ${x+24} ${y+30} ${z+16}`);

        allUndoCommand.push({
          "name":`congtrinhhoopa${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load congtrinhhoopa ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 14:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~29 0 ~50`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save rocket${count} ${x+0} ${y} ${z+0} ${x+28} ${y+64} ${z+49}`);

        allUndoCommand.push({
          "name":`rocket${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load rocket ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 15:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~1 0 ~1`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save nen${count} ${x+0} ${y} ${z+0} ${x+0} ${y+1} ${z+0}`);

        allUndoCommand.push({
          "name":`nen${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load nen ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 16:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~15 0 ~10`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save tang3${count} ${x+0} ${y} ${z+0} ${x+14} ${y+5} ${z+9}`);

        allUndoCommand.push({
          "name":`tang3${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load tang3 ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 17:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~18 0 ~7`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save tang2${count} ${x+0} ${y} ${z+0} ${x+17} ${y+5} ${z+6}`);

        allUndoCommand.push({
          "name":`tang2${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load tang2 ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 18:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~13 0 ~5`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save tang1${count} ${x+0} ${y} ${z+0} ${x+12} ${y+5} ${z+4}`);

        allUndoCommand.push({
          "name":`tang1${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load tang1 ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 19:
                   if(undoHolder.length > 0){
                            var data = undoHolder.pop();
                        for(var i = 0; i < data.data.length; i++){
                            let structureName = data.data[i].name;
                            let x = data.data[i].x;
                            let y = data.data[i].y;
                            let z = data.data[i].z;
                            world.sendMessage(`Undo Structure ${structureName} at ${x} ${y} ${z}`)
                            await player.runCommandAsync(`tickingarea add ${x} 0 ${z} ${x} 0 ${z}`);
                            await player.runCommandAsync(`structure load ${structureName} ${x} ${y} ${z}`).then(()=>{
                            player.runCommandAsync(`structure delete ${structureName}`);
                            });
                        }
                            await player.runCommandAsync(`tickingarea remove_all`);
                         }else{
                            player.sendMessage("You have nothing to undo");
                         }
                    break;
                        
                default:
                // Use this when your button doesn't have a function yet
                // You don't need to use "break" on default case
                // Remember to place the default on very bottom
            }
        });;
    }
})
///Form dialog
let form = new ActionFormData()
    .title("Build Structure")
    .body("Choose the structure")
.button("hoiphucpokemon", "textures/arts/hoiphucpokemon")
.button("bangpk", "textures/arts/bangpk")
.button("setpk", "textures/arts/setpk")
.button("luapk", "textures/arts/luapk")
.button("trungtampokemon", "textures/arts/trungtampokemon")
.button("dautruongbang", "textures/arts/dautruongbang")
.button("dautruongset", "textures/arts/dautruongset")
.button("dautruonglua", "textures/arts/dautruonglua")
.button("dencat", "textures/arts/dencat")
.button("denda", "textures/arts/denda")
.button("denbang", "textures/arts/denbang")
.button("congtrinh2", "textures/arts/congtrinh2")
.button("congtrinhv3", "textures/arts/congtrinh3")
.button("congtrinhhoopa", "textures/arts/congtrinhhoopa")
.button("rocket", "textures/arts/rocket")
.button("nen", "textures/arts/nen")
.button("tang3", "textures/arts/tang3")
.button("tang2", "textures/arts/tang2")
.button("tang1", "textures/arts/tang1")
    .button("Undo", "textures/items/barrier");
    