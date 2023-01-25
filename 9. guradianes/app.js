/* Confirmar Guardianes, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const input2 = document.getElementById("inlet2")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")
const resultadoFalso = document.querySelector(".alert-danger")


function findElement(arr, func) {
    return arr.find(func);
}


/* boton Calcular  */
btn.addEventListener("click",()=>{

    /* limpia los resultados anteriores */
    resultado.classList.add("d-none")
    resultadoFalso.classList.add("d-none")
   
    let arr = input1.value.split(" ")
    let func = eval(input2.value)
    let ans = findElement(arr, func)
    
    
    /* maneja los resultados para true y false */
     if (findElement(arr, func)===undefined){
        resultadoFalso.classList.remove("d-none")
        resultadoFalso.textContent = `la cadena "${arr}" NO cumple con la condición definida por "${func}".`
    }else{  
        resultado.classList.remove("d-none")
        resultado.textContent = `la cadena "${arr}" cumple con la condición definida por "${func}" y el primer elemento que cumple es ${findElement(arr, func)}.`
    }
    
    
})