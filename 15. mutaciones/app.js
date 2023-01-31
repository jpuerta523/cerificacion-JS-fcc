/* Mutaciones, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input1 = document.getElementById("inlet1")
const input2 = document.getElementById("inlet2")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")
const resultadoFalso = document.querySelector(".alert-danger")

function makeArr(str){
  let  arr = str.trim().toLowerCase().split("")
  return [...new Set(arr)]
}

/* version modificada de FCC para funcionar con valores tomados de documento HTML */
function mutation(arr1, arr2) {
  let arrAns =[]
  for (let e=0; e <= arr2.length-1; e++ ){
      arrAns.push(arr1.includes(arr2[e]))
  }
  let ans = arrAns.indexOf(false ===-1)
 
  return ans === -1 ? true : false
}

/* boton Calcular  */
btn.addEventListener("click",()=>{

  /* limpia los resultados anteriores */
  resultado.classList.add("d-none")
  resultadoFalso.classList.add("d-none")

  let str1 = input1.value
  let str2 = input2.value
  let ans = mutation(str1, str2)

  /* maneja los resultados para true y false */
  if (ans===true){
      resultado.classList.remove("d-none")
      resultado.textContent = `Todos los caracteres de "${str2}" están presentes en la cadena "${str1}".`
  }else{
      resultadoFalso.classList.remove("d-none")
      resultadoFalso.textContent = `NO todos los caracteres de "${str2}" están presentes en la cadena "${str1}".`
  }
    
})
