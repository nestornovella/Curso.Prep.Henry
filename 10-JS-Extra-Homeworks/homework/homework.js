// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    const entries = Object.entries(objeto);
     var array = []
    for(i=0;i<entries.length;i++)
    {
      array.push(entries[i])
    }
    return array
  
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  var ordena = function(value){
    return [...value].sort((a,b) => a.localeCompare(b)).join("")
}


  var ordenado = ordena(string) 
  var obj = {}
  var coincidencias = []
  for (x = 0; x < ordenado.length; x++){
    for (i = 0; i < ordenado.length;i++){
      if (ordenado[x]=== ordenado[i]){
        coincidencias.push(string[i])
      }      
    }
    obj[ordenado[x]] = coincidencias.length
    coincidencias = []
  }
  return obj
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  var mayusculas = ""
  var minusculas = ""
  for(x = 0; x< s.length;x++){
    if(s[x] === s[x].toUpperCase()){
      mayusculas = mayusculas + s[x]
    }
    else minusculas = minusculas + s[x]
  }
  return mayusculas + minusculas
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  var array = []
  var mirror = ""
  var procesado = ""
  array = str.split(" ")
  for(x = 0; x < array.length;x++){
    mirror = mirror + " " + array[x].split("").reverse().join("")

  }
  procesado = mirror.trim()  
  return procesado
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  var toString = numero.toString()
  var resultado = ""
  var invertido = toString.split("").reverse().join("")
  if(invertido === toString){
    return "Es capicua"
  }
  return "No es capicua"
}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  
  var nuevaCadena = ""
  for( var x= 0; x < cadena.length;x++){
    if(cadena[x] != "a" && cadena[x] != "b" && cadena[x] != "c"){
      nuevaCadena = nuevaCadena + cadena[x]
    }
  }
  return(nuevaCadena)

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  for (var x = 0; x < arr.length; x++){
    for (var i = x + 1;i < arr.length; i++){
      if (arr[x].length > arr[i].length){
        var may = arr[x]
        arr[x] = arr[i]
        arr[i] = may
      }
    }
  } 
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  let interseccion = []
  for (var x = 0; x< arreglo1.length ;x++){
    for(var i = 0; i < arreglo2.length; i++)
      if(arreglo1[x] === arreglo2[i])
      interseccion.push(arreglo2[i])
  }
  return interseccion

}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

