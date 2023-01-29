/* Dónde pertenezco, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const input2 = document.getElementById("inlet2")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

/* logica para encontar indice de elemento, primero se agrega el elemento a arreglo y se ordena luego se busca el indice del elemento adicionado */
function getIndexToIns(arr, num){
    arr.push(num)
    arr.sort(function(a,b){return a - b;})
    return arr.findIndex(item => item == num)
}

/* boton calcular */

btn.addEventListener("click",()=>{
    resultado.classList.remove("d-none")
    let arr = (input1.value).trim().split(' ');
    let num = (input2.value);
    

    resultado.textContent = `${getIndexToIns(arr, num)}`
})




