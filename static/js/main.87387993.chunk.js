(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{13:function(e,t,s){e.exports={messages:"Messages_messages__3nihU",messageSenders:"Messages_messageSenders__1irsX",sender:"Messages_sender__EX4OI",active:"Messages_active__1ubTQ",messagesBlock:"Messages_messagesBlock__p06jK",newMessage:"Messages_newMessage__1cK15"}},21:function(e,t,s){e.exports={newPost:"Posts_newPost__2mZ0p",btnAdd:"Posts_btnAdd__3IjVO",btnRemove:"Posts_btnRemove__DgHcl",postsWrapper:"Posts_postsWrapper__523r-"}},22:function(e,t,s){e.exports={pagination:"Users_pagination__2H4CE",selectedPage:"Users_selectedPage__2qp5H",user:"Users_user__2d3Ye",userPhoto:"Users_userPhoto__3qJ0S",userInfo:"Users_userInfo__1aiDT"}},28:function(e,t,s){e.exports={header:"Header_header__c-4W_",loginBlock:"Header_loginBlock__32dkd"}},31:function(e,t,s){e.exports={post:"Post_post__1bo2R",like:"Post_like__3NR_q"}},41:function(e,t,s){},42:function(e,t,s){e.exports={profileInfo:"ProfileInfo_profileInfo__oW-tL"}},49:function(e,t,s){},50:function(e,t,s){},6:function(e,t,s){e.exports={sidebar:"Sidebar_sidebar__2ZvQ8",nav:"Sidebar_nav__190zB",item:"Sidebar_item__60To_",active:"Sidebar_active__2lcjf"}},75:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(24),c=s.n(r),i=(s(49),s(50),s(2)),o=s(14),u=s(15),l=s(17),j=s(16),d=s(28),b=s.n(d),p=s.p+"static/media/logo.6ce24c58.svg",h=s(5),g=s(0),O=function(e){return Object(g.jsxs)("header",{className:b.a.header,children:[Object(g.jsx)("img",{src:p,alt:"company logo"}),Object(g.jsx)("div",{className:b.a.loginBlock,children:e.isAuth?Object(g.jsx)("span",{children:e.login}):Object(g.jsx)(h.b,{to:"/login",children:"Login"})})]})},f=s(7),m=s(40).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9cccbd4c-f715-472c-b861-204e6716d74a"}}),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return m.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},v=function(e){return m.post("follow/".concat(e)).then((function(e){return e.data}))},_=function(e){return m.delete("follow/".concat(e)).then((function(e){return e.data}))},P=function(e){return m.get("profile/".concat(e))},w=function(){return m.get("auth/me")},N="SET_USER_DATA",y={id:null,login:null,email:null,isAuth:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(i.a)(Object(i.a)(Object(i.a)({},e),t.data),{},{isAuth:!0});default:return e}},k=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(g.jsx)(O,Object(i.a)({},this.props))}}]),s}(n.Component),S=Object(f.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:function(){return function(e){w().then((function(t){if(0===t.data.resultCode){var s=t.data.data,n=s.id,a=s.login,r=s.email;e(function(e,t,s){return{type:N,data:{id:e,login:t,email:s}}}(n,a,r))}}))}}})(k),M=s(6),I=s.n(M),E=function(){return Object(g.jsx)("aside",{className:I.a.sidebar,children:Object(g.jsx)("nav",{className:I.a.nav,children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{className:"".concat(I.a.item," ").concat(I.a.active),children:Object(g.jsx)(h.b,{to:"/profile",activeClassName:I.a.active,children:"Profile"})}),Object(g.jsx)("li",{className:I.a.item,children:Object(g.jsx)(h.b,{to:"/messages",activeClassName:I.a.active,children:"Messages"})}),Object(g.jsx)("li",{className:I.a.item,children:Object(g.jsx)(h.b,{to:"/users",activeClassName:I.a.active,children:"Users"})}),Object(g.jsx)("li",{className:I.a.item,children:Object(g.jsx)(h.b,{to:"/news",activeClassName:I.a.active,children:"News"})}),Object(g.jsx)("li",{className:I.a.item,children:Object(g.jsx)(h.b,{to:"/music",activeClassName:I.a.active,children:"Music"})}),Object(g.jsx)("li",{className:I.a.item,children:Object(g.jsx)(h.b,{to:"/options",activeClassName:I.a.active,children:"Options"})})]})})})},T=s(41),U=s.n(T),A=s.p+"static/media/preloader.50cd3412.gif",F=function(e){return Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:A,alt:"preloader",width:"250"})})},B=s(42),R=s.n(B),D=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,title:"Yo"},e.toggleEditMode=function(t){e.setState({editMode:t})},e}return Object(u.a)(s,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{children:[!this.state.editMode&&Object(g.jsx)("div",{children:Object(g.jsx)("span",{onDoubleClick:function(){return e.toggleEditMode(!0)},children:this.props.status})}),this.state.editMode&&Object(g.jsx)("div",{children:Object(g.jsx)("input",{autoFocus:!0,onBlur:function(){return e.toggleEditMode(!1)},value:this.props.status})})]})}}]),s}(a.a.Component),L=function(e){return e.profile?Object(g.jsxs)("div",{className:R.a.profileInfo,children:[Object(g.jsx)("img",{src:"https://wallpaperaccess.com/full/3949076.jpg",alt:"cover img"}),Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:e.profile.photos.large,alt:"profile img"})}),Object(g.jsx)(D,{status:"Hello my friends"})]}):Object(g.jsx)(F,{})},H=s(21),G=s.n(H),z=s(31),W=s.n(z),Y=s(44),q=function(e){return Object(g.jsx)("div",{className:W.a.post,children:Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:"https://freesvg.org/img/Male-Avatar.png",alt:"profile img"}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{children:e.message}),Object(g.jsx)("br",{}),Object(g.jsxs)("span",{className:W.a.like,children:[Object(g.jsx)(Y.a,{}),Object(g.jsx)("span",{children:e.likesCount})]})]})]})})},J=function(e){var t=e.posts.map((function(e){return Object(g.jsx)(q,{id:e.id,message:e.message,likesCount:e.likesCount},e.id)}));return Object(g.jsxs)("div",{className:G.a.posts,children:[Object(g.jsx)("h3",{children:"My Posts"}),Object(g.jsxs)("div",{className:G.a.newPost,children:[Object(g.jsx)("textarea",{onChange:function(t){var s=t.target.value;e.updateNewPostText(s)},value:e.newPostText}),Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{className:G.a.btnAdd,onClick:function(){e.addPost()},children:"Add post"}),Object(g.jsx)("button",{className:G.a.btnRemove,children:"Remove post"})]})]}),Object(g.jsx)("div",{className:G.a.postsWrapper,children:t})]})},K=s(20),X="ADD-POST",Q="UPDATE-NEW-POST-TEXT",Z="SET-USER-PROFILE",V={posts:[{id:1,message:"Hello. How are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Bla bla",likesCount:54},{id:4,message:"Ok, anyway",likesCount:6}],newPostText:"",profile:null},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(K.a)(e.posts),[{id:e.posts.length+1,message:e.newPostText,likesCount:0}]),newPostText:""});case Q:return Object(i.a)(Object(i.a)({},e),{},{newPostText:t.newText});case Z:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});default:return e}},ee=Object(f.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){var s=function(e){return{type:Q,newText:e}}(t);e(s)},addPost:function(){e({type:X})}}}))(J),te=function(e){return Object(g.jsxs)("section",{className:U.a.profile,children:[Object(g.jsx)(L,{profile:e.profile}),Object(g.jsx)(ee,{})]})},se=s(4),ne=function(e){return{isAuth:e.auth.isAuth}},ae=s(18),re=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=2),this.props.getUserProfile(e)}},{key:"render",value:function(){return Object(g.jsx)(te,Object(i.a)(Object(i.a)({},this.props),{},{profile:this.props.profile}))}}]),s}(a.a.Component),ce=Object(ae.c)(Object(f.b)((function(e){return{profile:e.profilePage.profile}}),{getUserProfile:function(e){return function(t){P(e).then((function(e){var s;t((s=e.data,{type:Z,profile:s}))}))}}}),se.f)(re),ie=s(13),oe=s.n(ie),ue=function(e){return Object(g.jsx)("div",{className:oe.a.message,children:Object(g.jsx)("span",{children:e.message})})},le=function(e){var t="/messages/".concat(e.id);return Object(g.jsx)("li",{className:oe.a.sender+" "+oe.a.active,children:Object(g.jsx)(h.b,{to:t,activeClassName:oe.a.active,children:e.name})})},je=function(e){var t=e.state.senders.map((function(e){return Object(g.jsx)(le,{id:e.id,name:e.name},e.id)})),s=e.state.messages.map((function(e){return Object(g.jsx)(ue,{id:e.id,message:e.message},e.id)}));return Object(g.jsxs)("section",{className:oe.a.messages,children:[Object(g.jsx)("div",{className:oe.a.messageSenders,children:Object(g.jsx)("ul",{children:t})}),Object(g.jsxs)("div",{className:oe.a.messagesBlock,children:[s,Object(g.jsxs)("div",{className:oe.a.newMessage,children:[Object(g.jsx)("textarea",{onChange:function(t){var s=t.target.value;e.updateNewMessageBody(s)},value:e.state.newMessageBody,placeholder:"Enter your message"}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send"})})]})]})]})},de="SEND-MESSAGE",be="UPDATE-NEW-MESSAGE-BODY",pe={senders:[{id:1,name:"Albert Einstein"},{id:2,name:"Nikola Tesla"},{id:3,name:"Marie Curie"},{id:4,name:"Stephen Hawking"},{id:5,name:"Neil De Grass Tyson"},{id:6,name:"Richard Feynman"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Fine, thanks, and you?"},{id:4,message:"Ok"},{id:5,message:"No problem"}],newMessageBody:""},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:var s=e.newMessageBody;return Object(i.a)(Object(i.a)({},e),{},{newMessageBody:"",messages:[].concat(Object(K.a)(e.messages),[{id:e.messages.length+1,message:s}])});case be:return Object(i.a)(Object(i.a)({},e),{},{newMessageBody:t.body});default:return e}},ge=Object(ae.c)(Object(f.b)((function(e){return{state:e.messagesPage}}),(function(e){return{updateNewMessageBody:function(t){var s=function(e){return{type:be,body:e}}(t);e(s)},sendMessage:function(){e({type:de})}}})),(function(e){var t=function(t){Object(l.a)(n,t);var s=Object(j.a)(n);function n(){return Object(o.a)(this,n),s.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return this.props.isAuth?Object(g.jsx)(e,Object(i.a)({},this.props)):Object(g.jsx)(se.a,{to:"/login"})}}]),n}(a.a.Component);return Object(f.b)(ne)(t)}))(je),Oe=(s(75),function(){return Object(g.jsx)("section",{children:Object(g.jsx)("h5",{children:"News"})})}),fe=(s(76),function(){return Object(g.jsx)("section",{children:Object(g.jsx)("h5",{children:"Music"})})}),me=(s(77),function(){return Object(g.jsx)("section",{children:Object(g.jsx)("h5",{children:"Options"})})}),xe=s(22),ve=s.n(xe),_e=s.p+"static/media/avatar.6087f801.jpg",Pe=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),s=[],n=1;n<=t;n++)s.push(n);return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:ve.a.pagination,children:s.map((function(t,s){return Object(g.jsx)("button",{className:e.currentPage===t&&ve.a.selectedPage,onClick:function(){e.onPageChanged(t)},children:t},s)}))}),e.users.map((function(t){return Object(g.jsxs)("div",{className:ve.a.user,children:[Object(g.jsxs)("div",{children:[Object(g.jsx)(h.b,{to:"/profile/".concat(t.id),children:Object(g.jsx)("img",{src:t.photos.small?t.photos.small:_e,alt:"avatar img",className:ve.a.userPhoto})}),Object(g.jsx)("br",{}),t.followed?Object(g.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){return e.unfollow(t.id)},children:"Unfollow"}):Object(g.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){return e.follow(t.id)},children:"Follow"})]}),Object(g.jsxs)("div",{className:ve.a.userInfo,children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{children:t.name}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{children:t.status})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{children:"u.location.country"}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{children:"u.location.city"})]})]})]},t.id)}))]})},we="FOLLOW",Ne="UNFOLLOW",ye="SET_USERS",Ce="SET_CURRENT_PAGE",ke="SET_TOTAL_USERS_COUNT",Se="TOGGLE_IS_FETCHING",Me="TOGGLE_FOLLOWING_IN_PROGRESS",Ie={users:[],pageSize:5,totalUsersCount:54,currentPage:1,isFetching:!1,followingInProgress:[]},Ee=function(e){return{type:ye,users:e}},Te=function(e){return{type:Ce,currentPage:e}},Ue=function(e){return{type:Se,isFetching:e}},Ae=function(e,t){return{type:Me,isFetching:e,userId:t}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case Ne:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case ye:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case Ce:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case ke:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsersCount});case Se:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case Me:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(K.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},Be=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[this.props.isFetching?Object(g.jsx)(F,{}):null,Object(g.jsx)(Pe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),s}(a.a.Component),Re=Object(f.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie.currentPage,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ie.pageSize;return function(s){s(Te(e)),s(Ue(!0)),x(e,t).then((function(e){s(Ue(!1)),s(Ee(e.items))}))}},follow:function(e){return function(t){t(Ae(!0,e)),v(e).then((function(s){0===s.resultCode&&t(function(e){return{type:we,userId:e}}(e)),t(Ae(!1,e))}))}},unfollow:function(e){return function(t){t(Ae(!0,e)),_(e).then((function(s){0===s.resultCode&&t(function(e){return{type:Ne,userId:e}}(e)),t(Ae(!1,e))}))}}})(Be),De=function(e){return Object(g.jsx)("div",{children:Object(g.jsx)("h1",{children:"Login Page"})})};var Le=function(){return Object(g.jsxs)("div",{className:"app-wrapper",children:[Object(g.jsx)(S,{}),Object(g.jsx)(E,{}),Object(g.jsxs)("main",{className:"app-wrapper-content",children:[Object(g.jsx)(se.b,{path:"/profile/:userId?",render:function(){return Object(g.jsx)(ce,{})}}),Object(g.jsx)(se.b,{path:"/messages",render:function(){return Object(g.jsx)(ge,{})}}),Object(g.jsx)(se.b,{path:"/users",render:function(){return Object(g.jsx)(Re,{})}}),Object(g.jsx)(se.b,{path:"/news",render:Oe}),Object(g.jsx)(se.b,{path:"/music",render:fe}),Object(g.jsx)(se.b,{path:"/options",render:me}),Object(g.jsx)(se.b,{path:"/login",render:De})]})]})},He=s(43),Ge=Object(ae.b)({profilePage:$,messagesPage:he,usersPage:Fe,auth:C}),ze=Object(ae.d)(Ge,Object(ae.a)(He.a));window.store=ze;var We=ze;c.a.render(Object(g.jsx)(h.a,{children:Object(g.jsx)(f.a,{store:We,children:Object(g.jsx)(Le,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.87387993.chunk.js.map