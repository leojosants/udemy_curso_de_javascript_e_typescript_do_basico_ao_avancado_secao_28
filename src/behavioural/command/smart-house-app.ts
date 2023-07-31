import { SmartHouseCommandProtocol } from "./interface/smart-house-command-protocol";

export class SmartHouseApp {
    private comands: { [k: string]: SmartHouseCommandProtocol } = {};
    addCommand(key: string, comand: SmartHouseCommandProtocol): void { this.comands[key] = comand; };
    executeComand(key: string): void { this.comands[key].execute(); }
    undoComand(key: string): void { this.comands[key].undo(); }
}