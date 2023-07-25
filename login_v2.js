class login{
    static logado=false
    static matlogado=null
    static nomelogado=null
    static acessologado=null
    static Callback=null
    static NotCallback=null

    static config={
        bgcolor:null,//"#048"
        img:null,//"./logo.png"
        endpoint:null,//https://login.vick-nascimento.repl.co/
    }
    static estilocss=null
    // "login.vick-nascimento.repl.co/?matricula=123&senha=321"
    static login=(callback,notCallback,config=null)=>{
        if(config!=null){
            this.config=config
        }   
        this.callback=()=>{callback()}
        this.NotCallback=()=>{notCallback()}
        this.estilocss=
        "*{border: none;padding: 0px;margin: 0px;box-sizing: border-box;}"+
        "#fundoLogin{display: flex;justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;top: 0px;left: 0px;background-color:rgba(0, 0, 0, 0.7) ;}"+
        "#baseLogin{display: flex;justify-content: center;align-items: stretch;width: 50%;}"+
        "#elementosLogin{display: flex;justify-content: center;align-items: flex-start;width: 50%;flex-direction: column;background-color: #eee;padding: 10px;border-radius: 10px 0px 0px 10px;}"+
        "#logoLogin{border-radius: 0px 10px 10px 0px;padding: 10px;display: flex;justify-content: center;align-items: center;width: 50%;background-color: #bbb;}"+
        "#logoLogin img{width: 90%;}"+
        ".camposLogin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;margin-bottom: 5px;}"+
        ".camposLogin label{font-size: 18px;}"+
        ".camposLogin input{font-size: 18px;padding: 5px;background-color: #fff;border-radius: 5px;}"+
        ".camposLogin input:hover{border: 1px solid #000;}"+
        ".botoesLogin{display: flex;justify-content: space-around;align-items: center;width: 100%;}"+
        `.botoesLogin button{cursor: pointer;background-color:${this.config.bgcolor};color: #fff;border-radius: 5px;padding: 10px 20px;}`
        const linkEstilo=document.createElement("style")
        linkEstilo.rel='stylesheet'
        linkEstilo.innerHTML=this.estilocss
        linkEstilo.id="id_estilo"
        document.head.appendChild(linkEstilo)
        const body=document.body
        const fundologin=document.createElement("div")
        fundologin.id="fundoLogin"
        body.prepend(fundologin)
        
        const baseLogin=document.createElement("div")
        baseLogin.id="baseLogin"
        fundologin.prepend(baseLogin)

        const elementosLogin=document.createElement("div")
        elementosLogin.id="elementosLogin"
        baseLogin.appendChild(elementosLogin)

        const camposLogin=document.createElement("div")
        camposLogin.className="camposLogin"
        elementosLogin.appendChild(camposLogin)

        const labelUsername=document.createElement("label")
        labelUsername.innerHTML='Username'
        camposLogin.appendChild(labelUsername)

        const inputUsername=document.createElement("input")
        inputUsername.type='text'
        inputUsername.name='f_username'
        inputUsername.id=inputUsername.name
        camposLogin.appendChild(inputUsername)

        const camposLoginSenha=document.createElement("div")
        camposLoginSenha.className="camposLogin"
        elementosLogin.appendChild(camposLoginSenha)

        const labelSenha=document.createElement("label")
        labelSenha.innerHTML='Senha'
        camposLoginSenha.appendChild(labelSenha)

        const inputSenha=document.createElement("input")
        inputSenha.type='password'
        inputSenha.name='f_senha'
        inputSenha.id=inputSenha.name
        camposLoginSenha.appendChild(inputSenha)
        
        const botoesLogin=document.createElement("div")
        botoesLogin.className="botoesLogin"
        elementosLogin.appendChild(botoesLogin)

        const btn_login=document.createElement("button")
        btn_login.innerText='Login'
        btn_login.id="btn_login"
        btn_login.addEventListener("click",()=>{
            this.vefificaLogin()
        })
        botoesLogin.appendChild(btn_login)

        const btn_cancelar=document.createElement("button")
        btn_cancelar.innerText='cancelar'
        btn_cancelar.id="btn_cancelar"
        btn_cancelar.addEventListener("click",()=>{
            this.fechar()
        })
        botoesLogin.appendChild(btn_cancelar)

        const logoLogin=document.createElement("div")
        logoLogin.id="logoLogin"
        baseLogin.appendChild(logoLogin)

        const imglogo=document.createElement("img")
        imglogo.src=this.config.img
        imglogo.alt="CFB CURSOS"
        logoLogin.appendChild(imglogo)
    }
    static fechar=()=>{
        const id=document.getElementById("id_estilo")
        id.remove()
        fundoLogin.remove()
    }
    static vefificaLogin=()=>{
        const mat=document.getElementById('f_username').value
        const pas=document.getElementById('f_senha').value
        const endpoint=`${this.config.endpoint}/?matricula=${mat}&senha=${pas}`
        fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                sessionStorage.setItem("Logado","true")
                sessionStorage.setItem("matLogado",mat)
                sessionStorage.setItem("nomeLogado",res.nome)
                sessionStorage.setItem("acessoLogado",res.acesso)
                this.callback()
                this.fechar()
            }else{
                sessionStorage.setItem("Logado","false")
                sessionStorage.setItem("matLogado","")
                sessionStorage.setItem("nomeLogado","")
                sessionStorage.setItem("acessoLogado","")
                this.NotCallback()
            }
        })
    }
}

// Exemplo de API Base
// var http = require('http');
// var url = require('url');
// var server = http.createServer(function(req, res) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.writeHeader(200, { "Content-Type": "application/json" });

//   let parametros = url.parse(req.url, true);

//   let mat = parametros.query.matricula;
//   let pas = parametros.query.senha;

//   let dados = null

//   if(mat=="123" && pas=="321"){
//     dados={
//       nome:"Bruno",
//       acesso:10
//     }
//   }

//   res.end(JSON.stringify(dados));
// });
// server.listen(8080);