(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(0),s=n.n(o),i=n(7),l=n.n(i),r=(n(14),n(1)),a=n(2),u=n(4),c=n(3),m=n(5),d=(n(15),function(t){function e(){var t,n;Object(r.a)(this,e);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(n=Object(u.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(i)))).state={style:{ButtonMinusColumn:{},ButtonMinusRow:{}},rowsInit:n.props.initialHeight,columnsInit:n.props.initialWidth,currentRowNum:0,currentColumnNum:0,timerHideButtons:{}},n.TableInit=function(t,e){return s.a.createElement("tbody",null,function(t,e){for(var o=[],i=0;i<e;i++)o.push(s.a.createElement("tr",{key:i},n(t)));return o}(t,e));function n(t){for(var e=[],n=0;n<t;n++)e.push(s.a.createElement("td",{key:n}));return e}},n.ShowButtons=function(t,e){var o=document.getElementsByClassName(n.props.className)[0];1!==o.rows.length&&1!==o.rows[0].cells.length?n.setState({style:{ButtonMinusRow:{visibility:"visible",top:e},ButtonMinusColumn:{visibility:"visible",left:t}}}):1!==o.rows.length?n.setState({style:{ButtonMinusRow:{visibility:"visible",top:e}}}):1!==o.rows[0].cells.length&&n.setState({style:{ButtonMinusColumn:{visibility:"visible",left:t}}})},n.AddColumn=function(){var t=document.getElementsByClassName(n.props.className)[0],e=!0,o=!1,s=void 0;try{for(var i,l=t.rows[Symbol.iterator]();!(e=(i=l.next()).done);e=!0){i.value.insertCell(-1)}}catch(r){o=!0,s=r}finally{try{e||null==l.return||l.return()}finally{if(o)throw s}}},n.AddRow=function(){var t=document.getElementsByClassName(n.props.className)[0],e=t.rows[0].cells.length;t.insertRow(-1);for(var o=t.rows[t.rows.length-1],s=0;s<e;s++)o.insertCell(s)},n.MinusColumn=function(){var t=document.getElementsByClassName(n.props.className)[0],e=document.getElementsByClassName("BtnTop")[0];if(1!==t.rows[0].cells.length){var o=t.rows,s=!0,i=!1,l=void 0;try{for(var r,a=o[Symbol.iterator]();!(s=(r=a.next()).done);s=!0){r.value.deleteCell(n.state.currentColumnNum)}}catch(u){i=!0,l=u}finally{try{s||null==a.return||a.return()}finally{if(i)throw l}}e.style.left=t.rows[0].cells[t.rows[0].cells.length-1].offsetLeft+"px",n.HideMinusButtons()}},n.MinusRow=function(){var t=document.getElementsByClassName(n.props.className)[0],e=document.getElementsByClassName("BtnLeft")[0];1!==t.rows.length&&(t.deleteRow(n.state.currentRowNum),e.style.top=t.rows[t.rows.length-1].offsetTop+"px",n.HideMinusButtons())},n.TableOnMouseOverHandler=function(t){var e=t.target;n.ClearTimerHideButtons(),"TD"===e.tagName&&(n.ShowButtons(e.offsetLeft,e.offsetTop),n.setState({currentRowNum:e.parentNode.rowIndex,currentColumnNum:e.cellIndex}))},n.HideMinusButtons=function(){n.setState({style:{ButtonMinusColumn:{visibility:"hidden"},ButtonMinusRow:{visibility:"hidden"}}})},n.SetTimerHideButtons=function(){n.setState({timerHideButtons:setTimeout(n.HideMinusButtons,500)})},n.ClearTimerHideButtons=function(){clearTimeout(n.state.timerHideButtons)},n}return Object(m.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"Module"},s.a.createElement("div",{className:"OperationButton ButtonMinus BtnTop",style:this.state.style.ButtonMinusColumn,onClick:function(){return t.MinusColumn()},onMouseOver:function(){return t.ClearTimerHideButtons()},onMouseOut:function(){return t.SetTimerHideButtons()}},s.a.createElement("span",null,"-")),s.a.createElement("div",{className:"OperationButton ButtonMinus BtnLeft",style:this.state.style.ButtonMinusRow,onClick:function(){return t.MinusRow()},onMouseOver:function(){return t.ClearTimerHideButtons()},onMouseOut:function(){return t.SetTimerHideButtons()}},s.a.createElement("span",null,"-")),s.a.createElement("div",{className:"OperationButton ButtonPlus BtnBottom",onClick:function(){return t.AddRow()},style:this.state.style},s.a.createElement("span",null,"+")),s.a.createElement("div",{className:"OperationButton ButtonPlus BtnRight",onClick:function(){return t.AddColumn()},style:this.state.style},s.a.createElement("span",null,"+")),s.a.createElement("table",{className:this.props.className,onMouseOver:this.TableOnMouseOverHandler.bind(this),onMouseOut:function(){return t.SetTimerHideButtons()}},this.TableInit(this.state.columnsInit,this.state.rowsInit)))}}]),e}(o.Component)),f=function(t){function e(){return Object(r.a)(this,e),Object(u.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(d,{className:"GT1",initialWidth:4,initialHeight:4}),s.a.createElement(d,{className:"GT2",initialWidth:4,initialHeight:4}))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.8114d4e9.chunk.js.map