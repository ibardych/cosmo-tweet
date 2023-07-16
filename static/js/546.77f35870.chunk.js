"use strict";(self.webpackChunktweets=self.webpackChunktweets||[]).push([[546],{8951:function(n,e,o){o.r(e),o.d(e,{default:function(){return A}});var t,r,i,l,a,s,c=o(847),p=o(168),x=o(7686),u=x.Z.div(t||(t=(0,p.Z)(["\n  padding-top: 50px;\n"]))),d=o(9439),f=o(4165),g=o(5861),h=o(8561),w=o(2407),v=x.Z.div(r||(r=(0,p.Z)(["\n  width: 380px;\n  height: 460px;\n  border-radius: 20px;\n  background: linear-gradient(\n    142deg,\n    "," 0%,\n    "," 69.1%,\n    "," 100%\n  );\n  box-shadow: -2.58px 6.88px 20.63px 0px rgba(0, 0, 0, 0.23);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 28px 0 36px 0;\n\n  & .logo {\n    position: absolute;\n    top: 20px;\n    left: 20px;\n    width: 76px;\n    height: 22px;\n  }\n\n  & .bg {\n    display: inline-block;\n    width: 308px;\n    margin-bottom: 18px;\n  }\n\n  & .button {\n    margin-top: 10px;\n  }\n\n  &:hover .avatar {\n    transform: translate(-50%, -50%) scale(1.3);\n  }\n"])),w.O.color5,w.O.color3,w.O.color6),m=x.Z.div(i||(i=(0,p.Z)(["\n  text-transform: uppercase;\n  color: ",";\n  margin-bottom: 16px;\n  font-size: 20px;\n  font-weight: 500;\n"])),w.O.color2),b=o.p+"static/media/bg@2x.74a3d0a511d2f9354195.png",j=o.p+"static/media/avatar@2x.557969cfb75309c4a38c.png",Z=x.Z.div(l||(l=(0,p.Z)(["\n  width: 100%;\n  height: 8px;\n  background: ",";\n  box-shadow: 0px 3.44px 2.58px 0px "," inset,\n    0px 3.44px 3.44px 0px rgba(0, 0, 0, 0.06),\n    0px -1.72px 3.44px 0px "," inset;\n  position: relative;\n  margin-bottom: 62px;\n  flex-shrink: 0;\n"])),w.O.color2,w.O.color4,w.O.color1),k=x.Z.div(a||(a=(0,p.Z)(["\n  width: 80px;\n  height: 80px;\n  box-shadow: 0px 4.4px 3.3px 0px "," inset,\n    0px -2.2px 4.4px 0px "," inset,\n    0px 4.4px 4.4px rgba(0, 0, 0, 0.06);\n  background-color: ",";\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  top: 4px;\n  left: 50%;\n  animation: appear 1s forwards;\n  ",";\n\n  @keyframes appear {\n    0% {\n      width: 0px;\n      height: 0px;\n    }\n    100% {\n      width: 80px;\n      height: 80px;\n    }\n  }\n"])),w.O.color4,w.O.color1,w.O.color2,(0,h.eR)("transform")),O=x.Z.div(s||(s=(0,p.Z)(["\n  width: calc(100% - 18px);\n  height: calc(100% - 18px);\n  background: url(",") center ",";\n  background-size: cover;\n  border-radius: 50%;\n  box-shadow: 0px 4.4px 3.3px 0px ",",\n    0px -2.2px 4.4px 0px ",";\n  overflow: hidden;\n"])),(function(n){return n.img||j}),w.O.color3,w.O.color4,w.O.color1),y=o(184);var S=function(n){var e=n.img;return(0,y.jsx)(Z,{children:(0,y.jsx)(k,{className:"avatar",children:(0,y.jsx)(O,{img:e})})})},C=o(6676),F=o(9434);var N,z,L=function(n){var e=n.user,o=(0,F.I0)(),t=(0,F.v9)((function(n){return n.user.followedUsers})),r=e.id,i=e.followers,l=e.tweets,a=e.avatar,s=t.includes(r),p=function(){var n=(0,g.Z)((0,f.Z)().mark((function n(){return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o((0,C.P_)(e));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,y.jsxs)(v,{children:[(0,h.qj)("logo-goit","logo"),(0,y.jsx)("img",{className:"bg",src:b,alt:"background"}),(0,y.jsx)(S,{img:a}),(0,y.jsxs)(m,{children:[l.toLocaleString("en-US")," Tweets"]}),(0,y.jsxs)(m,{children:[i.toLocaleString("en-US")," Followers"]}),(0,y.jsx)(c.zx,{className:"button",active:s,onClick:p,children:s?"Following":"Follow"})]})},U=o(2791),E=x.Z.div(N||(N=(0,p.Z)(["\n  padding: 50px 20px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  justify-content: center;\n  align-items: center;\n"]))),I=x.Z.ul(z||(z=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 30px;\n\n  & li {\n    cursor: pointer;\n    color: ",";\n    ",";\n\n    &:hover {\n      color: ",";\n    }\n\n    &.active {\n      font-weight: 700;\n    }\n  }\n"])),w.O.color7,(0,h.eR)("color"),w.O.color1);var R=function(){var n=(0,F.I0)(),e=(0,F.v9)((function(n){return n.loading.isLoading})),o=(0,F.v9)((function(n){return n.user.users})),t=(0,F.v9)((function(n){return n.user.followedUsers})),r=(0,U.useState)(1),i=(0,d.Z)(r,2),l=i[0],a=i[1],s=(0,U.useState)(null),p=(0,d.Z)(s,2),x=p[0],u=p[1],f=(0,U.useState)([]),g=(0,d.Z)(f,2),h=g[0],w=g[1],v=(0,U.useState)([]),m=(0,d.Z)(v,2),b=m[0],j=m[1],Z=(0,U.useRef)(null);(0,U.useEffect)((function(){n((0,C.AW)())}),[n]),(0,U.useEffect)((function(){if(o.length){var n=o.filter((function(n){var e=n.id,o=t.includes(e);return!x||("following"===x?o:"follow"===x&&!o)}));w(n),j(n.slice(0,3*l))}}),[e,o,t,x,l]);var k=function(n){u(n),a(1)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(I,{children:[(0,y.jsx)("li",{className:x?"":"active",onClick:function(){return k(null)},children:"All"}),(0,y.jsx)("li",{className:"follow"===x?"active":"",onClick:function(){return k("follow")},children:"Follow"}),(0,y.jsx)("li",{className:"following"===x?"active":"",onClick:function(){return k("following")},children:"Following"})]}),(0,y.jsx)(E,{children:!!b.length&&b.map((function(n){return(0,y.jsx)(L,{user:n},n.id)}))}),!e&&b.length<h.length&&(0,y.jsx)(c.zw,{type:"button",onClick:function(){return function(n){a(n),setTimeout((function(){Z.current.scrollIntoView({behavior:"smooth"})}),100)}(l+1)},children:"Load more"}),(0,y.jsx)("div",{ref:Z,style:{marginTop:"100px"}})]})},T=o(4373),A=function(){return(0,y.jsxs)(u,{children:[(0,y.jsxs)(c.xE,{to:"/",children:[(0,y.jsx)(T.D_,{}),"Home"]}),(0,y.jsx)(R,{})]})}}}]);
//# sourceMappingURL=546.77f35870.chunk.js.map