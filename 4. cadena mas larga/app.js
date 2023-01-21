/* Cadena mas larga, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input = document.getElementById("inlet")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

/* funcion para encontrar el nuemro de caracteres de cadena mas larga*/
/* priemro vuelve la cadena en un arreglo, luego recorre cada posicion del arreglo y busca el maximo */
function strMaxLeng(str){
    let maxLeng  = str.split(" ").map(word => word.length).reduce(function(a, b) {
        return Math.max(a, b);
    },-Infinity);
    return maxLeng
}

/* boton Calcular  */
btn.addEventListener("click",()=>{
    resultado.classList.remove("d-none")
    let ans = input.value
    resultado.textContent = `La palabra más larga de la oración: "${ans}" tiene ${strMaxLeng(ans)} caracteres.`       
})