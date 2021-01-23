const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

const colors = require('colors');

const comando = argv._[0];

switch( comando ) {

    case 'crear': 
        const tarea = porHacer.crear( argv.descripcion );
        console.log( tarea );
    break;

    case 'listar': 
        let listado = porHacer.getListado();
        
        for (let tarea of listado) {
            console.log('====== Por Hacer ======'.green);
            console.log( tarea.descripcion );
            console.log( `Estado ${ tarea.completado }`);
            console.log('======================='.green);
        }

    break;

    case 'actualizar': 
        const actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log( actualizado );
    break;

    case 'borrar': 
        const borrar = porHacer.borrar(argv.descripcion);
        console.log( borrar );
    break;

    default:
        console.log('comando no reconocido');

}

/*
*  node app crear
*  node app listar
*  node app actualizar
*  node app asdasd
*/