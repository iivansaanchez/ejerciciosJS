//MANIPULACIÓN DE CADENAS

//EJERCICIO 1

// let contador=0;
// let letra="";
// let palabraFinal="";

// function capitalizarPalabras(word="hola mundo"){
//     while(word.length>contador){
//         if(contador==0){
//             letra=word[contador].toUpperCase();
//             palabraFinal+=letra;
//             contador++;
//         }else{
//             if(word[contador]==" "){
//                 palabraFinal+=word[contador];
//                 contador++;
//                 letra=word[contador].toUpperCase();
//                 palabraFinal+=letra;
//                 contador++;
//             }else{
//                 palabraFinal+=word[contador];
//                 contador++;
//             }
//         }
//     }

//     return palabraFinal;
// }
   
    
// console.log(capitalizarPalabras());


//EJERCICIO 2
// let palabraDelReves="";

// function invertirCadena(word="Hello"){
    
//     for(let i = word.length; i>=0; i--){
//         palabraDelReves+=word[i];
//     }
//     return palabraDelReves;
// }
        
// console.log(invertirCadena());

//EJERCICIO 3

// let vocales = ["a", "e", "i", "o", "u"];
// let contadorVocales=0;

// function contarVocales(word="MURCIELAGO".toLowerCase()){
//     for(let i = 0; i < vocales.length; i++){
//         for(let j = 0; j < word.length; j++){
//             if(vocales[i]==word[j]){
//                 contadorVocales++;
//             }
//         }
//     }
//     return contadorVocales;
// }

// console.log(contarVocales());

//EJERCICIO 4

// let contadorLetra=0;

// function eliminarDuplicado(word="programming"){
//     for(let i = 0; i < word.length; i++){
//         if(word.includes(word[i])){

//         }
//         }
//     }

//VALIDACIÓN DE FORMATOS

//EJERCICIO 5

// let direccionValida = ["@gmail.com", "@gmail.es", "@hotmail.com", "@hotmail.es"];
// let resultado;

// function validarEmail(email="12345@gmail.e"){
//     for(let i = 0; i < direccionValida.length; i++){
//         if(email.includes(direccionValida[i])){
//             resultado=true;
//         }else{
//             resultado=false;
//         }
//     }
//     return resultado;
// }
// console.log(validarEmail());

//EJERCICIO 6
let resultado=false;

function validarTelefono(number="(123)456-7890"){
    for(let i = 0; i < number.length; i++){
        if(number[0]=="("){
            resultado=true;
        }
    }
    return resultado;
}

console.log(validarTelefono);

