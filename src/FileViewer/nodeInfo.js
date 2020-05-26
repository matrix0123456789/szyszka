import css from "./nodeInfo.scss";

export class NodeInfo extends HTMLElement {
    constructor(nodes = []) {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        for (let node of nodes) {
           // shadow.append(JSON.stringify(node._node.export()));
            shadow.addChild('style', {text: css[0][1]});
            console.log(node);
            if(node.text!==null){
                shadow.addChild('.text', {text:node.text});
            }
            shadow.addChild('.css', {
                children: node.css.map(x => ({
                    className: "css-rule",
                    children: [{text: x.name}, {text: ':'}, {text: x.value}, {text: ';'}]
                }))
            })
            if (node.canDownloadImage) {
                let downloadImage = shadow.addChild('button.downloadImage', {text: 'Download'});
                downloadImage.onclick = () => node.downloadImage();
            }
        }
    }
}

customElements.define('node-info', NodeInfo);