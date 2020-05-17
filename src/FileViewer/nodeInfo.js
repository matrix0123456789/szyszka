export class NodeInfo extends HTMLElement {
    constructor(nodes = []) {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        for (let node of nodes) {
            shadow.append(JSON.stringify(node._node.export()));
        }
    }
}

customElements.define('node-info', NodeInfo);