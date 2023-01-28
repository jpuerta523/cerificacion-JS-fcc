/* Cortar y rebanar, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const input2 = document.getElementById("inlet2")
const input3 = document.getElementById("inlet3")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

/* logica para dividr arreglo 2 e introducir el arreglo1 en la posicion solictada */
function frankenSplice(arr1, arr2, num){
    let start = arr2.slice(0,num)
    let end = arr2.slice(num,arr2.length)
    return ans = start.concat(arr1,end) 
}

btn.addEventListener("click",()=>{
    resultado.classList.remove("d-none")
    let arr1 = (input1.value).split(' ');
    let arr2 = (input2.value).split(' ');
    let num = input3.value

    resultado.textContent = `${frankenSplice(arr1, arr2, num)}`
})







