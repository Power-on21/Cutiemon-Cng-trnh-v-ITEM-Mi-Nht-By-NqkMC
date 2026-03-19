scoreboard players random @s megacapsule_random 1 33
scoreboard players random @s capsule_sound 1 3

execute if score @s megacapsule_random matches 1 run give @s serp:absolite 1
execute if score @s megacapsule_random matches 2 run give @s serp:aerodactylite 1
execute if score @s megacapsule_random matches 3 run give @s serp:alakazite 1
execute if score @s megacapsule_random matches 4 run give @s serp:ampharosite 1
execute if score @s megacapsule_random matches 5 run give @s serp:banettite 1
execute if score @s megacapsule_random matches 6 run give @s serp:beedrillite 1
execute if score @s megacapsule_random matches 7 run give @s serp:blastoisinite 1
execute if score @s megacapsule_random matches 8 run give @s serp:blazikenite 1
execute if score @s megacapsule_random matches 9 run give @s serp:blue_prism 1
execute if score @s megacapsule_random matches 10 run give @s serp:charizardite_x 1
execute if score @s megacapsule_random matches 11 run give @s serp:charizardite_y 1
execute if score @s megacapsule_random matches 12 run give @s serp:galladite 1
execute if score @s megacapsule_random matches 13 run give @s serp:garchompite 1
execute if score @s megacapsule_random matches 14 run give @s serp:gardevoirite 1
execute if score @s megacapsule_random matches 15 run give @s serp:gengarite 1
execute if score @s megacapsule_random matches 16 run give @s serp:green_prism 1
execute if score @s megacapsule_random matches 17 run give @s serp:greninjite 1
execute if score @s megacapsule_random matches 18 run give @s serp:gyaradosite 1
execute if score @s megacapsule_random matches 19 run give @s serp:heracronite 1
execute if score @s megacapsule_random matches 20 run give @s serp:kangaskhanite 1
execute if score @s megacapsule_random matches 21 run give @s serp:lucarionite 1
execute if score @s megacapsule_random matches 22 run give @s serp:mewtwonite_x 1
execute if score @s megacapsule_random matches 23 run give @s serp:mewtwonite_y 1
execute if score @s megacapsule_random matches 24 run give @s serp:pidgeotite 1
execute if score @s megacapsule_random matches 25 run give @s serp:red_prism 1
execute if score @s megacapsule_random matches 26 run give @s serp:sablenite 1
execute if score @s megacapsule_random matches 27 run give @s serp:salamencite 1
execute if score @s megacapsule_random matches 28 run give @s serp:sceptilite 1
execute if score @s megacapsule_random matches 29 run give @s serp:scizorite 1
execute if score @s megacapsule_random matches 30 run give @s serp:slowbronite 1
execute if score @s megacapsule_random matches 31 run give @s serp:steelixite 1
execute if score @s megacapsule_random matches 32 run give @s serp:swampertite 1
execute if score @s megacapsule_random matches 33 run give @s serp:venusaurite 1

execute if score @s capsule_sound matches 1 run playsound custom_sound.capsule_pop @s ~~~ 1 1 1
execute if score @s capsule_sound matches 2 run playsound custom_sound.capsule_pop2 @s ~~~ 1 1 1
execute if score @s capsule_sound matches 3 run playsound custom_sound.capsule_pop3 @s ~~~ 1 1 1

clear @s gacha:mega_capsule 0 1