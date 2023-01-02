
const typed = new Typed(".typeds", {
    strings : ["Franco Bonaffini"],
    typeSpeed: 150, //Velocidad de escritura
    startDelay: 0, //retraso para que comience a escribir
    backSpeed: 75, //velocidad de borrado
    loop:true,  //para que se repita en loop y no solo haga 1 vez
    loopCount:"false", //repeticiones infinitas, si pones 1 o 2 se repite ESAS veces.
    backDelay:1500, // velocidad q espera para comenzar a borrar.
    cursorChar:"|", // forma del cursor que borra
    contentType: "html" // si le ponemos "null" te escribe el contenido HTML de los strings (porque podemos ponerle codigo html como <i class= titulo> Franco Bonaffini <i>)
})


let animacion1 = document.querySelector(".animacion1")
let animacion2 = document.querySelector(".animacion2")
let animacion3 = document.querySelector(".animacion3")
let animacion4 = document.querySelector(".animacion4")
let animacion5 = document.querySelector(".animacion5")
let animacion6 = document.querySelector(".animacion6")



//cuando haga un "scroll" en toda la ventana del nevegador, va a escuchar ese "scroll" y va a ir ejecutando la funcion de arriba "mostrarScroll()""


window.addEventListener("scroll", ()=>{
    let scrollTop = document.documentElement.scrollTop;

    let alturaAnimacion1 = animacion1.offsetTop
    if(alturaAnimacion1 - 700 < scrollTop){
        animacion1.style.opacity = 1
        animacion1.classList.add("mostrarIzquierda")
    }

    let alturaAnimacion2 = animacion2.offsetTop
    if(alturaAnimacion2 - 700 < scrollTop){
        animacion2.style.opacity = 1
        animacion2.classList.add("mostrarDerecha")
    }


    let alturaAnimacion3 = animacion3.offsetTop
    if(alturaAnimacion3 - 700 < scrollTop){
        animacion3.style.opacity = 1
        animacion3.classList.add("mostrarIzquierda")
    }
    let alturaAnimacion4 = animacion4.offsetTop
    if(alturaAnimacion4 - 700 < scrollTop){
        animacion4.style.opacity = 1
        animacion4.classList.add("mostrarDerecha")
    }


    let alturaAnimacion5 = animacion5.offsetTop
    if(alturaAnimacion5 - 700 < scrollTop){
        animacion5.style.opacity = 1
        animacion5.classList.add("mostrarIzquierda")
    }
    let alturaAnimacion6 = animacion6.offsetTop
    if(alturaAnimacion6 - 700 < scrollTop){
        animacion6.style.opacity = 1
        animacion6.classList.add("mostrarDerecha")
    }
})


const boton = document.querySelector(".nav2");



boton.addEventListener("click" , ()=> {

    let liContainer = document.querySelector(".nav3")
    
    liContainer.classList.toggle("nav4")
})




