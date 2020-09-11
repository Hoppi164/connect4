(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{115:function(e,t){},122:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),l=(n(89),n(29)),i=n(14),s=n.n(i),u=n(34),m=n(69),f=n.n(m),d=window.location.origin;d.includes("localhost")||(d="https://connect-4-backend.herokuapp.com/"),console.log("backendURL",d);const p=f()(d);var h=e=>{const t=function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Socket Connected"),a(),e("Connected");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Disconnected from socket server");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:1234,console.log("Requesting Entry To Room ".concat(1234)),p.emit("requestRoomEntry",{roomID:1234});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Room Joined",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();p.on("connect",t),p.on("disconnect",n),p.on("joinedRoom",r)},E=n(154),b=n(156),w=n(157),g=n(158),v=n(127),y=n(159),j=n(165),k=n(164);var O=function(){return a.createElement(E.a,{container:!0,justify:"center",m:2},a.createElement(b.a,{mt:2},a.createElement("form",{noValidate:!0,autoComplete:"off"},a.createElement(w.a,null,a.createElement(E.a,{item:!0,xs:12},a.createElement(g.a,{variant:"contained",color:"primary","aria-label":"contained primary button group"},a.createElement(v.a,null,"Local Hotseat"),a.createElement(v.a,null,"Create Online Room"),a.createElement(v.a,null,"Join Online Room")))),a.createElement(y.a,null,a.createElement(E.a,{item:!0,xs:12},a.createElement(j.a,{mt:1},a.createElement(k.a,{id:"outlined-basic",label:"Room ID",variant:"outlined",fullWidth:!0})))))))},x=n(163),R=n(160),B=n(17),C=n(73),D=n.n(C),I=n(162),W=n(161);const N=Object(R.a)({Blue:{fill:"#0500fd"},Red:{fill:"#ff0000ff"},Yellow:{fill:"#ffff00ff"},White:{fill:"#ffffff"},Disabled:{"fill-opacity":"0.9",cursor:"default"},Enabled:{"fill-opacity":"1",cursor:"pointer"}});var S=function({rowIndex:e,colIndex:t,cell:n,isButtonsDisabled:a,dropCoin:o}){const c=N();return r.a.createElement("g",null,r.a.createElement("ellipse",{cy:14*e+7.5,cx:14*t+7.5,id:"row"+e+"_col"+t,className:"\n                      ".concat(c.White," \n                      ").concat(a?c.Disabled:c.Enabled,"\n                      "),rx:6.5,ry:6.5,val:n,onClick:()=>o(t)}),r.a.createElement(W.a,{direction:"down",in:0!=n,timeout:1e3},r.a.createElement("ellipse",{cy:14*e+7.5,cx:14*t+7.5,id:"row"+e+"_col"+t,className:"\n                      ".concat(c[n]," \n                      ").concat(a?c.Disabled:c.Enabled,"\n                      "),rx:6.5,ry:6.5,val:n,onClick:()=>o(t)})))};const T=Object(R.a)({Blue:{fill:"#0500fd"},marginx150:{marginLeft:150,marginRight:150}});let J={vertical:{south:[1,0],north:[-1,0]},horizontal:{east:[0,1],west:[0,-1]},backward:{southEast:[1,1],northWest:[-1,-1]},forward:{southWest:[1,-1],northEast:[-1,1]}};let L=Array.from({length:6},()=>Array.from({length:7},()=>""));var Y=function(){const e=Object(B.a)(),t=Object(I.a)(e.breakpoints.up("lg")),n=T(),o=Object(a.useState)(!0),c=Object(l.a)(o,2),i=c[0],s=c[1],u=Object(a.useState)(L),m=Object(l.a)(u,2),f=m[0],d=m[1],p=Object(a.useState)(!1),h=Object(l.a)(p,2),E=h[0],b=h[1],w=e=>{if(E)return;b(!0),setTimeout(()=>b(!1),1500);const t=D.a.cloneDeep(f);for(var n=t.length-1;n>=0;n--)if(!t[n][e]){let a=i?"Red":"Yellow";t[n][e]=a,d(t),g(e,n,a,t)&&v(a),s(!i);break}},g=(e,t,n,a)=>{for(let o in J){let c=1;for(let l in J[o]){let i=[t,e],s=a[i[0]][i[1]];for(;s==n;)try{if(i[0]+=J[o][l][0],i[1]+=J[o][l][1],s=a[i[0]][i[1]],s==n&&(c+=1,c>=4))return!0}catch(r){break}if(c>=4)return!0}}return!1},v=e=>{setTimeout(()=>alert("WINNER!, ".concat(e," has won the game!")),1500),setTimeout(()=>b(!0),1500)};return r.a.createElement(x.a,null,r.a.createElement("h1",null," ",i?"Red":"Yellow"," Turn! "),r.a.createElement("svg",{viewBox:"0 0 100 100",version:"1.1",id:"GameBoard",className:t?n.marginx150:""},r.a.createElement("g",{id:"BlueRectangle"},r.a.createElement("rect",{className:n.Blue,id:"rect939",width:"100",height:"85"})),r.a.createElement("g",{id:"Coins"},f.map((e,t)=>r.a.createElement("g",null,e.map((e,n)=>r.a.createElement(S,{rowIndex:t,colIndex:n,cell:e,isButtonsDisabled:E,dropCoin:w})))))))};var q=function(){const e=Object(a.useState)("Fetching Message"),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)(()=>{h(o)},[]),r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(x.a,null,r.a.createElement("h1",null,n)),r.a.createElement(Y,null))};var A=function(){return r.a.createElement(q,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},84:function(e,t,n){e.exports=n(122)},89:function(e,t,n){}},[[84,1,2]]]);
//# sourceMappingURL=main.eaa7d65e.chunk.js.map