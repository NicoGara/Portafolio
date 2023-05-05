export default function theme(moon,sun) {

    const button_sun=document.querySelector(`${sun}`),
     button_moon=document.querySelector(`${moon}`),
     d=document,
     root=d.documentElement,
     first_img=document.querySelector(".first-window__img")

    d.addEventListener("click",(e)=>{

        if (e.target.matches(`${sun}`)) {
            button_sun.style.display="none"
            button_moon.style.display="inline-block"
    
            root.style.setProperty("--color_3","#222831")
            root.style.setProperty("--color_1","#00ADB5")
    
            first_img.setAttribute("src","assets/images/undraw_programming_re_kg9v.svg")
        }
    
        if (e.target.matches(`${moon}`)) {
            button_sun.style.display="inline-block"
            button_moon.style.display="none"
    
            root.style.setProperty("--color_1","#222831")
            root.style.setProperty("--color_3","#00ADB5")
    
            first_img.setAttribute("src","assets/images/undraw_programming_re_kg9v_2.svg")
        }
    
    })


}




