/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { LightPowerCommand } from "./light/lightPowerCommand";
import { SmartHouseLight } from "./smartHouse/smartHouseLight";
import { SmartHouseApp } from './smartHouse/smartHouseApp';
import { LightIntensityCommand } from "./light/lightIntensityCommand";

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
// receiver
const bedroomLight = new SmartHouseLight('Luz do Quarto');
const bathroomLight = new SmartHouseLight('Luz do Banheiro');

// command
const bedroomLightPowerComand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerComand = new LightPowerCommand(bathroomLight);
const bedroomIntensityPowerComand = new LightIntensityCommand(bedroomLight);
const bathroomIntensityPowerComand = new LightIntensityCommand(bathroomLight);

const IDs = {
    0: 'btn-0',
    1: 'btn-1',
    2: 'btn-2',
    3: 'btn-3',
};

// controle - invoker
const smartHouseApp = new SmartHouseApp();

smartHouseApp.addCommand(IDs[0], bedroomLightPowerComand);
smartHouseApp.addCommand(IDs[1], bathroomLightPowerComand);
smartHouseApp.addCommand(IDs[2], bedroomIntensityPowerComand);
smartHouseApp.addCommand(IDs[3], bathroomIntensityPowerComand);

console.log();
smartHouseApp.executeCommand(IDs[0]);
smartHouseApp.executeCommand(IDs[1]);

console.log();
smartHouseApp.undoCommand(IDs[1]);
smartHouseApp.undoCommand(IDs[0]);

console.log();
for (let i = 0; i < 5; i++) {
    smartHouseApp.executeCommand(IDs[2]);
    smartHouseApp.executeCommand(IDs[3]);
}

console.log();
for (let i = 0; i < 5; i++) {
    smartHouseApp.undoCommand(IDs[2]);
    smartHouseApp.undoCommand(IDs[3]);
}