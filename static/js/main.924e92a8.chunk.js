(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],[,,,,function(e,s,t){e.exports={sidebar:"Sidebar_sidebar__2ZvQ8",nav:"Sidebar_nav__190zB",item:"Sidebar_item__60To_",active:"Sidebar_active__2lcjf"}},,,,,function(e,s,t){e.exports={messages:"Messages_messages__3nihU",messageSenders:"Messages_messageSenders__1irsX",sender:"Messages_sender__EX4OI",active:"Messages_active__1ubTQ",messagesBlock:"Messages_messagesBlock__p06jK",newMessage:"Messages_newMessage__1cK15"}},,function(e,s,t){e.exports={newPost:"Posts_newPost__2mZ0p",btnAdd:"Posts_btnAdd__3IjVO",btnRemove:"Posts_btnRemove__DgHcl",postsWrapper:"Posts_postsWrapper__523r-"}},,,,,,function(e,s,t){e.exports={post:"Post_post__1bo2R",like:"Post_like__3NR_q"}},,,function(e,s,t){e.exports={header:"Header_header__c-4W_"}},,function(e,s,t){},function(e,s,t){e.exports={profileInfo:"ProfileInfo_profileInfo__oW-tL"}},,function(e,s,t){},,,,,function(e,s,t){},,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);t(25);var a=t(1),c=t.n(a),n=t(19),i=t.n(n),r=(t(30),t(20)),o=t.n(r),j=t.p+"static/media/logo.6ce24c58.svg",l=t(0),d=function(){return Object(l.jsx)("header",{className:o.a.header,children:Object(l.jsx)("img",{src:j,alt:"company logo"})})},m=t(4),b=t.n(m),u=t(8),p=function(){return Object(l.jsx)("aside",{className:b.a.sidebar,children:Object(l.jsx)("nav",{className:b.a.nav,children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{className:"".concat(b.a.item," ").concat(b.a.active),children:Object(l.jsx)(u.b,{to:"/profile",activeClassName:b.a.active,children:"Profile"})}),Object(l.jsx)("li",{className:b.a.item,children:Object(l.jsx)(u.b,{to:"/messages",activeClassName:b.a.active,children:"Messages"})}),Object(l.jsx)("li",{className:b.a.item,children:Object(l.jsx)(u.b,{to:"/news",activeClassName:b.a.active,children:"News"})}),Object(l.jsx)("li",{className:b.a.item,children:Object(l.jsx)(u.b,{to:"/music",activeClassName:b.a.active,children:"Music"})}),Object(l.jsx)("li",{className:b.a.item,children:Object(l.jsx)(u.b,{to:"/options",activeClassName:b.a.active,children:"Options"})})]})})})},x=t(22),O=t.n(x),h=t(23),g=t.n(h),f=function(){return Object(l.jsx)("div",{className:g.a.profileInfo,children:Object(l.jsx)("img",{src:"https://wallpaperaccess.com/full/3949076.jpg",alt:"cover img"})})},_=t(11),v=t.n(_),N=t(17),k=t.n(N),P=t(24),w=function(e){return Object(l.jsx)("div",{className:k.a.post,children:Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:"https://freesvg.org/img/Male-Avatar.png",alt:"profile img"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:e.message}),Object(l.jsx)("br",{}),Object(l.jsxs)("span",{className:k.a.like,children:[Object(l.jsx)(P.a,{}),Object(l.jsx)("span",{children:e.likesCount})]})]})]})})},C=function(e){var s=e.posts.map((function(e){return Object(l.jsx)(w,{id:e.id,message:e.message,likesCount:e.likesCount},e.id)})),t=c.a.createRef();return Object(l.jsxs)("div",{className:v.a.posts,children:[Object(l.jsx)("h3",{children:"My Posts"}),Object(l.jsxs)("div",{className:v.a.newPost,children:[Object(l.jsx)("textarea",{ref:t}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:v.a.btnAdd,onClick:function(){var s=t.current.value;e.addPost(s),t.current.value=""},children:"Add post"}),Object(l.jsx)("button",{className:v.a.btnRemove,children:"Remove post"})]})]}),Object(l.jsx)("div",{className:v.a.postsWrapper,children:s})]})},M=function(e){return Object(l.jsxs)("section",{className:O.a.profile,children:[Object(l.jsx)(f,{}),Object(l.jsx)(C,{posts:e.state.posts,addPost:e.addPost})]})},y=t(9),S=t.n(y),R=function(e){return Object(l.jsx)("div",{className:S.a.message,children:Object(l.jsx)("span",{children:e.message})})},I=function(e){var s="/messages/".concat(e.id);return Object(l.jsx)("li",{className:S.a.sender+" "+S.a.active,children:Object(l.jsx)(u.b,{to:s,activeClassName:S.a.active,children:e.name})})},H=function(e){var s=e.state.senders.map((function(e){return Object(l.jsx)(I,{id:e.id,name:e.name},e.id)})),t=e.state.messages.map((function(e){return Object(l.jsx)(R,{id:e.id,message:e.message},e.id)})),a=c.a.createRef();return Object(l.jsxs)("section",{className:S.a.messages,children:[Object(l.jsx)("div",{className:S.a.messageSenders,children:Object(l.jsx)("ul",{children:s})}),Object(l.jsxs)("div",{className:S.a.messagesBlock,children:[t,Object(l.jsxs)("div",{className:S.a.newMessage,children:[Object(l.jsx)("textarea",{ref:a}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){var e=a.current.value;console.log(e)},children:"Send"})})]})]})]})},A=(t(37),function(){return Object(l.jsx)("section",{children:Object(l.jsx)("h5",{children:"News"})})}),B=(t(38),function(){return Object(l.jsx)("section",{children:Object(l.jsx)("h5",{children:"Music"})})}),W=(t(39),function(){return Object(l.jsx)("section",{children:Object(l.jsx)("h5",{children:"Options"})})}),T=t(2);var E=function(e){return Object(l.jsxs)("div",{className:"app-wrapper",children:[Object(l.jsx)(d,{}),Object(l.jsx)(p,{}),Object(l.jsxs)("main",{className:"app-wrapper-content",children:[Object(l.jsx)(T.a,{path:"/profile",render:function(){return Object(l.jsx)(M,{state:e.state.profilePage,addPost:e.addPost})}}),Object(l.jsx)(T.a,{path:"/messages",render:function(){return Object(l.jsx)(H,{state:e.state.messagesPage})}}),Object(l.jsx)(T.a,{path:"/news",render:A}),Object(l.jsx)(T.a,{path:"/music",render:B}),Object(l.jsx)(T.a,{path:"/options",render:W})]})]})},D=function(e){i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(u.a,{children:Object(l.jsx)(E,{state:e,addPost:J})})}),document.getElementById("root"))},F={profilePage:{posts:[{id:1,message:"Hello. How are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Bla bla",likesCount:54},{id:4,message:"Ok, anyway",likesCount:6}]},messagesPage:{senders:[{id:1,name:"Albert Einstein"},{id:2,name:"Nikola Tesla"},{id:3,name:"Marie Curie"},{id:4,name:"Stephen Hawking"},{id:5,name:"Neil De Grass Tyson"},{id:6,name:"Richard Feynman"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Fine, thanks, and you?"},{id:4,message:"Ok"},{id:5,message:"No problem"}]}},J=function(e){var s={id:F.profilePage.posts.length+1,message:e,likesCount:0};F.profilePage.posts.push(s),D(F)};D(F)}],[[40,1,2]]]);
//# sourceMappingURL=main.924e92a8.chunk.js.map