/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { MementoProtocol } from "./interfaces/mementoProtocol";

/* - - - - - - - - - - - - - - - - - - - - class - - - - - - - - - - - - - - - - - - - - */
export class ConcreteMemento implements MementoProtocol {

    private name: string;
    private date: Date;
    private filePath: string;
    private fileFormat: string;

    public constructor(
        name: string,
        date: Date,
        filePath: string,
        fileFormat: string
    ) {
        this.name = name;
        this.date = date;
        this.filePath = filePath;
        this.fileFormat = fileFormat;
    }

    public getName(): string {
        return this.name;
    }

    public getDate(): Date {
        return this.date;
    }

    public getFilePath(): string {
        return this.filePath;
    }

    public getFileFormat(): string {
        return this.fileFormat;
    }
}