/*const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const inputOriginal = document.getElementById('Mensaje');
const cifrador = document.getElementById('cifrar');
const resultado = document.getElementById('Mensaje2');
const rango = document.getElementById('rango');

const shifMessage = () => {
    const wordArray = [...inputOriginal.value.toUpperCase()];
    printChar(0, wordArray);
}

const printChar = (currentLetterIndex, wordArray) => {
    if(wordArray.length === currentLetterIndex) return;
    inputOriginal.value = inputOriginal.value.substring(1)
    const spanChar = document.createElement("span");
    resultado.appendChild(spanChar);
    animateChar(spanChar)
        .then( () => {
            const charSinCodificar = wordArray[currentLetterIndex];
            spanChar.innerHTML = alfabeto.includes(charSinCodificar) ? 
                alfabeto[(alfabeto.indexOf(charSinCodificar) + parseInt(rango.value)) % alfabeto.length] : 
                charSinCodificar
            printChar(currentLetterIndex + 1, wordArray);
        });


}

const submit = e => {
    e.preventDefault();
    resultado.innerHTML = '';
    shifMessage()
}

cifrador.onsubmit = submit;*/

window.addEventListener("load",inicio,true);

function inicio(){
    document.getElementById("mensaje").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true);
    
    document.getElementById("cifrar").addEventListener("click",function(){  
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;               
        document.getElementById("mensaje2").value = cifrar2(texto, desplazamiento);
    },true);
    document.getElementById("descifrar").addEventListener("click",function(){  
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;                               
        document.getElementById("mensaje2").value = descifrar(texto, desplazamiento);
    },true);
}

function cifrar(texto, desplazamiento) {
    if (!texto) 
        return ''; // No se recomienda que haya más de un punto de salida de la función
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazamiento = (desplazamiento % 26 + 26) % 26; 
    return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) + desplazamiento) % 26]);
}

function descifrar(texto, desplazamiento) {
    if (!texto) 
        return ''; // No se recomienda que haya más de un punto de salida de la función
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazamiento = (desplazamiento % 26 - 26) % 26; 
    return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - desplazamiento) % 26]);
}

function cifrar2(texto, desplazamiento) {
    let resultado='';
    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazamiento = (desplazamiento % 26 + 26) % 26; 
    
    if (texto){
        for (let i=0; i<texto.length; ++i){
            //Si la letra está en el array de letras (es un símbolo, un espacio...)
            if (letras.indexOf(texto[i])!=-1)
            { 
                //almacenamos en c la posición de la letra más el desplazamiento y le aplicamos el módulo
                let posicion=((letras.indexOf(texto[i])+desplazamiento) % 26);
                resultado+=letras[posicion];
            }
            else
                resultado+=texto[i]; // Números, espacios, símbolos... 
        }
    }
    return resultado;
}