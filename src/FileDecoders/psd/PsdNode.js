export class PsdNode {
    constructor(node) {
        this._node = node;
        this.name = node.name;
        this._imageLoaded = false;
        this._image = null;
    }

    get rect() {
        return {
            left: this._node.left,
            top: this._node.top,
            width: this._node.width,
            height: this._node.height
        }
    }

    get children() {
        if (!this._children) {
            this._children = this._node.children().map(x => new PsdNode(x));
        }
        return this._children;
    }

    get image() {
        if (!this._imageLoaded) {
            this._imageLoaded = true;

            if (this._node.layer && this._node.layer.image) {
                try {
                    var pixelData=this._node.layer.image.pixelData;
                    var imageData = new ImageData(this.rect.width, this.rect.height)
                    if (pixelData.length === imageData.data.length) {
                        for (let i = 0; i < pixelData.length; i++) {
                            imageData.data[i] = pixelData[i];
                        }
                    }
                    this._image = imageData;
                } catch (ex) {
                    console.error(ex);
                }
            }
        }
        return this._image;
    }
}