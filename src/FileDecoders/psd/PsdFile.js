import PSD from "psd-webpack"
import {PsdNode} from "./PsdNode";

export class PsdFile {
    constructor(parsedFile) {
        this.size = {width: parsedFile.header.width, height: parsedFile.header.height}
        this.tree = new PsdNode(parsedFile.tree());
        console.log(this.tree);
    }

    static async fromFile(file) {
        const filePromise = PSD.fromDroppedFile(file);
        return new PsdFile(await filePromise)
    }
}