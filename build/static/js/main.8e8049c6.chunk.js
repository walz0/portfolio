(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},67:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){},76:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(1),a=n.n(i),c=n(31),r=n.n(c),o=(n(39),n(5)),l=n(6),h=n(8),u=n(7),d=(n(40),n(41),function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"Navbar",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/about",children:"about"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/contact",children:"contact"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/blog",children:"blog"})})]})})}}]),n}(i.Component)),j=n(32),p=n(3),b=(n(46),n(47),function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"textBox",value:function(){var t=this.props.text.replace(/^\s+/gm,"");return Object(s.jsx)("pre",{children:t})}},{key:"render",value:function(){return null!=this.props.text?Object(s.jsx)("div",{className:"Code",children:this.props.text?this.textBox():null}):Object(s.jsx)("div",{})}}]),n}(i.Component)),f=(n(48),n(14)),v=n.n(f),m=(n(67),function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).state={inputText:"",lines:["\n                ~\n                my name is aidan, im currently a freelance developer looking to\n                expand my horizons to something new and interesting. for the past\n                year i have specialized in web3 apps on the ethereum and solana\n                networks. i enjoy designing efficient and scalable systems to deliver\n                reliable products that push expectations. my true passion lies in\n                python development, many of my favorite projects are compact and\n                effective scripts i wrote on a binge after an idea popped into my\n                head. feel free to have a look at my work, and if you are interested\n                in working together send me an email @ aidan.m.walz@gmail.com\n                ~\n                Type 'help' for more info on the available commands..."],user:"root",wd:"~",prevPath:"",fs:{"~":{code:{},secret:{}}},version:null},s.ref=a.a.createRef(),s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.ref.current;e.scrollTop=e.scrollHeight+50,v.a.get("https://api.github.com/repos/walz0/portfolio/commits").then((function(e){t.setState({version:parseInt(e.data.length,10)})})).catch((function(t){}))}},{key:"push",value:function(t){for(var e=[],n=0;n<t.length;n++)void 0!==t[n]&&e.push(t[n]);this.setState({lines:this.state.lines.concat(e)})}},{key:"getCommand",value:function(t){var e=this,n={pwd:function(){return"~"!==e.state.wd?["~"+e.state.wd.slice(1)]:e.state.user},ls:function(){for(var t=e.state.wd.split("/"),n=[],s=[],i=0;i<t.length&&JSON.stringify(t)!=JSON.stringify(n);i++)s=e.state.fs[t[i]],n.push(t[i]);return void 0==s?void 0:Object.keys(s).join("  ")},cd:function(t){for(var n=e.state.wd.split("/"),s=[],i=0;i<n.length&&JSON.stringify(n)!=JSON.stringify(s);i++)e.state.fs[n[i]],s.push(n[i]);if("."!=t[0])if(".."!=t[0]){var a=t[0].slice(0,2);"./"!=a?".."==a||e.setState({wd:e.state.wd+"/"+t}):e.setState({wd:e.state.wd+"/"+t[0].slice(2)})}else{var c=e.state.wd.split("/");e.setState({wd:c.slice(0,c.length-1).join("/")})}},mkdir:function(t){if(void 0==t)return"mkdir: missing operand";var n=e.state.wd.split("/");if("~"==n[0]){var s=e.state.fs;return s["~"][t]={},void e.setState({fs:s})}for(var i=[],a=[],c=0;c<n.length-1&&JSON.stringify(n)!=JSON.stringify(i);c++)a=e.state.fs[n[c]],i.push(n[c]);a[n[n.length-1]][t]={},e.setState({fs:a})},banner:function(){return"\n                This is a banner\n                ===========================\n                :)\n            "},whoami:function(){return e.state.user}},s=t.split(" "),i=!1;s.length>1&&(i=!0);var a="";for(var c in n)s[0]===c&&(a=c);if(""!==a){var r="".concat(this.state.user,":").concat(this.state.wd,"\u03bb ").concat(t);i?this.push([r,n[a](s.slice(1))]):this.push([r,n[a]()])}else this.push(["".concat(t,": command not found")])}},{key:"handleInput",value:function(t){var e=this.state.user.length+2+this.state.wd.length+1;this.setState({inputText:t.target.value.slice(e)});var n=this.ref.current;null!=n&&(n.scrollTop=n.scrollHeight+50),t.target.selectionStart<e&&(t.target.selectionStart=e)}},{key:"inputBox",value:function(){return Object(s.jsx)("input",{autoFocus:!0,value:this.state.user+":"+this.state.wd+"\u03bb "+this.state.inputText,onChange:this.handleInput.bind(this),onKeyDown:this.submitInput.bind(this),onClick:this.handleInput.bind(this),spellCheck:!1})}},{key:"inputHistory",value:function(){for(var t="",e=0;e<200;e++)t+="\u2800\n            ";var n=this.state.lines;for(e=0;e<n.length;e++)0==e&&(t+="portfoliOS :: [Version ".concat(this.state.version,"]\n                ")),t+="".concat(n[e],"\n            ");return t=t.replace(/^\s+/gm,""),Object(s.jsx)("pre",{ref:this.ref,children:t})}},{key:"submitInput",value:function(t){var e=this;13===t.keyCode?(this.getCommand(this.state.inputText),this.setState({inputText:""},(function(){var t=e.ref.current;null!=t&&(t.scrollTop=t.scrollHeight+50)}))):t.target.selectionStart<=2&&(t.target.selectionStart=2)}},{key:"circle",value:function(t){return Object(s.jsx)("div",{className:"circle",children:Object(s.jsx)("svg",{viewBox:"0 0 100 100",id:"circle",children:Object(s.jsx)("circle",{cx:"50",cy:"50",r:"50",fill:t})})})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"Terminal",children:[Object(s.jsxs)("div",{className:"titleBar",children:[Object(s.jsxs)("div",{className:"controls",children:[this.circle("#FF6059"),this.circle("#FFBD2E"),this.circle("#28CA42")]}),"root"]}),this.inputHistory(),this.inputBox()]})}}]),n}(i.Component)),O=(n(68),function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).state={desc:void 0,lang:void 0,langIcon:void 0},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;v.a.get("https://api.github.com/repos/walz0/"+this.props.title,{headers:{Authorization:"Bearer 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"}}).then((function(e){t.setState({desc:e.data.description})})).catch((function(t){})),v.a.get("https://api.github.com/repos/walz0/"+this.props.title+"/languages",{headers:{Authorization:"Bearer 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"}}).then((function(e){var n=Object.keys(e.data)[0].toLowerCase();"html"==n&&(n="html5"),"c++"==n&&(n="cplusplus"),t.setState({lang:Object.keys(e.data)[0],langIcon:n})})).catch((function(t){}))}},{key:"render",value:function(){return console.log(this.state.lang),Object(s.jsxs)("div",{className:"Project",children:[Object(s.jsx)("div",{className:"project-title",children:this.props.title}),Object(s.jsx)("div",{className:"project-desc",children:this.state.desc}),Object(s.jsx)("div",{className:"github",children:Object(s.jsx)("a",{href:"https://github.com/walz0/"+this.props.title,target:"_blank",children:"Source Code"})}),void 0!==this.props.demo?Object(s.jsx)("div",{className:"demo",children:Object(s.jsx)("a",{href:this.props.demo,target:"_blank",children:"\ud83d\udcd1 Demo"})}):null,Object(s.jsxs)("div",{className:"language",children:[this.state.lang?Object(s.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/".concat(this.state.langIcon,"/").concat(this.state.langIcon,"-original.svg"),className:"lang-icon"}):null,this.state.lang]})]})}}]),n}(i.Component)),g=(n(69),function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"Section",children:[Object(s.jsx)("div",{className:"title",children:this.props.title}),Object(s.jsx)("div",{className:"desc",children:this.props.desc}),Object(s.jsx)("div",{className:"element",children:this.props.element})]})}}]),n}(i.Component)),x=(n(70),function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"Cascade",children:[Object(s.jsx)("div",{className:"green"}),Object(s.jsx)("div",{className:"yellow"}),Object(s.jsx)("div",{className:"orange"}),Object(s.jsx)("div",{className:"red"}),Object(s.jsx)("div",{className:"purple"}),Object(s.jsx)("div",{className:"blue"})]})}}]),n}(i.Component)),y=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"Home",children:[Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(b,{text:"\u03bb whoami\n                        > Aidan Walz"}),Object(s.jsx)(m,{})]}),Object(s.jsx)(x,{}),Object(s.jsx)(g,{title:"Projects",element:Object(s.jsxs)("div",{className:"project-container",children:[Object(s.jsx)(O,{title:"frc-match-dl"}),Object(s.jsx)(O,{title:"papel"}),Object(s.jsx)(O,{title:"frc-analysis",demo:"https://walz0.github.io/frc"})]})})]})}}]),n}(i.Component);var w=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(d,{}),Object(s.jsx)(j.a,{children:Object(s.jsxs)(p.c,{children:[Object(s.jsx)(p.a,{path:"/about"}),Object(s.jsx)(p.a,{path:"/contact"}),Object(s.jsx)(p.a,{path:"/blog"}),Object(s.jsx)(p.a,{path:"/",children:Object(s.jsx)(y,{})})]})})]})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(e){var n=e.getCLS,s=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),s(t),i(t),a(t),c(t)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(w,{})}),document.getElementById("root")),k()}},[[76,1,2]]]);
//# sourceMappingURL=main.8e8049c6.chunk.js.map