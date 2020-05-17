export class ImageCanvas extends HTMLElement {
    constructor(file) {
        super();
        this.selected = [];
        console.log(file);
        this._file = file;
        this._allNodes = this.getAllNodes(this._file.tree);
        const shadow = this.attachShadow({mode: 'open'});
        this.canvas = shadow.addChild('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = file.size.width;
        this.canvas.height = file.size.height;
        this.canvas.onclick = e => {
            let clicked = this.findNodeOfPoint({x: e.clientX, y: e.clientY});
            if (clicked) {
                this.selected = [clicked];
                this.render();
            }
        }
        setTimeout(() => this.render(), 2000);
    }

    getAllNodes(node) {
        let ret = (node.children || []).flatMap(x => this.getAllNodes(x));
        ret.push(node);
        return ret;
    }

    render() {
        this.renderNode(this._file.tree);
    }

    renderNode(node) {
        const isVisible = (node._node.layer.visible !== false);
        const isMask = node._node.layer.mask && node._node.layer.mask.width > 0;
        const isRenderable = isVisible && !isMask && node.image && node._node.layer.opacity == 255 && !node._node.layer.clipped && node._node.layer.blendMode && node._node.layer.blendMode.mode == 'normal'
        if (isVisible) {
            if (isRenderable) {
                const tmpCanvas = document.createElement('canvas');
                tmpCanvas.width = node.rect.width;
                tmpCanvas.height = node.rect.height;
                tmpCanvas.getContext('2d').putImageData(node.image, 0, 0);
                this.ctx.drawImage(tmpCanvas, node.rect.left, node.rect.top);
                console.log(node._node.layer)
                if (this.selected.includes(node)) {
                    this.ctx.beginPath();
                    this.ctx.rect(node.rect.left, node.rect.top, node.rect.width, node.rect.height);
                    this.ctx.stroke();
                    this.ctx.closePath();
                }
            }

            for (let child of Array.from(node.children).reverse()) {
                this.renderNode(child);
            }
        }
    }

    findNodeOfPoint(point) {
        for (let node of this._allNodes) {
            if (point.x >= node.rect.left && point.x <= node.rect.left + node.rect.width && point.y >= node.rect.top && point.y <= node.rect.top + node.rect.height)
                return node;
        }
        return null;
    }
}

customElements.define('image-canvas', ImageCanvas);