/*
LAS PROPIEDADES PRIVADAS NO SON SOPORTADAS POR TODOS LOS NAVEGADORES A DIA DE HOY
Y ESTÁN PENDIENTES DE SER APROBADAS PARA PROXIMAS VERSIONES DE ECMA SCRIP (ESNEXT)
*/ 

class Rectangle {

    #area = 0;

    constructor(base = 0, height = 0){
        this.base = base;
        this.height = height; 
        this.#area = base * height;
    }

    
    doubleArea(){
        console.log(this.#area * 2);
    }

    // LOS METODOS PRIVADOS AUN NO ESTÁN IMPLEMENTADOS EN LOS NAVEGADORES
    // #doubleArea(){
    //     console.log(this.#area * 2);
    // }

}

const rectangle = new Rectangle(10,15);

//rectangle.#area = 100; //Property '#area' is not accessible outside class 'Rectangle' because it has a private identifier

console.log(rectangle);

rectangle.doubleArea();