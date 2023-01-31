/* Dónde pertenezco, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const input2 = document.getElementById("inlet2")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

/* logica monitos trocitos divide el arreglo por tamaño indicado por num y luego lo agrega al resultado*/
let arr = [0, 1, 2, 3, 4, 5, 7, 8, 9]
let num = 2

function chunkArrayInGroups(arr, num) {
    let ans = [] 
    for(let i=0; i<arr.length; i=i+num){
    let arrSlice = arr.slice(i, i+num) 
    ans.push(arrSlice)
    //console.log(ans)
        }
        return ans
}

console.log(chunkArrayInGroups(arr, num))

/* boton calcular */

/* btn.addEventListener("click",()=>{
    resultado.classList.remove("d-none")
    let arr = (input1.value).trim().split(' ');
    let num = (input2.value);
    
    console.log(chunkArrayInGroups(arr, num))
    resultado.textContent = `${chunkArrayInGroups(arr, num)}` 
})*/

