let juegos = ['Primero','Segundo','Último'];
console.log('Longitud: ', juegos.length);
console.log('Primer Elemento: ', juegos[0]);
console.log('Último Elemento: ', juegos[juegos.length-1]);
//Bucle For clásico
for (let i = 0; i < juegos.length; i++) {
    console.log(juegos[i] + '1');
}
//Bucle For of...
for (const juego of juegos) {
    console.log(juego + '2');
}
//Bucle For in...
//TODO

//For each Lambda
juegos.forEach((element) => {
    console.log(element+'4');
});

//Añadir elementos al final del array
juegos.push('Uno después del último');
console.log({juegos});//si pongo {} creo un objeto literal que contiene el elemento array
//Añadimos un elemento al inicio del array
juegos.unshift('Uno antes del primero');
console.log({juegos});//si pongo {} creo un objeto literal que contiene el elemento array

//Eliminamos el último elemento del array
const juegoBorrado = juegos.pop();
console.log({juegos});
console.log({juegoBorrado});

//Eliminar un elemento cualquiera
let pos = 0;//indico posición de inicio
let juegoBorrado2 = juegos.splice(pos,1);//segundo parametro es cuantos quiero borrar desde la posición indicada
console.log(juegos, juegoBorrado2);

//Obtener el índice de un elemento
console.log(juegos.indexOf('Primero'));
console.log(juegos.indexOf('primero'));//si retorna -1 es porque no está (cuidado que es CaseSensitive)



