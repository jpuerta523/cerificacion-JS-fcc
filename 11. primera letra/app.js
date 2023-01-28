/* Primera letra, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */

/* identificar elementos HTML */
const input = document.getElementById("inlet")
const btn = document.getElementById("calculate")
const resultado = document.querySelector(".alert-success")

/* funcion para primera letra. toma la oración y primero devuelve un arreglo con todas las letras en minusculas, luego lo recorre cambiando la primera en mayuscula y uniendo el recorte de la palabra despues de la primera letra, finalmente lo transforma de nuevo en una cadena de texto separando elementos por " " y retorna la respuesta  */

function titleCase(str) {
    strWE = str.trim()
    if (strWE !== ""){
        let arr = strWE.toLowerCase().split(" ")
        return arr.map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
    }else{
        return "ingrese una frase valida"
    }
    
}

/* boton Calcular  */
btn.addEventListener("click",()=>{
    resultado.classList.remove("d-none")
    let ans = input.value
    resultado.textContent = `${titleCase(ans)}`       
})

