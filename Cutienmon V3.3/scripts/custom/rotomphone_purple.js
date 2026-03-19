import { world, system } from '@minecraft/server';
import { ActionFormData, ModalFormData } from '@minecraft/server-ui';

function rotomPhone(player) {
const form = new ActionFormData()
.title('serp.main.rotom_phone_purple.list')
.button("Storage PC", 'textures/ui/stg/changebox')
.button("PokeBank", "pokeitems/items/poke/money");

try { player.playSound("custom_sound.open_phone"); } catch (e) { console.error(e); }

form.show(player).then(response => {
if (response.canceled) {
try { player.playSound("custom_sound.close_phone"); } catch (e) { console.error(e); }
return;
}

if (response.selection === 0) {  
  pcSystem(player, 1, true);  
}  
if (response.selection === 1) {  
  bankSystem(player);  
}

});
}

function pcSystem(player, boxIndex, firstOpen) {
const offset = 0x19 * boxIndex - 0x19;
const forms = ['', '', '', '', ''];
const tags = player.getTags().filter(t => t.startsWith('stg'));
const form = new ActionFormData()
.title("serp.main.rotom_phone_purple.grid")
.body("Rotom Phone | Storage PC,  " + boxIndex);

for (let i = 0; i < 0x19; i++) {
const tag = tags[i + offset];
if (tag) {
const parts = tag.split('/');
const name = parts[2];
const level = Math.floor(parts[8] / 100);
form.button(forms[parts[3] - 1] + "\nLv. " + level, 'pokeitems/items/icons/' + (parts[3] >= 3 ? name + 's' : name));
} else {
form.button('');
}
}

form.button('', "textures/ui/stg/changebox");

if (firstOpen) {
player.playSound("mob.pc.boot_on");
}

form.show(player).then(response => {
const tag = tags[response.selection + offset];
if (response.canceled) {
player.playSound('serp.market.store');
return;
}
if (response.selection === 0x19) {
pcChangeBox(player, boxIndex);
return;
}
if (!tag) {
pcSystem(player, boxIndex, false);
return;
}
pcSelectPoke(player, boxIndex, tag);
});
}

function pcSelectPoke(player, boxIndex, tag) {
const parts = tag.split('/');
const name = parts[2];
const forms = ['', '', '', '', ''];
const level = Math.floor(parts[8] / 100);
const ability = parts[10];
const nature = parts[9];
const held = parts[11];
const display = parts[3] >= 3 ? name + 's' : name;

const form = new ActionFormData()
.title("serp.main.stg.list")
.body({
'rawtext': [
{ 'text': '´' },
{ 'translate': "entity.pokemon:p" + name + ".name" },
{ 'text': forms[parts[3] - 1] + "Lv. " + level + "  " },
{ 'translate': "equippable." + held },
{ 'text': "\n " },
{ 'translate': "nature." + nature },
{ 'text': "  " },
{ 'translate': "ability." + ability },
{ 'text': "\n\nSimple information\n\n\n\n\n\n\n\n\n\n" }
]
})
.button({ 'translate': 'serp.to_team' }, "textures/ui/stg/toteam")
.button({ 'translate': "serp.release" }, "textures/ui/stg/release")
.button("serp.sprite", "textures/pokedex/" + display);

form.show(player).then(response => {
if (response.canceled) {
pcSystem(player, boxIndex, false);
return;
}
if (response.selection === 0) {
const getTeamSlot = n => player.getTags().find(t => t.startsWith("team" + n));
let slot = null;
for (let i = 1; i <= 6; i++) {
if (!getTeamSlot(i)) {
slot = i;
break;
}
}
if (slot === null) {
player.sendMessage({ 'translate': "serp.full_team" });
return;
}
player.sendMessage({
'rawtext': [
{ 'translate': 'serp.welcome_back' },
{ 'translate': "entity.pokemon:p" + name + ".name" }
]
});
player.addTag("team" + slot + '/' + parts.slice(1).join('/'));
player.removeTag(tag);
}
if (response.selection === 1) {
player.sendMessage({
'rawtext': [
{ 'translate': "serp.goodbye_stg" },
{ 'translate': "entity.pokemon:p" + name + '.name' }
]
});
player.removeTag(tag);
}
});
}

function pcChangeBox(player, currentBox) {
const form = new ActionFormData().title("serp.main.rotom_phone_purple.list");
for (let i = 0; i < 10; i++) {
form.button({
'rawtext': [
{ 'translate': 'serp.change_box' },
{ 'text': '' + (i + 1) }
]
}, "textures/ui/stg/changebox");
}
form.show(player).then(response => {
if (response.canceled) {
pcSystem(player, currentBox, false);
return;
}
pcSystem(player, response.selection + 1, false);
});
}

function bankSystem(player) {
const moneyObj = world.scoreboard.getObjective('money');
const score = moneyObj.getScore(player.scoreboardIdentity);
const saved = Number(player.getDynamicProperty('wallet') ?? 0);

const form = new ActionFormData()
.title("serp.main.rotom_phone_purple.list")
.body("Tus ahorros están seguros aquí\n\nSaldo disponible:" + score + "\n§dTotal guardado: " + saved + "\n")
.button("Guardar", 'textures/icon/icon_import')
.button('Retirar', 'textures/icon/icon_export');

form.show(player).then(response => {
if (response.canceled) return;

if (response.selection === 0) {  
  const saveForm = new ModalFormData()  
    .title("Guardar dinero")  
    .label("§aSaldo disponible: " + score)  
    .label("§9Total guardado: " + saved)  
    .textField("Introduce la cantidad que deseas ahorrar en tu cuenta bancaria", "Introduce un número")  
    .submitButton("Guardar");  

  saveForm.show(player).then(r => {  
    if (r.canceled) return;  
    const amount = Number(r.formValues[2]);  
    if (isNaN(amount)) return player.sendMessage("§cIntroduzca solo números");  
    if (amount <= 0) return player.sendMessage("§cIntroduzca un valor mayor que cero");  
    if (amount > score) return player.sendMessage("§cNo dispones de esa cantidad");  

    player.setDynamicProperty("wallet", '' + (saved + amount));  
    moneyObj.setScore(player.scoreboardIdentity, score - amount);  
    player.sendMessage("§aGuardaste " + amount + " en tu banco!");  
  });  
}  

if (response.selection === 1) {  
  const withdrawForm = new ModalFormData()  
    .title("Retirar dinero")  
    .label("§aSaldo disponible: " + score)  
    .label("§9Total guardado: " + saved)  
    .textField("Introduzca la cantidad que desea retirar de su banco", "Introduce un número")  
    .submitButton("Retirar");  

  withdrawForm.show(player).then(r => {  
    if (r.canceled) return;  
    const amount = Number(r.formValues[2]);  
    if (isNaN(amount)) return player.sendMessage("§cIntroduzca solo números");  
    if (amount <= 0) return player.sendMessage("§cIntroduzca un valor mayor que cero");  
    if (amount > saved) return player.sendMessage("§cNo tienes esa cantidad ahorrada");  

    player.setDynamicProperty("wallet", '' + (saved - amount));  
    moneyObj.setScore(player.scoreboardIdentity, score + amount);  
    player.sendMessage("§aRetiraste " + amount + " de tu banco!");  
  });  
}

});
}

world.afterEvents.itemUse.subscribe(ev => {
if (ev.itemStack.typeId === 'serp:rotomphone_purple') {
rotomPhone(ev.source);
}
});