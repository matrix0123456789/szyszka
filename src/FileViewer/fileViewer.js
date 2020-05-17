import css from "./fileViewer.scss";
import {TreeNode} from "./Tree/TreeNode";
import {ImageCanvas} from "./imageCanvas";

console.log(css[0][1])

export class FileViewer extends HTMLElement {
    constructor(file) {
        super();
        this.selected = [];
        this.dbg = file;
        const shadow = this.attachShadow({mode: 'open'});
        shadow.addChild('style', {text: css[0][1]});
        this.mainView = shadow.addChild('section.mainView');
        this.imageCanvas = new ImageCanvas(file);
        this.mainView.append(this.imageCanvas);
        const aside = shadow.addChild('aside');
        this.elementsTree = aside.addChild('section.elementsTree');
        this.elementsTree.append(new TreeNode(file.tree))
        shadow.addEventListener('selected', e => {
            this.selected = [e.target];
            this.imageCanvas.selected = this.selected.map(x => x.node);
            this.imageCanvas.render();
        })
    }

    set file(value) {
        console.log({value});
    }
}

customElements.define('file-viewer', FileViewer);