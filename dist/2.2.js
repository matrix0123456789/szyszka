(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{121:function(n,e,t){"use strict";t.r(e),t.d(e,"PsdFile",(function(){return c}));var i=t(32),r=t.n(i);class s{constructor(n){this._node=n,this.name=n.name}get children(){return this._children||(this._children=this._node.children().map(n=>new s(n))),this._children}}class c{constructor(n){this.tree=new s(n.tree()),console.log(this.tree)}static async fromFile(n){const e=r.a.fromDroppedFile(n);return new c(await e)}}},36:function(n,e){},60:function(n,e){},61:function(n,e){}}]);