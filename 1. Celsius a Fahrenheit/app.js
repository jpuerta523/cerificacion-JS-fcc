/* Convertir Celsius a  Fahrenheit, actividad de certificacion freecodecamp
estilos realizados con bootstrap y logica en JS
modificado para presentar resultados en documento HTML con respecto a lo solicitado por fcc */ 


/* identificar elementos HTML */
const TempC = document.getElementById("celsius");
const btn = document.getElementById("calcular") 
const resultado = document.querySelector(".alert")
/* inicializar celsius */
let c = 0

/* funcion convertir de celsius a Fahrenheit */
    function convertCtoF(c) {
        let f = c*(9/5)+32
        return f
    }

    /* escucha del boton y resultado con backticks */
btn.addEventListener("click",()=>{
    let c = parseInt(celsius.value)
    resultado.textContent = `La temperatura en grados Fahrenheit es: ${convertCtoF(c)}`
})

//console.log(convertCtoF(c))


