const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,0];

console.log(arr1,arr2);
console.log(...arr1,...arr2); //veamos lo que hace el spread operator

//Los puedo fusionar con el spread operator
const arr3 = [...arr1, ...arr2];
console.log(arr3);

arr2.push(11); //Si el array 2 muta (le añado 1 elemento)

console.log(arr2); //aquí vemos el array 2 mutado
console.log(arr3); //pero el array 3 no ha mutado con el cambio del array 2

/* CON EL SPREAD OPERATOR PODEMOS CREAR COPIAS INMUTABLES 
            (SOLO HASTA EL PRIMER NIVEL) 
    TANTO DE ARRAYS COMO DE OBJETOS LITERALES*/

const persona = {
    nombre: 'Víctor',
    apellido: 'Morales Pérez',
    edad: 36,
    medidas: {
        altura: 1.84,
        peso: 97.5
    }
};

const oficio = {
    designacion: 'Desarrollador Web',
    empresa: 'atSistemas',
    oficina: 'Córdoba'
};

//Podemos crear un Objeto Literal como resultado de la copia de los dos primeros
const trabajador = {
    ...persona,
    ...oficio
}

console.log('ORIGINAL:', trabajador);

//Podemos crear una copia del objeto anterior
const trabajadorCopia = { ...trabajador };
console.log('COPIA: ',trabajadorCopia);

//PUEDO MODIFICAR LOS ATRIBUTOS DEL PRIMER NIVEL
trabajadorCopia.nombre = 'Jose';
trabajadorCopia.apellido = 'Manos Grandes';

/* CUIDADO CON LA COPIA DEBIL, SOLO COPIO EL PRIMER NIVEL */

console.log('COPIA MUTADA: ',trabajadorCopia); //trabajadorCopia es otra referencia a una copia del objeto trabajador

trabajadorCopia.medidas.altura = 2.00; //Si modifico la altura el trabajador copia, veamos que pasa con ambos dos

console.log('ORIGINAL MUTADO: ', trabajador);
console.log('COPIA MUTADA: ', trabajadorCopia);

//SI QUIERO SABER COMO HACER COMPLETAMENTE INMUTABLE UN OBJETO USANDO SPREAD OPERATOR -> https://learnwithparam.com/blog/spread-operator-is-mutable/

