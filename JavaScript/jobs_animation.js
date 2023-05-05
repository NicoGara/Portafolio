export default function jobsAnimation() {
    
    
// este codigoe s el que se encarga de las animaciones de los trabajos
    const jobs_container=document.querySelector(".jobs_container")

    console.dir(jobs_container.children)



for (const i of jobs_container.children) {
    let indication = ""
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
            // window.getComputedStyle(i.children[1]).transform == "matrix(1, 0, 0, 1, 0, -291)" me indica cuando se realiza la animacion de traslacion completa, entonces hasta que no se realice la misma no dejo que continue.
            if (window.getComputedStyle(i.children[1]).transform == "matrix(1, 0, 0, 1, 0, -291)") {
                i.children[0].classList.add("animacion_rotate")
                i.children[3].classList.add("animacion_rotate_2")
                indication = "llego"
            }
        }, 1000 ) 
    });

    
    i.addEventListener("mouseout",()=>{
        if (indication == "llego") {
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

        } else{
        setTimeout(()=>{
            i.children[1].classList.remove("animacion_leaves")
                i.children[0].classList.remove("animacion_rotate")
                i.children[3].classList.remove("animacion_rotate_2")
            }, 0 ) 
        }


        indication=""
    });
}

}