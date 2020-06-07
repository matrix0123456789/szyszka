import css from "./mainLayout.scss"
import {eventDecoratedFactory, fileDecoratedFactory} from "../FileDecoders/fileDecoratedFactory";
import {FileViewer} from "../FileViewer/fileViewer";

export class MainLayout extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.addChild('style', {text: css[0][1]});
        const startPage = shadow.addChild('start-page');
        startPage.addEventListener('selectfile', async e => {
            let file;
            if (e.detail instanceof File)
                file = await fileDecoratedFactory(e.detail);
            else
                file = await eventDecoratedFactory(e.detail);

            startPage.remove();
            shadow.append(new FileViewer(file))
        });
    }
}

customElements.define('main-layout', MainLayout);