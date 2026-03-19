import { world, system } from "@minecraft/server";

world.beforeEvents.itemUseOn.subscribe((eventData) => {
    const player = eventData.source;
    const item = eventData.itemStack;
    const block = eventData.block;

    // 1. Kiểm tra vật phẩm (Chìa khóa Hoopa Good)
    if (item?.typeId === "serp:hoopa_good") {
        
        // 2. Kiểm tra khối vuông bị click (Cái cốc triệu hồi)
        if (block?.typeId === "serp:trieu_hoi_hoopa") {
            
            eventData.cancel = true;

            system.run(() => {
                const { x, y, z } = block.location;
                const sX = x + 0.5; 
                const sY = y + 1;
                const sZ = z + 0.5;
                
                // 3. TRIỆU HỒI TIA SÉT
                player.runCommandAsync(`summon lightning_bolt ${sX} ${sY} ${sZ}`);

                // 4. DẬP LỬA NGAY LẬP TỨC (Thay lửa bằng không khí)
                // Lệnh này sẽ xóa bỏ khối lửa vừa sinh ra do tia sét
                player.runCommandAsync(`setblock ${x} ${y + 1} ${z} minecraft:air`);

                // 5. TRIỆU HỒI POKEMON
                player.runCommandAsync(`summon pokemon:p720 ${sX} ${sY} ${sZ}`);

                // 6. GÁN TÊN HIỂN THỊ
                player.runCommandAsync(`tag @e[type=pokemon:p720,r=3,c=1,x=${sX},y=${sY},z=${sZ}] add hoopa_spawned`);
                player.runCommandAsync(`entityname set @e[tag=hoopa_spawned] "§5§lHoopa Unbound"`);
                player.runCommandAsync(`tag @e[tag=hoopa_spawned] remove hoopa_spawned`);
                
                // 7. TRỪ 1 CHÌA KHÓA
                const inventory = player.getComponent("inventory").container;
                if (item && item.amount > 1) {
                    item.amount -= 1;
                    inventory.setItem(player.selectedSlotIndex, item);
                } else {
                    inventory.setItem(player.selectedSlotIndex, null);
                }

                // 8. THÔNG BÁO CHỮ TO VÀ HIỆU ỨNG HẠT
                player.runCommandAsync(`particle minecraft:huge_explosion_emitter ${sX} ${sY} ${sZ}`);
                player.runCommandAsync(`title @s title §5§lHOOPA`);
                player.runCommandAsync(`title @s subtitle §e§lHuyền thoại đã giáng lâm!`);
                player.runCommandAsync(`playsound random.levelup @a ${sX} ${sY} ${sZ}`);
            });
        }
    }
});
