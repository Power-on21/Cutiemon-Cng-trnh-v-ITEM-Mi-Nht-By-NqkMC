scoreboard players random @s select_random 1 5

scoreboard players random @s capsule_sound 1 3

execute if score @s select_random matches 1 run function spawn1

execute if score @s select_random matches 2 run function 2spawn

execute if score @s select_random matches 3 run function 3spawn

execute if score @s select_random matches 4 run function 4spawn

execute if score @s select_random matches 5 run function 5spawn

execute if score @s capsule_sound matches 1 run playsound custom_sound.capsule_pop @s ~~~ 1 1 1

execute if score @s capsule_sound matches 2 run playsound custom_sound.capsule_pop2 @s ~~~ 1 1 1

execute if score @s capsule_sound matches 3 run playsound custom_sound.capsule_pop3 @s ~~~ 1 1 1

clear @s gacha:wild_capsule 0 1