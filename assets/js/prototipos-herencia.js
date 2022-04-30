/*
Basado en el tutorial: https://youtu.be/1-m7xtwvH1E
En JS la herencia se da también, se conoce como Herencia Prototípica
y se implementa como una Cadena Prototípica.
*/

/*Función Constructora PADRE*/
function Person(id, name, surname, height, weight, isAlive) {
    //Atributos
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.height = height;
    this.weight = weight;
    this.isAlive = isAlive;
}

//Métodos, funciones o rutinas
Person.prototype.imc = function () { //No empleo arrow functions porque al ser anónimas, toman el this del Objeto en el que se encuentran actualmente, y esto es una función (cogería el objeto Window)
    return (this.weight / Math.pow(this.height, 2)).toFixed(2);
};
Person.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.name} ${this.surname}`);
}

/*Función Constructora HIJA 1*/
function Trabajador(id, name, surname, height, weight, isAlive, sueldo) {
    //Llamo super al atributo pero lo podría llamar de cualquier manera
    this.super = Person;
    this.super(id, name, surname, height, weight, isAlive);
    this.sueldo = sueldo;
}

//Funciones propias de Estudiante
Trabajador.prototype.subida = function () {
    console.log('Me piro a otra empresa, me pagan mas.');
}

/*JUSTO A CONTINUACIÓN OCURRE REALMENTE LA HERENCIA PROTOTIPICA*/
//Referencia al Prototipo Person -> Si no pongo esto, estaría creando de nuevo, un prototipo Person para cada Trabajador en lugar de referenciarlo.
Trabajador.prototype = new Person();//No tengo que especificar los parámetros porque lo hago dentro del constructor Trabajador.
Trabajador.prototype.constructor = Trabajador;

//Sobreescribir el método del Prototipo del Padre en el Hijo (Polimorfismo)
Trabajador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.name} ${this.surname}, y gano ${this.sueldo} € brutos al año`);
}

/*Función Constructora HIJA 2*/
function Estudiante(id, name, surname, height, weight, isAlive, notaMedia) {
    //Llamo super al atributo pero lo podría llamar de cualquier manera
    this.super = Person;
    this.super(id, name, surname, height, weight, isAlive);
    this.notaMedia = notaMedia;
}

//Funciones propias de Estudiante
Estudiante.prototype.quejarse = function () {
    console.log('Estoy hasta el jigo de estudiar.');
}

//Estudiante HEREDA el Prototipo Person
Estudiante.prototype = new Person();
Estudiante.prototype.constructor = Estudiante;

//Sobreescribir el método del Prototipo del Padre en el Hijo (Polimorfismo)
Estudiante.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.name} ${this.surname}, mi nota media es de ${this.notaMedia}`);
}


/*PRUEBAS*/
const persona1 = new Person(1, 'John', 'Doe', 1.54, 100, false);
console.log(persona1);
console.log(persona1.imc());
console.log(persona1.saludar());

const trabajador1 = new Trabajador(2, 'Víctor', 'Morales Pérez', 1.84, 97.3, true, 21000);
console.log(trabajador1);
console.log(trabajador1.imc());
console.log(trabajador1.saludar());

const estudiante1 = new Estudiante(3, 'Laura', 'Rosa García', 1.74, 79.0, true, 9.5);
console.log(estudiante1);
console.log(estudiante1.imc());
console.log(estudiante1.saludar());
