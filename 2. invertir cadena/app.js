/* invertir una cadena de texto, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const texto = document.getElementById("texto");
const btn = document.getElementById("invertir")
const resultado = document.querySelector(".alert-success")
const borrar = document.getElementById("borrar")

/* inicira cadena invertida */
let reversedStr ="";

/* funcion invertir cadena */
function reverseString(str){
    for (let i = str.length-1; i>=0; i--){
       reversedStr=reversedStr + str[i];
}
return reversedStr
   
}

/* boton imprime cadena invertida en panatalla  */
btn.addEventListener("click",()=>{
        let str = texto.value
        resultado.textContent = `${reverseString(str)}`       
})

/* boton borrar resultados */
borrar.addEventListener("click",()=>{
    resultado.textContent = " "
})