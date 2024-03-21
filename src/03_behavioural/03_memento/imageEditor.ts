/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { ConcreteMemento } from "./concreteMemento";
import { MementoProtocol } from "./interfaces/mementoProtocol";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class ImageEditor {

    private filePath: string;
    private fileFormat: string;

    public constructor(filePath: string, fileFormat: string) {
        this.filePath = filePath;
        this.fileFormat = fileFormat;
    }

    public convertFormatTo(format: string): void {
        this.fileFormat = format;
        this.filePath = this.filePath.split('.').slice(0, -1).join('');
        this.filePath += '.' + format;
        console.log('\nConversão realizada.');
    }

    public save(): Readonly<MementoProtocol> {
        const date = new Date();
        return new ConcreteMemento(
            date.toISOString(), date, this.filePath, this.fileFormat
        );
    }

    public restore(memento: MementoProtocol): void {
        const concreteMemento = memento as ConcreteMemento;
        this.filePath = concreteMemento.getFilePath();
        this.fileFormat = concreteMemento.getFileFormat();
    }
}
