export class ImageCanvas extends HTMLElement {
    constructor(file) {
        super();
        console.log(file);
        this._file = file;
        const shadow = this.attachShadow({mode: 'open'});
        this.canvas = shadow.addChild('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = file.size.width;
        this.canvas.height = file.size.height;
        setTimeout(() => this.render(), 2000);
    }

    render() {
        this.renderNode(this._file.tree);
    }

    renderNode(node) {
        var isVisible = (node._node.layer.visible!==false);
        var isMask = node._node.layer.mask && node._node.layer.mask.width > 0;
        var isRenderable = isVisible && !isMask && node.image && node._node.layer.opacity == 255 && !node._node.layer.clipped && node._node.layer.blendMode&&node._node.layer.blendMode.mode == 'normal'
        if (isVisible) {
            if (isRenderable) {
                this.ctx.putImageData(node.image, node.rect.left, node.rect.top);
                console.log(node._node.layer)
                this.ctx.beginPath();
                this.ctx.rect(node.rect.left, node.rect.top, node.rect.width, node.rect.height);
                this.ctx.stroke();
                this.ctx.closePath();
            }

            for (let child of node.children.reverse()) {
                this.renderNode(child);
            }
        }

    }
}

customElements.define('image-canvas', ImageCanvas);