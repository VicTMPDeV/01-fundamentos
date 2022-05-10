class Person {

    name; 
    height;
    weight;    
    static _counter = 0; 

    constructor(name = 'JOHN DOE', height = 2.00, weight = 200) { 
        this.name = name;
        this.height = height;
        this.weight = weight;
        Person._counter++;
    }

    get getName(){
        return this.name;
    }

    static get getCounter(){ 
        return Person._counter;
    }

   
    set setName(name) {
        this.name = name;
    }

    imc() { 
        return (this.weight / Math.pow(this.height, 2)).toFixed(2);
    }
 
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

const p1 = new Person('Víctor', 1.84, 97);

//HERENCIA
class Hero extends Person{
    
    heroName;

    constructor(name, height, weight, heroName = 'SpiderMan'){
        super(name, height, weight); //HAY QUE LLAMAR PRIMERO AL SUPER ANTES DE A LOS ATRIBUTOS DE LA CLASE HIJA
        this.heroName = heroName;
    }

    //POLIMORMISFO DE METODOS DEL PADRE
    saludar(){
        console.log(`SOY... ${this.heroName}`);
        //ESTOY SOBREESCRIBIENDO EL COMPORTAMIENTO DEL METODO DE LA CLASE PADRE
        super.saludar();
    }
}

const h1 = new Hero();

console.log(h1.name + ' en realidad es... ' + h1.heroName);

const h2 = new Hero('Pepe',1.00, 50,'La hormiga atómica');

console.log(h2.name + ' en realidad es... ' + h2.heroName);

console.log('-------------POLIMORFISMO----------------')

h1.saludar();

console.log('-----------------------------------------')



