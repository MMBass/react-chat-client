(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),s=a(34),m=a.n(s),o=a(19),l=a(1),u=a(8),i=(a(67),function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),m=Object(u.a)(s,2),l=m[0],i=m[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("h1",{className:"heading"},"Join"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return i(e.target.value)}})),r.a.createElement(o.b,{onClick:function(e){return a||l?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(l)},r.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign In"))))}),f=a(61),E=a(58),p=a.n(E),g=a(59),d=a.n(g),v=(a(101),a(102),function(e){var t=e.room;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("h2",null,". "),r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},"X")))}),h=(a(103),function(e){var t=e.message,a=e.setMessage,n=e.sendMessage;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:t,onChange:function(e){return a(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:function(e){return n(e)}},"Send"))}),b=a(60),j=a.n(b),N=a(37),O=a.n(N),y=(a(124),function(e){var t=e.message,a=t.text,n=t.user,c=!1,s=e.name.trim().toLowerCase();return n===s&&(c=!0),c?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("p",{className:"sentText"},s),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorWhite"},O.a.emojify(a)))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLight"},r.a.createElement("p",{className:"messageText colorDark"},O.a.emojify(a))),r.a.createElement("p",{className:"sentText pl-10"},n))}),C=(a(125),function(e){var t=e.messages,a=e.name;return r.a.createElement(j.a,{className:"messages"},t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(y,{message:e,name:a}))})))}),x=function(e){var t=e.location,a=Object(c.useState)(""),s=Object(u.a)(a,2),m=s[0],o=s[1],l=Object(c.useState)(""),i=Object(u.a)(l,2),E=i[0],g=i[1],b=Object(c.useState)(""),j=Object(u.a)(b,2),N=j[0],O=j[1],y=Object(c.useState)([]),x=Object(u.a)(y,2),k=x[0],S=x[1],I="https://real-time-react-chat.herokuapp.com/";Object(c.useEffect)((function(){var e=p.a.parse(t.search),a=e.name,c=e.room;return n=d()(I),o(a),g(c),n.emit("join",{name:a,room:c},(function(e){})),function(){n.emit("disconnect"),n.off()}}),[I,t.search]),Object(c.useEffect)((function(){n.on("message",(function(e){S([].concat(Object(f.a)(k),[e]))}))}),[k]);return r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(v,{room:E}),r.a.createElement(C,{messages:k,name:m}),r.a.createElement(h,{message:N,setMessage:O,sendMessage:function(e){e.preventDefault(),N&&n.emit("sendMessage",N,(function(){O("")}))}})))},k=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{path:"/",exact:!0,component:i}),r.a.createElement(l.a,{path:"/chat",component:x}))};m.a.render(r.a.createElement(k,null),document.querySelector("#root"))},62:function(e,t,a){e.exports=a(127)},67:function(e,t,a){},98:function(e,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.6032c5c6.chunk.js.map