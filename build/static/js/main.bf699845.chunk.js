(this.webpackJsonpmitrais=this.webpackJsonpmitrais||[]).push([[0],{128:function(e,a,t){},143:function(e,a,t){e.exports=t(231)},148:function(e,a,t){},149:function(e,a,t){},231:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(48),o=t.n(l),i=(t(148),t(149),t(60)),c=t(43),m=t(63),s=t.n(m),u=t(74),d=t(73),h=t(139),p=t(241),b=t(242),f=t(243),g=t(137),E=t(237),v=t(238),N=t(131),w=t.n(N),y=t(65),k=t(133),M=t.n(k),C=(t(170),function(e){var a=e.name,t=e.value,n=e.onChange,l=e.active;return r.a.createElement(M.a,{selected:t&&new Date(t)||null,onChange:function(e){n(a,e)},dateFormat:"dd MMMM yyyy",disabled:!0===l,peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",placeholderText:"Date of Birth"})}),O=function(){var e=Object(u.a)(s.a.mark((function e(a){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=""===a.birthdate?"":q(a.birthdate),n={firstName:a.firstName,lastName:a.lastName,email:a.email,phone:a.phone,birthdate:t,gender:a.gender},"https://us-central1-mt-test-42640.cloudfunctions.net/app/",e.next=5,w.a.post("https://us-central1-mt-test-42640.cloudfunctions.net/app/users",n);case 5:return r=e.sent,e.abrupt("return",r.data);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),j=" is required",x=/^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/g,S="please enter a valid Indonesian phone number",F="please enter a valid email",D=y.a({firstName:y.b().required("first name"+j),lastName:y.b().required("last name"+j),email:y.b().email(F).required("email"+j),phone:y.b().required("phone number"+j).matches(x,S)}),q=function(e){var a=e.getDate(),t=e.getMonth(),n=e.getFullYear();return a+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][t]+" "+n},B=(t(128),function(e){var a=e.formik,t=e.process,n=e.errMessage,l=e.load,o=a.handleSubmit,i=a.handleChange,c=a.handleBlur,m=a.values,s=a.errors,u=a.setFieldValue,d=a.touched,h=function(e,a,n,l,o){return r.a.createElement(p.a.Group,null,r.a.createElement(p.a.Control,{id:l,name:l,type:"text",placeholder:o,onBlur:c,onChange:i,value:e,disabled:!0===t,isInvalid:!(!a||!n)}),function(e,a){var t=null;return e&&a&&(t=r.a.createElement(p.a.Control.Feedback,{type:"invalid"},a)),t}(a,n))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{body:!0},function(){if(n)return r.a.createElement(b.a,{variant:"danger"},n)}(),r.a.createElement("h1",{className:!0===t?"disabled":""},"Registration"),r.a.createElement(p.a,{onSubmit:o},h(m.phone,d.phone,s.phone,"phone","Mobile Number"),h(m.firstName,d.firstName,s.firstName,"firstName","First Name"),h(m.lastName,d.lastName,s.lastName,"lastName","Last Name"),r.a.createElement(p.a.Row,null,r.a.createElement(p.a.Group,{as:g.a,md:"5"},r.a.createElement(C,{name:"birthdate",value:m.birthdate,onChange:u,active:t})),r.a.createElement("div",{className:"gender"},r.a.createElement(p.a.Check,{type:"radio",name:"gender",label:"Male",id:"male",value:"male",disabled:!0===t,onChange:i,checked:"male"===m.gender})),r.a.createElement("div",{className:"gender"},r.a.createElement(p.a.Check,{type:"radio",name:"gender",label:"Female",id:"female",value:"female",disabled:!0===t,onChange:i,checked:"female"===m.gender}))),h(m.email,d.email,s.email,"email","Email"),r.a.createElement(E.a,{type:"submit",size:"lg",block:!0,disabled:!0===t},!0===l?r.a.createElement(v.a,{animation:"grow"}):"Register"))))}),J=t(239),L=t(240),z=function(){var e=Object(n.useState)(!1),a=Object(d.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)(null),c=Object(d.a)(o,2),m=c[0],p=c[1],b=Object(n.useState)(!1),f=Object(d.a)(b,2),g=f[0],v=f[1],N=Object(n.useState)(!1),w=Object(d.a)(N,2),y=w[0],k=w[1],M=Object(h.a)({initialValues:{phone:"",firstName:"",lastName:"",birthdate:"",gender:"male",email:""},validationSchema:D,onSubmit:function(){var e=Object(u.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),v(!0),p(null),e.next=5,O(a);case 5:(t=e.sent)&&(200!==t.code?(l(!1),v(!1),p(t.status)):(p(null),v(!1),k(!0)));case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()});return r.a.createElement(J.a,null,r.a.createElement(B,{formik:M,process:t,errMessage:m,load:g}),r.a.createElement(L.a,{className:!0===t?"disabled":""},y?r.a.createElement(E.a,{as:i.b,to:"/login",size:"lg",block:!0},"Login"):r.a.createElement("h1",null,"Footer")))};var A=function(){return r.a.createElement(J.a,null,r.a.createElement(f.a,{body:!0},r.a.createElement("h1",null,"Login"),r.a.createElement(p.a,null,r.a.createElement(p.a.Group,null,r.a.createElement(p.a.Control,{name:"email",type:"text",placeholder:"email"})),r.a.createElement(E.a,{size:"lg",block:!0},"Login"),r.a.createElement(i.b,{to:"/"},"\u2190 back to register"))))};var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(c.a,{exact:!0,path:"/",component:z}),r.a.createElement(c.a,{path:"/login",component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[143,1,2]]]);
//# sourceMappingURL=main.bf699845.chunk.js.map