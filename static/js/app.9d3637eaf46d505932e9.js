webpackJsonp([1],{"6rEv":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("nav",[t("div",{staticClass:"nav-wrapper green"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("Ilya Bessmertny is a fag")])],1)])])},staticRenderFns:[]},o={name:"App",components:{Navbar:a("VU/8")(null,n,!1,null,null,null).exports}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]},l=a("VU/8")(o,s,!1,null,null,null).exports,r=a("/ocq"),p=a("kxiW"),d=a.n(p),c=(a("881v"),d.a.initializeApp({apiKey:"AIzaSyDuw4ndpSzUnQozpX7Qf2xyzhz7mO18Ipw",authDomain:"vuefs-70fa8.firebaseapp.com",databaseURL:"https://vuefs-70fa8.firebaseio.com",projectId:"vuefs-70fa8",storageBucket:"vuefs-70fa8.appspot.com",messagingSenderId:"617051181596"}).firestore()),u={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;c.collection("employees").orderBy("dept").get().then(function(t){t.forEach(function(t){var a={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employees.push(a)})})}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.employees,function(t){return a("li",{key:t.id,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v(e._s(t.employee_id)+": "+e._s(t.name)+"\n\t\t"),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)})],2),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1),e._v(" "),a("router-link",{attrs:{to:"/join"}},[a("button",{staticClass:"btn modal-trigger",attrs:{"data-target":"modal1"}},[e._v("Join Us")])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header"},[t("h4",[this._v("Employees")])])}]},v=a("VU/8")(u,m,!1,null,null,null).exports,_={name:"new-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},methods:{saveEmployee:function(){var e=this;c.collection("employees").add({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(function(t){return e.$router.push("/")}).catch(function(e){return console.log(err)})}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-employee"}},[a("h3",[e._v("New Employee")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),a("label",[e._v("Employee ID")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",[e._v("Name")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),a("label",[e._v("Department")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),a("label",[e._v("Position")])])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},y=a("VU/8")(_,f,!1,null,null,null).exports,h={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){c.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},deleteEmployee:function(){var e=this;confirm("Are you sure?")&&c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},C={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"view-employee"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[e._v(e._s(e.name))])]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("\n\t\t\t\tEmployee ID: "+e._s(e.employee_id)+"\n\t\t\t")]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("\n\t\t\t\tDept: "+e._s(e.dept)+"\n\t\t\t")]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("\n\t\t\t\tPosition: "+e._s(e.position)+"\n\t\t\t")])]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back")]),e._v(" "),a("button",{staticClass:"btn red",on:{click:e.deleteEmployee}},[e._v("Delete")]),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-employee",params:{employee_id:e.employee_id}}}},[a("i",{staticClass:"fas fa-edit"})])],1)],1)},staticRenderFns:[]},g=a("VU/8")(h,C,!1,null,null,null).exports,b={name:"edit-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){c.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},updateEmployee:function(){var e=this;c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employee_id:e.employee_id,name:e.name,dept:e.dept,position:e.position}).then(function(){e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}})})})})}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-employee"}},[a("h3",[e._v("Edit Employee")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),a("label",{staticClass:"active"},[e._v("ID")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",{staticClass:"active"},[e._v("Name")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),a("label",{staticClass:"active"},[e._v("Department")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),a("label",{staticClass:"active"},[e._v("Position")])])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},x=a("VU/8")(b,w,!1,null,null,null).exports,E={name:"join-employee",data:function(){return{email:null,phone:null,name:null}},methods:{join:function(){var e=this;c.collection("join_wishers").add({email:this.email,name:this.name,phone:this.phone}).then(function(t){return e.$router.push("/")}).catch(function(e){return console.log(err)})}}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"joinS"}},[a("h3",[e._v("Howdy")]),e._v(" "),a("div",{staticClass:"row"},[a("router-link",{attrs:{to:"/about"}},[a("button",{staticClass:"btn"},[a("p",{attrs:{id:"why-paragraph"}},[e._v("Why join us")])])]),e._v(" "),a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.join(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",[e._v("Name")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",[e._v("Email")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",required:""},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),e._v(" "),a("label",[e._v("Phone")])])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)],1)])},staticRenderFns:[]};var $=a("VU/8")(E,N,!1,function(e){a("6rEv")},null,null).exports,k={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"about"}})},staticRenderFns:[]},D=a("VU/8")({name:"about",data:function(){return{}}},k,!1,null,null,null).exports;i.a.use(r.a);var P=new r.a({routes:[{path:"/",name:"dashboard",component:v},{path:"/new",name:"new-employee",component:y},{path:"/join",name:"join-employee",component:$},{path:"/about",name:"about",component:D},{path:"/:employee_id",name:"view-employee",component:g},{path:"/edit/:employee_id",name:"edit-employee",component:x}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:P,components:{App:l},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.9d3637eaf46d505932e9.js.map