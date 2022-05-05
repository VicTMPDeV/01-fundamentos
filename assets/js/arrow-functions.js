/*

ARROW FUNCTIONS ó EXPRESIONES LAMBDA
-----------------------------------------------------------------------------------------------------------
Es una nueva forma de definir Funciones Anónimas Expresadas (con Expresiones Lambda, valga la redundancia).

Ésta sintaxis proviene del paradigma de la Programación Funcional en lugar de la POO. Existen lenguajes 
totalmente orientados a la Programación Funcional como Scala, Lisp, R, F# ,Haskell o SQL,  entre otros. 
La diferencia entre este paradigma y el de un paradigma imperativo es que sólo damos instrucciones concretas, 
sin decir el cómo han de hacerse.

En los últimos años, lenguajes propiamente orientados a objetos como JS, Java o C++ han ido incorporando
en sus versiones recientes estas capacidades de programación funcional, que hace que la sintaxis sea más
expresiva y no tan verbosa como en la programación imperativa.

*/



//1.- FUNCION ANONIMA (EXPRESADA) VS ARROW FUNCTION
const saludo = function(){
    console.log('1.-','Hola desde la función anónima');
}
saludo();


const arrowSaludo = () => {
    console.log('2.-','Hola desde una arrow function');
}
arrowSaludo();


//Cuando la función SOLO TIENE 1 LÍNEA DE CÓDIGO, puedo reducirla así:
const arrowSaludoShort = () => console.log('3.-','Un poquito más abreviado');
//En este último caso, la expresión a la derecha del igual, se leería como:
// "Es igual a UNA FUNCION QUE EJECUTA LO QUE SIGUE" , fin.
arrowSaludoShort();


//TIP -> Función AUTOINVOCADA -> (function()...)(); -> Declaro y a continuación invoco.
(()=>console.log('4.-','The shortest way...'))();



//2.- ARROW FUNCTION CON PARAMETROS
const saludaParams = (nombre) => console.log('5.-',`Hola ${nombre}`);
saludaParams('Víctor');

//Más corto... Cuando recibe SOLO 1 PARAMETRO no es necesario poner paréntesis.
const saludaParamsShort = nombre => console.log('6.-',`Hola ${nombre}`);
saludaParamsShort('Corto');

//Shortest
((nombre, apellidos) => console.log('7.-',`Hola ${nombre} ${apellidos}`))('Cortisimo','Cortaete');



//3.- RETURN IMPLÍCITO

// Manera clásica
const sumar = function(a,b){
    return a + b;
}
console.log('8.-',sumar(1,1));

// Arrow Function
const sumarArrow = (a,b) => {
    return a + b; //Si no pongo return, devuelve undefined;
}
console.log('9.-',sumarArrow(2,2));

// Arrow Function con Return implícito (omitiendo las llaves)
const sumarArrowImplicito = (a,b) => a + b;
console.log('10.-',sumarArrowImplicito(3,3));

// ...y Autoinvocada
console.log('11.-', ((a,b) => a + b)(4,4));

// Cuando una arrow function tiene >1 línea de código NO se puede hacer return implícito y el cuerpo se define entre llaves
const manyLinesFunction = () => {
    console.log('H');
    console.log('O');
    console.log('L');
    console.log('A');
}
manyLinesFunction();

// Algunos métodos de Objetos y Arrays para iterar pueden usar arrow functions también
const numeros = [1,2,3,4,5,6];
// Versión Clásica
numeros.forEach(function(element, index){
    console.log('12.-',`El elemento ${element} está en la posición ${index}`);
});
// Arrow Function
numeros.forEach((element, index) => console.log('13.-',`${element} está en la posición ${index}`));

//················································VERY IMPORTANT··························································
//4.- THIS
/*
Cuando creamos una función, se crea un contexto, cuando creo un Objeto, se crea un contexto, cualquier cosa entre llaves
crea un contexto (aka scope). Además está el Contexto Global.
Las arrow functions, a diferencia de las funciones clásicas, tienen la capacidad de capturar el THIS del contexto en el
que se encuentran.
*/

// Funciones Clásicas
function whatIsMyContext(){
    console.log(this);
}
whatIsMyContext();
/* Como la función existe dentro del contexto del navegador, el objeto THIS que captura
la funcíon, apunta al CONTEXTO GLOBAL del DOM (Window del navegador) */

// Si tenemos un Objeto...
const person = {
    name: 'Víctor',
    myContext: function(){
        console.log(this);
        console.log(this.name + ' me llamo');
    }
}
person.myContext();
/* En este caso, el objeto THIS que captura la función, apunta al CONTEXTO PERSON (El Objeto) */

// ...Y si la función de dentro fuera una Arrow Function...
const dog = {
    name: 'Avena',
    herContext: () => {
        console.log(this);
        console.log(this.name + ' guau guau'); //No coge el contexto del objeto (this.name)
    }
}
dog.herContext();
/* Ahora que tiene un Arrow Function, vemos que apunta al CONTEXTO DE WINDOW de nuevo... ¿Por qué?...
Porque capturan EL CONTEXTO EN EL QUE SE ENCUENTRA EL OBJETO dentro del cual están siendo declaradas.

Por este motivo, hay que tener mucho cuidado con utilizar Arrow Functions para declarar métodos dentro 
de objetos literales, porque SE SALTAN EL CONTEXTO DEL EN EL QUE ESTÁN (El del Objeto) Y RECONOCER EL 
CONTEXTO EN DONDE SE ENCUENTRA EL OBJETO EN EL QUE HA SIDO DECLARADO */

// CÓMO CREAR CORRECTAMENTE MÉTODOS EN UN OBJETO LITERAL (Novedad ES-6)
const someOne = {
    name: 'Laura',
    saluda(){ // ni clásicas ni arrow
        console.log(this.name + ' dice: Hola a todos!');
    }
}
someOne.saluda();

//················································VERY IMPORTANT··························································
