import { login } from "./login.js";
import { Cxmsg } from "./caixamsg.js"

const callback=()=>{
    alert("Okay")
}
const notCallback=()=>{
    const config={
        cor:"#800",
        tipo:"ok",
    }
    Cxmsg.mostrar(config,"Erro","Login nao efetuado!<br> Usuario nao encontrado ou senha incorreta")}

login.login(callback,notCallback)