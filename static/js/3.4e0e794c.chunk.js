(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[3],{81:function(t,e,n){"use strict";var c=n(82),r=n.n(c),a=n(1);e.a=function(t){var e=t.children;return Object(a.jsx)("div",{className:r.a.container,children:e})}},82:function(t,e,n){t.exports={container:"Container_container__2-ONu"}},83:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(36);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],c=!0,r=!1,a=void 0;try{for(var o,i=t[Symbol.iterator]();!(c=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);c=!0);}catch(s){r=!0,a=s}finally{try{c||null==i.return||i.return()}finally{if(r)throw a}}return n}}(t,e)||Object(c.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},87:function(t,e,n){t.exports={contacts:"ContactList_contacts__3PLBd",contacts__list:"ContactList_contacts__list__31XgJ",contacts__item:"ContactList_contacts__item__jYUsq",contacts__button:"ContactList_contacts__button__jk0nB"}},88:function(t,e,n){t.exports={filter:"Filter_filter__hetwL",filter__input:"Filter_filter__input__242Im"}},89:function(t,e,n){t.exports={form:"ContactForm_form__2hzsZ",label:"ContactForm_label__37a-W",label__text:"ContactForm_label__text__VUq4y",title:"ContactForm_title__-Y142",form__button:"ContactForm_form__button__2OXfr"}},90:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(8),a=n(18),o=n.n(a),i=n(10),s=function(){return function(t){return t(Object(i.i)()),o.a.get("/contacts").then((function(e){var n=e.data;return t(Object(i.j)(n))})).catch((function(t){return Object(i.h)(t.message)}))}},u=function(t){return function(e){var n={name:t.name,number:t.number};return e(Object(i.b)()),o.a.post("/contacts",n).then((function(t){var n=t.data;return e(Object(i.c)(n))})).catch((function(t){return e(Object(i.a)(t.message))}))}},l=function(t){return function(e){return e(Object(i.f)()),o.a.delete("/contacts/".concat(t)).then((function(){return e(Object(i.g)(t))})).catch((function(t){return e(Object(i.e)(t.message))}))}},b=n(26),f=function(t){return t.phonebook.filter},j=function(t){return t.phonebook.items},_={getLoading:function(t){return t.phonebook.loading},getFilter:f,getAllContacts:j,getVisibleContacts:Object(b.a)([j,f],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},m=n(87),d=n.n(m),h=n(1);function O(){var t=Object(r.b)(),e=Object(r.c)(_.getVisibleContacts),n=Object(r.c)(_.getLoading);return Object(c.useEffect)((function(){t(s())}),[t]),Object(h.jsx)("div",{className:d.a.contacts,children:Object(h.jsxs)("ul",{className:d.a.contacts__list,children:[n&&Object(h.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."}),e.map((function(e){var n=e.id,c=e.name,r=e.number;return Object(h.jsxs)("li",{className:d.a.contacts__item,children:[Object(h.jsxs)("span",{children:[c," : ",r]}),Object(h.jsx)("button",{className:d.a.contacts__button,onClick:function(){return function(e){return t(l(e))}(n)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},n)}))]})})}var p=n(83),x=n(88),v=n.n(x);function g(){var t=Object(r.b)(),e=Object(r.c)(_.getFilter);return Object(h.jsxs)("label",{className:v.a.filter,children:["Find contacts by name",Object(h.jsx)("input",{className:v.a.filter__input,type:"text",name:"search",value:e,onChange:function(e){return t(Object(i.d)(e.currentTarget.value))}})]})}var C=n(89),y=n.n(C);function N(){var t=Object(r.b)(),e=Object(r.c)(_.getAllContacts),n=Object(c.useState)(""),a=Object(p.a)(n,2),o=a[0],i=a[1],s=Object(c.useState)(""),l=Object(p.a)(s,2),b=l[0],f=l[1],j=function(t){var n=e.find((function(e){return e.number===t.number})),c=e.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}));if(n||c)return alert("This number is already in contacts."),!0},m=function(){i(""),f("")};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:y.a.title,children:"Add new contact"}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(),j({name:o,number:b})||t(u({name:o,number:b}))},className:y.a.form,children:[Object(h.jsxs)("label",{className:y.a.label,children:[Object(h.jsx)("span",{className:y.a.label__text,children:"Name"}),Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:o,onChange:function(t){i(t.currentTarget.value)}})]}),Object(h.jsxs)("label",{className:y.a.label,children:[Object(h.jsx)("span",{className:y.a.label__text,children:"Number"}),Object(h.jsx)("input",{type:"tel",name:"number",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:b,onChange:function(t){f(t.currentTarget.value)}})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:y.a.form__button,type:"submit",children:"Add contact"})})]}),Object(h.jsx)(g,{})]})}var w=n(81);e.default=function(){return Object(h.jsxs)(w.a,{children:[Object(h.jsx)(N,{}),Object(h.jsx)(O,{})]})}}}]);
//# sourceMappingURL=3.4e0e794c.chunk.js.map