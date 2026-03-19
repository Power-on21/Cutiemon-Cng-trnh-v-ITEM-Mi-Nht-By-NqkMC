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
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~18 0 ~23`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save tangda0${count} ${x+0} ${y} ${z+0} ${x+17} ${y+7} ${z+22}`);

        allUndoCommand.push({
          "name":`tangda0${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load tangda0 ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 1:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~28 0 ~28`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save palkiavsdialga${count} ${x+0} ${y} ${z+0} ${x+27} ${y+21} ${z+27}`);

        allUndoCommand.push({
          "name":`palkiavsdialga${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load palkiavsdialga ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 2:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~23 0 ~26`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save gymelectricer${count} ${x+0} ${y} ${z+0} ${x+22} ${y+14} ${z+25}`);

        allUndoCommand.push({
          "name":`gymelectricer${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load gymelectricer ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 3:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~23 0 ~26`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save gymfighter${count} ${x+0} ${y} ${z+0} ${x+22} ${y+14} ${z+25}`);

        allUndoCommand.push({
          "name":`gymfighter${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load gymfighter ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 4:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~23 0 ~27`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save gymfireer${count} ${x+0} ${y} ${z+0} ${x+22} ${y+14} ${z+26}`);

        allUndoCommand.push({
          "name":`gymfireer${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load gymfireer ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 5:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~23 0 ~26`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save gymflyer${count} ${x+0} ${y} ${z+0} ${x+22} ${y+14} ${z+25}`);

        allUndoCommand.push({
          "name":`gymflyer${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load gymflyer ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 6:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~23 0 ~26`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save gymnormaler${count} ${x+0} ${y} ${z+0} ${x+22} ${y+14} ${z+25}`);

        allUndoCommand.push({
          "name":`gymnormaler${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load gymnormaler ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 7:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~23 0 ~26`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save gympyschicer${count} ${x+0} ${y} ${z+0} ${x+22} ${y+14} ${z+25}`);

        allUndoCommand.push({
          "name":`gympyschicer${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load gympyschicer ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 8:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~23 0 ~26`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save gymrocker${count} ${x+0} ${y} ${z+0} ${x+22} ${y+13} ${z+25}`);

        allUndoCommand.push({
          "name":`gymrocker${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load gymrocker ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 9:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~23 0 ~26`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save gymwaterer${count} ${x+0} ${y} ${z+0} ${x+22} ${y+14} ${z+25}`);

        allUndoCommand.push({
          "name":`gymwaterer${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load gymwaterer ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 10:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~15 0 ~15`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save thap3${count} ${x+0} ${y} ${z+0} ${x+14} ${y+30} ${z+14}`);

        allUndoCommand.push({
          "name":`thap3${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load thap3 ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 11:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~11 0 ~11`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save thap2${count} ${x+0} ${y} ${z+0} ${x+10} ${y+22} ${z+10}`);

        allUndoCommand.push({
          "name":`thap2${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load thap2 ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 12:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~7 0 ~7`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save thap1${count} ${x+0} ${y} ${z+0} ${x+6} ${y+24} ${z+6}`);

        allUndoCommand.push({
          "name":`thap1${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load thap1 ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 13:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~42 0 ~43`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save bobathanthu${count} ${x+0} ${y} ${z+0} ${x+41} ${y+36} ${z+42}`);

        allUndoCommand.push({
          "name":`bobathanthu${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load bobathanthu ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 14:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~42 0 ~54`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save zekres${count} ${x+0} ${y} ${z+0} ${x+41} ${y+26} ${z+53}`);

        allUndoCommand.push({
          "name":`zekres${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load zekres ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 15:
                   player.sendMessage("Start building...");
                    player.sendMessage(`Block Pos at: ${x} : ${y} : ${z}`);
                    
player.runCommandAsync(`tickingarea add ~0 0 ~0 ~1 0 ~1`);

var allUndoCommand = [];
count = count + 1;
await player.runCommandAsync(`structure save cosmicdust${count} ${x+0} ${y} ${z+0} ${x+0} ${y+1} ${z+0}`);

        allUndoCommand.push({
          "name":`cosmicdust${count}`,
          "x":x+0,
          "y":y,
          "z":z+0,
        });
        
undoHolder.push({"data":allUndoCommand});
        player.runCommandAsync(`structure load cosmicdust ${x+0} ${y} ${z+0}`);
        
player.runCommandAsync("tickingarea remove_all");
                    break;
                        case 16:
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
.button("tangda0", "textures/arts/tangda0")
.button("palkiavsdialga", "textures/arts/palkiavsdialga")
.button("gymelectricer", "textures/arts/gymelectricer")
.button("gymfighter", "textures/arts/gymfighter")
.button("gymfireer", "textures/arts/gymfireer")
.button("gymflyer", "textures/arts/gymflyer")
.button("gymnormaler", "textures/arts/gymnormaler")
.button("gympyschicer", "textures/arts/gympyschicer")
.button("gymrocker", "textures/arts/gymrocker")
.button("gymwaterer", "textures/arts/gymwaterer")
.button("thap3", "textures/arts/thap3")
.button("thap2", "textures/arts/thap2")
.button("thap1", "textures/arts/thap1")
.button("bobathanthu", "textures/arts/bobathanthu")
.button("zekres", "textures/arts/zekres")
.button("cosmicdust", "textures/arts/cosmicdust")
    .button("Undo", "textures/items/barrier");
    