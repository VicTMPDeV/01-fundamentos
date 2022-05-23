//Argumentos fijos clásicos
function sumarClasico(a,b){
    return a+b;
}

console.log('El resultado de la suma es: ',sumarClasico(1,2));

//Rest operator
function sumarRest(...values){
    
    let result = 0;

    values.forEach((currentValue)=>{
        result = result + currentValue; 
    });

    return result;
}

//En la invocación puedo pasar el número de parámetros que necesite, JS los convertirá a un Array y podré trabajarlo como tal (por eso puedo utilizar el forEach, o el reduce)
console.log('El resultado de la suma es: ',sumarRest(1,2,3,4));