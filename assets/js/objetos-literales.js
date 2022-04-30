let profesor = {
    nombre: 'Víctor',
    apellidos: 'Morales Pérez',
    edad: 35,
    direccion: {
        calle: 'Calle Conquistador Ruiz Tafur número 9',
        poblacion: 'Córdoba',
        provincia: 'CÓRDOBA',
        cp: 14007
    },
    asignaturas : ['Programación','Acceso a Datos'],
    'peso-ultimo': 100 //si tuviera que declarar una variable con algún caracter raro...
};

// console.log('Último pesaje: ', profesor['peso-ultimo']);//...accedo así a él luego más tarde

// console.log({profesor});
// console.log('Nombre: ',profesor.nombre);
// console.log('Calle: ', profesor.direccion);
// console.log('Calle: ', profesor.direccion.calle);
// console.log('Número de asignaturas que imparte: ', profesor.asignaturas.length);

const x = 'edad';
// console.log('Accediendo de manera diferente a las variables', profesor[x]);

//MÁS DETALLES SOBRE OBJETOS LITERALES

//1.Eliminar una propiedad de un objeto
delete profesor.edad;

//2.Añadir propiedad al objeto
profesor.casado = false;

//3.Tratar atributos del objeto como arrays de 2 elementos (Clase par C++) -> Sólo coge los valores que tenga el objeto hasta ese momento
const pares = Object.entries(profesor);
// console.log('Tratando un objeto como un array\n--------------------------------');
// console.log(pares);

//4.Objeto inmutable
/*Si cambio let profesor por const no va a funcionar
ya que si lo pongo como const, lo que no me va a dejar es REASIGNAR esa referencia a otro Objeto,
pero eso no afecta a sus atributos..

por ejemplo:
profesor = true; //esto no va a funcionar
pero...
profesor.edad = 40 //esto si va funcionar
*/
//LO QUE SI VA A FUNCIONAR CON LAS PROPIEDADES ES...
Object.freeze(profesor); //Bloquea el objeto con el estado que tenga en este momento
profesor.dinero = 3500;
// console.log(profesor);
//Cuidado, porque las propiedades anidadas en propiedades, NO LAS CONGELA
profesor.direccion.calle = 'NINGUNA';
//Una solución sería congelar las propiedades que contengan objetos anidados
Object.freeze(profesor.direccion);
profesor.direccion.calle = 'NONE'; //Aquí ya no funciona

//5.Obtener el nombre de las propiedades en un array y los valores en otro
const propiedades = Object.getOwnPropertyNames(profesor);
const valores = Object.values(profesor);
console.log({propiedades});
console.log({valores});
console.log({propiedades, valores});



