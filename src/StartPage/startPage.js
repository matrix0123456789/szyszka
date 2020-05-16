import css from "./startPage.scss";

export class StartPage extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.addChild('style', {text: css[0][1]});
        shadow.addChild("h1", {text: "Gruszka"});
        const openButton = shadow.addChild('button', {text: 'open'});
        openButton.onclick = this.openFileDialog.bind(this);

        this.addEventListener('dragover', this.onDragOver, true);
        this.addEventListener('drop', this.onDrop, true);
    }

    openFileDialog() {
        const fileInput = document.create('input', {type: 'file', accept: '.psd'});
        fileInput.addEventListener('change', e => this.dispatchEvent(new CustomEvent('selectfile', {detail: fileInput.files[0]})))
        fileInput.click();
    }

    onDragOver(e) {
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    }

    onDrop(e) {
        e.stopPropagation();
        e.preventDefault();
        this.dispatchEvent(new CustomEvent('selectfile', {detail: e}))
    }
}

customElements.define('start-page', StartPage);