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
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~1 0 ~1`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save zgarde${count} ${x+0} ${y} ${z+0} ${x+0} ${y+1} ${z+0}`);

        allUndoCommand.push({
          "name":`zgarde${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load zgarde ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 1:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~35 0 ~25`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save spawnlugia${count} ${x+0} ${y} ${z+0} ${x+34} ${y+9} ${z+24}`);

        allUndoCommand.push({
          "name":`spawnlugia${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load spawnlugia ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 2:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~15 0 ~15`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save zap${count} ${x+0} ${y} ${z+0} ${x+14} ${y+35} ${z+14}`);

        allUndoCommand.push({
          "name":`zap${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load zap ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 3:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~30 0 ~35`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save mspawn${count} ${x+0} ${y} ${z+0} ${x+29} ${y+25} ${z+34}`);

        allUndoCommand.push({
          "name":`mspawn${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load mspawn ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 4:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~15 0 ~15`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save artispawn${count} ${x+0} ${y} ${z+0} ${x+14} ${y+35} ${z+14}`);

        allUndoCommand.push({
          "name":`artispawn${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load artispawn ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 5:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~18 0 ~18`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save mospawn${count} ${x+0} ${y} ${z+0} ${x+17} ${y+35} ${z+17}`);

        allUndoCommand.push({
          "name":`mospawn${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load mospawn ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 6:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~15 0 ~15`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save rayspawn${count} ${x+0} ${y} ${z+0} ${x+14} ${y+35} ${z+14}`);

        allUndoCommand.push({
          "name":`rayspawn${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load rayspawn ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 7:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~25 0 ~29`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save groudon${count} ${x+0} ${y} ${z+0} ${x+24} ${y+25} ${z+28}`);

        allUndoCommand.push({
          "name":`groudon${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load groudon ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 8:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~20 0 ~20`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save chrismas${count} ${x+0} ${y} ${z+0} ${x+19} ${y+35} ${z+19}`);

        allUndoCommand.push({
          "name":`chrismas${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load chrismas ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 9:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~19 0 ~19`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save raretree${count} ${x+0} ${y} ${z+0} ${x+18} ${y+20} ${z+18}`);

        allUndoCommand.push({
          "name":`raretree${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load raretree ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 10:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~14 0 ~15`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save ghost${count} ${x+0} ${y} ${z+0} ${x+13} ${y+8} ${z+14}`);

        allUndoCommand.push({
          "name":`ghost${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load ghost ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 11:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~18 0 ~23`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save grass${count} ${x+0} ${y} ${z+0} ${x+17} ${y+15} ${z+22}`);

        allUndoCommand.push({
          "name":`grass${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load grass ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 12:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~14 0 ~19`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save charmander${count} ${x+0} ${y} ${z+0} ${x+13} ${y+10} ${z+18}`);

        allUndoCommand.push({
          "name":`charmander${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load charmander ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 13:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~15 0 ~13`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save squirtle${count} ${x+0} ${y} ${z+0} ${x+14} ${y+15} ${z+12}`);

        allUndoCommand.push({
          "name":`squirtle${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load squirtle ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 14:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~14 0 ~12`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save 22ec69d4-63dd-4ec3-bb47-3999ed5566fa${count} ${x+0} ${y} ${z+0} ${x+13} ${y+15} ${z+11}`);

        allUndoCommand.push({
          "name":`22ec69d4-63dd-4ec3-bb47-3999ed5566fa${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load 22ec69d4-63dd-4ec3-bb47-3999ed5566fa ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 15:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~23 0 ~18`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save 04ea587a-2dd5-45ee-88ac-996333bda585${count} ${x+0} ${y} ${z+0} ${x+22} ${y+18} ${z+17}`);

        allUndoCommand.push({
          "name":`04ea587a-2dd5-45ee-88ac-996333bda585${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load 04ea587a-2dd5-45ee-88ac-996333bda585 ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 16:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~31 0 ~35`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save 74c8bf1d-5dd1-4c95-a85c-8bde7a6e52ac${count} ${x+0} ${y} ${z+0} ${x+30} ${y+9} ${z+34}`);

        allUndoCommand.push({
          "name":`74c8bf1d-5dd1-4c95-a85c-8bde7a6e52ac${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load 74c8bf1d-5dd1-4c95-a85c-8bde7a6e52ac ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 17:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~31 0 ~33`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save 7547e20a-a77b-4a44-9537-142241946157${count} ${x+0} ${y} ${z+0} ${x+30} ${y+9} ${z+32}`);

        allUndoCommand.push({
          "name":`7547e20a-a77b-4a44-9537-142241946157${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load 7547e20a-a77b-4a44-9537-142241946157 ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 18:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~31 0 ~33`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save 698ddebe-3ded-4a71-871f-cdabf0d4c61b${count} ${x+0} ${y} ${z+0} ${x+30} ${y+9} ${z+32}`);

        allUndoCommand.push({
          "name":`698ddebe-3ded-4a71-871f-cdabf0d4c61b${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load 698ddebe-3ded-4a71-871f-cdabf0d4c61b ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 19:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~55 0 ~55`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save 3c782e12-9018-4a10-a3ce-248a1fd67413${count} ${x+0} ${y} ${z+0} ${x+54} ${y+232} ${z+54}`);

        allUndoCommand.push({
          "name":`3c782e12-9018-4a10-a3ce-248a1fd67413${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load 3c782e12-9018-4a10-a3ce-248a1fd67413 ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 20:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~64 0 ~50`);

player.runCommandAsync(`tickingarea add ~64 0 ~0 ~102 0 ~50`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save 5ea5f856-be6b-406c-92fc-64550027315f_1${count} ${x+0} ${y} ${z+0} ${x+63} ${y+38} ${z+49}`);

        allUndoCommand.push({
          "name":`5ea5f856-be6b-406c-92fc-64550027315f_1${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
count = count + 1;
await player.runCommandAsync(`structure save 5ea5f856-be6b-406c-92fc-64550027315f_2${count} ${x+64} ${y} ${z+0} ${x+37} ${y+38} ${z+49}`);

        allUndoCommand.push({
          "name":`5ea5f856-be6b-406c-92fc-64550027315f_2${count}`,
          "x":x+64,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load 5ea5f856-be6b-406c-92fc-64550027315f_1 ${x+0} ${y} ${z+0}`);
                player.runCommandAsync(`structure load 5ea5f856-be6b-406c-92fc-64550027315f_2 ${x+64} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 21:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~27 0 ~27`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save 17edac11-0ef6-4561-9d2d-ea0c731d09b2${count} ${x+0} ${y} ${z+0} ${x+26} ${y+14} ${z+26}`);

        allUndoCommand.push({
          "name":`17edac11-0ef6-4561-9d2d-ea0c731d09b2${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load 17edac11-0ef6-4561-9d2d-ea0c731d09b2 ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 22:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~27 0 ~27`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save eca1dcf1-ba1c-4d0a-9c11-78d4509c1bce${count} ${x+0} ${y} ${z+0} ${x+26} ${y+14} ${z+26}`);

        allUndoCommand.push({
          "name":`eca1dcf1-ba1c-4d0a-9c11-78d4509c1bce${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load eca1dcf1-ba1c-4d0a-9c11-78d4509c1bce ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 23:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~32 0 ~32`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save 1570e6fc-1260-4a37-96b8-69e9286a6903${count} ${x+0} ${y} ${z+0} ${x+31} ${y+34} ${z+31}`);

        allUndoCommand.push({
          "name":`1570e6fc-1260-4a37-96b8-69e9286a6903${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load 1570e6fc-1260-4a37-96b8-69e9286a6903 ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 24:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~19 0 ~21`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save f8d59342-3d34-47c8-8d39-af74d45da6dc${count} ${x+0} ${y} ${z+0} ${x+18} ${y+30} ${z+20}`);

        allUndoCommand.push({
          "name":`f8d59342-3d34-47c8-8d39-af74d45da6dc${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load f8d59342-3d34-47c8-8d39-af74d45da6dc ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 25:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~19 0 ~21`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save e436452a-bc58-4011-a3c2-5643ef1dda72${count} ${x+0} ${y} ${z+0} ${x+18} ${y+30} ${z+20}`);

        allUndoCommand.push({
          "name":`e436452a-bc58-4011-a3c2-5643ef1dda72${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load e436452a-bc58-4011-a3c2-5643ef1dda72 ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 26:
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
.button("zygardecell", "textures/arts/zgarde")
.button("lugia", "textures/arts/spawnlugia")
.button("zapdos", "textures/arts/zap")
.button("mewspawn", "textures/arts/mspawn")
.button("articuno", "textures/arts/artispawn")
.button("moltres", "textures/arts/mospawn")
.button("rayquaza", "textures/arts/rayspawn")
.button("groudonshrine", "textures/arts/groudon")
.button("chrismas", "textures/arts/chrismas")
.button("raretree", "textures/arts/raretree")
.button("spawnGastly", "textures/arts/ghost")
.button("spawngrass", "textures/arts/grass")
.button("spawnChamander", "textures/arts/charmander")
.button("spawnSquirtle", "textures/arts/squirtle")
.button("home", "textures/arts/22ec69d4-63dd-4ec3-bb47-3999ed5566fa")
.button("center", "textures/arts/04ea587a-2dd5-45ee-88ac-996333bda585")
.button("ancient_tomb", "textures/arts/74c8bf1d-5dd1-4c95-a85c-8bde7a6e52ac")
.button("island_cave", "textures/arts/7547e20a-a77b-4a44-9537-142241946157")
.button("desert_ruins", "textures/arts/698ddebe-3ded-4a71-871f-cdabf0d4c61b")
.button("bell_tower", "textures/arts/3c782e12-9018-4a10-a3ce-248a1fd67413")
.button("sea_mauville", "textures/arts/5ea5f856-be6b-406c-92fc-64550027315f")
.button("crytal", "textures/arts/17edac11-0ef6-4561-9d2d-ea0c731d09b2")
.button("water_den", "textures/arts/eca1dcf1-ba1c-4d0a-9c11-78d4509c1bce")
.button("xerneas_tree", "textures/arts/1570e6fc-1260-4a37-96b8-69e9286a6903")
.button("darkness", "textures/arts/f8d59342-3d34-47c8-8d39-af74d45da6dc")
.button("waters", "textures/arts/e436452a-bc58-4011-a3c2-5643ef1dda72")
    .button("Undo", "textures/items/barrier");
    