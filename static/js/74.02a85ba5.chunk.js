(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[74],{3074:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return q}});var r=t(7214),o=t(9434),a="filter_label_title__jLv6t",i="filter_filter_input__sm3MV",c=function(e){return e.contacts.items},s=function(e){return e.filter},u=function(e){var n=e.contacts.items,t=e.filter;return t?n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):n},l=function(e){return e.contacts.isLoading},d=function(e){return e.contacts.error},f=t(6895),h=t(184),v=function(){var e=(0,o.I0)(),n=(0,o.v9)(s);return(0,h.jsxs)("label",{className:a,children:["Find contact by name:",(0,h.jsx)("input",{className:i,onChange:function(n){return e((0,f.T)(n.target.value))},type:"name",value:n})]})},m=t(4942),b=t(3366),p=t(7462),x=t(2791),g=t(8182),Z=t(4419),w=t(3701),_=t(4036),C=t(1402),j=t(5878),y=t(1217);function k(e){return(0,y.Z)("MuiFab",e)}var z=(0,j.Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),F=t(6934),S=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],I=(0,F.ZP)(w.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:function(e){return(0,F.FO)(e)||"classes"===e},overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],n["size".concat((0,_.Z)(t.size))],"inherit"===t.color&&n.colorInherit,n[(0,_.Z)(t.size)],n[t.color]]}})((function(e){var n,t,r=e.theme,o=e.ownerState;return(0,p.Z)({},r.typography.button,(0,m.Z)({minHeight:36,transition:r.transitions.create(["background-color","box-shadow","border-color"],{duration:r.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(r.vars||r).zIndex.fab,boxShadow:(r.vars||r).shadows[6],"&:active":{boxShadow:(r.vars||r).shadows[12]},color:r.vars?r.vars.palette.text.primary:null==(n=(t=r.palette).getContrastText)?void 0:n.call(t,r.palette.grey[300]),backgroundColor:(r.vars||r).palette.grey[300],"&:hover":{backgroundColor:(r.vars||r).palette.grey.A100,"@media (hover: none)":{backgroundColor:(r.vars||r).palette.grey[300]},textDecoration:"none"}},"&.".concat(z.focusVisible),{boxShadow:(r.vars||r).shadows[6]}),"small"===o.size&&{width:40,height:40},"medium"===o.size&&{width:48,height:48},"extended"===o.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===o.variant&&"small"===o.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===o.variant&&"medium"===o.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===o.color&&{color:"inherit"})}),(function(e){var n=e.theme,t=e.ownerState;return(0,p.Z)({},"inherit"!==t.color&&"default"!==t.color&&null!=(n.vars||n).palette[t.color]&&{color:(n.vars||n).palette[t.color].contrastText,backgroundColor:(n.vars||n).palette[t.color].main,"&:hover":{backgroundColor:(n.vars||n).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(n.vars||n).palette[t.color].main}}})}),(function(e){var n=e.theme;return(0,m.Z)({},"&.".concat(z.disabled),{color:(n.vars||n).palette.action.disabled,boxShadow:(n.vars||n).shadows[0],backgroundColor:(n.vars||n).palette.action.disabledBackground})})),N=x.forwardRef((function(e,n){var t=(0,C.Z)({props:e,name:"MuiFab"}),r=t.children,o=t.className,a=t.color,i=void 0===a?"default":a,c=t.component,s=void 0===c?"button":c,u=t.disabled,l=void 0!==u&&u,d=t.disableFocusRipple,f=void 0!==d&&d,v=t.focusVisibleClassName,m=t.size,x=void 0===m?"large":m,w=t.variant,j=void 0===w?"circular":w,y=(0,b.Z)(t,S),z=(0,p.Z)({},t,{color:i,component:s,disabled:l,disableFocusRipple:f,size:x,variant:j}),F=function(e){var n=e.color,t=e.variant,r=e.classes,o=e.size,a={root:["root",t,"size".concat((0,_.Z)(o)),"inherit"===n?"colorInherit":n]},i=(0,Z.Z)(a,k,r);return(0,p.Z)({},r,i)}(z);return(0,h.jsx)(I,(0,p.Z)({className:(0,g.Z)(F.root,o),component:s,disabled:l,focusRipple:!f,focusVisibleClassName:(0,g.Z)(F.focusVisible,v),ownerState:z,ref:n},y,{classes:F,children:r}))})),R="new_contacts_contact_list__5Nx0C",M="new_contacts_contact_item__xOkk5",V="new_contacts_contact_title__zuUbk",P=t(208),L=t(7247),T=function(){var e=(0,o.v9)(u),n=(0,o.I0)();return(0,h.jsx)("ul",{className:R,children:e.map((function(e){var t=e.id,r=e.name,o=e.number;return(0,h.jsxs)("li",{className:M,children:[(0,h.jsxs)("p",{className:V,children:[r," : ",o]}),(0,h.jsx)(N,{size:"small",color:"secondary",type:"button",onClick:function(){return n((0,P.GK)(t))},children:(0,h.jsx)(L.Z,{})})]},t)}))})},W=t(9439),E=t(6747),O=t(2800),D=t(6151),H=function(){var e=(0,x.useState)(""),n=(0,W.Z)(e,2),t=n[0],r=n[1],a=(0,x.useState)(""),i=(0,W.Z)(a,2),s=i[0],u=i[1],l=(0,o.I0)(),d=(0,o.v9)(c),f=function(e){switch(e.currentTarget.name){case"name":r(e.currentTarget.value);break;case"number":u(e.currentTarget.value)}},v=function(){r(""),u("")};return(0,h.jsx)(E.Z,{sx:{width:"360px"},children:(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={name:t,number:s};d.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?alert("".concat(n.name," is already in Contacts.")):(l((0,P.uK)(n)),v())},children:[(0,h.jsx)(O.Z,{type:"text",name:"name",value:t,onChange:f,label:"Contact name",required:!0,variant:"outlined",color:"secondary",fullWidth:!0,sx:{mb:2}}),(0,h.jsx)(O.Z,{type:"tel",name:"number",value:s,onChange:f,label:"Contact number",required:!0,color:"secondary",fullWidth:!0,sx:{mb:2}}),(0,h.jsx)(D.Z,{variant:"contained",color:"secondary",type:"submit",children:"Add contact"})]})})},q=function(){var e=(0,o.I0)(),n=(0,o.v9)(u),t=(0,o.v9)(l),a=(0,o.v9)(d);return(0,x.useEffect)((function(){e((0,P.yF)())}),[e]),(0,h.jsxs)("div",{children:[" ",(0,h.jsx)("h2",{children:"Phonebook"}),(0,h.jsx)(H,{}),t&&(0,h.jsx)(r.Z,{}),a&&(0,h.jsxs)("div",{children:["Oopps, something went wrong...",a.message]}),(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsx)(v,{}),n.length?(0,h.jsx)(T,{}):(0,h.jsx)("p",{children:"Contact not found"})]})}},7247:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var o=r(t(5649)),a=t(184),i=(0,o.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=i},5649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(4454)},4454:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return o.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return i.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return u.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return h},unstable_ClassNameGenerator:function(){return w},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return m},unsupportedProp:function(){return b},useControlled:function(){return p.Z},useEventCallback:function(){return x.Z},useForkRef:function(){return g.Z},useIsFocusVisible:function(){return Z.Z}});var r=t(5902),o=t(4036),a=t(8949).Z,i=t(9201),c=t(3199);var s=function(e,n){return function(){return null}},u=t(9103),l=t(8301),d=t(7602);t(7462);var f=function(e,n){return function(){return null}},h=t(2971).Z,v=t(162),m=t(8252).Z;var b=function(e,n,t,r,o){return null},p=t(5158),x=t(9683),g=t(2071),Z=t(3031),w={configure:function(e){r.Z.configure(e)}}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=74.02a85ba5.chunk.js.map