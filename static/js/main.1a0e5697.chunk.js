(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{115:function(e,t){},124:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=(n(89),n(30)),i=n(21),u=n.n(i),m=n(40),s=n(69),E=n.n(s),f=window.location.origin;f.includes("localhost")||(f="https://connect-4-backend.herokuapp.com/connect4");const p=E()();var d=e=>{const t=function(){var t=Object(m.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(),e("Connected");case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Disconnected from socket server");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.emit("joinRoom",{roomID:"1234"});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();p.on("connect",t),p.on("disconnect",n)},h=n(153),v=n(156),b=n(157),w=n(158),g=n(128),k=n(159),y=n(169),j=n(168);var O=function(){return a.createElement(h.a,{container:!0,justify:"center",m:2},a.createElement(v.a,{mt:2},a.createElement("form",{noValidate:!0,autoComplete:"off"},a.createElement(b.a,null,a.createElement(h.a,{item:!0,xs:12},a.createElement(w.a,{variant:"contained",color:"primary","aria-label":"contained primary button group"},a.createElement(g.a,null,"Local Hotseat"),a.createElement(g.a,null,"Create Online Room"),a.createElement(g.a,null,"Join Online Room")))),a.createElement(k.a,null,a.createElement(h.a,{item:!0,xs:12},a.createElement(y.a,{mt:1},a.createElement(j.a,{id:"outlined-basic",label:"Room ID",variant:"outlined",fullWidth:!0})))))))},x=n(161),R=n(162),C=n(126),D=n(163),S=n(164),W=n(165),I=n(166),J=n(167),A=n(74),B=n.n(A),M=n(160),Y=n(73),F=n.n(Y);const H=Object(M.a)({table:{minWidth:650}});var L=function(){const e=H();let t=Array.from({length:6},()=>Array.from({length:7},()=>0));const n=Object(a.useState)(!0),c=Object(l.a)(n,2),o=c[0],i=c[1],u=Object(a.useState)(t),m=Object(l.a)(u,2),s=m[0],E=m[1];return r.a.createElement(x.a,null,r.a.createElement("h1",null," ",o?"Red":"Yellow"," Turn! "),r.a.createElement(R.a,{component:C.a},r.a.createElement(D.a,{className:e.table},r.a.createElement(S.a,null,r.a.createElement(W.a,null,s[0].map((e,t)=>r.a.createElement(I.a,{align:"center",key:t},r.a.createElement(g.a,{variant:"contained",color:"primary",onClick:()=>(e=>{const t=F.a.cloneDeep(s);for(var n=t.length-1;n>=0;n--)if(!t[n][e]){let a=o?"Red":"Yellow";t[n][e]=a,i(!o);break}E(t)})(t)},r.a.createElement(B.a,null)))))),r.a.createElement(J.a,null,s.map((e,t)=>r.a.createElement(W.a,{key:t},e.map((e,t)=>r.a.createElement(I.a,{align:"center",key:t},r.a.createElement("img",{alt:"coin",src:e+".svg",height:70})))))))))};var N=function(){const e=Object(a.useState)("Fetching Message"),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)(()=>{d(c)},[]),r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(x.a,null,r.a.createElement("h1",null,n)),r.a.createElement(L,null))};var T=function(){return r.a.createElement(N,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},84:function(e,t,n){e.exports=n(124)},89:function(e,t,n){}},[[84,1,2]]]);
//# sourceMappingURL=main.1a0e5697.chunk.js.map