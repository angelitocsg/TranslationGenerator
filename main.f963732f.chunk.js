(window["webpackJsonptranslation-generator"]=window["webpackJsonptranslation-generator"]||[]).push([[0],{20:function(e,a,t){e.exports=t(30)},30:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(10),l=t.n(r),c=t(3),d=t(2),s=t(11),i=t(12),u=t(16),m=t(13),p=t(1),g=t(17),h=t(4),f=t(5);function b(){var e=Object(h.a)(["\n  background: #333;\n"]);return b=function(){return e},e}function E(){var e=Object(h.a)(["\n  padding-bottom: 2px;\n  font-weight: bold;\n"]);return E=function(){return e},e}function w(){var e=Object(h.a)([""]);return w=function(){return e},e}function v(){var e=Object(h.a)([""]);return v=function(){return e},e}var y=f.a.div(v()),N=f.a.h1(w()),C=f.a.div(E()),O=f.a.div(b()),j=localStorage.getItem("lang"),x=void 0!==j&&null!==j?JSON.parse(j):[{id:1,tag:"Enter",grp:"Buttons",en:"Enter",pt:"Entrar",es:"Entrar"}];function k(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function S(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?k(t,!0).forEach(function(a){Object(d.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var _=function(e){return"text/json;charset=utf-8,"+encodeURIComponent(e)},I=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).handleSave=function(){document.getElementById("files_download").style.display="inherit";var e=t.state.language.sort(function(e,a){return e.grp+e.tag<a.grp+a.tag?-1:1}),a="const locale = ".concat(JSON.stringify(e.reduce(function(e,a){return S({},e,Object(d.a)({},a.tag,a.pt))},{}),null,2),"; \nexport default locale;"),n="const locale = ".concat(JSON.stringify(e.reduce(function(e,a){return S({},e,Object(d.a)({},a.tag,a.en))},{}),null,2),"; \nexport default locale;"),o="const locale = ".concat(JSON.stringify(e.reduce(function(e,a){return S({},e,Object(d.a)({},a.tag,a.es))},{}),null,2),"; \nexport default locale;"),r="".concat(e.reduce(function(e,a){return"".concat(e).concat(a.tag,"\t").concat(a.pt,"\t").concat(a.grp,"\n")},"")),l="".concat(e.reduce(function(e,a){return"".concat(e).concat(a.tag,"\t").concat(a.en,"\t").concat(a.grp,"\n")},"")),c="".concat(e.reduce(function(e,a){return"".concat(e).concat(a.tag,"\t").concat(a.es,"\t").concat(a.grp,"\n")},""));document.getElementById("download_default").href="data:"+_(JSON.stringify(e)),document.getElementById("download_pt").href="data:"+_(a),document.getElementById("download_en").href="data:"+_(n),document.getElementById("download_es").href="data:"+_(o),document.getElementById("download_pt_csharp").href="data:"+_(r),document.getElementById("download_en_csharp").href="data:"+_(l),document.getElementById("download_es_csharp").href="data:"+_(c),localStorage.setItem("lang",JSON.stringify(t.state.language))},t.state={uploadData:"",language:Object(c.a)(x.sort(function(e,a){return e.grp+e.tag<a.grp+a.tag?-1:1}))},t.handleInputChange=t.handleInputChange.bind(Object(p.a)(t)),t.handleAddTag=t.handleAddTag.bind(Object(p.a)(t)),t.handleUpload=t.handleUpload.bind(Object(p.a)(t)),t.handleTextareaChange=t.handleTextareaChange.bind(Object(p.a)(t)),t.handleSave=t.handleSave.bind(Object(p.a)(t)),t.handleCreateClick=t.handleCreateClick.bind(Object(p.a)(t)),t.handleNewClick=t.handleNewClick.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(i.a)(a,[{key:"handleInputChange",value:function(e,a){this.setState(S({},this.state,{language:Object(c.a)(this.state.language.map(function(t){return t.tag===e?S({},t,Object(d.a)({},a.target.name,a.target.value)):t}))}))}},{key:"handleAddTag",value:function(){var e=Math.floor(1e4*Math.random());this.setState(S({},this.state,{language:[].concat(Object(c.a)(this.state.language),[{id:e,tag:"new_"+e,grp:"",pt:"",en:"",es:""}])}))}},{key:"handleUpload",value:function(){this.setState(S({},this.state,{language:JSON.parse(this.state.uploadData),uploadData:""}))}},{key:"handleTextareaChange",value:function(e){this.setState(S({},this.state,{uploadData:e.target.value}))}},{key:"handleCreateClick",value:function(e){if(""!==e.en&&void 0!==e.en){var a=window.prepareWords(e.en.split(" "));this.setState(S({},this.state,{language:Object(c.a)(this.state.language.map(function(t){return t.id===e.id?S({},t,{tag:a}):t}))}))}}},{key:"handleNewClick",value:function(){localStorage.clear(),this.setState(S({},this.state,{language:Object(c.a)(x)}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.language,n=a.uploadData;return o.a.createElement(y,{id:"container",className:"container"},o.a.createElement(N,null,"Translation Generator"),o.a.createElement("div",{className:"btn-group"},o.a.createElement("button",{type:"button",className:"btn btn-xs btn-info",onClick:function(){return e.handleNewClick()}},"New"),o.a.createElement("button",{type:"button",className:"btn btn-xs btn-success",onClick:function(){return e.handleSave()}},"Save"),o.a.createElement("button",{type:"button",className:"btn btn-xs btn-primary",onClick:function(){return e.handleAddTag()}},"Add tag"),o.a.createElement("div",{className:"dropdown",style:{display:"none"},id:"files_download"},o.a.createElement("button",{style:{borderRadius:0},className:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Downloads"),o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},o.a.createElement("a",{href:"#/",id:"download_default",className:"dropdown-item",download:"default.json"},"Default"),o.a.createElement("div",{className:"dropdown-divider"}),o.a.createElement("h6",{className:"dropdown-header"},"Javascript"),o.a.createElement("a",{href:"#/",id:"download_en",className:"dropdown-item",download:"en-US.js"},"English"),o.a.createElement("a",{href:"#/",id:"download_pt",className:"dropdown-item",download:"pt-BR.js"},"Portugu\xeas"),o.a.createElement("a",{href:"#/",id:"download_es",className:"dropdown-item",download:"es-ES.js"},"Espa\xf1ol"),o.a.createElement("div",{className:"dropdown-divider"}),o.a.createElement("h6",{className:"dropdown-header"},"C#"),o.a.createElement("a",{href:"#/",id:"download_en_csharp",className:"dropdown-item",download:"en-US(csharp).txt"},"English"),o.a.createElement("a",{href:"#/",id:"download_pt_csharp",className:"dropdown-item",download:"pt-BR(csharp).txt"},"Portugu\xeas"),o.a.createElement("a",{href:"#/",id:"download_es_csharp",className:"dropdown-item",download:"es-ES(csharp).txt"},"Espa\xf1ol"))),o.a.createElement("a",{href:"#/",id:"download",className:"btn btn-xs btn-info",style:{display:"none"},download:"language.json"},"Download"),o.a.createElement("button",{type:"button",className:"btn btn-xs btn-primary","data-toggle":"modal","data-target":"#modalUpload"},"Upload")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(C,{className:"row col lang-line"},o.a.createElement(O,{className:"col"},"Tag"),o.a.createElement(O,{className:"col"},"Group"),o.a.createElement(O,{className:"col"},"English"),o.a.createElement(O,{className:"col"},"Portugu\xeas"),o.a.createElement(O,{className:"col"},"Espa\xf1ol")),o.a.createElement("form",{className:"was-validated lang-form"},t.map(function(a){return o.a.createElement(C,{className:"row col lang-line",key:a.id},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"btn-group",style:{width:"100%",height:"25px"}},o.a.createElement("input",{type:"text",value:a.tag,onChange:function(t){return e.handleInputChange(a.tag,t)},name:"tag",required:"required",className:"form-control",autoComplete:"false",autoCorrect:"false",placeholder:"Tag"}),o.a.createElement("button",{onClick:function(){return e.handleCreateClick(a)},className:"btn btn-sm btn-secondary",style:{borderRadius:0}},"New"))),o.a.createElement("div",{className:"col"},o.a.createElement("input",{type:"text",value:a.grp,onChange:function(t){return e.handleInputChange(a.tag,t)},name:"grp",required:"required",className:"form-control",autoComplete:"false",autoCorrect:"false",placeholder:"Group"})),o.a.createElement("div",{className:"col"},o.a.createElement("input",{type:"text",value:a.en,onChange:function(t){return e.handleInputChange(a.tag,t)},name:"en",required:"required",className:"form-control",autoComplete:"false",autoCorrect:"false",placeholder:"English"})),o.a.createElement("div",{className:"col"},o.a.createElement("input",{type:"text",value:a.pt,onChange:function(t){return e.handleInputChange(a.tag,t)},name:"pt",required:"required",className:"form-control",autoComplete:"false",autoCorrect:"false",placeholder:"Portugu\xeas"})),o.a.createElement("div",{className:"col"},o.a.createElement("input",{type:"text",value:a.es,onChange:function(t){return e.handleInputChange(a.tag,t)},name:"es",required:"required",className:"form-control",autoComplete:"false",autoCorrect:"false",placeholder:"Espa\xf1ol"})))})),o.a.createElement("div",{className:"modal fade",id:"modalUpload",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},o.a.createElement("div",{className:"modal-dialog",role:"document"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Upload language file"),o.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Fechar"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),o.a.createElement("div",{className:"modal-body"},o.a.createElement("textarea",{rows:"10",className:"form-control",onChange:this.handleTextareaChange,value:n,placeholder:'[{"tag":"Enter","grp":"Buttons","en":"Enter","pt":"Entrar","es":"Entrar"}]'})),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Fechar"),o.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:function(){return e.handleUpload()}},"Upload"))))))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.f963732f.chunk.js.map