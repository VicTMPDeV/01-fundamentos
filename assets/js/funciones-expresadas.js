/*

FUNCIONES EXPRESADAS
---------------------------------------------------------------------------------------------------
Existe otra manera de Declarar Funciones, que es utilizarlas como Expresiones, esto es...
ASIGNAR LA FUNCIÓN A UNA VARIABLE , y posteriormente, referenciar la variable que la contiene.

No debemos identificar las funciones asignadas o expresadas (ponerles nombre), ya que, como se encuentran
en el lado de la asignación (a la izquierda de un =), no tienen scope (existencia propia).

Lo que debemos hacer es utilizar Funciones ANÓNIMAS.

*/



//1.- FUNCION ANÓNIMA EXPRESADA SIN PARÁMETROS
const expresada = function () {
    console.log('1.-',"Esto es una función expresada, es decir, una función asignada como valor de una variable.");
}
//Mirad lo que pasa si solo queremos mostrar la constante...
console.log(expresada);
//Esto es debido a que el tipo de dato de la constante es function, por lo tanto ES UNA FUNCIÓN, por lo tanto, hay que invocarla...
console.log(expresada());



//2.- AQUÍ NO HAY HOISTING QUE VALGA
noHoisting();

const noHoisting = function(){
    console.log('2.-',"Si invocamos esta función antes de su definición, JS nos dirá...");
}

/*
Es lógico que JS no pueda hacer el Hoisting de esta función anónima, porque NO TIENE IDENTIFICACIÓN, NO ESTÁ REFERENCIADA,
NO HAY NADA QUE SUBIR ARRIBA, PORQUE ESTÁ SIENDO ASIGNADA EN EL MISMO MOMENTO QUE SE DECLARA.

Por decir algo más, el uso de este tipo de funciones se considera una buena práctica, para así evitar errores de compilación
y tener el código bien ordenado.
*/








