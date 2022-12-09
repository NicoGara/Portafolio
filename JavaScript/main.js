const button_sun=document.getElementById("nav__sun")
const button_moon=document.getElementById("nav__moon")
const first_img=document.querySelector(".first-window__img")

const root=document.documentElement

button_sun.addEventListener("click",()=>{
    button_sun.style.display="none"
    button_moon.style.display="inline-block"

    root.style.setProperty("--color_3","#222831")
    root.style.setProperty("--color_1","#00ADB5")

    first_img.setAttribute("src","/assets/images/undraw_programming_re_kg9v.svg")
})

button_moon.addEventListener("click",()=>{
    button_sun.style.display="inline-block"
    button_moon.style.display="none"

    root.style.setProperty("--color_1","#222831")
    root.style.setProperty("--color_3","#00ADB5")

    first_img.setAttribute("src","/assets/images/undraw_programming_re_kg9v_2.svg")
})






const button_responsive=document.getElementById("boton-responsive")
const retorno_responsive=document.getElementById("retorno-responsive")

button_responsive.addEventListener("click",()=>{
    root.style.setProperty("--open_close","inline-block")
})

retorno_responsive.addEventListener("click",()=>{
    root.style.setProperty("--open_close","none")
})




const titulo= document.getElementById("title")



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



document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        moveTitle()
    }, 2000 ) 
})















// este codigoe s el que se encarga de las animaciones de los trabajos
const jobs_container=document.querySelector(".jobs_container")

console.dir(jobs_container.children)

for (const i of jobs_container.children) {

    i.addEventListener("click",()=>{
        console.dir(i.className);

        if (i.className=="container_box_1") {
            // window.location.href= "https://nicogara.github.io/dietetica_gara/"
            window.open("https://nicogara.github.io/dietetica_gara/")
        }
    })

    i.addEventListener("mouseover",(e)=>{
        i.children[1].classList.add("animacion_leaves")

        setTimeout(()=>{
            i.children[0].classList.add("animacion_rotate")
            i.children[3].classList.add("animacion_rotate_2")
        }, 1000 ) 
    });

    i.addEventListener("mouseout",()=>{
        i.children[1].classList.remove("animacion_leaves")
        i.children[1].classList.add("animacion_leaves_off")
        setTimeout(()=>{
            i.children[1].classList.remove("animacion_leaves_off")
        }, 1000 )  

        setTimeout(()=>{
            i.children[0].classList.remove("animacion_rotate")
            i.children[0].classList.add("animacion_rotate_2")
            i.children[3].classList.remove("animacion_rotate_2")
            i.children[3].classList.add("animacion_rotate")
            
            setTimeout(()=>{
                i.children[0].classList.remove("animacion_rotate_2")
                i.children[3].classList.remove("animacion_rotate")
            }, 1000 ) 
        }, 1000 ) 
    });
}



