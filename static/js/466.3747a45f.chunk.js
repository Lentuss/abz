"use strict";(self.webpackChunkabz_test=self.webpackChunkabz_test||[]).push([[466,51],{3679:function(e,t,n){n.d(t,{zx:function(){return i},c7:function(){return o},Y8:function(){return c}});n(2791);var a=n(1694),s=n.n(a),r=n(184),i=function(e){var t=e.text,n=e.className,a=e.disabled,i=e.type,o=void 0===i?"button":i,l=e.onClick,c=s()("btn",n);return(0,r.jsx)("button",{className:c,type:o,onClick:l,disabled:a,children:t})},o=function(e){var t=e.text,n=e.className,a=e.size,o=e.type,l=void 0===o?"button":o,c=e.onClick,u=e.disabled,d=s()("main-btn",n,a);return(0,r.jsx)(i,{text:t,className:d,type:l,onClick:c,disabled:u})},l=n(5705),c=function(e){var t=e.positions;return(0,r.jsxs)("div",{className:"radio-btn",children:[(0,r.jsx)("p",{children:"Select your position"}),(0,r.jsx)("div",{className:"radio-btn__group",role:"group","aria-labelledby":"position-radio-group",children:t.length>0&&t.map((function(e){return(0,r.jsxs)("div",{className:"radio-btn__item",children:[(0,r.jsx)(l.gN,{className:"radio-btn__input",type:"radio",name:"position_id",id:"position".concat(e.id),value:"".concat(e.id)}),(0,r.jsx)("span",{className:"radio-btn__input--false"}),(0,r.jsx)("label",{htmlFor:"position".concat(e.id),children:e.name})]},e.id)}))})]})}},6051:function(e,t,n){n.r(t);n(2791);var a=n(184);t.default=function(){return(0,a.jsx)("div",{className:"loader"})}},6466:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var a=n(2791),s=n(5667),r=n(1694),i=n.n(r),o=n(184),l=function(e){var t=e.text,n=e.type,a=i()("heading",n);return(0,o.jsx)("h2",{className:a,children:t})},c=n(3679),u=function(e){var t=e.text,n=e.type,a=i()("paragraph",n);return(0,o.jsx)("p",{className:a,children:t})},d=function(){return console.log(s.NY),(0,o.jsxs)("div",{className:"article",children:[(0,o.jsxs)("div",{className:"article__wrapper",children:[(0,o.jsx)(l,{text:"Test assignment for front-end developer",type:"light"}),(0,o.jsx)(u,{type:"light",text:"What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."})]}),(0,o.jsx)(c.c7,{text:"Sign up",isActive:!0,onClick:function(){s.OK.scrollTo("register",{duration:1200,delay:0,smooth:"easeInOutQuart",offset:100})}})]})},p=function(){return(0,o.jsx)("section",{className:"hero",children:(0,o.jsx)("div",{className:"hero__wrapper",children:(0,o.jsx)(d,{})})})},m=n(9439),x=n(9434),h=n(9717),f=n(2111),j=n.n(f),v=function(e){var t=e.value;return(0,o.jsx)("span",{className:"tooltip",children:t})},g=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"user",children:[(0,o.jsx)("img",{className:"user__avatar",src:t.photo,alt:"avatar"}),(0,o.jsx)("div",{className:"user__wrapper",children:(0,o.jsx)(j(),{className:"user__name truncate",line:1,element:"h3",truncateText:"\u2026",text:t.name,textTruncateChild:(0,o.jsx)(v,{value:t.name})})}),(0,o.jsx)(j(),{className:"truncate",line:1,element:"p",truncateText:"\u2026",text:t.position,textTruncateChild:(0,o.jsx)(v,{value:t.position})}),(0,o.jsx)(j(),{className:"truncate",line:1,element:"p",truncateText:"\u2026",text:t.email,textTruncateChild:(0,o.jsx)(v,{value:t.email})}),(0,o.jsx)(j(),{className:"truncate",line:1,element:"p",truncateText:"\u2026",text:t.phone,textTruncateChild:(0,o.jsx)(v,{value:t.phone})})]})},N=n(6051),_=function(){var e=(0,a.useState)(1),t=(0,m.Z)(e,2),n=t[0],r=t[1],i=(0,x.v9)((function(e){return e.usersData.usersSlice})).users,u=(0,x.v9)((function(e){return e.usersData.usersSlice})).totalPages,d=(0,x.v9)((function(e){return e.usersData.registerSlice})).isLoggedIn,p=(0,x.v9)((function(e){return e.usersData.registerSlice})).isLoading,f=(0,x.I0)();console.log(s.NY);(0,a.useEffect)((function(){f((0,h.R)(n))}),[n]),(0,a.useEffect)((function(){r(1)}),[d]);return(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"users",name:"users",id:"users",children:[(0,o.jsx)(l,{text:"Working with GET request"}),p&&(0,o.jsx)(N.default,{}),(0,o.jsx)("ul",{className:"users__list",children:i&&i.map((function(e){return(0,o.jsx)("li",{className:"users__item",children:(0,o.jsx)(g,{data:e})},e.id)}))}),n<u&&(0,o.jsx)(c.c7,{size:"large",text:"Show more",onClick:function(){r(n+1),s.OK.scrollTo("users",{duration:800,delay:0,smooth:"easeInOutQuart",offset:100})}})]})})},b=n(4925),y=n(5861),k=n(7757),S=n.n(k),w=n(3263),T=n(5705),C=function(e){var t=e.onChange,n=(0,a.useState)(""),s=(0,m.Z)(n,2),r=s[0],i=s[1];return(0,o.jsxs)("div",{className:"upload",children:[(0,o.jsxs)("label",{className:"upload__label",children:["Upload",(0,o.jsx)("input",{className:"upload__input",type:"file",name:"photo",placeholder:" ",onChange:function(e){t(e.currentTarget.files),i(e.currentTarget.files[0].name)}})]}),(0,o.jsx)("p",{className:"upload__text",children:r})]})},E=function(e){var t=e.name,n=e.className,a=e.label,s=e.errorName,r=e.type;return(0,o.jsxs)("div",{className:"input",children:[(0,o.jsx)(T.gN,{className:"input__field ".concat(n),type:r,id:t,name:t,placeholder:" "}),(0,o.jsx)("label",{className:"input__label ".concat(n),htmlFor:t,children:a}),(0,o.jsx)("p",{className:"input__tip ".concat(n),children:s})]})},Z=n(2797),q=["image/jpg","image/jpeg"],I=Z.Ry().shape({name:Z.Z_().min(2,"Must contain at least 2 letters!").max(60,"Too Long!").required("Required"),email:Z.Z_().email("Invalid email").required("Required"),phone:Z.Z_().matches(/^[+]{0,1}380([0-9]{9})$/,"Enter phone number in format +380987654321").typeError("Enter phone number in format +380987654321").required("Required"),position_id:Z.Z_().required("Required"),photo:Z.nK().test("FILE_SIZE","Uploaded file is too big",(function(e){return!e||e&&e.size<=5242880})).test("FILE_FORMAT","Uploaded file unsupported format",(function(e){return!e||e&&q.includes(null===e||void 0===e?void 0:e.type)})).required("Required")});var X=n.p+"static/media/success-image.0d3202ba11b04fa7364b0f83ce42aea5.svg",R=function(){return(0,o.jsxs)("div",{className:"success-message",children:[(0,o.jsx)(l,{text:"User successfully registered"}),(0,o.jsx)("img",{src:X,alt:"success"})]})},D=n(4901),F=["photo"],L=function(){var e=(0,a.useState)({}),t=(0,m.Z)(e,2),n=t[0],s=t[1],r=(0,x.I0)(),i=(0,x.v9)((function(e){return e.usersData.registerSlice})).isLoading,u=(0,x.v9)((function(e){return e.usersData.registerSlice})).isLoggedIn;return(0,a.useEffect)((function(){var e=function(){var e=(0,y.Z)(S().mark((function e(){var t,n;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.Z.get("/positions");case 3:return t=e.sent,e.next=6,t.data;case 6:n=e.sent,s(n.positions),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Something went wrong");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=(0,y.Z)(S().mark((function e(){var t,n;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.Z.get("/token");case 3:return t=e.sent,e.next=6,t.data.token;case 6:n=e.sent,localStorage.setItem("token",n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("You haven`t token");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e(),t()}),[]),(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"form",name:"register",children:[(0,o.jsx)(l,{text:"Working with POST request"}),i&&(0,o.jsx)(N.default,{}),u?(0,o.jsx)(R,{}):(0,o.jsx)(T.J9,{initialValues:{name:"",email:"",phone:"",position_id:"",photo:null},validationSchema:I,onSubmit:function(e){console.log(e);for(var t=e.photo,n=(0,b.Z)(e,F),a=new FormData,s=0,i=Object.keys(n);s<i.length;s++){var o=i[s];a.append("".concat(o),"".concat(n[o]))}a.append("photo",t),r((0,D.z)(a)),r((0,h.R)(1))},children:function(e){var t=e.errors,a=e.touched,s=e.setFieldValue;return(0,o.jsxs)(T.l0,{className:"form__wrapper",children:[t.name&&a.name?(0,o.jsx)(E,{name:"name",className:"error",label:"Your name",type:"text",errorName:t.name}):(0,o.jsx)(E,{name:"name",className:"",label:"Your name",type:"text"}),t.email&&a.email?(0,o.jsx)(E,{name:"email",className:"error",label:"Email",type:"email",errorName:t.email}):(0,o.jsx)(E,{name:"email",className:"",label:"Email",type:"email"}),t.phone&&a.phone?(0,o.jsx)(E,{name:"phone",className:"error",label:"Phone",type:"tel",errorName:t.phone}):(0,o.jsx)(E,{name:"phone",className:"",label:"Phone",type:"tel",errorName:"+38 (XXX) XXX - XX - XX"}),(0,o.jsxs)("div",{className:"form__input-cover",children:[(0,o.jsx)(c.Y8,{positions:n}),t.position_id&&(0,o.jsx)("p",{className:"input__tip error",children:t.position_id})]}),(0,o.jsxs)("div",{className:"form__input-cover",children:[(0,o.jsx)(C,{onChange:function(e){s("photo",e[0])}}),t.photo&&a.photo?(0,o.jsx)("p",{className:"input__tip error",children:t.photo}):null]}),t.name||t.email||t.phone||t.position_id||t.photo?(0,o.jsx)(c.c7,{text:"Sign in",type:"submit",disabled:"disabled"}):(0,o.jsx)(c.c7,{text:"Sign in",type:"submit"})]})}})]})})},z=function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)(p,{}),(0,o.jsx)(_,{}),(0,o.jsx)(L,{})]})}}}]);
//# sourceMappingURL=466.3747a45f.chunk.js.map