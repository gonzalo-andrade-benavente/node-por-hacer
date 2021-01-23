const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')
                .command('crear', 'Crear un elemento por hacer' , {
                    descripcion
                })
                .command('actualizar', 'Crear un elemento por hacer' , {
                    descripcion,
                    completado
                })
                .command('borrar', 'Borrra un elemento por hacer' , {
                    descripcion
                })
                .help()
                .argv;



module.exports = {
    argv
}