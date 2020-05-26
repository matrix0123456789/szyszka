import css from "./nodeInfo.scss";

export class NodeInfo extends HTMLElement {
    constructor(nodes = []) {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        for (let node of nodes) {
            shadow.append(JSON.stringify(node._node.export()));
            shadow.addChild('style', {text: css[0][1]});
            console.log(node);
            if (node.canDownloadImage) {
                let downlaodImage = shadow.addChild('button.downloadImage', {text: 'Download'});
                downlaodImage.onclick = () => node.downloadImage();
            }
        }
    }
}

customElements.define('node-info', NodeInfo);