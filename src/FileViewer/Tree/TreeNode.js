import css from "./TreeNode.scss";

export class TreeNode extends HTMLElement {
    constructor(node) {
        super();
        this.dbg = node;
        const shadow = this.attachShadow({mode: 'open'});
        shadow.addChild('style', {text: css[0][1]});
        shadow.addChild('div.title', {text: node.name}).addChild('.openButton');
        shadow.addChild('slot')
        for (let child of node.children) {
            this.append(new TreeNode(child));
        }
    }
}

customElements.define('tree-node', TreeNode);