/*

FUNCIONES DECLARADAS
---------------------------------------------------------------------------------------------------
Una función (ó método o rutina o subrutina) en cualquier lenguaje de programación, es un bloque de 
código autocontenido (tiene su propio contenido independiente del scope o ámbito global) que se va
a definir una única vez y que se puede invocar para su ejecución en cualquier momento y reutilizar 
tantas veces como se quiera.

Una función puede o no recibir parámetros (que al ser invocada se le pasarán en forma de argumentos,
esto es, variables o literales con un valor definido) y también puede devolver o no valores (si no 
devuelve valores, se considera que modifican el estado de algo, en este caso, de un objeto).

Coloquialmente se dice que las funciones en JS son ciudadanos de primera clase, esto quiere decir 
que son un tipo especial de Objetos (definen Prototipos), que se pueden asignar a una variable 
directamente como Valor, pueden retornar la ejecución de otra Función, se pueden pasar como 
argumentos (básicamente todo gira entorno a las Funciones en JS).

*/



//1.- FUNCION DECLARADA SIN PARÁMETROS
function saludarAlMundo(){
    return '¡Hola Mundo!';
}

// INVOCACION -> En cualquier lenguaje de programación, los paréntesis indican que una función se va a ejecutar.
let result1 = saludarAlMundo();
console.log('1.-', result1);



//2.- FUNCION DECLARADA CON PARÁMETROS
function saludarASomeone(someone){
    // return '¡Hola '+someone+'!'; //Clasic string -> Concatenando strings
    return `¡Hola ${someone}!`;     //Template strings con backticks -> INTERPOLANDO el valor -> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
}

// INVOCACION
let result2 = saludarASomeone('Víctor');
console.log('2.-', result2);



//3.- COMPORTAMIENTO DEL RETURN
/*
Cuando dentro del cuerpo de una Función, el intérprete del navegador encuentra la palabra reservada
return, retorna el valor y la pila de ejecución continúa su flujo normal fuera de la función,
ignorando todas las líneas de código que están por debajo del primer return de la función.

TIP -> Sabiendo esto, podré utilizar un return; como un break; cuando sea necesario, es más elegante.
*/
function stupidSaludator(someone, someother){
    return `¡Hola ${someone}!`;
    return `¡Hola ${someother}!`; 
}

console.log('3.-', stupidSaludator('Atanasio','Eustaquio')); 

console.log('4.-', stupidSaludator()); 
/*
NOTA: Se puede observar que, como no le he pasado argumentos a los parámetros de la función, 
el valor asignado a dichos parámetros es UNDEFINED (obvio, NO DEFINIDO).

Vamos a probar posibles soluciones a esto (aparte de escribir bien el código cuando toca)
 */

// Solución 1 - Haciendo trampas.
function saludatorCheater(someone){
    someone = 'Tramposo';
    return `¡Hola ${someone}!`;
}

console.log('5.-', saludatorCheater());
/* 
Esto evidentemente no es una buena práctica, porque hacemos que la función este acoplada a 
la asignación literal del valor dentro del cuerpo de la misma, y no tiene ningún sentido, porque
siempre va a saludar a la misma persona independientemente del argumento que le pasásemos.
*/
console.log('6.-', saludatorCheater('OYEEEEEEEEEE NO ME TIMES!!!'));

// Solución 2 - La correcta
/* 
La solución correcta (aparte de pasar parámetros como dios manda), viene dada desde el año 2015
con la salida del ES6, y sería darle un valor por defecto a los parámetros, como se muestra
a continuación:
*/
function saludatorNoCheater(someone = '...como te llames...', bye = '...imbecil...'){ //Asigno valores por defecto a los parámetros
    return `¡Hola ${someone} , ${bye}!`;
}

console.log('7.1-', saludatorNoCheater());
console.log('7.2-', saludatorNoCheater('Ah!!! ...Víctor, eso... gracias por decírmelo...','venga... adiós'));



//4.- HOISTING -> https://developer.mozilla.org/es/docs/Glossary/Hoisting 
/*
Aunque siempre hemos escuchado que JS es un lenguaje interpretado línea a línea... primeramente el intérprete le da una pasadita
por encima al código para recolocar las cosas en su sitio...

Si pongo la invocación de la función antes de declararla, funciona igual, porque el intérprete de JS en esta primera pasada, recoloca
el código poniendo primero (elevando) las variables y las Funciones (DECLARADAS) aunque no lo veamos, y ya después, pega una segunda 
pasada, esta vez sí, interpretando y ejecutando línea a línea el código.
*/

joistin();

function joistin(){
    console.log('8.-', 'Una función declarada puede invocarse en cualquier parte del código, incluso antes de ser declarada...');
}