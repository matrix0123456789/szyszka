(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{123:function(e,t,i){"use strict";i.r(t),i.d(t,"PsdFile",(function(){return s}));var n=i(34),a=i.n(n);class h{constructor(e){this._node=e,this.name=e.name,this._imageLoaded=!1,this._image=null,this.isVisible=!1!==e.layer.visible}get rect(){return{left:this._node.left,top:this._node.top,width:this._node.width,height:this._node.height}}get children(){return this._children||(this._children=this._node.children().map(e=>new h(e))),this._children}get image(){if(!this._imageLoaded&&(this._imageLoaded=!0,this._node.layer&&this._node.layer.image))try{let e=this._node.layer.image.pixelData,t=new ImageData(this.rect.width,this.rect.height);if(e.length===t.data.length)for(let i=0;i<e.length;i++)t.data[i]=e[i];this._image=t}catch(e){console.error(e)}return this._image}get canDownloadImage(){return Boolean(this.image)}async downloadImage(){let e=document.createElement("canvas");e.width=this.image.width,e.height=this.image.height,e.getContext("2d").putImageData(this.image,0,0);let t=new Promise(t=>e.toBlob(t));document.create("a",{href:URL.createObjectURL(await t),download:this.name+".png"}).click()}get css(){let e=[];e.push({name:"left",value:this._node.left+"px"}),e.push({name:"top",value:this._node.top+"px"});const t=this._node.get("typeTool");return t?t.fonts&&(e.push({name:"font-family",value:t.fonts().join(", ")}),e.push({name:"font-size",value:t.sizes()[0]+"pt"}),e.push({name:"color",value:"rgba("+t.colors()[0].join(", ")+")"}),e.push({name:"text-align",value:t.alignment()[0]})):(e.push({name:"width",value:this._node.width+"px"}),e.push({name:"height",value:this._node.height+"px"})),e}get text(){const e=this._node.get("typeTool");return e&&e.textValue?e.textValue:null}}class s{constructor(e){this.size={width:e.header.width,height:e.header.height},this.tree=new h(e.tree())}static async fromFile(e){const t=a.a.fromDroppedFile(e);return new s(await t)}}},38:function(e,t){},62:function(e,t){},63:function(e,t){}}]);