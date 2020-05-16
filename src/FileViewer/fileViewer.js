import css from "./fileViewer.scss";
import {TreeNode} from "./Tree/TreeNode";
import {ImageCanvas} from "./imageCanvas";

console.log(css[0][1])

export class FileViewer extends HTMLElement {
    constructor(file) {
        super();
        this.dbg = file;
        const shadow = this.attachShadow({mode: 'open'});
        shadow.addChild('style', {text: css[0][1]});
        this.mainView = shadow.addChild('section.mainView');
        this.mainView.append(new ImageCanvas(file));
        const aside = shadow.addChild('aside');
        this.elementsTree = aside.addChild('section.elementsTree');
        this.elementsTree.append(new TreeNode(file.tree))
    }

    set file(value) {
        console.log({value});

    }
}

customElements.define('file-viewer', FileViewer);