
/* identificar elementos HTML */
const input = document.getElementById("inlet")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

//const str="The quick brown fox jumped over the lazy dog";
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