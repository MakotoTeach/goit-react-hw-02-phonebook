(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={"input-width":"150px",submitForm:"AddContactForm_submitForm__20ssm",formLabel:"AddContactForm_formLabel__3tAXh",formInput:"AddContactForm_formInput__2g04x",formButton:"AddContactForm_formButton__1AD4p"}},15:function(t,e,n){t.exports=n(26)},25:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),l=n(14),i=n(2),m=n(3),u=n(5),s=n(4),f=n(6),b=n(12),d=n(7),h=n.n(d);var p=function(t){var e=t.name,n=t.number,a=t.onRemove;return r.a.createElement("li",{className:h.a.listItem},r.a.createElement("p",null,e,":"),r.a.createElement("p",null,n),r.a.createElement("button",{className:h.a.listItemBtn,type:"button",onClick:a},"Delete"))};var v=function(t){var e=t.contacts,n=t.onRemoveContact;return r.a.createElement("ul",null,e.map((function(t){var e=t.id,a=t.name,o=t.number;return r.a.createElement(p,{key:e,name:a,number:o,onRemove:function(){return n(e)}})})))},C=n(13),E=n(1),_=n.n(E),g=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(r)))).state={name:"",number:""},n.handleChange=function(t){var e=t.target,a=e.name,r=e.value;n.setState(Object(C.a)({},a,r))},n.handleSubmit=function(t){t.preventDefault(),n.props.onAddContact(n.state.name,n.state.number),n.setState({name:"",number:""})},n}return Object(f.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return r.a.createElement("form",{className:_.a.submitForm,onSubmit:this.handleSubmit},r.a.createElement("label",{className:_.a.formLabel},"Name",r.a.createElement("input",{autoComplete:"off",className:_.a.formInput,type:"text",name:"name",value:e,onChange:this.handleChange})),r.a.createElement("label",{className:_.a.formLabel},"Number",r.a.createElement("input",{autoComplete:"off",className:_.a.formInput,type:"text",name:"number",value:n,onChange:this.handleChange})),r.a.createElement("button",{className:_.a.formButton,type:"submit"},"Add contact"))}}]),e}(a.Component),I=n(8),y=n.n(I);var F=function(t){var e=t.value,n=t.onChangeFilter;return r.a.createElement("div",null,r.a.createElement("label",{className:y.a.filterLabel},"Find contact by name",r.a.createElement("input",{className:y.a.filterInput,type:"text",value:e,onChange:function(t){return n(t.target.value)}})))},j=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(r)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.addContact=function(t,e){var a=n.state.contacts.find((function(e){return e.name===t})),r={id:Object(b.uuid)(),name:t,number:e};a?alert("contact with name ".concat(t," is allready exist")):n.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[r])}}))},n.removeContact=function(t){n.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},n.changeFilter=function(t){n.setState({filter:t})},n.getVisibleContacts=function(){return n.state.contacts.filter((function(t){return t.name.toLowerCase().includes(n.state.filter.toLowerCase())}))},n}return Object(f.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,a=this.getVisibleContacts();return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(g,{onAddContact:this.addContact}),r.a.createElement("h2",null,"Contacts"),n.length>2&&r.a.createElement(F,{value:e,onChangeFilter:this.changeFilter}),a.length>0&&r.a.createElement(v,{contacts:a,onRemoveContact:this.removeContact}))}}]),e}(a.Component);n(25);c.a.render(r.a.createElement(j,null),document.getElementById("root"))},7:function(t,e,n){t.exports={listItem:"ContactListItem_listItem__2Ksiv",listItemBtn:"ContactListItem_listItemBtn__lbEPw"}},8:function(t,e,n){t.exports={"input-width":"150px",filterLabel:"Filter_filterLabel__2C1b8",filterInput:"Filter_filterInput__2F4Eq"}}},[[15,1,2]]]);
//# sourceMappingURL=main.e75626df.chunk.js.map