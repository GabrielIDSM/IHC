(this["webpackJsonpihc-is-down"]=this["webpackJsonpihc-is-down"]||[]).push([[0],{28:function(A,I,g){},29:function(A,I,g){},30:function(A,I,g){},31:function(A,I,g){},32:function(A,I,g){},34:function(A,I,g){"use strict";g.r(I);var C=g(1),e=g.n(C),c=g(10),s=g.n(c),a=g(4),t=g(2),n=g(5),i=g(6),l=g(8),j=g(7),o=g.p+"static/media/logo.fd542e08.svg",r=g(0),d=["O Facebook","O Youtube","O Instagram","A Twitch","O TikTok","O Spotify","O Zoom","O Snapchat","O Whatsapp"],b=["\xe9 meu celular","\xe9 minha internet","\xe9 meu notebook","\xe9 meu tablet"],m=function(A){Object(l.a)(g,A);var I=Object(j.a)(g);function g(A){var C;return Object(n.a)(this,g),(C=I.call(this,A)).state={serviceNameIndex:0,problemNameIndex:0},C}return Object(i.a)(g,[{key:"componentDidMount",value:function(){var A=this;this.timeout=setInterval((function(){var I=A.state.serviceNameIndex;A.setState({serviceNameIndex:I+1}),I=A.state.problemNameIndex,A.setState({problemNameIndex:I+1})}),3500)}},{key:"render",value:function(){var A=d[this.state.serviceNameIndex%d.length],I=b[this.state.problemNameIndex%b.length];return Object(r.jsx)("div",{className:"text-center Home",children:Object(r.jsxs)("div",{className:"cover-container d-flex h-100 p-3 mx-auto flex-column",children:[Object(r.jsx)("header",{className:"masthead mb-auto",children:Object(r.jsxs)("div",{className:"inner",children:[Object(r.jsxs)("h3",{className:"masthead-brand",children:[" ",Object(r.jsx)("img",{className:"Logo",src:o,alt:"logo"})," "]}),Object(r.jsxs)("nav",{className:"nav nav-masthead justify-content-center",children:[Object(r.jsxs)(a.b,{className:"nav-link active",to:"/",children:[Object(r.jsx)("i",{className:"fas fa-home"})," In\xedcio "]}),Object(r.jsxs)(a.b,{className:"nav-link",to:"/competitive-analysis",children:[Object(r.jsx)("i",{className:"fas fa-times"})," An\xe1lise Competitiva "]})]})]})}),Object(r.jsxs)("main",{role:"main",className:"inner cover",children:[Object(r.jsxs)("h1",{className:"cover-heading",children:[Object(r.jsx)("b",{children:A})," caiu ou ",Object(r.jsx)("b",{children:I})," ?"]}),Object(r.jsx)("h5",{children:"Pensando em responder essas e outras perguntas, o 'Is Down ?' tem o objetivo de monitorar os principais servi\xe7os da internet."})]}),Object(r.jsx)("footer",{className:"mastfoot mt-auto",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("span",{className:"text-light",children:["Desenvolvido por ",Object(r.jsx)("b",{children:"Gabriel In\xe1cio"}),", ",Object(r.jsx)("b",{children:"Rafael Lins"})," e ",Object(r.jsx)("b",{children:"Filipe Galves"})," ",Object(r.jsx)("br",{}),"Universidade Federal Fluminense"]})})})]})})}}]),g}(C.Component),h=function(A){Object(l.a)(g,A);var I=Object(j.a)(g);function g(){return Object(n.a)(this,g),I.apply(this,arguments)}return Object(i.a)(g,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"text-center Navbar",children:Object(r.jsx)("div",{className:"cover-container-navbar d-flex h-100 p-3 mx-auto flex-column",children:Object(r.jsx)("header",{className:"masthead mb-auto",children:Object(r.jsxs)("div",{className:"inner",children:[Object(r.jsxs)("h3",{className:"masthead-brand",children:[" ",Object(r.jsx)("img",{className:"Logo",src:o,alt:"logo"})," "]}),Object(r.jsxs)("nav",{className:"nav nav-masthead justify-content-center",children:[Object(r.jsxs)(a.b,{className:"/"===this.props.active?"nav-link active":"nav-link",to:"/",children:[Object(r.jsx)("i",{className:"fas fa-home"})," In\xedcio "]}),Object(r.jsxs)(a.b,{className:"/competitive-analysis"===this.props.active?"nav-link active":"nav-link",to:"/competitive-analysis",children:[Object(r.jsx)("i",{className:"fas fa-times"})," An\xe1lise Competitiva "]})]})]})})})})}}]),g}(C.Component),O=g(12),x=g.p+"static/media/downdetector-logo.3269c48c.png",v=g.p+"static/media/down-for-everyone-logo.f9cd631e.png",N=g.p+"static/media/downdetector-screenshot.187c1b7d.png",u=g.p+"static/media/down-for-everyone-screenshot.13c2a826.png",p=g.p+"static/media/uptime-robot-screenshot.cd26b566.png",f=function(A){Object(l.a)(g,A);var I=Object(j.a)(g);function g(){return Object(n.a)(this,g),I.apply(this,arguments)}return Object(i.a)(g,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"text-center",children:[Object(r.jsx)(h,{active:"/competitive-analysis"}),Object(r.jsx)("div",{className:"content-ca d-flex h-100 p-3 mx-auto flex-column",children:Object(r.jsxs)("table",{className:"table-ca",children:[Object(r.jsxs)("tr",{className:"logo-tr-ca",children:[Object(r.jsx)("td",{children:" "}),Object(r.jsxs)("td",{children:[" ",Object(r.jsx)("img",{className:"logo-ca",src:x,alt:"logo"})," "]}),Object(r.jsxs)("td",{children:[" ",Object(r.jsx)("img",{className:"logo-ca",src:v,alt:"logo"})," "]}),Object(r.jsxs)("td",{children:[" ",Object(r.jsx)("img",{className:"logo-ca",src:"data:image/png;base64,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4bzFWS1XWfOe/IXBnLaS4jrNEcSwhDgS1JGMKkoow0KEVo0UE0naj3r4hx1/glwyuUpg5FhABSokxw/+B7+7NfNTk25SMAp0vtj2xygQ2AUaNdv+PrbtxgngfwautJa/UgdmP0mvtbTwEdC3DVxctzR5D7jcAYaedMmQHMlPU8jngfcz+qYsMHALdK+5vTX3cfoApKmr5Rvg4BAYK1D2use7u9p7+/dMs78fd/FyqToFZSIAAA+caVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6Yzk4OGNhYTctMGM1Yy00MmI0LTliZGQtYWIzMjM0NDY5OTgyIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkyM2U5NmQ0LWNjN2YtNDA0Yi05ZjFlLTljNGQ4N2U3MDJjZiIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmE5MjM3YmVlLTA2OTEtNDNiMC1iYzM4LTY5NzY2MjVjY2I4MyIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iV2luZG93cyIKICAgR0lNUDpUaW1lU3RhbXA9IjE2MzcxMDU2MDAwMTMyMDYiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4yMiIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIj4KICAgPGlwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICA8aXB0Y0V4dDpMb2NhdGlvblNob3duPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25TaG93bj4KICAgPGlwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICA8aXB0Y0V4dDpSZWdpc3RyeUlkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6UmVnaXN0cnlJZD4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6N2I0MjEwOGQtZjRjMy00Y2IwLWExZDQtOGE2ODFlZTVlODdiIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDIxLTExLTE2VDIwOjMzOjIwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICAgPHBsdXM6SW1hZ2VTdXBwbGllcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkltYWdlU3VwcGxpZXI+CiAgIDxwbHVzOkltYWdlQ3JlYXRvcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkltYWdlQ3JlYXRvcj4KICAgPHBsdXM6Q29weXJpZ2h0T3duZXI+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpDb3B5cmlnaHRPd25lcj4KICAgPHBsdXM6TGljZW5zb3I+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpMaWNlbnNvcj4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PhwTpMIAAADAUExURQAAAP///xIeNTvXcQAAIGtwewAQLcbIzAAAIgAAGAwaMgAAFgAAJ7u8wO3t7vb29iQtQZufpgAAHdfY2ubn6SfVZwAAACszRQAAGwcXMAAQMN7f4gALKgAAJDHWbMnLz2JncwAAEIiMlJSXnz5FVfD89FZcaWDdibfvyK+xt8Px0e378oOHj6WorikxQxckPLG0uUpRYNv35NL02+P564nlpaDqt0/bfnvim5PnrTg+TnR5g7nvyqrsvnLglcTx0rG6gekAAAABdFJOUwBA5thmAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+ULEBchFCK4MnQAAAIlSURBVHja7dpra4MwFIDhECWUzE9CRwUV9v//5HoZ1luyWOqJnL7PV2vpS2o1ZzMGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPA56nLwvTz6PFjOjnyVay714QK9HZyWR58H7eyIswHeu0514F2jPfC6kNoDD5O4X+DiFH2BVn2gVxLoB/NCpyJwsk7t0b6kbwisgu9obaswcHKW1x5oVQZ22gPHp51UBo7etFMZ2BCoJ7DUfg2q/xVVGeg+6ElG5bOo17abaMN9OvaDt0OXh7Jqjjaz0DGTOZ8VT9X64qEXDxTNuxMNlJneF1O9XKDJ0be2iDsFNpn6lmu4U2CXqW+5hG8JXE59fbbAYp8bfY5pWiEV2GUaiBZJhc07H7ad5BL2mwOrWKBP2k1ILmGxOXD56N9tDZRcwmDg9Lm0jd272nB9YD8ouISJgdExuw9vzQOBgkuYGGhi29PIpw3t6OWWMPEaHF+EdsPsIRQot4SJv6KR23N09hCcycjd7V8JtIG+5UcNBrrcgdG7+fXCaW/3+/lsxaUHZr8Ko1vC9N1dONCJjUUT+2ZLmLh7jcxFs16F6y98YXceCZRbQpPY98+31GwMlNw2JfbFNujebA50krPttL7ZDT/hdzD1z2cCO98+Ohcdf+b5F9U3SUtemaxLuEnXNv6vzVXRV/7Ug5V/Zq9HDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOv0CE5QpfvzdSckAAAAASUVORK5CYII=",alt:"logo"})," "]})]}),Object(r.jsxs)("tr",{className:"service-tr-ca",children:[Object(r.jsxs)("td",{className:"td-ca",children:[" ",Object(r.jsx)("h3",{children:" Servi\xe7o "})," "]}),Object(r.jsxs)("td",{className:"td-ca",children:[" ",Object(r.jsx)("h5",{children:" Downdetector "})," "]}),Object(r.jsxs)("td",{className:"td-ca",children:[" ",Object(r.jsx)("h5",{children:" Down For Everyone Or Just Me? "})," "]}),Object(r.jsxs)("td",{className:"td-ca",children:[" ",Object(r.jsx)("h5",{children:" UptimeRobot "})," "]})]}),Object(r.jsxs)("tr",{className:"description-tr-ca",children:[Object(r.jsxs)("td",{className:"td-ca",children:[" ",Object(r.jsx)("h3",{children:" Descri\xe7\xe3o "})," "]}),Object(r.jsxs)("td",{className:"td-ca",children:[" ",Object(r.jsx)("h6",{children:" O Downdetector oferece informa\xe7\xf5es em tempo real sobre a situa\xe7\xe3o e interrup\xe7\xf5es de diversos servi\xe7os. "})," "]}),Object(r.jsxs)("td",{className:"td-ca",children:[" ",Object(r.jsx)("h6",{children:" 'Down For Everyone Or Just Me?' \xe9 uma ferramenta capaz de verificar se um determinado servi\xe7o responde ou n\xe3o a uma requisi\xe7\xe3o HTTP. "})," "]}),Object(r.jsxs)("td",{className:"td-ca",children:[" ",Object(r.jsx)("h6",{children:" O UptimeRobot monitora e notifica qualquer problema nos servi\xe7os escolhidos pelo usu\xe1rio. "})," "]})]}),Object(r.jsxs)("tr",{className:"screenshot-tr-ca",children:[Object(r.jsxs)("td",{className:"td-ca",children:[" ",Object(r.jsx)("h3",{children:" Interface "})," "]}),Object(r.jsxs)("td",{className:"td-ca",children:["  ",Object(r.jsxs)(O.a,{children:[" ",Object(r.jsx)("img",{className:"interface-ca",src:N,alt:"screenshot"}),"  "]})," "]}),Object(r.jsxs)("td",{className:"td-ca",children:["  ",Object(r.jsxs)(O.a,{children:[" ",Object(r.jsx)("img",{className:"interface-ca",src:u,alt:"screenshot"})," "]})," "]}),Object(r.jsxs)("td",{className:"td-ca",children:["  ",Object(r.jsxs)(O.a,{children:[" ",Object(r.jsx)("img",{className:"interface-ca",src:p,alt:"screenshot"})," "]})," "]})]}),Object(r.jsxs)("tr",{className:"strengths-weaknesses-tr-ca",children:[Object(r.jsxs)("td",{className:"td-ca",children:[" ",Object(r.jsx)("h3",{children:" Pontos fortes "})," ",Object(r.jsx)("h3",{children:" e fracos "})," "]}),Object(r.jsxs)("td",{className:"td-ca",children:[Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{className:"fas fa-chevron-up text-success"})," Interface simples e intuitiva "]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{className:"fas fa-chevron-up text-success"})," Uso de gr\xe1ficos "]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{className:"fas fa-chevron-up text-success"})," Monitoramento das \xfaltimas 24 horas "]}),Object(r.jsx)("br",{}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{className:"fas fa-chevron-down text-danger"})," Aus\xeancia de um servi\xe7o de notifica\xe7\xe3o "]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{className:"fas fa-chevron-down text-danger"})," Atualiza\xe7\xe3o com 15 minutos de delay "]})]}),Object(r.jsxs)("td",{className:"td-ca",children:[Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{className:"fas fa-chevron-up text-success"})," Verifica\xe7\xe3o instant\xe2nea "]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{className:"fas fa-chevron-down text-danger"})," Inexist\xeancia de monitoramento "]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{className:"fas fa-chevron-down text-danger"})," Interface limitada "]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{className:"fas fa-chevron-down text-danger"})," Aus\xeancia de um servi\xe7o de notifica\xe7\xe3o "]})]}),Object(r.jsxs)("td",{className:"td-ca",children:[Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{className:"fas fa-chevron-up text-success"})," Monitoramento personalizado "]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{className:"fas fa-chevron-up text-success"})," Servi\xe7o de notifica\xe7\xe3o "]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{className:"fas fa-chevron-up text-success"})," Atualiza\xe7\xe3o com 5 minutos de delay "]}),Object(r.jsx)("br",{}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{className:"fas fa-chevron-down text-danger"})," Interface complexa "]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("i",{className:"fas fa-chevron-down text-danger"})," N\xe3o monitora reclama\xe7\xf5es "]})]})]})]})})]})}}]),g}(C.Component);var G=function(){return Object(r.jsx)(a.a,{basename:"/",children:Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(t.c,{children:[Object(r.jsx)(t.a,{path:"/",element:Object(r.jsx)(m,{})}),Object(r.jsx)(t.a,{path:"/competitive-analysis",element:Object(r.jsx)(f,{})})]})})})};g(28),g(29),g(30),g(31),g(32),g(33);s.a.render(Object(r.jsx)(e.a.StrictMode,{children:Object(r.jsx)(G,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.e6dbd5a7.chunk.js.map