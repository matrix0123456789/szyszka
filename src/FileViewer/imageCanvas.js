export class ImageCanvas extends HTMLElement {
    constructor(file) {
        super();
        this.selected = [];
        this.hover = [];
        this._file = file;
        this._allNodes = this.getAllNodes(this._file.tree);
        const shadow = this.attachShadow({mode: 'open'});
        this.canvas = shadow.addChild('canvas');
        this._imageCanvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d');
        this._imageCtx = this._imageCanvas.getContext('2d');
        this._imageCanvas.width = this.canvas.width = file.size.width;
        this._imageCanvas.height = this.canvas.height = file.size.height;
        this.canvas.onclick = e => {
            let clicked = this.findNodeOfPoint({x: e.clientX, y: e.clientY});
            if (clicked) {
                this.dispatchEvent(new CustomEvent('selected', {bubbles: true, detail: [clicked]}))
            }
        }
        this.canvas.onmousemove = e => {
            let hovered = this.findNodeOfPoint({x: e.clientX, y: e.clientY});
            if (hovered) {
                this.dispatchEvent(new CustomEvent('hover', {bubbles: true, detail: [hovered]}))
            }
        }
        setTimeout(() => this.render(true), 2000);
    }

    getAllNodes(node) {
        let ret = (node.children || []).flatMap(x => this.getAllNodes(x));
        ret.push(node);
        return ret;
    }

    render(fullRender = false) {
        if (fullRender) {
            this.renderNodeImage(this._file.tree);
            this._imageCtx.clearRect(0, 0, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY)
        }

        this.ctx.clearRect(0, 0, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY)
        this.ctx.drawImage(this._imageCanvas, 0, 0)
        this.renderNodeHelper(this._file.tree);
    }

    renderNodeImage(node) {
        const isVisible = node.isVisible;
        const isMask = node._node.layer.mask && node._node.layer.mask.width > 0;
        const isRenderable = isVisible && !isMask && node.image && node._node.layer.opacity == 255 && node._node.layer.blendMode && node._node.layer.blendMode.mode == 'normal'
        if (node._node.layer.clipped)
            console.log('clipped', node);

        if (isVisible) {
            if (isRenderable) {
                const tmpCanvas = document.createElement('canvas');
                tmpCanvas.width = node.rect.width;
                tmpCanvas.height = node.rect.height;
                tmpCanvas.getContext('2d').putImageData(node.image, 0, 0);
                const clippingMask = node._node.clippingMask();
                if (clippingMask) {
                    let clippedRect = {
                        left: Math.max(clippingMask.left, node._node.left),
                        top: Math.max(clippingMask.top, node._node.top),
                        bottom: Math.min(clippingMask.bottom, node._node.bottom),
                        right: Math.min(clippingMask.right, node._node.right)
                    }
                    this._imageCtx.drawImage(tmpCanvas, clippedRect.left-node.rect.left, clippedRect.top-node.rect.top, clippedRect.right-clippedRect.left, clippedRect.bottom-clippedRect.top, clippedRect.left, clippedRect.top, clippedRect.right-clippedRect.left, clippedRect.bottom-clippedRect.top);
                } else {
                    this._imageCtx.drawImage(tmpCanvas, node.rect.left, node.rect.top);
                }
            }

            for (let child of Array.from(node.children).reverse()) {
                this.renderNodeImage(child);
            }
        }
    }

    renderNodeHelper(node) {
        if (this.selected.includes(node)) {
            this.ctx.beginPath();
            this.ctx.rect(node.rect.left, node.rect.top, node.rect.width, node.rect.height);
            this.ctx.stroke();
            this.ctx.strokeStyle = "#444";
            this.ctx.closePath();
        }
        if (this.hover.includes(node)) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = "#44d";
            this.ctx.rect(node.rect.left, node.rect.top, node.rect.width, node.rect.height);
            this.ctx.stroke();
            this.ctx.closePath();
        }

        for (let child of Array.from(node.children).reverse()) {
            this.renderNodeHelper(child);
        }
    }

    findNodeOfPoint(point) {
        return this.findNodeOfPointByNode(point, this._file.tree);
    }

    findNodeOfPointByNode(point, node) {
        if (!node.isVisible) return null;
        for (let child of node.children) {
            let result = this.findNodeOfPointByNode(point, child);
            if (result)
                return result;
        }
        if (node.isVisible && point.x >= node.rect.left && point.x <= node.rect.left + node.rect.width && point.y >= node.rect.top && point.y <= node.rect.top + node.rect.height)
            return node;
        else
            return null;
    }
}

customElements.define('image-canvas', ImageCanvas);