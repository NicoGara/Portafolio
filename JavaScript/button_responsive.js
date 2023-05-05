export default function buttonResponsive() {
    const root=document.documentElement,
     d=document

    d.addEventListener("click",e=>{
        if (e.target.matches("#boton-responsive")) {
            root.style.setProperty("--open_close","inline-block")
        }
        if (e.target.matches("#retorno-responsive")) {
            root.style.setProperty("--open_close","none")
        }
    })
}