import{R as e,N as t,C as a,o as l,S as n,a as r,b as c,c as m,d as s,e as o,B as i}from"./vendor.0c6f9186.js";const d=()=>{const[a,l]=e.useState(!1),n=localStorage.getItem("perm");return e.createElement("div",null,e.createElement("div",{className:""},e.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark px-2"},e.createElement("span",{className:"navbar-brand"},e.createElement("b",null,"CFIT")),e.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},e.createElement("div",{className:"navbar-nav"})),e.createElement("button",{type:"button",className:"btn btn-primary btn_poopover",onClick:()=>{l(!a)},"data-toggle":"popover",title:"Popover title","data-content":"And here's some amazing content. It's very engaging. Right?"},"MENU")),a?e.createElement("div",{className:"btn border border-danger p-5",style:{backgroundColor:"#fa9a1c26",position:"absolute",right:0,width:"200px"}},e.createElement(t,{className:"btn btn-primary col-12",to:"/"},"INICIO"),10==n?e.createElement(t,{className:"btn my-3 btn-primary col-12",to:"/cfit_admin",type:"button"},"ADMIN"):null,e.createElement("button",{className:"btn my-3 btn-primary col-12",type:"button",onClick:()=>(localStorage.clear(),void(window.location.href="/"))},"SAIR")):null))},E="https://carvalhosfit-api.herokuapp.com/api-v1/";var u="_cfitCard_989i9_1";const b=t=>e.createElement("div",{className:"col-md-4  my-3",style:{padding:"-20px",maxWidth:"none"}},e.createElement("div",{className:` px-2 ${u}`},e.createElement("h3",{className:"container text-center"},e.createElement("b",null,t.titulo)),e.createElement("div",{className:"container"},t.imagem?t.imagem:"imagem vazia"),e.createElement("div",{className:"text-center container-fluid font-weight-bold"},e.createElement("h6",null,"descricao")))),p=()=>{const[t,l]=e.useState([]),[n,r]=e.useState(!0);return e.useEffect((()=>{a.get(`${E}playlist/`,{crossDomain:!0}).then((t=>{l(t.data.map((t=>e.createElement(b,{key:t.pk,titulo:t.titulo,descricao:t.descricao,id:t.pk,imagem:t.imagem})))),r(!1)}))}),[]),n?e.createElement("div",null,e.createElement("h1",null,"Loading...")):e.createElement("div",null,e.createElement(d,null),e.createElement("div",{className:"row d-flex justify-content-center container-fluid"},t))};var g={PageLoginMenuContainer:"_PageLoginMenuContainer_5t54z_1"};const h=t=>{const[l,n]=e.useState(""),[r,c]=e.useState("");return e.createElement("div",null,e.createElement("div",{className:"modal-dialog modal-lg  ",role:"document",style:{width:"100%"}},e.createElement("div",{className:"modal-content wsi-container-dark wsi-border-primary wsi-shadow-primary blur"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title text-center"},e.createElement("b",null,"CADASTRE-SE")),e.createElement("button",{className:"btn wsi-btn btn-danger btn-sm",type:"button",onClick:()=>{t.setmodalVisible(!1)}},"FECHAR")),e.createElement("div",{className:"modal-body"},e.createElement("input",{type:"text",className:"form-control my-3 wsi-shadow-light",placeholder:"USUARIO",value:l,onChange:e=>n(e.target.value)}),e.createElement("input",{type:"text",className:"form-control my-3 wsi-shadow-light",placeholder:"SENHA",value:r,onChange:e=>c(e.target.value)}),e.createElement("button",{className:"btn btn-primary wsi-shadow-primary",onClick:()=>{((e,t)=>{a.post(`${E}user/`,{username:e,password:t}).then((e=>{console.log(e)})).catch((e=>{console.log(e),console.log(e.response)}))})(l,r)}},"CADASTRAR"),e.createElement("div",{className:"mt-5"},e.createElement("p",null,"Ja possui cadastro?"," ",e.createElement("button",{className:"btn wsi-btn-secondary wsi-shadow-light btn-sm"},"FAZER LOGIN")))))))},N=t=>{const[a,l]=e.useState(!1);return e.createElement("nav",{className:"navbar wsi-black px-md-5 mx-0"},e.createElement("img",{src:"/assets/logo.fb32584c.png",className:"img-fluid col-3 col-ms-4",alt:""}),e.createElement("div",{className:"col-8 d-flex justify-content-end float-right"},a?e.createElement("div",{className:"modal d-block"},e.createElement(h,{setmodalVisible:l})):null))},v=()=>{const[t,n]=e.useState(!1),[r,c]=e.useState("teste"),[m,s]=e.useState(!1),[o,i]=e.useState(""),[d,u]=e.useState(""),b=()=>{s(!1),a.post(`${E}token/`,{username:o,password:d,crossDomain:!0}).then((e=>{const t=l(e.data.access);localStorage.setItem("authToken",e.data.access),localStorage.setItem("accessUser",t.user_id),(()=>{const e=localStorage.getItem("accessUser"),t=`${E}user/${e}/`;a.get(t).then((e=>{localStorage.setItem("perm",e.data.type),window.location.href="/"})).catch((e=>{console.log(e)}))})()})).catch((e=>{s(!0);try{const t=e.response.status;c(400==t?"PREENCHA TODOS OS CAMPOS":401==t?"USUARIO OU SENHA INVALIDOS":null==t?"ERRO NO SERVIDOR":toString(t.response.statusText))}catch(t){c("ERRO NO SERVIDOR",t)}}))};return e.createElement("div",{className:"row wsi-border-container nm p-3 d-flex justify-content-center text-center py-3 col-12"},e.createElement("div",{className:` wsi-container-dark col-md-6 d-flex justify-content-center align-items-center ${g.PageLoginMenuContainer}`},e.createElement("div",{className:"text-center col-12"},e.createElement("input",{type:"text",placeholder:"TELEFONE OU EMAIL",autoComplete:"off",className:"form-control-lg wsi-shadow-primary form-control",value:o,onChange:e=>{i(e.target.value)}}),e.createElement("input",{type:"password",placeholder:"SENHA",autoComplete:"off",className:"form-control form-control-lg wsi-shadow-primary my-3",value:d,onChange:e=>{u(e.target.value)}}),e.createElement("button",{className:"btn btn-lg py-3 align-content-middle col-5 btn-primary wsi-shadow-light",onClick:()=>{b()}},e.createElement("b",null,"ENTRAR")),e.createElement("div",{className:" modal animate__animated d-block\n              "+(t?"animate__fadeInLeft":"animate__fadeOutRight")},e.createElement(h,{setmodalVisible:n})),e.createElement("div",{className:"d-flex row justify-content-center my-2 animate__animated "+(m?"animate__bounceIn":"animate__bounceOut"),style:{height:"100px"}},e.createElement("div",{className:"alert alert-danger",role:"alert"},e.createElement("b",null,r))),e.createElement("div",{className:"mt-4"},e.createElement("p",null,"Ainda não tem conta?"," ",e.createElement("button",{className:"btn wsi-btn-secondary wsi-shadow-light",onClick:()=>{n(!0)}},"CADASTRE-SE"))))),e.createElement("div",{className:`col-md-6 embed-responsive np embed-responsive d-flex ${g.PageLoginMenuContainer} `},e.createElement("iframe",{className:"embed-responsive-item col-12 wsi-rounded",allowFullScreen:!0})))};const y=()=>e.createElement("div",{className:"row wsi-border-container mt-3 nm p-3 d-flex justify-content-center text-center py-3 col-12"},e.createElement("h1",null,e.createElement("b",null,"CONTATOS")),e.createElement("div",{className:"row col-12 d-flex p-0 justify-content-center"},e.createElement("div",{className:"col-md-5"},e.createElement("img",{className:"img-fluid col-sm-3",src:"/assets/instagram.771d54e3.png",alt:"icon instagram"})),e.createElement("div",{className:"row col-12 p-0"},e.createElement("div",{className:"wsi-container-dark col-md-12 py-3"},e.createElement("h1",null,e.createElement("b",null,"Envie uma mensagem")),e.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"SEU NOME"}),e.createElement("textarea",{type:"text",className:"form-control form-control-lg my-3",placeholder:"SUA MENSAGEM",rows:"5"}),e.createElement("br",null),e.createElement("div",{className:"d-flex justify-content-end"},e.createElement("button",{className:"btn btn-lg btn-primary"},"ENVIAR")))))),w=()=>e.createElement("div",{className:"d-flex text-center col-12"},e.createElement("div",{className:`wsi-bg-black wsi-container align-center col-12 text-center ${g.alignCenter}`,style:{minHeight:"100vh"}},e.createElement("div",{className:"text-center px-3"},e.createElement(N,null)),e.createElement(v,null),e.createElement(y,null))),f=()=>e.createElement("div",null,e.createElement(d,null),e.createElement("h1",null,"ERROR 404")),S=()=>e.createElement("div",null,e.createElement("h1",null,"AddAula")),A=()=>e.createElement("div",null,e.createElement("h1",null,"AJUSTES")),k=()=>e.createElement("div",null,e.createElement("h1",null,"MENSAGENS")),I=t=>{const[l,n]=e.useState(""),[r,c]=e.useState(""),[m,s]=e.useState(""),[o,i]=e.useState(t.playlistIdEditar),d=()=>{try{console.log(t),a.get(`${E}playlist/${t.playlistIdEditar}`).then((e=>{var t;t=e.data,n(t.titulo),c(t.descricao),s(t.imagem),i(t.pk)})).catch((()=>{n(""),c(""),s(""),i(-1)}))}catch(e){setcampos({titulo:"",descricao:"",imagem:""})}};return e.useEffect((()=>{d()}),[t.playlistIdEditar]),e.createElement("div",null,e.createElement("div",{className:"modal-dialog modal-lg  ",role:"document",style:{width:"100%"}},e.createElement("div",{className:"modal-content wsi-container-dark wsi-border-primary wsi-shadow-primary blur"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title text-center"},e.createElement("b",null,"CADASTRAR NOVA PLAYLIST")),e.createElement("button",{className:"btn wsi-btn btn-danger btn-sm",type:"button",onClick:()=>{t.setmodalVisible(!1),t.setplaylistIdEditar(-1)}},"FECHAR")),e.createElement("div",{className:"modal-body"},e.createElement("input",{type:"text",className:"form-control my-3 wsi-shadow-light",placeholder:"TITULO",value:o,onChange:e=>n(e.target.value),hidden:!0}),e.createElement("input",{type:"text",className:"form-control my-3 wsi-shadow-light",placeholder:"TITULO",value:l,onChange:e=>n(e.target.value)}),e.createElement("input",{type:"text",className:"form-control my-3 wsi-shadow-light",placeholder:"DESCRICAO",value:r,onChange:e=>c(e.target.value)}),e.createElement("input",{type:"text",className:"form-control my-3 wsi-shadow-light",placeholder:"IMAGEM",value:m,onChange:e=>s(e.target.value)}),e.createElement("button",{className:"btn wsi-btn-admin-dark"},-1==o?"CADASTRAR":"SALVAR")))))},x=()=>{const[t,l]=e.useState(!1),[n,r]=e.useState(!0),[c,m]=e.useState([]),[s,o]=e.useState(-1),i=()=>{a.get(`${E}playlist`).then((t=>{m(t.data.map((t=>e.createElement("tr",{className:"wsi-border-admin",key:t.pk},e.createElement("td",{className:"wsi-border-admin"},t.titulo),e.createElement("td",{className:"wsi-border-admin"},t.descricao),e.createElement("td",{className:"wsi-border-admin"},e.createElement("button",{className:"btn wsi-btn-admin-dark",value:t.pk,onClick:e=>{var t;t=e.target.value,o(parseInt(t)),l(!0)}},"EDITAR")))))),r(!1)}))};return e.useEffect((()=>{i()}),[]),n?e.createElement("div",null,e.createElement("h1",null,"Loading...")):e.createElement("div",null,e.createElement("div",{className:"row d-flex justify-content-between px-3"},e.createElement("h1",{className:"d-block col-4 m-2"},"PLAYLISTS")," ",e.createElement("button",{className:"m-2 col-4 btn wsi-btn-admin-dark wsi-shadow-light",onClick:()=>{l(!0)}},"ADICIONAR NOVA")),e.createElement("div",{className:"p-2"},e.createElement("div",{style:{height:"70vh",overflow:"auto"},className:"rounded wsi-border-admin"},e.createElement("table",{className:"table table-hover table-dark table-borderd wsi-border-admin rounded"},e.createElement("thead",{className:"wsi-border-admin"},e.createElement("tr",{className:""},e.createElement("th",{scope:"col",className:"border border-primary wsi-btn-admin-dark",style:{backgroundColor:"#2e0040"}},"TITULO"),e.createElement("th",{scope:"col",className:"border border-primary wsi-btn-admin-dark",style:{backgroundColor:"#2e0040"}},"DESCRICAO"),e.createElement("th",{className:"col-1 border border-primary wsi-btn-admin-dark",style:{backgroundColor:"#2e0040"}},"EDITAR"))),e.createElement("tbody",null,c)),e.createElement("div",{className:" modal animate__animated d-block\n              "+(t?"animate__fadeInLeft":"animate__fadeOutRight")},e.createElement(I,{setmodalVisible:l,playlistIdEditar:s,setplaylistIdEditar:o})))))},C=()=>e.createElement("div",null,e.createElement("h1",null,"USUARIOS")),R=()=>e.createElement("div",null,e.createElement(d,null),e.createElement("div",{className:"row container-fluid",style:{minHeight:"70vh"}},e.createElement("div",{className:"col-md-3 my-2 border border-danger rounded"},e.createElement("div",{className:"p-2"},e.createElement(t,{className:"btn col-12 my-1 wsi-btn-admin-dark",to:"/cfit_admin/playlists"},"PLAYLISTS"),e.createElement(t,{className:"btn col-12 my-1 wsi-btn-admin-dark",to:"/cfit_admin/usuarios"},"USUARIOS"),e.createElement(t,{className:"btn col-12 my-1 wsi-btn-admin-dark",to:"/cfit_admin/mensagens"},"MENSAGENS"),e.createElement(t,{className:"btn col-12 my-1 wsi-btn-admin-dark",to:"/cfit_admin/add_aula"},"ADD AULA"),e.createElement(t,{className:"btn col-12 my-1 wsi-btn-admin-dark",to:"/cfit_admin/ajustes"},"AJUSTES"))),e.createElement("div",{className:"my-2 col-md-9"},e.createElement("div",{className:"border border-danger rounded ",style:{minHeight:"70vh"}},e.createElement(n,null,e.createElement(r,{path:"/cfit_admin/add_aula"},e.createElement(S,null)),e.createElement(r,{path:"/cfit_admin/ajustes"},e.createElement(A,null)),e.createElement(r,{path:"/cfit_admin/mensagens"},e.createElement(k,null)),e.createElement(r,{path:"/cfit_admin/playlists"},e.createElement(x,null)),e.createElement(r,{path:"/cfit_admin/usuarios"},e.createElement(C,null)))))));function _(){const t=localStorage.getItem("authToken");return e.createElement("div",{className:"wsi-bg-black"},e.createElement("div",{style:{minHeight:"100vh"}},e.createElement(n,null,e.createElement(r,{exact:!0,path:"/"},t?e.createElement(c,{to:"/home"}):e.createElement(w,null)),e.createElement(r,{path:"/home"},t?e.createElement(p,null):e.createElement(w,null)),e.createElement(r,{path:"/cfit_admin"},e.createElement(R,null)),e.createElement(r,{exact:!0,path:"*"},e.createElement(f,null)),e.createElement(r,{path:"*"},e.createElement(f,null)))),e.createElement("div",{className:"mt-5 pt-3 navbar navbar-spand wsi-bg-black-light d-flex justify-content-center"},e.createElement("h4",null,e.createElement("b",null,"CARVALHOS FIT -",(new Date).getFullYear())),e.createElement("div",{className:"col-12 text-center"},e.createElement("a",{target:"_blank",className:"text-white",href:"http://waltersilva5.github.io",rel:"noreferrer"},e.createElement("h6",null,e.createElement("b",null,"Desenvolvido por:",e.createElement("span",{className:"text-danger"}," @WALTERSILVA5")))))))}Boolean("[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s({reducer:{produtoState:m({name:"produtoSlice",initialState:{produtos:[]},reducers:{adicionarProduto(e,t){e.produtos=t.payload}}}).reducer}});o.render(e.createElement(e.StrictMode,null,e.createElement(i,null,e.createElement(_,null))),document.getElementById("root"));
