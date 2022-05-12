/* Contenido extraído de: https://www.youtube.com/watch?v=8Bn99zamN_w&list=PLM-Y_YQmMEqB4FVmgxZqG-f7R3ESkcIPA&index=9

CLOSURE
--------------------------------------------------------------------
Un CLOSURE es: 
Retornar una Función
Desde OTRA Función que referencia variables del ámbito de la primera
*/

function soyUnClosure(){
    const otraVariable = 22; //Esta variable será liberada de memoria cuando se ejecute soyUnClosure()
    const variableLocal = "Víctor"; //Esta variable permanece CLOSED OVER (la congelada en el tiempo) y NO ES LIBERADA DE MEMORIA HASTA QUE NO SE INVOCA LA FUNCIÓN INTERNA QUE LA UTILIZA
    return function() {
        return variableLocal.toUpperCase();
    }
}

const closure = soyUnClosure(); //Aquí se libera de memoria la function soyUnClosure, PERO hace el CLOSED OVER (CLOSURE) de variableLocal y no la libera de memoria
console.log(closure()); //AHORA YA PUEDE LIBERAR EL CLOSURE sober variableLocal y es liberada la memoria que ocupaba