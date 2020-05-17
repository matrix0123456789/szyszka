import css from "./TreeNode.scss";

export class TreeNode extends HTMLElement {
    constructor(node) {
        super();
        this.node = node;
        const shadow = this.attachShadow({mode: 'open'});
        shadow.addChild('style', {text: css[0][1]});
        let title = shadow.addChild('div.title');
        title.onclick = () => {
            this.dispatchEvent(new CustomEvent('selected', {bubbles: true}))
        }
        title.addChild('.openButton');
        title.append(node.name);
        shadow.addChild('slot')
        for (let child of node.children) {
            this.append(new TreeNode(child));
        }
    }
}

customElements.define('tree-node', TreeNode);