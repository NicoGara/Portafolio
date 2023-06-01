const d=document,
 w=window,
 n=w.navigator

export default function validacionFormulario(formClass) {

    const $form= d.querySelector(`${formClass}`),
    $inputs = d.querySelectorAll(`${formClass} [required]`)

    console.log($inputs);

    $inputs.forEach(input => {
        const $span=d.createElement("span")
        $span.id=input.name;
        $span.textContent=input.title;
        $span.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend", $span)
    });

    d.addEventListener("keyup",(e)=>{
        if (e.target.matches(`${formClass} [required]`)) {
            let $input=e.target,
            pattern= $input.pattern || $input.dataset.pattern;

            if (pattern && $input.value!=="") {
                let regex = new RegExp(pattern)
                
                !regex.exec($input.value)
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active");
                
                
            }
            if (!pattern) {
                $input.value===""
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active");
            }
        }
    })

    d.addEventListener("submit",e=>{
        e.preventDefault();
        alert("enviando formulario")

        const $loader=d.querySelector(".contact-form-loader"),
        $response=d.querySelector(".contact-form-response")

        $loader.classList.remove("none")

        fetch("https://formsubmit.co/ajax/nicolasgaravaglia@hotmail.com",{
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:new FormData(e.target)
        })
         .then(res=>res.json())
         .then(json=>{
            console.log(json);
            $loader.classList.add("none")
            $response.classList.remove("none")
            $response.innerHTML=`<p>${json.message}</p>`
            $form.reset()
         })
         .catch(err=>{
            console.log(err);
            let message=err.statusText||"Ocurrio un error al enviar, intenta nuevamente"
            $response.innerHTML= `Error ${err.status}: ${message}`;

            $response.innerHTML=`<p>${json.message}</p>`
         }).finally(()=>{
            setTimeout(() =>$response.classList.add("none"), 3000);
         })
    })
}