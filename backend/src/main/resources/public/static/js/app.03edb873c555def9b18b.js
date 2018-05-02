webpackJsonp([1],{"1/oy":function(t,e){},"9M+g":function(t,e){},"9mmb":function(t,e,s){t.exports=s.p+"static/img/poolingScheme.b4664e8.png"},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={name:"App",data:function(){return console.log("reached App Page DOM"),{appName:"monager",options:[{href:"/about",text:"About"},{href:"/Contact",text:"Contact"},{href:"/findallActivePools",text:"ActivePools"},{href:"/createNew",text:"CreatePool"},{href:"/login",text:"Login"}]}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",[s("b-navbar",{staticClass:"navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top"},[s("b-navbar-brand",{attrs:{href:"/"}},[s("span",{staticClass:"border-bottom border-primary"},[t._v(t._s(t.appName))])]),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[s("ul",{staticClass:"navbar-nav ml-auto"},t._l(t.options,function(e){return s("li",{key:e.text,staticClass:"nav-item"},[s("a",{staticClass:"nav-link ",attrs:{href:e.href}},[t._v(t._s(e.text)),s("span",{staticClass:"sr-only"})])])}))])])],1)],1),t._v(" "),s("router-view")],1)},staticRenderFns:[]},r=s("VU/8")(i,o,!1,null,null,null).exports,n=s("/ocq"),l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"mt-4 mb-3"},[t._v("monager:\n      "),a("small",[t._v("Traditional fund raising and community money pooling methods with the power of modern , advance, trust less blockchain technology")])]),t._v(" "),a("p",[t._v("\n    Pooling money (Committee) is a saving and borrowing system which is very popular in almost every part of India."),a("br"),t._v("\n    It is some sort of money raising scheme. Each Pooling scheme or Pool is created and manged by few  trusted individuals or so called managers."),a("br"),t._v("\n    This practice of collecting money from people and keeping/managing it without accounting for any recorded transactions is illegal."),a("br"),t._v("\n\n    Blockchain provides a best transperent and trustless method for creating online Pools."),a("br"),t._v(" "),a("img",{attrs:{src:s("9mmb"),width:"800",height:"450"}})]),a("h3",[t._v("How it works?")]),t._v("\n    People form a group and start pooling up a specific amount of money. Every month, one member can pick the total pooled amount by the process of bidding. Lets take an example to understand better, there is a group of 10 people contributing Rs. 5000 each every month. This committee will pool up Rs. 50,000 (Rs. 50,000 x 10 members) every month. One of the 10 members can pick this Rs. 50,000 amount by bidding the highest amount (reverse auctioning)."),a("br"),t._v("\n\n    Lets say, Mr. A and Mr. B are willing to pick this Rs. 50,000 amount this month. Mr. A bids Rs. 4,000 and Mr. B bids Rs. 4,500. This means that Mr. A is willing to pay Rs. 4,000 as interest and Mr. B is agreeing to pay Rs. 4,500 as interest, in order to get Rs. 50,000. In this case, Mr. B will win the bid and he will get a net-net of Rs. 45,500 (Rs. 50,000-Rs. 4,500) in hand."),a("br"),t._v("\n\n    The bid amount of Mr. B i.e. Rs. 4,500 will be equally distributed among his remaining 9 committee members. Each one will get Rs. 500 as the returns on their investment."),a("br"),t._v("\n\n    This process goes on for 10 months (as there are 10 members in this committee) and every month there will be a unique winner who can pick the lump-sum."),a("br"),t._v("\n\n    Offline committees are illegal as these are against the Chit funds Act 1982. In offline committees, there is a committee who collects money from the committee members and keeps it with himself and gives it to the winner subtracting his commission which is very high. This practice of collecting money from people and keeping/managing it without accounting for any recorded transactions is illegal.\n  "),a("p")])])}]};var c=s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",location:"D:\\WorkingFolder\\workspace\\monager\\frontend\\src\\components\\HelloWorld.vue"}}},l,!1,function(t){s("Y240")},"data-v-ba4e57ae",null).exports,m=s("mtWM"),d=s.n(m).a.create({baseURL:"/api"}),u={name:"NewWallet",data:function(){return{msg:"Welcome to NewWallet",showBackendResponse:!1,showBackendError:!1,showBackendErrorHeader:!1,location:"D:\\WorkingFolder\\workspace\\monager\\frontend\\src\\components\\NewWallet.vue",response:[],errors:[]}},methods:{callRestService:function(){var t=this;d.get("/hello").then(function(e){t.response=e.data,t.showBackendResponse=!0,console.log(e.data)}).catch(function(e){t.showBackendError=!0,t.showBackendErrorHeader=!0,t.errors.push(e)})}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"newWallet"},[s("b-alert",{attrs:{variant:"info",show:""}},[t._v(t._s(t.msg)+" ---\x3e Location: "+t._s(t.location))]),s("br"),t._v(" "),s("b-alert"),t._v(" "),s("b-alert",{attrs:{variant:"success",show:t.showBackendResponse}},[t._v("Backend response:"+t._s(t.response))]),t._v(" "),s("b-alert",{attrs:{variant:"danger",show:t.showBackendError}},[t._v("Backend response Detail Error:"+t._s(t.errors))]),t._v(" "),s("button",{on:{click:t.callRestService}},[t._v("Call Api ")])],1)},staticRenderFns:[]},p=s("VU/8")(u,v,!1,null,null,null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",{staticClass:"mt-4 mb-3"},[t._v("Contact\n    "),s("small",[t._v("Subheading")])]),t._v(" "),s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("a",{attrs:{href:"/"}},[t._v("Home")])]),t._v(" "),s("li",{staticClass:"breadcrumb-item active"},[t._v("Contact")])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8 mb-4"},[s("iframe",{attrs:{width:"100%",height:"400px",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",src:"http://maps.google.com/maps?hl=en&ie=UTF8&ll=37.0625,-95.677068&spn=56.506174,79.013672&t=m&z=4&output=embed"}})]),t._v(" "),s("div",{staticClass:"col-lg-4 mb-4"},[s("h3",[t._v("Contact Details")]),t._v(" "),s("p",[t._v("\n        299 GlenLake Ave\n        "),s("br"),t._v("Toronto, M6P 4A6\n        "),s("br")]),t._v(" "),s("p",[s("abbr",{attrs:{title:"Phone"}},[t._v("P")]),t._v(": (437) 344-8260\n      ")]),t._v(" "),s("p",[s("abbr",{attrs:{title:"Email"}},[t._v("E")]),t._v(":\n        "),s("a",{attrs:{href:"mailto:name@example.com"}},[t._v("Kushdev@gmail.com\n        ")])]),t._v(" "),s("p",[s("abbr",{attrs:{title:"Hours"}},[t._v("H")]),t._v(": Monday - Friday: 9:00 AM to 5:00 PM\n      ")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8 mb-4"},[s("h3",[t._v("Send us a Message")]),t._v(" "),s("form",{attrs:{name:"sentMessage",id:"contactForm",novalidate:""}},[s("div",{staticClass:"control-group form-group"},[s("div",{staticClass:"controls"},[s("label",[t._v("Full Name:")]),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",id:"name",required:"","data-validation-required-message":"Please enter your name."}}),t._v(" "),s("p",{staticClass:"help-block"})])]),t._v(" "),s("div",{staticClass:"control-group form-group"},[s("div",{staticClass:"controls"},[s("label",[t._v("Phone Number:")]),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"tel",id:"phone",required:"","data-validation-required-message":"Please enter your phone number."}})])]),t._v(" "),s("div",{staticClass:"control-group form-group"},[s("div",{staticClass:"controls"},[s("label",[t._v("Email Address:")]),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"email",id:"email",required:"","data-validation-required-message":"Please enter your email address."}})])]),t._v(" "),s("div",{staticClass:"control-group form-group"},[s("div",{staticClass:"controls"},[s("label",[t._v("Message:")]),t._v(" "),s("textarea",{staticClass:"form-control",staticStyle:{resize:"none"},attrs:{rows:"10",cols:"100",id:"message",required:"","data-validation-required-message":"Please enter your message",maxlength:"999"}})])]),t._v(" "),s("div",{attrs:{id:"success"}}),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"sendMessageButton"}},[t._v("Send Message")])])])])])}]},g=s("VU/8")(null,h,!1,null,null,null).exports,_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",{staticClass:"mt-4 mb-3"},[t._v("About\n    "),s("small",[t._v("Subheading")])]),t._v(" "),s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("a",{attrs:{href:"/"}},[t._v("Home")])]),t._v(" "),s("li",{staticClass:"breadcrumb-item active"},[t._v("About")])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("img",{staticClass:"img-fluid rounded mb-4",attrs:{src:"http://placehold.it/750x450",alt:""}})]),t._v(" "),s("div",{staticClass:"col-lg-6"},[s("h2",[t._v("About Modern Business")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit dolorum!")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?")])])]),t._v(" "),s("h2",[t._v("Our Team")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 mb-4"},[s("div",{staticClass:"card h-100 text-center"},[s("img",{staticClass:"card-img-top",attrs:{src:"http://placehold.it/750x450",alt:""}}),t._v(" "),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v("Team Member")]),t._v(" "),s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("Position")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.")])]),t._v(" "),s("div",{staticClass:"card-footer"},[s("a",{attrs:{href:"#"}},[t._v("name@example.com")])])])]),t._v(" "),s("div",{staticClass:"col-lg-4 mb-4"},[s("div",{staticClass:"card h-100 text-center"},[s("img",{staticClass:"card-img-top",attrs:{src:"http://placehold.it/750x450",alt:""}}),t._v(" "),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v("Team Member")]),t._v(" "),s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("Position")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.")])]),t._v(" "),s("div",{staticClass:"card-footer"},[s("a",{attrs:{href:"#"}},[t._v("name@example.com")])])])]),t._v(" "),s("div",{staticClass:"col-lg-4 mb-4"},[s("div",{staticClass:"card h-100 text-center"},[s("img",{staticClass:"card-img-top",attrs:{src:"http://placehold.it/750x450",alt:""}}),t._v(" "),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v("Team Member")]),t._v(" "),s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("Position")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.")])]),t._v(" "),s("div",{staticClass:"card-footer"},[s("a",{attrs:{href:"#"}},[t._v("name@example.com")])])])])]),t._v(" "),s("h2",[t._v("Our Customers")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-2 col-sm-4 mb-4"},[s("img",{staticClass:"img-fluid",attrs:{src:"http://placehold.it/500x300",alt:""}})]),t._v(" "),s("div",{staticClass:"col-lg-2 col-sm-4 mb-4"},[s("img",{staticClass:"img-fluid",attrs:{src:"http://placehold.it/500x300",alt:""}})]),t._v(" "),s("div",{staticClass:"col-lg-2 col-sm-4 mb-4"},[s("img",{staticClass:"img-fluid",attrs:{src:"http://placehold.it/500x300",alt:""}})]),t._v(" "),s("div",{staticClass:"col-lg-2 col-sm-4 mb-4"},[s("img",{staticClass:"img-fluid",attrs:{src:"http://placehold.it/500x300",alt:""}})]),t._v(" "),s("div",{staticClass:"col-lg-2 col-sm-4 mb-4"},[s("img",{staticClass:"img-fluid",attrs:{src:"http://placehold.it/500x300",alt:""}})]),t._v(" "),s("div",{staticClass:"col-lg-2 col-sm-4 mb-4"},[s("img",{staticClass:"img-fluid",attrs:{src:"http://placehold.it/500x300",alt:""}})])])])}]},b=s("VU/8")(null,_,!1,null,null,null).exports;a.a.use(n.a);var f=new n.a({mode:"history",routes:[{path:"/",name:"Home",component:c},{path:"/findallActivePools",name:"ActivePools",component:p},{path:"/about",name:"About",component:b},{path:"/contact",name:"Contact",component:g}]}),C=s("e6fC");s("Jmt5"),s("9M+g"),s("oNFY");a.a.config.productionTip=!1,a.a.use(C.a),new a.a({el:"#app",router:f,components:{App:r},template:"<App/>"})},Y240:function(t,e){},oNFY:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.03edb873c555def9b18b.js.map