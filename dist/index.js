!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-js-modal"]=t():e["vue-js-modal"]=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=3)}([function(e,t){e.exports=function(e,t,i,n){var o,r=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,r=e.default);var s="function"==typeof r?r.options:r;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),i&&(s._scopeId=i),n){var l=s.computed||(s.computed={});Object.keys(n).forEach(function(e){var t=n[e];l[e]=function(){return t}})}return{esModule:o,exports:r,options:s}}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var i=this[t];i[2]?e.push("@media "+i[2]+"{"+i[1]+"}"):e.push(i[1])}return e.join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),e.push(a))}},e}},function(e,t,i){function n(e){for(var t=0;t<e.length;t++){var i=e[t],n=u[i.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](i.parts[o]);for(;o<i.parts.length;o++)n.parts.push(r(i.parts[o]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(r(i.parts[o]));u[i.id]={id:i.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function r(e){var t,i,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(p)return v;n.parentNode.removeChild(n)}if(m){var r=f++;n=h||(h=o()),t=a.bind(null,n,r,!1),i=a.bind(null,n,r,!0)}else n=o(),t=s.bind(null,n),i=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else i()}}function a(e,t,i,n){var o=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function s(e,t){var i=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(i+="\n/*# sourceURL="+o.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=i(24),u={},c=l&&(document.head||document.getElementsByTagName("head")[0]),h=null,f=0,p=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,i){p=i;var o=d(e,t);return n(o),function(t){for(var i=[],r=0;r<o.length;r++){var a=o[r],s=u[a.id];s.refs--,i.push(s)}t?(o=d(e,t),n(o)):o=[];for(var r=0;r<i.length;r++){var s=i[r];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete u[s.id]}}}};var g=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(6),r=n(o),a=i(5),s=n(a),l=i(7),d=n(l),u={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.installed||(this.installed=!0,this.event=new e,this.dynamicContainer=null,this.componentName=t.componentName||"modal",e.prototype.$modal={_setDynamicContainer:function(e){u.dynamicContainer=e},show:function(e,t,i){"string"==typeof e?u.event.$emit("toggle",e,!0,t):null===u.dynamicContainer?console.warn("[vue-js-modal] In order to render dynamic modals, a <modals-container> component must be present on the page"):u.dynamicContainer.add(e,t,i)},hide:function(e,t){u.event.$emit("toggle",e,!1,t)},toggle:function(e,t){u.event.$emit("toggle",e,void 0,t)}},e.component(this.componentName,r.default),t.dialog&&e.component("v-dialog",s.default),t.dynamic&&e.component("modals-container",d.default))}};t.default=u},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.inRange=function(e,t,i){return i<e?e:i>t?t:i};t.default={inRange:n}},function(e,t,i){i(21);var n=i(0)(i(8),i(18),null,null);e.exports=n.exports},function(e,t,i){i(22);var n=i(0)(i(9),i(19),null,null);e.exports=n.exports},function(e,t,i){var n=i(0)(i(10),i(17),null,null);e.exports=n.exports},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"VueJsDialog",props:{width:{type:[Number,String],default:400},clickToClose:{type:Boolean,default:!0},transition:{type:String,default:"fade"}},data:function(){return{params:{},defaultButtons:[{title:"CLOSE"}]}},computed:{buttons:function(){return this.params.buttons||this.defaultButtons},buttonStyle:function(){return{flex:"1 1 "+100/this.buttons.length+"%"}}},methods:{beforeOpened:function(e){window.addEventListener("keyup",this.onKeyUp),this.params=e.params||{},this.$emit("before-opened",e)},beforeClosed:function(e){window.removeEventListener("keyup",this.onKeyUp),this.params={},this.$emit("before-closed",e)},click:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"click",n=this.buttons[e];n&&"function"==typeof n.handler?n.handler(e,t,{source:i}):this.$modal.hide("dialog")},onKeyUp:function(e){if(13===e.which&&this.buttons.length>0){var t=1===this.buttons.length?0:this.buttons.findIndex(function(e){return e.default});-1!==t&&this.click(t,e,"keypress")}}}}},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(3),r=n(o),a=i(16),s=n(a),l=i(4),d=i(12),u=n(d);t.default={name:"VueJsModal",props:{name:{required:!0,type:String},delay:{type:Number,default:0},resizable:{type:Boolean,default:!1},adaptive:{type:Boolean,default:!1},draggable:{type:[Boolean,String],default:!1},scrollable:{type:Boolean,default:!1},reset:{type:Boolean,default:!1},transition:{type:String},clickToClose:{type:Boolean,default:!0},classes:{type:[String,Array],default:"v--modal"},minWidth:{type:Number,default:0,validator:function(e){return e>=0}},minHeight:{type:Number,default:0,validator:function(e){return e>=0}},maxWidth:{type:Number,default:1/0},maxHeight:{type:Number,default:1/0},width:{type:[Number,String],default:600,validator:function(e){if("string"==typeof e){var t=(0,u.default)(e);return("%"===t.type||"px"===t.type)&&t.value>0}return e>=0}},height:{type:[Number,String],default:300,validator:function(e){if("string"==typeof e){if("auto"===e)return!0;var t=(0,u.default)(e);return("%"===t.type||"px"===t.type)&&t.value>0}return e>=0}},pivotX:{type:Number,default:.5,validator:function(e){return e>=0&&e<=1}},pivotY:{type:Number,default:.5,validator:function(e){return e>=0&&e<=1}}},components:{Resizer:s.default},data:function(){return{visible:!1,visibility:{modal:!1,overlay:!1},shift:{left:0,top:0},modal:{width:0,widthType:"px",height:0,heightType:"px",renderedHeight:0},window:{width:0,height:0},mutationObserver:null}},watch:{visible:function(e){var t=this;e?(this.visibility.overlay=!0,setTimeout(function(){t.visibility.modal=!0,t.$nextTick(function(){t.addDraggableListeners(),t.callAfterEvent(!0)})},this.delay)):(this.visibility.modal=!1,setTimeout(function(){t.visibility.overlay=!1,t.$nextTick(function(){t.removeDraggableListeners(),t.callAfterEvent(!1)})},this.delay))}},created:function(){this.setInitialSize()},beforeMount:function(){var e=this;if(r.default.event.$on("toggle",function(t,i,n){t===e.name&&(void 0===i&&(i=!e.visible),e.toggle(i,n))}),window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.scrollable&&!this.isAutoHeight&&console.warn('Modal "'+this.name+'" has scrollable flag set to true but height is not "auto" ('+this.height+")"),this.isAutoHeight){var t=function(){for(var e=["","WebKit","Moz","O","Ms"],t=0;t<e.length;t++){var i=e[t]+"MutationObserver";if(i in window)return window[i]}return!1}();t&&(this.mutationObserver=new t(function(t){e.updateRenderedHeight()}))}this.clickToClose&&window.addEventListener("keyup",this.onEscapeKeyUp)},beforeDestroy:function(){window.removeEventListener("resize",this.onWindowResize),this.clickToClose&&window.removeEventListener("keyup",this.onEscapeKeyUp)},computed:{isAutoHeight:function(){return"auto"===this.modal.heightType},position:function(){var e=this.window,t=this.shift,i=this.pivotX,n=this.pivotY,o=this.trueModalWidth,r=this.trueModalHeight,a=e.width-o,s=e.height-r,d=t.left+i*a,u=t.top+n*s;return{left:(0,l.inRange)(0,a,d),top:(0,l.inRange)(0,s,u)}},trueModalWidth:function(){var e=this.window,t=this.modal,i=this.adaptive,n=this.minWidth,o=this.maxWidth,r="%"===t.widthType?e.width/100*t.width:t.width,a=Math.min(e.width,o);return i?(0,l.inRange)(n,a,r):r},trueModalHeight:function(){var e=this.window,t=this.modal,i=this.isAutoHeight,n=this.adaptive,o=this.maxHeight,r="%"===t.heightType?e.height/100*t.height:t.height;if(i)return this.modal.renderedHeight;var a=Math.min(e.height,o);return n?(0,l.inRange)(this.minHeight,a,r):r},overlayClass:function(){return{"v--modal-overlay":!0,scrollable:this.scrollable&&this.isAutoHeight}},modalClass:function(){return["v--modal-box",this.classes]},modalStyle:function(){return{top:this.position.top+"px",left:this.position.left+"px",width:this.trueModalWidth+"px",height:this.isAutoHeight?"auto":this.trueModalHeight+"px"}}},methods:{setInitialSize:function(){var e=this.modal,t=(0,u.default)(this.width),i=(0,u.default)(this.height);e.width=t.value,e.widthType=t.type,e.height=i.value,e.heightType=i.type},onEscapeKeyUp:function(e){27===e.which&&this.visible&&this.$modal.hide(this.name)},onWindowResize:function(){this.window.width=window.innerWidth,this.window.height=window.innerHeight},genEventObject:function(e){var t={name:this.name,timestamp:Date.now(),canceled:!1,ref:this.$refs.modal};return Object.assign(t,e||{})},onModalResize:function(e){this.modal.widthType="px",this.modal.width=e.size.width,this.modal.heightType="px",this.modal.height=e.size.height;var t=this.modal.size,i=this.genEventObject({size:t});this.$emit("resize",i)},toggle:function(e,t){var i=this.reset,n=this.scrollable,o=this.visible;if(o!==e){var r=o?"before-close":"before-open";"before-open"===r?(document.activeElement&&document.activeElement.blur(),i&&(this.setInitialSize(),this.shift.left=0,this.shift.top=0),n&&document.body.classList.add("v--modal-block-scroll")):n&&document.body.classList.remove("v--modal-block-scroll");var a=!1,s=function(){a=!0},l=this.genEventObject({stop:s,state:e,params:t});this.$emit(r,l),a||(this.visible=e)}},getDraggableElement:function(){var e="string"!=typeof this.draggable?".v--modal-box":this.draggable;if(e){var t=this.$refs.overlay.querySelector(e);if(t)return t}},onBackgroundClick:function(){this.clickToClose&&this.toggle(!1)},addDraggableListeners:function(){var e=this;if(this.draggable){var t=this.getDraggableElement();if(t){var i=0,n=0,o=0,r=0,a=function(e){return e.touches&&e.touches.length>0?e.touches[0]:e},s=function(t){var s=t.target;if(!s||"INPUT"!==s.nodeName){var u=a(t),c=u.clientX,h=u.clientY;document.addEventListener("mousemove",l),document.addEventListener("mouseup",d),document.addEventListener("touchmove",l),document.addEventListener("touchend",d),i=c,n=h,o=e.shift.left,r=e.shift.top}},l=function(t){var s=a(t),l=s.clientX,d=s.clientY;e.shift.left=o+l-i,e.shift.top=r+d-n,t.preventDefault()},d=function e(t){document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",e),document.removeEventListener("touchmove",l),document.removeEventListener("touchend",e),t.preventDefault()};t.addEventListener("mousedown",s),t.addEventListener("touchstart",s)}}},removeDraggableListeners:function(){},callAfterEvent:function(e){e?this.connectObserver():this.disconnectObserver();var t=e?"opened":"closed",i=this.genEventObject({state:e});this.$emit(t,i)},updateRenderedHeight:function(){this.$refs.modal&&(this.modal.renderedHeight=this.$refs.modal.getBoundingClientRect().height)},connectObserver:function(){this.mutationObserver&&this.mutationObserver.observe(this.$refs.modal,{childList:!0,attributes:!0,subtree:!0})},disconnectObserver:function(){this.mutationObserver&&this.mutationObserver.disconnect()}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{uid:0,modals:[]}},created:function(){this.$modal._setDynamicContainer(this)},methods:{add:function(e,t,i){var n=this,o=this.uid++;i=i?Object.assign({},i):{},i.name||(i.name="_dynamic-modal-"+o),this.modals.push({id:o,component:e,params:t||{},config:i}),this.$nextTick(function(){n.$modal.show(i.name)})},remove:function(e){for(var t in this.modals)if(this.modals[t].id===e)return void this.modals.splice(t,1)}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(4);t.default={name:"VueJsModalResizer",props:{minHeight:{type:Number,default:0},minWidth:{type:Number,default:0}},data:function(){return{clicked:!1,size:{}}},mounted:function(){this.$el.addEventListener("mousedown",this.start,!1)},computed:{className:function(){return{"vue-modal-resizer":!0,clicked:this.clicked}}},methods:{start:function(e){this.clicked=!0,window.addEventListener("mousemove",this.mousemove,!1),window.addEventListener("mouseup",this.stop,!1),e.stopPropagation(),e.preventDefault()},stop:function(){this.clicked=!1,window.removeEventListener("mousemove",this.mousemove,!1),window.removeEventListener("mouseup",this.stop,!1),this.$emit("resize-stop",{element:this.$el.parentElement,size:this.size})},mousemove:function(e){this.resize(e)},resize:function(e){var t=this.$el.parentElement;if(t){var i=e.clientX-t.offsetLeft,o=e.clientY-t.offsetTop;i=(0,n.inRange)(this.minWidth,window.innerWidth,i),o=(0,n.inRange)(this.minHeight,window.innerHeight,o),this.size={width:i,height:o},t.style.width=i+"px",t.style.height=o+"px",this.$emit("resize",{element:t,size:this.size})}}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=[{name:"px",regexp:new RegExp("^[-+]?[0-9]*.?[0-9]+px$")},{name:"%",regexp:new RegExp("^[-+]?[0-9]*.?[0-9]+%$")},{name:"px",regexp:new RegExp("^[-+]?[0-9]*.?[0-9]+$")}],r=function(e){if("auto"===e)return{type:e,value:0};for(var t=0;t<o.length;t++){var i=o[t];if(i.regexp.test(e))return{type:i.name,value:parseFloat(e)}}return{type:"",value:e}},a=t.parse=function(e){switch(void 0===e?"undefined":n(e)){case"number":return{type:"px",value:e};case"string":return r(e);default:return{type:"",value:e}}};t.default=a},function(e,t,i){t=e.exports=i(1)(),t.push([e.i,".vue-dialog div{box-sizing:border-box}.vue-dialog .dialog-flex{width:100%;height:100%}.vue-dialog .dialog-content{flex:1 0 auto;width:100%;padding:15px;font-size:14px}.vue-dialog .dialog-c-title{font-weight:600;padding-bottom:15px}.vue-dialog .vue-dialog-buttons{display:flex;flex:0 1 auto;width:100%;border-top:1px solid #eee}.vue-dialog .vue-dialog-buttons-none{width:100%;padding-bottom:15px}.vue-dialog-button{font-size:12px!important;background:transparent;padding:0;margin:0;border:0;cursor:pointer;box-sizing:border-box;line-height:40px;height:40px;color:inherit;font:inherit;outline:none}.vue-dialog-button:hover{background:rgba(0,0,0,.01)}.vue-dialog-button:active{background:rgba(0,0,0,.025)}.vue-dialog-button:not(:first-of-type){border-left:1px solid #eee}",""])},function(e,t,i){t=e.exports=i(1)(),t.push([e.i,".v--modal-block-scroll{position:absolute;overflow:hidden;width:100vw}.v--modal-overlay{position:fixed;box-sizing:border-box;left:0;top:0;width:100%;height:100vh;background:rgba(0,0,0,.2);z-index:999;opacity:1}.v--modal-overlay.scrollable{height:100%;min-height:100vh;overflow-y:auto;padding-bottom:10px;-webkit-overflow-scrolling:touch}.v--modal-overlay .v--modal-box{position:relative;overflow:hidden;box-sizing:border-box}.v--modal-overlay.scrollable .v--modal-box{margin-bottom:2px}.v--modal{background-color:#fff;text-align:left;border-radius:3px;box-shadow:0 20px 60px -2px rgba(27,33,58,.4);padding:0}.v--modal.v--modal-fullscreen{width:100vw;height:100vh;margin:0;left:0;top:0}.v--modal-top-right{display:block;position:absolute;right:0;top:0}.overlay-fade-enter-active,.overlay-fade-leave-active{transition:all .2s}.overlay-fade-enter,.overlay-fade-leave-active{opacity:0}.nice-modal-fade-enter-active,.nice-modal-fade-leave-active{transition:all .4s}.nice-modal-fade-enter,.nice-modal-fade-leave-active{opacity:0;transform:translateY(-20px)}",""])},function(e,t,i){t=e.exports=i(1)(),t.push([e.i,'.vue-modal-resizer{overflow:hidden;width:12px;height:12px;right:0;bottom:0;z-index:9999999;cursor:se-resize}.vue-modal-resizer,.vue-modal-resizer:after{display:block;position:absolute;background:transparent}.vue-modal-resizer:after{content:"";left:0;top:0;width:0;height:0;border-bottom:10px solid #ddd;border-left:10px solid transparent}.vue-modal-resizer.clicked:after{border-bottom:10px solid #369be9}',""])},function(e,t,i){i(23);var n=i(0)(i(11),i(20),null,null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"#modals-container"}},e._l(e.modals,function(t){return i("modal",e._b({key:t.id,on:{closed:function(i){return e.remove(t.id)}}},"modal",t.config,!1),[i(t.component,e._b({tag:"component",on:{close:function(i){return e.$modal.hide(t.config.name)}}},"component",t.params,!1))],1)}),1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("modal",{attrs:{name:"dialog",height:"auto",classes:["v--modal","vue-dialog",this.params.class],width:e.width,"pivot-y":.3,adaptive:!0,clickToClose:e.clickToClose,transition:e.transition},on:{"before-open":e.beforeOpened,"before-close":e.beforeClosed,opened:function(t){return e.$emit("opened",t)},closed:function(t){return e.$emit("closed",t)}}},[i("div",{staticClass:"dialog-content"},[e.params.title?i("div",{staticClass:"dialog-c-title",domProps:{innerHTML:e._s(e.params.title||"")}}):e._e(),e._v(" "),i("div",{staticClass:"dialog-c-text",domProps:{innerHTML:e._s(e.params.text||"")}})]),e._v(" "),e.buttons?i("div",{staticClass:"vue-dialog-buttons"},e._l(e.buttons,function(t,n){return i("button",{key:n,class:t.class||"vue-dialog-button",style:e.buttonStyle,attrs:{type:"button"},domProps:{innerHTML:e._s(t.title)},on:{click:function(t){return t.stopPropagation(),e.click(n,t)}}},[e._v("\n      "+e._s(t.title)+"\n    ")])}),0):i("div",{staticClass:"vue-dialog-buttons-none"})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{name:"overlay-fade"}},[e.visibility.overlay?i("div",{ref:"overlay",class:e.overlayClass,attrs:{"aria-expanded":e.visible.toString(),"data-modal":e.name},on:{mousedown:function(t){return t.stopPropagation(),e.onBackgroundClick(t)},touchstart:function(t){return t.stopPropagation(),e.onBackgroundClick(t)}}},[i("div",{staticClass:"v--modal-top-right"},[e._t("top-right")],2),e._v(" "),i("transition",{attrs:{name:e.transition}},[e.visibility.modal?i("div",{ref:"modal",class:e.modalClass,style:e.modalStyle,on:{mousedown:function(e){e.stopPropagation()},touchstart:function(e){e.stopPropagation()}}},[e._t("default"),e._v(" "),e.resizable&&!e.isAutoHeight?i("resizer",{attrs:{"min-width":e.minWidth,"min-height":e.minHeight},on:{resize:e.onModalResize}}):e._e()],2):e._e()])],1):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.className})},staticRenderFns:[]}},function(e,t,i){var n=i(13);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals),i(2)("12d282fb",n,!0)},function(e,t,i){var n=i(14);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals),i(2)("628d147b",n,!0)},function(e,t,i){var n=i(15);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals),i(2)("7054fa02",n,!0)},function(e,t){e.exports=function(e,t){for(var i=[],n={},o=0;o<t.length;o++){var r=t[o],a=r[0],s=r[1],l=r[2],d=r[3],u={id:e+":"+o,css:s,media:l,sourceMap:d};n[a]?n[a].parts.push(u):i.push(n[a]={id:a,parts:[u]})}return i}}])});