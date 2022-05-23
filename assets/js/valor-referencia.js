/*
PASO POR VALOR -> Cualquier tipo de asignación o paso de parametro a función es UN VALOR, NO UNA REFERENCIA A UNA REGIÓN DE LA MEMORIA.
*/
// let a = 10; //por valor
// let b = a;  //por valor (el valor de a)
// a = 30;
// console.log({a, b});

/*PASO POR REFERENCIA -> Todos los Objetos se pasan por Referencia*/
let juan = { nombre: 'Juan' };
// let ana  = juan; //ana es juan, si le cambio el nombre a ana, se lo cambio a juan
// let ana  = {juan}; //ana contiene un objeto juan
let ana  = {...juan}; //...operador Spread , ana es un Clon de juan, pero no es juan

ana.nombre = 'Ana';
console.table({juan, ana});

//CON ARRAYS
// const frutas = ['Manzana', 'Pera', 'Piña'];
// const otrasFrutas = [...frutas, 'Mango'];
// otrasFrutas.push('Mango');
// console.table({frutas, otrasFrutas});
