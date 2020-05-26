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
                    var pixelData = this._node.layer.image.pixelData;
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

    get canDownloadImage() {
        return Boolean(this.image);
    }

    async downloadImage() {
        let canvas = document.createElement('canvas');
        canvas.width = this.image.width;
        canvas.height = this.image.height;
        canvas.getContext('2d').putImageData(this.image, 0, 0);
        let blob = new Promise(resolve => canvas.toBlob(resolve))
        document.create('a', {href: URL.createObjectURL(await blob), download: this.name + '.png'}).click();
    }

    get css() {
        let ret = [];
        ret.push({name: 'left', value: this._node.left + 'px'});
        ret.push({name: 'top', value: this._node.top + 'px'});
        const typeTool = this._node.get('typeTool');
        if (typeTool) {
            if (typeTool.fonts) {
                ret.push({name: 'font-family', value: typeTool.fonts().join(', ')});
                ret.push({name: 'font-size', value: (typeTool.sizes()[0]) + "pt"});
                ret.push({name: 'color', value: "rgba(" + (typeTool.colors()[0].join(', ')) + ")"});
                ret.push({name: 'text-align', value: typeTool.alignment()[0]});
            }
        } else {
            ret.push({name: 'width', value: this._node.width + 'px'});
            ret.push({name: 'height', value: this._node.height + 'px'});
        }
        return ret;
    }

    get text() {
        const typeTool = this._node.get('typeTool');
        if (typeTool && typeTool.textValue)
            return typeTool.textValue;
        else
            return null;
    }
}