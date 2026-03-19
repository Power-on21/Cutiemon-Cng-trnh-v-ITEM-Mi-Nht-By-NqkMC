tellraw @s {"rawtext":[{"text":"§aกำลังตรวจสอบ Offering..."}]}

execute if entity @s[hasitem={item=serp:zygarde_cell,quantity=100..}] run clear @s serp:zygarde_cell 100
execute if entity @s[hasitem={item=serp:zygarde_cell,quantity=100..}] run give @s serp:zygarde_offering_100 1
execute if entity @s[hasitem={item=serp:zygarde_cell,quantity=100..}] run tellraw @s {"rawtext":[{"text":"§aคุณได้รับ §eZygarde 100% Offering"}]}
execute if entity @s[hasitem={item=serp:zygarde_cell,quantity=100..}] run return 0

execute if entity @s[hasitem={item=serp:zygarde_cell,quantity=50..}] run clear @s serp:zygarde_cell 50
execute if entity @s[hasitem={item=serp:zygarde_cell,quantity=50..}] run give @s serp:zygarde_offering_50 1
execute if entity @s[hasitem={item=serp:zygarde_cell,quantity=50..}] run tellraw @s {"rawtext":[{"text":"§aคุณได้รับ §eZygarde 50% Offering"}]}
execute if entity @s[hasitem={item=serp:zygarde_cell,quantity=50..}] run return 0

execute if entity @s[hasitem={item=serp:zygarde_cell,quantity=10..}] run clear @s serp:zygarde_cell 10
execute if entity @s[hasitem={item=serp:zygarde_cell,quantity=10..}] run give @s serp:zygarde_offering_10 1
execute if entity @s[hasitem={item=serp:zygarde_cell,quantity=10..}] run tellraw @s {"rawtext":[{"text":"§aคุณได้รับ §eZygarde 10% Offering"}]}
execute if entity @s[hasitem={item=serp:zygarde_cell,quantity=10..}] run return 0

tellraw @s {"rawtext":[{"text":"§cคุณไม่มี Zygarde Cell เพียงพอ!"}]}
