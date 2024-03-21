/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { MementoProtocol } from "./interfaces/mementoProtocol";
import { ImageEditor } from './imageEditor';

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class ImageEditorBackupManager {

    private mementos: MementoProtocol[] = [];
    private readonly imageEditor: ImageEditor;

    public constructor(imageEditor: ImageEditor) {
        this.imageEditor = imageEditor;
    }

    public backup(): void {
        this.mementos.push(this.imageEditor.save());
        console.log(`\nBACKUP: salvo estado de "ImageEditor"`);
    }

    public undo(): void {
        const memento = this.mementos.pop();

        if (!memento) {
            console.log('BACKUP: no "Mementos"');
            return;
        }

        this.imageEditor.restore(memento);
        console.log(`\nBACKUP: ${memento.getName()} foi restaurado com sucesso.`);
    }

    public showMementos(): void {
        for (const memento of this.mementos) {
            console.log(memento);
        }
    }
}