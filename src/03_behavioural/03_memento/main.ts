/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { ImageEditor } from "./imageEditor";
import { ImageEditorBackupManager } from './imageEditorBackupManager';

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

console.log();
console.log('Estado atual:', imageEditor);

backupManager.backup();

imageEditor.convertFormatTo('jpg');

console.log();
console.log('Estado atual:', imageEditor);

backupManager.undo();

console.log();
console.log('Estado atual:', imageEditor);