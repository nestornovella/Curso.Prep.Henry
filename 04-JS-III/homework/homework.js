// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  return array.pop()
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  for (var x = 0 ; x < array.length ; x++ ){
    array[x]++
  }
  return array

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  array.unshift(elemento)
  return(array)

}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  return palabras.join(" ")
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  for (var x = 0; x <= array.length; x++){
    if (array[x] == elemento){
      return true
    }
    
  }
  return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  var resultado = 0
  
  for (var x = 0; x < numeros.length ;x++){
    resultado += Number(numeros[x])
  }
  return resultado
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    var i = 0
    var resultado = 0  
  for (var x = 0; x < resultadosTest.length; x++){
    i++
    resultado = resultado + resultadosTest[x]
  }
  return resultado / i
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  var resultado = 0  
  for(var x = 0; x < numeros.length; x++){
    if (resultado < numeros[x]){
      resultado = numeros[x]
    }

    }
    return resultado
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo

resultado = arguments[0]

  if (arguments.length == 0){
    return 0
  }
  else if (arguments.length == 1){
    return arguments[0]
  }
  for (var x = 1 ;x < arguments.length; x++){
    
   resultado = resultado * arguments[x] 
  }
  return resultado
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  var nuevoArray = []
  for (var x= 0; x < arreglo.length; x++){
    if (arreglo[x] > 18){
      nuevoArray.push(arreglo[x]) 
    }
  }
  return nuevoArray.length

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
var array = []
array = array + numeroDeDia
  for (var x = 0; x < array.length; x++ ){
    if (array[x] == 1 || array[x] == 7){
      return "Es fin de semana"
    }
    else return "Es dia Laboral"
  }  
  // podria haberse realizado con if y seria mas sensillo solo: if (numeroDeDia === 1 || numeroDeDia ===7){ return "Es fin de semana"}
  //else return "Es dia Laboral"
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  var string = n.toString()
   if (string.startsWith("9") ){
    return true
   } 
   else return false

}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  var y = arreglo[0]
  for (var x = 1; x < arreglo.length; x++){
    if ( arreglo[x] != y){
      return false
    }
    

  }
  return true
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  var arrayNuevo = []  
  
  for (var x = 0; x < array.length; x++){
    if (array[x] == "Enero" || array[x] == "Marzo" || array[x] == "Noviembre"){
      arrayNuevo.push(array[x])
    }
    
    }
    if( arrayNuevo.length == 3){
      return arrayNuevo
    }
    else return "No se encontraron los meses pedidos"
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  var NuevoArray = []
  for (var x = 0; x< array.length; x++){
    if (array[x] > 100){
      NuevoArray.push(array[x])
    }
  }
  return NuevoArray
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  var valor = []
  var num = numero
  var i = 0
  for (var x = 0; x < 10; x++){
    valor.push(num += 2)
    i++
    if (num == i){
      break
    }
  } 
  if (i < 10 ){
    return "Se interrumpió la ejecución"
  }
  else return valor

}
function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  var array = []
  var num = numero
  for (var x = 0; x < 10;x++){
    if (x === 5 ){
      continue
    }
     
    array.push(num += 2)
  }
  return array

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
