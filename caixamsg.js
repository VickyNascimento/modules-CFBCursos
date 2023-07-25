class Cxmsg{
    static cor="#888"
    static destino=null
    static divmsg=null
    static tipo=null
    static comando_sn=null
    static textos=null
    static mostrar=(config,titulo,texto)=>{
        this.textos=config.textos
        this.cor=config.cor
        this.tipo=config.tipo
        this.comando_sn=()=>{config.comando_sn()}
        this.destino=document.body
        this.title=titulo
        this.texto=texto
        this.divmsg=document.createElement('div')
        const estiloDiv=
        "display: flex;"+
        "justify-content: center;"+
        "align-items: center;"+
        "position: absolute;"+
        "top: 0px;"+
        "left: 0px;"+
        "width: 100%;"+
        "height: 100vh;"+
        "background-color: rgba(0, 0, 0, 0.7);"+
        "z-index:99999999999999"
        this.divmsg.setAttribute("id","divmsg")
        this.divmsg.setAttribute("style",estiloDiv)
        this.destino.prepend(this.divmsg)
        const estiloArea=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: flex-start;"+
            "flex-direction: column;"+
            "width: 300px;"
        const areaCaixa=document.createElement('div')
        areaCaixa.setAttribute("style",estiloArea)
        this.divmsg.appendChild(areaCaixa)

        const estiloTitulo=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color:"+this.cor+";"+
            "color: #fff;"+
            "padding: 5px;"+
            "border-radius: 5px 5px 0px 0px;"
        const tituloCxmsg=document.createElement("div")
        tituloCxmsg.setAttribute("style",estiloTitulo)
        tituloCxmsg.innerHTML=this.title
        areaCaixa.appendChild(tituloCxmsg)

        const estiloCorpo=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #eee;"+
            "color: #000;"+
            "padding: 30px 5px;"
        const corpoCxmsg=document.createElement("div")
        corpoCxmsg.setAttribute("style",estiloCorpo)
        corpoCxmsg.innerHTML=this.texto
        areaCaixa.appendChild(corpoCxmsg)

        const estiloFooter=
            "display: flex;"+
            "justify-content: space-around;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #ccc;"+
            "color: #000;"+
            "padding: 5px;"+
            "border-radius:0px 0px 5px 5px;"
        const footerCXmsg=document.createElement("div")
        footerCXmsg.setAttribute("style",estiloFooter)
        areaCaixa.appendChild(footerCXmsg)

        const estiloBtnok=
            "background-color:"+this.cor+";"+
            "color: #fff;"+
            "padding: 10px 50px;"+
            "border-radius:5px;"+
            "cursor:pointer;"+
            "text-tranform:uppercase;"
        if(this.tipo=='ok'){
            const btn_ok=document.createElement("button")
            btn_ok.setAttribute("style",estiloBtnok)
            btn_ok.innerHTML="OK"
            btn_ok.addEventListener("click",()=>{
                this.ocultar()
            })
            footerCXmsg.appendChild(btn_ok)
        }else if(this.tipo=='sn'){
            const btn_sim=document.createElement("button")
            btn_sim.setAttribute("style",estiloBtnok)
            btn_sim.innerHTML=this.textos[0]
            btn_sim.addEventListener("click",()=>{
                this.comando_sn()
                this.ocultar()
            })
            footerCXmsg.appendChild(btn_sim)           
            const btn_nao=document.createElement("button")
            btn_nao.setAttribute("style",estiloBtnok)
            btn_nao.innerHTML=this.textos[1]
            btn_nao.addEventListener("click",()=>{
                this.ocultar()
            })
            footerCXmsg.appendChild(btn_nao) 
        }

    }
    static ocultar=()=>{
        this.divmsg.remove()
    }
}
// export {Cxmsg}