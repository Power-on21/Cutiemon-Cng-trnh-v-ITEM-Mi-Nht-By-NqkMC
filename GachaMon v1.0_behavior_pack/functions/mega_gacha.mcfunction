execute if entity @s[hasitem={item=gacha:gacha_coin_mega}] run clear @s gacha:gacha_coin_mega 0 1
execute if entity @s[hasitem={item=gacha:gacha_coin_mega}] run scoreboard players random @s megagacha_random 1 4

execute if score @s megagacha_random matches 1 if entity @s[hasitem={item=gacha:gacha_coin_mega}] run give @s gacha:mega_capsule 1
execute if score @s megagacha_random matches 1 if entity @s[hasitem={item=gacha:gacha_coin_mega}] run tellraw @s {"rawtext":[{"text":"§e!§aGenial, te ha tocado una §fCapsula Mega§e!"}]}

execute if score @s megagacha_random matches 2 if entity @s[hasitem={item=gacha:gacha_coin_mega}] run give @s gacha:mega_capsule 1
execute if score @s megagacha_random matches 2 if entity @s[hasitem={item=gacha:gacha_coin_mega}] run tellraw @s {"rawtext":[{"text":"§e!§aGenial, te ha tocado una §fCapsula Mega§e!"}]}

execute if score @s megagacha_random matches 3 if entity @s[hasitem={item=gacha:gacha_coin_mega}] run give @s gacha:mega_capsule 1
execute if score @s megagacha_random matches 3 if entity @s[hasitem={item=gacha:gacha_coin_mega}] run tellraw @s {"rawtext":[{"text":"§e!§aGenial, te ha tocado una §fCapsula Mega§e!"}]}

execute if score @s megagacha_random matches 4 if entity @s[hasitem={item=gacha:gacha_coin_mega}] run give @s gacha:mega_capsule 1
execute if score @s megagacha_random matches 4 if entity @s[hasitem={item=gacha:gacha_coin_mega}] run tellraw @s {"rawtext":[{"text":"§e!§aGenial, te ha tocado una §fCapsula Mega§e!"}]}

execute unless entity @s[hasitem={item=gacha:gacha_coin_mega}] run tellraw @s {"rawtext":[{"text":"§c¡Necesitas una gacha coin mega para usar la máquina!§e"}]}