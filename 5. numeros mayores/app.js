/* Números mayores en un arreglo anidado, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const input2 = document.getElementById("inlet2")
const input3 = document.getElementById("inlet3")
const input4 = document.getElementById("inlet4")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

/* funcion para calcular mayor numero en cada arreglo interno */
function mayor(innerArr){
    let aMayor = innerArr.reduce(function(a, b) {
        return Math.max(a, b);
    },-Infinity);
    return aMayor
}

/* funcion para recorrer el arreglo respuesta y buscar el mayor */
function largestOfFour(arr){
    let arrMay = arr.map(a => mayor(a)) 
    return arrMay
}


    /* boton Calcular  */

btn.addEventListener("click",()=>{
    resultado.classList.remove("d-none")
    let ans1 = (input1.value).split(',');
    let ans2 = (input2.value).split(',');
    let ans3 = (input3.value).split(',');
    let ans4 = (input4.value).split(',');
    
    /* generar el arreglo anidado */
    let ans = []
    ans.push(ans1)
    ans.push(ans2)
    ans.push(ans3)
    ans.push(ans4)

    /* imprimir resultado en pantalla */
    resultado.textContent = `Para la cadena anidad: [[${ans1}], [${ans2}], [${ans3}], [${ans4}]] los valores mayores de cada cadena anidada son: [${largestOfFour(ans)}]`
    console.log(ans)       
})


/* console.log(largestOfFour(ans))
console.log(mayor([13, 27, 18, 26])) */


