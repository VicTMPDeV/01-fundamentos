/*PASO POR VALOR -> Cualquier tipo de asignación
**o paso de parametro a función es UN VALOR, NO UNA REFERENCIA
**A UNA REGIÓN DE LA MEMORIA.
*/
let a = 10;
let b = a;
a = 30;
console.log({a, b});

/*PASO POR REFERENCIA -> Todos los Objetos se pasan por Referencia*/
let juan = { nombre: 'Juan'};
// let ana  = juan;
// let ana  = {juan};
let ana  = {...juan}; //...operador Spread , sería como decir clonar el objeto juan
ana.nombre = 'Ana';
console.table({juan, ana});

//CON ARRAYS
const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = [...frutas, 'Mango'];
// otrasFrutas.push('Mango');
console.table({frutas, otrasFrutas});
