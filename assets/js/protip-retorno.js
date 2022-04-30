/*
 * PRO-TIP 1 -> MEJORANDO FUNCIONES FLECHA
 */

// Versión ES5
function createPersonClassic(name, surname){
    return {name,surname}
}

// Versión Lambda ES6
const createPersonLambda = (name, surname) => { return {name, surname} }

// Versión Lambda simplificada (ES6)
// Al poner paréntesis le indico a JS que quiero devolver un objeto literal sin poner el return
const createPersonLambdaBest = (name, surname) => ({name, surname})

// Declaro variables const, ya que si declaro let, angular puede "quejarse" porque son inmutables
const persona1 = createPersonClassic('Víctor','Morales Pérez');
const persona2 = createPersonLambda('Víctor','Morales Pérez 2');
const persona3 = createPersonLambdaBest('Víctor','Morales Pérez 3');
const {surname: apellido} = createPersonLambdaBest('Laura', 'Rosa');

console.log(persona1)
console.log(persona2)
console.log(persona3)
console.log({apellido});

/*
 * PRO-TIP 2 -> PARAMETROS REST (VarArgs) EN FUNCIONES FLECHA
 */

// Versión ES5
function imprimeArguments(){
    console.log(arguments);
}

imprimeArguments(10, true, false, 'Victor');

// Versión ES6 -> parámetro Rest (...)
const imprimeArguments2 = (...args) => {
    console.log(args);
}
// Una función lambda no maneja el objeto arguments y por eso da un fallo
imprimeArguments2(20, false,'Vic');

// Si quiero más de 1 parámetro, el parámetro rest tiene que ser el último
const imprimeArguments3 = (edad, ...args) => {
    console.log({edad, args});
}
imprimeArguments3(35, 'valor1', 'valor2');

// Si quiero un array específico de retorno
const imprimeArguments4 = (...args) => { return args };
const [edad, nombre, saludo] = imprimeArguments4(35, 'Víctor', 'Hola Mundo');
console.log({edad, nombre, saludo});



