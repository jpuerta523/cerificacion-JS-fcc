/* Calcular un factorial, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input = document.getElementById("inlet")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

/*  funcion calcular factorial de un numero*/
function factorialize(num){
    let resultado =1
    for (var i = 1; i <= num; i++) {
        resultado *= i
    }
    return resultado
}

/* boton Calcular  */
btn.addEventListener("click",()=>{
    let ans = input.value
    resultado.textContent = `El resultado de ${ans}! es: ${factorialize(ans)}`       
})
 