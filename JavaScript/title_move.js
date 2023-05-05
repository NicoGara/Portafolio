export default function moveTitle(idTitle) {
    const d=document,
     root=d.documentElement,
     titulo= document.getElementById(idTitle)

    const moveTitle= ()=>{
        if (titulo.textContent=="Mi portafolio") {
            setTimeout(()=>{titulo.textContent="Nicolas Garavaglia"}, 1000 )
            root.style.setProperty("--animacion_nombre","tituloVaVuelve")
            root.style.setProperty("--animacion_timepo","2s")
        }
        if (titulo.textContent=="Nicolas Garavaglia") {
            setTimeout(()=>{titulo.textContent="Mi portafolio"}, 1000 )
            root.style.setProperty("--animacion_nombre","tituloVaVuelve")
            root.style.setProperty("--animacion_timepo","2s")
        }
        setTimeout(()=>{
            root.style.setProperty("--animacion_nombre","")
            root.style.setProperty("--animacion_timepo","")
        }, 2000 )
    }
    
    
    titulo.addEventListener("click",(e)=>{
        moveTitle()
    })
    
    
    
    setTimeout(()=>{
        moveTitle()
    }, 2000 ) 

}

