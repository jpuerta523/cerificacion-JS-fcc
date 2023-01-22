/* recortar cadena, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const input2 = document.getElementById("inlet2")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

/* funcion para recortar cadena */
function truncateString(str, num) {
    if (num < str.length){
        return `${str.slice(0,num)}...` 
    }else{
        return str
    }    
}

/* boton Calcular  */
btn.addEventListener("click",()=>{
    resultado.classList.remove("d-none")
    let str = input1.value
    let num = input2.value
    resultado.textContent = ` ${truncateString(str, num)}`       
})