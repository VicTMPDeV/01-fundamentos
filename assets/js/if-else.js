// 0 : domingo, 1: lunes ... 6: sabado
const dia = new Date().getDay();
const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miércoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sábado',
}
console.log(diasLetras[dia] || 'El día no es válido');

