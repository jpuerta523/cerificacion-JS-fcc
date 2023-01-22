/* Repetir Cadena, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const input2 = document.getElementById("inlet2")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

/* funcion para Repetir cadena */
function repeatStringNumTimes(str,num){
    let newStr=""
    for (i=1; i<=num; i++){
    newStr = newStr + str
    }  
    return newStr
}

/* boton Calcular  */
btn.addEventListener("click",()=>{
    resultado.classList.remove("d-none")
    let cadena = input1.value
    let numRep = input2.value
    resultado.textContent = `la cadena de caracteres "${cadena}" repetida ${numRep} veces es: "${repeatStringNumTimes(cadena,numRep)}".`       
})
