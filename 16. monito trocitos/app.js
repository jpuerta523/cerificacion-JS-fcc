/* Dónde pertenezco, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const input2 = document.getElementById("inlet2")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

/* logica monitos trocitos divide el arreglo por tamaño indicado por num y luego lo agrega al resultado*/
 //let arr = ["a", "b", 2, 3, 4, "c", 7, 8, 9]
 //console.log(arr)
let num = 2

function chunkArrayInGroups(arr, num) {
    
    let ans = ""
    for(let i=0; i<arr.length; i=i+num){
        let arrSlice = arr.slice(i, i+num) 
        //ans.push(arrSlice)
        ans = `${ans} [${arrSlice}]`
        //console.log(ans)
        }
        return ans
}

//console.log(chunkArrayInGroups(arr, num))

/* boton calcular */

btn.addEventListener("click",()=>{
    resultado.classList.remove("d-none")
    let str = `[${input1.value}]`;
    let num1 = parseInt(input2.value); 
    let arr1 = JSON.parse(str)
    
/*     console.log(arr1)
    console.log(num1) */
    //console.log(chunkArrayInGroups(arr1, num1))
    resultado.textContent = `[${chunkArrayInGroups(arr1, num1)}]` 
}) 

