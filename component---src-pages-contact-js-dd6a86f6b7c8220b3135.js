(self.webpackChunkgatsby=self.webpackChunkgatsby||[]).push([[501],{3349:function(t,e,n){"use strict";function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{Z:function(){return a}})},2715:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var a=n(3349),i=n(3552),o=n(7294),s=n(5444),l=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={toggle:"",curren_location:"/"},n.toggle=n.toggle.bind((0,a.Z)(n)),n}(0,i.Z)(e,t);var n=e.prototype;return n.toggle=function(){this.setState({toggle:"closed"===this.state.toggle||""===this.state.toggle?"open":"closed"})},n.componentDidMount=function(){this.setState({curren_location:window.location.pathname})},n.navLinks=function(t){var e=this,n=["Home","Projects","About","Contact"],a=[];return["/","/projects","/about","/contact"].forEach((function(t,i){t===e.state.curren_location?a.push(o.createElement("li",{key:i,className:"nav_link menu"},o.createElement("h1",null,n[i]))):a.push(o.createElement("li",{key:i,className:"nav_link menu"},o.createElement(s.rU,{to:t},n[i])))})),this.props.info&&!t?o.createElement(o.Fragment,null):o.createElement("ul",{className:"nav_links "+t}," ",a," ")},n.toggleBtnType=function(){return this.props.info?"info":"menu"},n.infoContent=function(){if(this.props.info)return o.createElement("div",null,o.createElement("h1",{id:"info_title"},this.props.info.title),o.createElement("div",{id:"info_content"},o.createElement("p",null,this.props.info.content)))},n.render=function(){return o.createElement(o.Fragment,null,o.createElement("nav",{id:"nav_bar"},o.createElement("div",{id:"nav_btns",className:this.state.toggle},o.createElement("button",{id:"back_btn",className:this.state.toggle},o.createElement(s.rU,{to:this.props.backLink,className:"material-icons"},"arrow_back")),this.navLinks("desktop"),o.createElement("button",{id:"toggle_btn",className:this.toggleBtnType(),onClick:this.toggle},o.createElement("span",{className:"material-icons"},"open"===this.state.toggle?"close":this.toggleBtnType())))),o.createElement("div",{id:"nav_content",className:this.toggleBtnType()+" "+this.state.toggle},this.navLinks(),this.infoContent()))},e}(o.Component)},262:function(t,e,n){"use strict";n.r(e);var a=n(7294),i=n(2715);e.default=function(){return a.createElement("div",{id:"site_wrapper"},a.createElement(i.Z,{backLink:"/"}),a.createElement("main",null,a.createElement("h1",null,"Contact")))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-dd6a86f6b7c8220b3135.js.map