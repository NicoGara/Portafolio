const root=document.documentElement,
 d=document




import buttonResponsive from "./JavaScript/button_responsive.js"
import jobsAnimation from "./JavaScript/jobs_animation.js"
import theme from "./JavaScript/theme.js"
import moveTitle from "./JavaScript/title_move.js"





d.addEventListener("DOMContentLoaded",()=>{

    theme("#nav__moon","#nav__sun")

    moveTitle("title")

    buttonResponsive()

    jobsAnimation()
})



d.addEventListener("submit",()=>{


    d.addEventListener("visibilitychange",()=>{
        location.reload()
    })
})
































