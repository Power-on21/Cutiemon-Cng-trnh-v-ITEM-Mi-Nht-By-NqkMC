execute if entity @s[hasitem={item=gacha:gacha_coin}] run clear @s gacha:gacha_coin 0 1
execute if entity @s[hasitem={item=gacha:gacha_coin}] run scoreboard players random @s gacha_random 1 4

execute if score @s gacha_random matches 1 if entity @s[hasitem={item=gacha:gacha_coin}] run give @s gacha:pokeball_capsule 1
execute if score @s gacha_random matches 1 if entity @s[hasitem={item=gacha:gacha_coin}] run tellraw @s {"rawtext":[{"text":"§e!§aGenial, te a tocado una §fCapsula Pokeball§e!"}]}

execute if score @s gacha_random matches 2 if entity @s[hasitem={item=gacha:gacha_coin}] run give @s gacha:superball_capsule 1
execute if score @s gacha_random matches 2 if entity @s[hasitem={item=gacha:gacha_coin}] run tellraw @s {"rawtext":[{"text":"§e!§aGenial, te a tocado una §fCapsula Superball§e!"}]}

execute if score @s gacha_random matches 3 if entity @s[hasitem={item=gacha:gacha_coin}] run give @s gacha:ultraball_capsule 1
execute if score @s gacha_random matches 3 if entity @s[hasitem={item=gacha:gacha_coin}] run tellraw @s {"rawtext":[{"text":"§e!§aGenial, te a tocado una §fCapsula Ultraball§e!"}]}

execute if score @s gacha_random matches 4 if entity @s[hasitem={item=gacha:gacha_coin}] run give @s gacha:masterball_capsule 1
execute if score @s gacha_random matches 4 if entity @s[hasitem={item=gacha:gacha_coin}] run tellraw @s {"rawtext":[{"text":"§e!§aGenial, te a tocado una §fCapsula Masterball§e!"}]}

execute unless entity @s[hasitem={item=gacha:gacha_coin}] run tellraw @s {"rawtext":[{"text":"§c¡Necesitas una gacha coin en la mano para usar la máquina!§e"}]}