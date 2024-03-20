/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { SmartHouseCommandProtocol } from "./interfaces/smartHouseCommandProtocol";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class SmartHouseApp {

    private commands: { [key: string]: SmartHouseCommandProtocol } = {};

    public addCommand(key: string, command: SmartHouseCommandProtocol): void {
        this.commands[key] = command;
    }

    public executeCommand(key: string): void {
        this.commands[key].execute();
    }

    public undoCommand(key: string): void {
        this.commands[key].undo();
    }
}