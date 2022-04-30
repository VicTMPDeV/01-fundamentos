/*
JavaScript es un lenguaje debilmente tipado e interpretado línea a línea
Orientado a objetos, pero basado en Prototipos, en lugar de en Clases (como por ejemplo Java).

Aunque desde 2015 en JS podemos crear Clases, es solo Sintactic Sugar, por detrás
el compilador (motor del navegor si es cliente, NodeJS si es servidor) lo convierte en 
Funciones Prototipales.

Entonces, ¿qué son los Prototipos?, pues es un mecanismo por el cual un Objeto va a poder
heredar de un Objeto padre, las propiedades (atributos) y el comportamiento (los métodos o funciones o rutinas).

En JS todas las funciones generan por defecto un Prototipo vacío.

En JS existe la herencia mediante la Cadena de Prototipos (hacer una copia del prototipo en 
en cual está basado el Objeto que hereda del padre).

Al final, la diferencia es que el Prototipo en JS se plasma en una función, mientras que en los
lenguajes orientados a objetos basados en Clases, se plasma en una Clase (algo así como un "molde"
para crear copias exactas de la clase, que llamamos Instancias de Clase).
*/

//EJEMPLOS

//1.- Sin emplear Prototipos (copiando y pegando copias de cada objeto literal)

const person1 = {
    id: 1,
    name: 'Víctor',
    surname: 'Morales Pérez',
    height: 1.84,
    weight: 97.3,
    isAlive: true,
    imc: function(){ //Función clásica (antes ES6)
        return (this.weight / Math.pow(this.height, 2)).toFixed(2);
    },
    saludar: function () { 
        console.log(`Hola, me llamo ${this.name} ${this.surname}`);
    }
}

const person2 = {
    id: 1,
    name: 'Laura',
    surname: 'Rosa García',
    height: 1.74,
    weight: 79,
    isAlive: true,
    imc: function(){
        return (this.weight / Math.pow(this.height, 2)).toFixed(2);
    },
    // saludar: () => { //Devuelve "Hola, me llamo undefined" por el scope del this en las funciones lambda
    //     console.log(`Hola, me llamo ${this.name} ${this.surname}`);
    // }
    saludar: (name, surname) => { //Función arrow (también llamada función flecha o expresión Lambda, desde ES6)
        console.log(`Hola, me llamo ${name} ${surname}`);
    }
}

console.log(person1);
console.log(person1.imc());
console.log(person1.saludar());
console.log(person2);
console.log(person2.imc());
console.log(person2.saludar(person2.name, person2.surname));



//2.- Empleando Prototipos

//Función Constructora (Prototipo)
function Person(id, name, surname, height, weight, isAlive){
    //Atributos
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.height = height;
    this.weight = weight;
    this.isAlive = isAlive;
    //Métodos, funciones o rutinas
    this.imc = function (){ //No empleo arrow functions porque al ser anónimas, toman el this del Objeto en el que se encuentran actualmente, y esto es una función (cogería el objeto Window)
        return (this.weight / Math.pow(this.height, 2)).toFixed(2);
    };
    this.saludar = function () { 
        console.log(`Hola, me llamo ${this.name} ${this.surname}`);
    }
}

const person3 = new Person(3,'John','Doe Foo',1.80,75,false);
console.log(person3);
console.log(person3.imc());
console.log(person3.saludar());