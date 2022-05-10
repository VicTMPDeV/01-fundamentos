//1. Prototype VS Class
//---------------------------------------------------------------
//Función Constructora (Prototipo)
//---------------------------------------------------------------
function PersonPrototype(name, height, weight) {
    //Atributos
    this.name = name;
    this.height = height;
    this.weight = weight;
}

//Métodos, funciones o rutinas
PersonPrototype.prototype.imc = function () { //No empleo arrow functions porque al ser anónimas, toman el this del Objeto en el que se encuentran actualmente, y esto es una función (cogería el objeto Window)
    return (this.weight / Math.pow(this.height, 2)).toFixed(2);
}

PersonPrototype.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.name}`);
}

//---------------------------------------------------------------
//EQUIVALENTE EN CLASE
//---------------------------------------------------------------
class PersonClass {
    //Atributos (Declarados directamente en el constructor)
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
    //Métodos, funciones o rutinas
    imc() {
        return (this.weight / Math.pow(this.height, 2)).toFixed(2);
    }
    saludar() {
        console.log(`Hola, me llamo ${this.name}`);
    }
}




//2. CLASES EN JS EN PROFUNDIDAD
//------------------------------
//Clase Persona -> Lo mismo de antes pero con Clases
class Person {
    //Por defecto, todas las clases llevan implementado 'use strict' sin que se lo pongamos nosotros

    //Atributos -> los puedo definir aquí, como en Java, O DIRECTAMENTE EN LOS PARAMETROS DEL CONSTRUCTOR!!!
    name; 
    height;
    weight;    
    static _counter = 0; //Atributo Estático

    constructor(name = 'JOHN DOE', height = 2.00, weight = 200) { //Es el único método que no devuelve undefined si no le ponemos return explícito
        this.name = name;
        this.height = height;
        this.weight = weight;
        //EL OPERADOR this HACE REFERENCIA A LA INSTANCIA (CUANDO SEA CREADA)
        Person._counter++;
    }

    //JS NO PERMITE SOBRECARGA DE CONSTRUCTORES, PERO SE PODRÍA CONSEGUIR CON DESESTRUCTURACIÓN DE OBJETOS COMO SIGUE...
    static constructorByLiteralObject({name, height, weight}){
        return new Person(name, height, weight);
    }

    //Getters
    get getName(){
        return this.name;
    }

    static get getCounter(){ //También puedo usar getters estáticos
        return Person._counter;
    }

    //Setters -> NO PUEDEN TENER EL MISMO NOMBRE QUE LA PROPIEDAD QUE SETEAN PORQUE ENTRARÍA EN BUCLE INFINITO
    set setName(name) {
        this.name = name;
    }

    //Métodos, funciones o rutinas
    imc() { //El this en JS es fundamental, porque si no referenciamos, no tiene contexto en el scope de la función o método.
        return (this.weight / Math.pow(this.height, 2)).toFixed(2);
    }
    //Sobrecarga de métodos
    imc(weight, height) {
        return (this.weight / Math.pow(this.height, 2)).toFixed(1);
    }

    saludar() {
        console.log(`Hola, me llamo ${this.name}`);
    }

    static message(){
        console.log(this.name); //UNDEFINED -> NO EXISTE INSTANCIA
        console.log('soy un metodo estatico');
    }


}



//Pruebas:
const pUnd = new Person(); //Si no pasaramos argumentos Y LOS ATRIBUTOS NO TIENEN DEFINIDOS VALORES POR DEFECTO, devolvería undefined en los atributos
const p2 = new Person('Víctor', 1.84, 97);

console.log(pUnd.saludar());
console.log(p2);

const hulio = { //LOS PARAMETROS DEL CONSTRUCTOR PUEDEN VENIR DE UN OBJETO LITERAL (LLAMADA A UNA API POR EJEMPLO)
    name: 'Hulio',
    height: 1.95,
    weight: 87
}

const pPro1 = new Person(hulio.name, hulio.height, hulio.weight);//O USANDO EL CONSTRUCTOR NORMAL
console.log('CON EL CONSTRUCTOR NORMAL',pPro1);

const pPro2 = Person.constructorByLiteralObject(hulio); //CON EL CONSTRUCTOR "SOBRECARGADO"
console.log('OPCION DE "SOBRECARGA" DE CONSTRUCTOR', pPro2);



console.log('Método con argumentos', p2.imc(this.weight, this.height));
console.log('Método sin argumentos', p2.imc());
console.log(p2.saludar());

//LOS SETTERS NO SE INVOCAN COMO UNA FUNCIÓN, SON UNA PROPIEDAD
p2.setName = 'MAURICIO COLMENERO';
console.log(p2.saludar());
console.log(p2.getName);//DE NUEVO, NO SE INVOCAN COMO U NA FUNCIÓN, SON UNA PROPIEDAD

console.log(`Hasta ahora hemos creado ${Person._counter} instancias de la clase Person`);
console.log(`Pidiendo el dato desde el getter: ${Person.getCounter} instancias de la clase Person`);

Person.message();

Person.externalProperty = 'Esto no mola nada...';
console.log(Person.externalProperty);

console.log(Person);

/*
    PROBLEMAS GRAVES DE LAS CLASES EN JS
    ------------------------------------
    1.- Las propiedades privadas son algo que todavía no funciona en todos los navegadores, y puedo
    modificar accidentalmente las propiedades sin usar el setter, saltándome la encapsulación así:

        p2.name = 'MAURICIO COLMENERO';

    como lo hacía con...

        p2.setName = 'MAURICIO COLMENERO';

    2.- Si pongo:
    
        p2.religion = 'cristiano';

    SE LO TRAGA!!! SE CONVIERTE EN UNA PROPIEDAD, NO DE LA CLASE PERSON, SINO DE LA INSTANCIA p2

    O si pongo:

        Person.externalProperty = 'Esto no mola nada...';

    SE LO TRAGA TAMBIEN!!! SE CONVIERTE EN UNA PROPIEDAD ESTÁTICA EN TIEMPO DE EJECUCIÓN... NO APARECE EN LA CLASE COMO ATRIBUTO...

*/