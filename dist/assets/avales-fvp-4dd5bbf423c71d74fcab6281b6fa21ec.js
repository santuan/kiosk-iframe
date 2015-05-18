define("avales-fvp/app",["exports","ember","ember/resolver","ember/load-initializers","avales-fvp/config/environment"],function(e,t,a,n,i){"use strict";t["default"].MODEL_FACTORY_INJECTIONS=!0;var r=t["default"].Application.extend({modulePrefix:i["default"].modulePrefix,podModulePrefix:i["default"].podModulePrefix,Resolver:a["default"]});n["default"](r,i["default"].modulePrefix),e["default"]=r}),define("avales-fvp/initializers/app-version",["exports","avales-fvp/config/environment","ember"],function(e,t,a){"use strict";var n=a["default"].String.classify;e["default"]={name:"App Version",initialize:function(e,i){var r=n(i.toString());a["default"].libraries.register(r,t["default"].APP.version)}}}),define("avales-fvp/initializers/export-application-global",["exports","ember","avales-fvp/config/environment"],function(e,t,a){"use strict";function n(e,n){var i=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[i]&&(window[i]=n)}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("avales-fvp/router",["exports","ember","avales-fvp/config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){}),e["default"]=n}),define("avales-fvp/routes/application",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({enter:function(){var e=require("nw.gui");e.Window.get().enterKioskMode()},actions:{close:function(){var e=require("nw.gui");e.Window.get().leaveKioskMode(),e.App.quit()}}})}),define("avales-fvp/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("a");e.setAttribute(a,"class","close-app");var n=e.createTextNode("x");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("iframe");e.setAttribute(a,"src","http://www.juntaelectoral.gba.gov.ar/sistemas/epaos/login.php"),e.setAttribute(a,"frameborder","0"),e.setAttribute(a,"id","avales"),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var n=t.dom,i=t.hooks,r=i.element;n.detectNamespace(a);var o;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(o=this.build(n),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=n.cloneNode(this.cachedFragment,!0))):o=this.build(n);var l=n.childAt(o,[0]);return r(t,l,e,"action",["close"],{}),o}}}())}),define("avales-fvp/views/application",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({didInsertElement:function(){this._super();var e=this;this.$("#avales").load(function(){var t=e.$("#avales").contents();console.log(t),$("button[type=submit]",t).click(function(e){console.log("CLICK LOGIN")}),$('a[onclick="do_grabar();"]',t).addClass("pepe")})}})}),define("avales-fvp/config/environment",["ember"],function(e){var t="avales-fvp";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),i=JSON.parse(unescape(n));return{"default":i}}catch(r){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("avales-fvp/tests/test-helper"):require("avales-fvp/app")["default"].create({name:"avales-fvp",version:"0.0.0."});