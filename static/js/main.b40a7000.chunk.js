(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{115:function(e,t){},124:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),l=(n(89),n(30)),i=n(14),u=n.n(i),s=n(31),m=n(69),f=n.n(m),p=window.location.origin;p.includes("localhost")||(p="https://connect-4-backend.herokuapp.com/"),console.log("backendURL",p),console.log("backendURL TEST",p);const E=f()(p);var d=e=>{const t=function(){var t=Object(s.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Socket Connected"),a(),e("Connected");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Disconnected from socket server");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:1234,console.log("Requesting Entry To Room ".concat(1234)),E.emit("requestRoomEntry",{roomID:1234});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Room Joined",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();E.on("connect",t),E.on("disconnect",n),E.on("joinedRoom",r)},h=n(153),v=n(156),b=n(157),g=n(158),w=n(128),k=n(159),y=n(169),j=n(168);var O=function(){return a.createElement(h.a,{container:!0,justify:"center",m:2},a.createElement(v.a,{mt:2},a.createElement("form",{noValidate:!0,autoComplete:"off"},a.createElement(b.a,null,a.createElement(h.a,{item:!0,xs:12},a.createElement(g.a,{variant:"contained",color:"primary","aria-label":"contained primary button group"},a.createElement(w.a,null,"Local Hotseat"),a.createElement(w.a,null,"Create Online Room"),a.createElement(w.a,null,"Join Online Room")))),a.createElement(k.a,null,a.createElement(h.a,{item:!0,xs:12},a.createElement(y.a,{mt:1},a.createElement(j.a,{id:"outlined-basic",label:"Room ID",variant:"outlined",fullWidth:!0})))))))},R=n(161),x=n(162),S=n(126),C=n(163),D=n(164),J=n(165),T=n(166),W=n(167),I=n(74),L=n.n(I),q=n(160),A=n(73),B=n.n(A);const M=Object(q.a)({table:{minWidth:650}});var U=function(){const e=M();let t=Array.from({length:6},()=>Array.from({length:7},()=>0));const n=Object(a.useState)(!0),o=Object(l.a)(n,2),c=o[0],i=o[1],u=Object(a.useState)(t),s=Object(l.a)(u,2),m=s[0],f=s[1];return r.a.createElement(R.a,null,r.a.createElement("h1",null," ",c?"Red":"Yellow"," Turn! "),r.a.createElement(x.a,{component:S.a},r.a.createElement(C.a,{className:e.table},r.a.createElement(D.a,null,r.a.createElement(J.a,null,m[0].map((e,t)=>r.a.createElement(T.a,{align:"center",key:t},r.a.createElement(w.a,{variant:"contained",color:"primary",onClick:()=>(e=>{const t=B.a.cloneDeep(m);for(var n=t.length-1;n>=0;n--)if(!t[n][e]){let a=c?"Red":"Yellow";t[n][e]=a,i(!c);break}f(t)})(t)},r.a.createElement(L.a,null)))))),r.a.createElement(W.a,null,m.map((e,t)=>r.a.createElement(J.a,{key:t},e.map((e,t)=>r.a.createElement(T.a,{align:"center",key:t},r.a.createElement("img",{alt:"coin",src:e+".svg",height:70})))))))))};var Y=function(){const e=Object(a.useState)("Fetching Message"),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)(()=>{d(o)},[]),r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(R.a,null,r.a.createElement("h1",null,n)),r.a.createElement(U,null))};var F=function(){return r.a.createElement(Y,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},84:function(e,t,n){e.exports=n(124)},89:function(e,t,n){}},[[84,1,2]]]);
//# sourceMappingURL=main.b40a7000.chunk.js.map