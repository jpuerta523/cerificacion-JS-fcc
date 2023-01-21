/* Confirmar final, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const input2 = document.getElementById("inlet2")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")
const resultadoFalso = document.querySelector(".alert-danger")


/* funcion para comfirmar final */
function confirmEnding(str, target){
    let targetLen =  target.length
    let strEnd = str.slice(str.length-targetLen, str.length)
    return target === strEnd
}

/* boton Calcular  */
btn.addEventListener("click",()=>{

    /* limpia los resultados anteriores */
    resultado.classList.add("d-none")
    resultadoFalso.classList.add("d-none")

    let str = input1.value
    let strEnd = input2.value
    let ans = confirmEnding(str, strEnd)

    /* maneja los resultados para true y false */
    if (ans===true){
        resultado.classList.remove("d-none")
        resultado.textContent = `la palabra "${str}" efectivamente finaliza con "${strEnd}".`
    }else{
        resultadoFalso.classList.remove("d-none")
        resultadoFalso.textContent = `la palabra "${str}" no finaliza con "${strEnd}".`
    }
    
    /* resultado.textContent = ` ${confirmEnding(str, strEnd)}`  */      
})





