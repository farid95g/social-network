(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{13:function(e,t,s){e.exports={messages:"Messages_messages__3nihU",messageSenders:"Messages_messageSenders__1irsX",sender:"Messages_sender__EX4OI",active:"Messages_active__1ubTQ",messagesBlock:"Messages_messagesBlock__p06jK",newMessage:"Messages_newMessage__1cK15"}},21:function(e,t,s){e.exports={newPost:"Posts_newPost__2mZ0p",btnAdd:"Posts_btnAdd__3IjVO",btnRemove:"Posts_btnRemove__DgHcl",postsWrapper:"Posts_postsWrapper__523r-"}},22:function(e,t,s){e.exports={pagination:"Users_pagination__2H4CE",selectedPage:"Users_selectedPage__2qp5H",user:"Users_user__2d3Ye",userPhoto:"Users_userPhoto__3qJ0S",userInfo:"Users_userInfo__1aiDT"}},28:function(e,t,s){e.exports={header:"Header_header__c-4W_",loginBlock:"Header_loginBlock__32dkd"}},31:function(e,t,s){e.exports={post:"Post_post__1bo2R",like:"Post_like__3NR_q"}},41:function(e,t,s){},42:function(e,t,s){e.exports={profileInfo:"ProfileInfo_profileInfo__oW-tL"}},49:function(e,t,s){},50:function(e,t,s){},6:function(e,t,s){e.exports={sidebar:"Sidebar_sidebar__2ZvQ8",nav:"Sidebar_nav__190zB",item:"Sidebar_item__60To_",active:"Sidebar_active__2lcjf"}},75:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(24),c=s.n(r),i=(s(49),s(50),s(2)),o=s(14),u=s(15),l=s(17),d=s(16),j=s(28),b=s.n(j),p=s.p+"static/media/logo.6ce24c58.svg",h=s(5),g=s(0),f=function(e){return Object(g.jsxs)("header",{className:b.a.header,children:[Object(g.jsx)("img",{src:p,alt:"company logo"}),Object(g.jsx)("div",{className:b.a.loginBlock,children:e.isAuth?Object(g.jsx)("span",{children:e.login}):Object(g.jsx)(h.b,{to:"/login",children:"Login"})})]})},O=s(7),m=s(40).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9cccbd4c-f715-472c-b861-204e6716d74a"}}),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return m.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},v=function(e){return m.post("follow/".concat(e)).then((function(e){return e.data}))},_=function(e){return m.delete("follow/".concat(e)).then((function(e){return e.data}))},P=function(e){return console.warn("Obsolete method! Please, use profileAPI object."),w.getProfile(e)},w={getProfile:function(e){return m.get("profile/".concat(e))},getStatus:function(e){return m.get("profile/status/".concat(e))},updateStatus:function(e){return m.put("/profile/status",{status:e})}},S=function(){return m.get("auth/me")},N="SET_USER_DATA",y={id:null,login:null,email:null,isAuth:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(i.a)(Object(i.a)(Object(i.a)({},e),t.data),{},{isAuth:!0});default:return e}},k=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(g.jsx)(f,Object(i.a)({},this.props))}}]),s}(n.Component),T=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:function(){return function(e){S().then((function(t){if(0===t.data.resultCode){var s=t.data.data,n=s.id,a=s.login,r=s.email;e(function(e,t,s){return{type:N,data:{id:e,login:t,email:s}}}(n,a,r))}}))}}})(k),E=s(6),U=s.n(E),M=function(){return Object(g.jsx)("aside",{className:U.a.sidebar,children:Object(g.jsx)("nav",{className:U.a.nav,children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{className:"".concat(U.a.item," ").concat(U.a.active),children:Object(g.jsx)(h.b,{to:"/profile",activeClassName:U.a.active,children:"Profile"})}),Object(g.jsx)("li",{className:U.a.item,children:Object(g.jsx)(h.b,{to:"/messages",activeClassName:U.a.active,children:"Messages"})}),Object(g.jsx)("li",{className:U.a.item,children:Object(g.jsx)(h.b,{to:"/users",activeClassName:U.a.active,children:"Users"})}),Object(g.jsx)("li",{className:U.a.item,children:Object(g.jsx)(h.b,{to:"/news",activeClassName:U.a.active,children:"News"})}),Object(g.jsx)("li",{className:U.a.item,children:Object(g.jsx)(h.b,{to:"/music",activeClassName:U.a.active,children:"Music"})}),Object(g.jsx)("li",{className:U.a.item,children:Object(g.jsx)(h.b,{to:"/options",activeClassName:U.a.active,children:"Options"})})]})})})},I=s(41),A=s.n(I),F=s.p+"static/media/preloader.50cd3412.gif",R=function(e){return Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:F,alt:"preloader",width:"250"})})},B=s(42),D=s.n(B),L=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[!this.state.editMode&&Object(g.jsx)("div",{children:Object(g.jsx)("span",{onDoubleClick:this.activateEditMode,children:this.props.status||"No status..."})}),this.state.editMode&&Object(g.jsx)("div",{children:Object(g.jsx)("input",{autoFocus:!0,onBlur:this.deactivateEditMode,value:this.state.status,onChange:this.onStatusChange})})]})}}]),s}(a.a.Component),G=function(e){return e.profile?Object(g.jsxs)("div",{className:D.a.profileInfo,children:[Object(g.jsx)("img",{src:"https://wallpaperaccess.com/full/3949076.jpg",alt:"cover img"}),Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:e.profile.photos.large,alt:"profile img"})}),Object(g.jsx)(L,{status:e.status,updateStatus:e.updateStatus})]}):Object(g.jsx)(R,{})},H=s(21),z=s.n(H),W=s(31),q=s.n(W),J=s(44),K=function(e){return Object(g.jsx)("div",{className:q.a.post,children:Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:"https://freesvg.org/img/Male-Avatar.png",alt:"profile img"}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{children:e.message}),Object(g.jsx)("br",{}),Object(g.jsxs)("span",{className:q.a.like,children:[Object(g.jsx)(J.a,{}),Object(g.jsx)("span",{children:e.likesCount})]})]})]})})},X=function(e){var t=e.posts.map((function(e){return Object(g.jsx)(K,{id:e.id,message:e.message,likesCount:e.likesCount},e.id)}));return Object(g.jsxs)("div",{className:z.a.posts,children:[Object(g.jsx)("h3",{children:"My Posts"}),Object(g.jsxs)("div",{className:z.a.newPost,children:[Object(g.jsx)("textarea",{onChange:function(t){var s=t.target.value;e.updateNewPostText(s)},value:e.newPostText}),Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{className:z.a.btnAdd,onClick:function(){e.addPost()},children:"Add post"}),Object(g.jsx)("button",{className:z.a.btnRemove,children:"Remove post"})]})]}),Object(g.jsx)("div",{className:z.a.postsWrapper,children:t})]})},Y=s(20),Q="ADD-POST",Z="UPDATE-NEW-POST-TEXT",V="SET-USER-PROFILE",$="SET-USER-STATUS",ee="UPDATE-USER-STATUS",te={posts:[{id:1,message:"Hello. How are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Bla bla",likesCount:54},{id:4,message:"Ok, anyway",likesCount:6}],newPostText:"",profile:null,status:""},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(Y.a)(e.posts),[{id:e.posts.length+1,message:e.newPostText,likesCount:0}]),newPostText:""});case Z:return Object(i.a)(Object(i.a)({},e),{},{newPostText:t.newText});case V:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case $:case ee:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});default:return e}},ne=Object(O.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){var s=function(e){return{type:Z,newText:e}}(t);e(s)},addPost:function(){e({type:Q})}}}))(X),ae=function(e){return Object(g.jsxs)("section",{className:A.a.profile,children:[Object(g.jsx)(G,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(g.jsx)(ne,{})]})},re=s(4),ce=function(e){return{isAuth:e.auth.isAuth}},ie=s(18),oe=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=19030),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return Object(g.jsx)(ae,Object(i.a)(Object(i.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(a.a.Component),ue=Object(ie.c)(Object(O.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getUserProfile:function(e){return function(t){P(e).then((function(e){var s;t((s=e.data,{type:V,profile:s}))}))}},getUserStatus:function(e){return function(t){w.getStatus(e).then((function(e){var s;t((s=e.data,{type:$,status:s}))}))}},updateStatus:function(e){return function(t){w.updateStatus(e).then((function(s){0===s.data.resultCode&&t(function(e){return{type:ee,status:e}}(e))}))}}}),re.f)(oe),le=s(13),de=s.n(le),je=function(e){return Object(g.jsx)("div",{className:de.a.message,children:Object(g.jsx)("span",{children:e.message})})},be=function(e){var t="/messages/".concat(e.id);return Object(g.jsx)("li",{className:de.a.sender+" "+de.a.active,children:Object(g.jsx)(h.b,{to:t,activeClassName:de.a.active,children:e.name})})},pe=function(e){var t=e.state.senders.map((function(e){return Object(g.jsx)(be,{id:e.id,name:e.name},e.id)})),s=e.state.messages.map((function(e){return Object(g.jsx)(je,{id:e.id,message:e.message},e.id)}));return Object(g.jsxs)("section",{className:de.a.messages,children:[Object(g.jsx)("div",{className:de.a.messageSenders,children:Object(g.jsx)("ul",{children:t})}),Object(g.jsxs)("div",{className:de.a.messagesBlock,children:[s,Object(g.jsxs)("div",{className:de.a.newMessage,children:[Object(g.jsx)("textarea",{onChange:function(t){var s=t.target.value;e.updateNewMessageBody(s)},value:e.state.newMessageBody,placeholder:"Enter your message"}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send"})})]})]})]})},he="SEND-MESSAGE",ge="UPDATE-NEW-MESSAGE-BODY",fe={senders:[{id:1,name:"Albert Einstein"},{id:2,name:"Nikola Tesla"},{id:3,name:"Marie Curie"},{id:4,name:"Stephen Hawking"},{id:5,name:"Neil De Grass Tyson"},{id:6,name:"Richard Feynman"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Fine, thanks, and you?"},{id:4,message:"Ok"},{id:5,message:"No problem"}],newMessageBody:""},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he:var s=e.newMessageBody;return Object(i.a)(Object(i.a)({},e),{},{newMessageBody:"",messages:[].concat(Object(Y.a)(e.messages),[{id:e.messages.length+1,message:s}])});case ge:return Object(i.a)(Object(i.a)({},e),{},{newMessageBody:t.body});default:return e}},me=Object(ie.c)(Object(O.b)((function(e){return{state:e.messagesPage}}),(function(e){return{updateNewMessageBody:function(t){var s=function(e){return{type:ge,body:e}}(t);e(s)},sendMessage:function(){e({type:he})}}})),(function(e){var t=function(t){Object(l.a)(n,t);var s=Object(d.a)(n);function n(){return Object(o.a)(this,n),s.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return this.props.isAuth?Object(g.jsx)(e,Object(i.a)({},this.props)):Object(g.jsx)(re.a,{to:"/login"})}}]),n}(a.a.Component);return Object(O.b)(ce)(t)}))(pe),xe=(s(75),function(){return Object(g.jsx)("section",{children:Object(g.jsx)("h5",{children:"News"})})}),ve=(s(76),function(){return Object(g.jsx)("section",{children:Object(g.jsx)("h5",{children:"Music"})})}),_e=(s(77),function(){return Object(g.jsx)("section",{children:Object(g.jsx)("h5",{children:"Options"})})}),Pe=s(22),we=s.n(Pe),Se=s.p+"static/media/avatar.6087f801.jpg",Ne=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),s=[],n=1;n<=t;n++)s.push(n);return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:we.a.pagination,children:s.map((function(t,s){return Object(g.jsx)("button",{className:e.currentPage===t&&we.a.selectedPage,onClick:function(){e.onPageChanged(t)},children:t},s)}))}),e.users.map((function(t){return Object(g.jsxs)("div",{className:we.a.user,children:[Object(g.jsxs)("div",{children:[Object(g.jsx)(h.b,{to:"/profile/".concat(t.id),children:Object(g.jsx)("img",{src:t.photos.small?t.photos.small:Se,alt:"avatar img",className:we.a.userPhoto})}),Object(g.jsx)("br",{}),t.followed?Object(g.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){return e.unfollow(t.id)},children:"Unfollow"}):Object(g.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){return e.follow(t.id)},children:"Follow"})]}),Object(g.jsxs)("div",{className:we.a.userInfo,children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{children:t.name}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{children:t.status})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{children:"u.location.country"}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{children:"u.location.city"})]})]})]},t.id)}))]})},ye="FOLLOW",Ce="UNFOLLOW",ke="SET_USERS",Te="SET_CURRENT_PAGE",Ee="SET_TOTAL_USERS_COUNT",Ue="TOGGLE_IS_FETCHING",Me="TOGGLE_FOLLOWING_IN_PROGRESS",Ie={users:[],pageSize:5,totalUsersCount:54,currentPage:1,isFetching:!1,followingInProgress:[]},Ae=function(e){return{type:ke,users:e}},Fe=function(e){return{type:Te,currentPage:e}},Re=function(e){return{type:Ue,isFetching:e}},Be=function(e,t){return{type:Me,isFetching:e,userId:t}},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case Ce:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case ke:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case Te:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case Ee:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsersCount});case Ue:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case Me:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(Y.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},Le=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[this.props.isFetching?Object(g.jsx)(R,{}):null,Object(g.jsx)(Ne,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),s}(a.a.Component),Ge=Object(O.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie.currentPage,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ie.pageSize;return function(s){s(Fe(e)),s(Re(!0)),x(e,t).then((function(e){s(Re(!1)),s(Ae(e.items))}))}},follow:function(e){return function(t){t(Be(!0,e)),v(e).then((function(s){0===s.resultCode&&t(function(e){return{type:ye,userId:e}}(e)),t(Be(!1,e))}))}},unfollow:function(e){return function(t){t(Be(!0,e)),_(e).then((function(s){0===s.resultCode&&t(function(e){return{type:Ce,userId:e}}(e)),t(Be(!1,e))}))}}})(Le),He=function(e){return Object(g.jsx)("div",{children:Object(g.jsx)("h1",{children:"Login Page"})})};var ze=function(){return Object(g.jsxs)("div",{className:"app-wrapper",children:[Object(g.jsx)(T,{}),Object(g.jsx)(M,{}),Object(g.jsxs)("main",{className:"app-wrapper-content",children:[Object(g.jsx)(re.b,{path:"/profile/:userId?",render:function(){return Object(g.jsx)(ue,{})}}),Object(g.jsx)(re.b,{path:"/messages",render:function(){return Object(g.jsx)(me,{})}}),Object(g.jsx)(re.b,{path:"/users",render:function(){return Object(g.jsx)(Ge,{})}}),Object(g.jsx)(re.b,{path:"/news",render:xe}),Object(g.jsx)(re.b,{path:"/music",render:ve}),Object(g.jsx)(re.b,{path:"/options",render:_e}),Object(g.jsx)(re.b,{path:"/login",render:He})]})]})},We=s(43),qe=Object(ie.b)({profilePage:se,messagesPage:Oe,usersPage:De,auth:C}),Je=Object(ie.d)(qe,Object(ie.a)(We.a));window.store=Je;var Ke=Je;c.a.render(Object(g.jsx)(h.a,{children:Object(g.jsx)(O.a,{store:Ke,children:Object(g.jsx)(ze,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.6a0b7d23.chunk.js.map