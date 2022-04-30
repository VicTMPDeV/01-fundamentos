const dia = 1;

switch(dia) {
    case 0:
        (() => { return console.log('A');})(); //Función anónima autoinvocada
        break;
    case 1:
        (() => { return console.log('B');})();
        break;
    case 2:
        (() => { return console.log('C');})();
        break;
    default:
        (() => { return console.log('D');})();
        break;
}
