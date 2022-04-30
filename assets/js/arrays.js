//Poco común
const array = new Array(10);
console.log(array);

//Más usual
const array2 = [];
console.log(array2);

//Primer Array
let videoJuegos = ['Super Mario Bros','Zelda','Larry'];
console.log(videoJuegos);//Log del array
console.log({videoJuegos});//Log como objeto literal
//Si solo quiero imprimir una posición concreta...
console.log(videoJuegos[0]);

//En JS puedo tener un Array de elementos de diferentes tipos
// let arrayMix = ['Víctor',35,true,1+1,function saluda(){},()=>{},{key1: 'objetoLiteral'},['Rocío', 'Loli', 'Laura']];
let arrayMix = [
    'Víctor',
    35,
    true,
    1+1,
    function saluda(){},
    ()=>{},
    {key1: 'objetoLiteral'},
    ['Rocío', 'Loli', 'Laura']
];
console.log(arrayMix);
console.log(arrayMix[7][2]);

