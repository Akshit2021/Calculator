(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var D_React_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),D_React_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),D_React_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),D_React_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),D_React_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Calbutton_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9),_Result_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(10),_Switchmode_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(11),_App_css__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(18),_App_css__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_9__),App=function(_Component){function App(){var _this;return Object(D_React_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=Object(D_React_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(D_React_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this)),_this.buttonpressed=function(buttonName){"="===buttonName?_this.calculate():"C"===buttonName?_this.reset():"sq"===buttonName?_this.setState({result:_this.state.result*_this.state.result}):"sqrt"===buttonName?_this.setState({result:Math.sqrt(_this.state.result)}):"flip"===buttonName?_this.setState({result:"".concat(_this.state.result>0?-Math.abs(_this.state.result):Math.abs(_this.state.result))}):buttonName>=0&&buttonName<=9?_this.setState({prevInput:"".concat(""===_this.state.operator?_this.state.prevInput+buttonName:_this.state.prevInput),result:"".concat(""!==_this.state.operator?_this.state.currInput+buttonName:_this.state.prevInput+buttonName),currInput:"".concat(""!==_this.state.operator?_this.state.currInput+buttonName:_this.state.currInput)}):"+"!==buttonName&&"-"!==buttonName&&"*"!==buttonName&&"/"!==buttonName||_this.setState({result:"".concat(""!==_this.state.prevInput&&""!==_this.state.operator&&""!==_this.state.currInput?eval("".concat(_this.state.prevInput).concat(_this.state.operator).concat(_this.state.currInput)):_this.state.prevInput),operator:buttonName},(function(){_this.setState({prevInput:_this.state.result,currInput:""})}))},_this.calculate=function(){try{_this.setState({result:eval("".concat(_this.state.prevInput).concat(_this.state.operator).concat(_this.state.currInput))})}catch(_unused){_this.setState({result:"error"})}},_this.reset=function(){_this.setState({result:"0"})},_this.clickHandler=function(){_this.setState({mtoggle:"".concat(_this.toggle.current.state.Lightmode)})},_this.toggle=react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef(),_this.state={prevInput:"",currInput:"",result:"0",operator:"",mtoggle:""},_this}return Object(D_React_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_Component),Object(D_React_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"true"===this.state.mtoggle?"Appt":"App"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calc-body"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Result_js__WEBPACK_IMPORTED_MODULE_7__.a,{result:this.state.result,toggleclass:this.state.mtoggle}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Calbutton_js__WEBPACK_IMPORTED_MODULE_6__.a,{buttonPressed:this.buttonpressed,toggleclass:this.state.mtoggle})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{onClick:this.clickHandler},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Switchmode_js__WEBPACK_IMPORTED_MODULE_8__.a,{ref:this.toggle})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=App},function(t,e,_){"use strict";var a=_(1),s=_(2),n=_(4),r=_(3),o=_(5),c=_(0),u=_.n(c),i=function(t){function e(t){var _;return Object(a.a)(this,e),(_=Object(n.a)(this,Object(r.a)(e).call(this,t))).Toggle=function(){_.setState((function(t){return{scmode:!t.scmode}}))},_.buttonPressed=function(t){_.props.buttonPressed(t.target.name)},_.state={scmode:!1},_}return Object(o.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"true"===this.props.toggleclass?"buttonst":"buttons"},u.a.createElement("button",{name:"1",onClick:this.buttonPressed},"1"),u.a.createElement("button",{name:"2",onClick:this.buttonPressed},"2"),u.a.createElement("button",{name:"3",onClick:this.buttonPressed},"3"),u.a.createElement("button",{name:"+",onClick:this.buttonPressed},"+"),u.a.createElement("button",{name:"4",onClick:this.buttonPressed},"4"),u.a.createElement("button",{name:"5",onClick:this.buttonPressed},"5"),u.a.createElement("button",{name:"6",onClick:this.buttonPressed},"6"),u.a.createElement("button",{name:"-",onClick:this.buttonPressed},"-"),u.a.createElement("button",{name:"7",onClick:this.buttonPressed},"7"),u.a.createElement("button",{name:"8",onClick:this.buttonPressed},"8"),u.a.createElement("button",{name:"9",onClick:this.buttonPressed},"9"),u.a.createElement("button",{name:"*",onClick:this.buttonPressed},"*"),u.a.createElement("button",{name:"C",onClick:this.buttonPressed},"C"),u.a.createElement("button",{name:"0",onClick:this.buttonPressed},"0"),u.a.createElement("button",{name:"=",onClick:this.buttonPressed},"="),u.a.createElement("button",{name:"/",onClick:this.buttonPressed},"/"),this.state.scmode?u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{name:"sqrt",onClick:this.buttonPressed,className:"scbutton"},"square root"),u.a.createElement("button",{name:"sq",onClick:this.buttonPressed,className:"scbutton"},"square"),u.a.createElement("button",{name:"flip",onClick:this.buttonPressed,className:"scbutton"},"flip")):""),u.a.createElement("div",null,u.a.createElement("button",{onClick:this.Toggle,className:this.state.scmode?"acscientific":"scientific"},"Scientific Mode")))}}]),e}(c.Component);e.a=i},function(t,e,_){"use strict";var a=_(1),s=_(2),n=_(4),r=_(3),o=_(5),c=_(0),u=_.n(c),i=function(t){function e(){return Object(a.a)(this,e),Object(n.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(o.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return u.a.createElement("div",{className:"true"===this.props.toggleclass?"resultt":"result"},this.props.result)}}]),e}(c.Component);e.a=i},function(t,e,_){"use strict";var a=_(1),s=_(2),n=_(4),r=_(3),o=_(5),c=_(0),u=_.n(c),i=function(t){function e(t){var _;return Object(a.a)(this,e),(_=Object(n.a)(this,Object(r.a)(e).call(this,t))).modeToggle=function(){_.setState((function(t){return{Lightmode:!t.Lightmode}}))},_.state={Lightmode:!0},_}return Object(o.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return u.a.createElement("div",{className:"modes"},u.a.createElement("button",{onClick:this.modeToggle,className:this.state.Lightmode?"activeMode":""},"Light Mode"),u.a.createElement("button",{onClick:this.modeToggle,className:this.state.Lightmode?"":"activeMode"},"Dark Mode"))}}]),e}(c.Component);e.a=i},function(t,e,_){t.exports=_(19)},,,,,function(t,e,_){},function(t,e,_){},function(t,e,_){"use strict";_.r(e);var a=_(0),s=_.n(a),n=_(7),r=_.n(n),o=(_(17),_(8));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(o.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.d0bd66bf.chunk.js.map