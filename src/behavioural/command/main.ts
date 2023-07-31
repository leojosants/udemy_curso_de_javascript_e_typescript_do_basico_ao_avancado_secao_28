import { LightPowerCommand } from "./light-power-command";
import { SmartHouseLight } from "./smart-house-light";
import { SmartHouseApp } from './smart-house-app';
import { LightIntensityCommand } from "./light-intensity-command";

// Receiver
const bedroomLight = new SmartHouseLight('Luz Quarto');
const bathroomLight = new SmartHouseLight('Luz Banheiro');

// Command
const bedroomLightPowerComand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerComand = new LightPowerCommand(bathroomLight);
const bedroomLightIntensityCommand = new LightIntensityCommand(bedroomLight);
const bathroomLightIntensityCommand = new LightIntensityCommand(bathroomLight);

// Controle - Invoker
const smartHouseApp = new SmartHouseApp();

smartHouseApp.addCommand('btn-1', bedroomLightPowerComand);
smartHouseApp.addCommand('btn-2', bathroomLightPowerComand);
smartHouseApp.addCommand('btn-3', bedroomLightIntensityCommand);
smartHouseApp.addCommand('btn-4', bathroomLightIntensityCommand);

smartHouseApp.executeComand('btn-1');
smartHouseApp.undoComand('btn-1');

smartHouseApp.executeComand('btn-2');
smartHouseApp.undoComand('btn-2');

for (let i = 0; i < 2; i++) { smartHouseApp.executeComand('btn-3'); }
for (let i = 0; i < 2; i++) { smartHouseApp.undoComand('btn-3'); }
for (let i = 0; i < 2; i++) { smartHouseApp.executeComand('btn-4'); }
for (let i = 0; i < 2; i++) { smartHouseApp.undoComand('btn-4'); }