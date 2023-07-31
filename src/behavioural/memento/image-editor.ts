import { ConcreteMemento } from "./concrete-memento";
import { MementoProtocol } from "./interface/memento-protocol";

// Originator
export class ImageEditor {
    constructor(
        private filePath: string,
        private fileFormat: string,
    ) { }

    convertFormatTo(format: string): void {
        this.fileFormat = format;
        this.filePath = this.filePath.split('.').slice(0, -1).join('');
        this.filePath += '.' + format;
        console.log(`Arquivo convertido para '${format}' com sucesso!`);
    }

    save(): Readonly<MementoProtocol> {
        const date = new Date();
        return new ConcreteMemento(date.toString(), date, this.filePath, this.fileFormat);
    }

    restore(memento: MementoProtocol): void {
        const concreteMemento = memento as ConcreteMemento;
        this.filePath = concreteMemento.getFilePath();
        this.fileFormat = concreteMemento.getFileFormat();
    }
}