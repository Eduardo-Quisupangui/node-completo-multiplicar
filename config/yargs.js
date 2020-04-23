//hacemos una variable 
// opc es un objeto que tiene dos atributos base y limite
let opc = {
    base: {
        demand: true,
        alias: 'b'
    }, //creamos otro argumento o alias para si poder imprimir
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs') //toca configurar los comandos
    .command('listar', 'imprime en consola la tabla de multiplicar', opc)
    .command('crear', 'crear un archivo de la tabla de multipplicar', opc)
    .help()
    .argv;
//yargs.js se hace un modulo ai¡si que tengoque exportar 
module.exports = {
    argv
}