(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),s=n(5),r=n(4),l=n(1),u=n.n(l),m=(n(12),n(0)),h=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={today:new Date},t.timeDate=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timeDate=window.setInterval((function(){t.setState({today:new Date})}),1e3),console.info(this.state)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.debug("Renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeDate)}},{key:"render",value:function(){var t=this.state.today,e=this.props.name,n=t.toUTCString().slice(-12,-4);return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:n})]})}}]),n}(u.a.Component);function d(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var v=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},t.timerId=0,t.handleDocumentRight=function(e){e.preventDefault(),t.setState({hasClock:!1})},t.handleDocumentLeft=function(){t.setState({hasClock:!0})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({clockName:d()})}),3300),document.addEventListener("click",this.handleDocumentLeft),document.addEventListener("contextmenu",this.handleDocumentRight)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId),document.removeEventListener("contextmenu",this.handleDocumentRight),document.removeEventListener("click",this.handleDocumentLeft)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),e&&Object(m.jsx)(h,{name:n})]})}}]),n}(u.a.Component);a.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.57b51f6f.chunk.js.map