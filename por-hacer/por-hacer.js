const fs = require('fs');

let listadoPorHacer = [];

const guardaDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if ( err ) throw new Error('No se pudo grabar', err);
    });

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }

}


const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    }

    cargarDB();

    listadoPorHacer.push( porHacer );

    guardaDB();

    return porHacer;

}

const getListado = () => {
    
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    
    cargarDB();

    //const index = listadoPorHacer.findIndex ( tarea => {
    //    return tarea.descripcion === descrripcion;
    //}) 

    const index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion ); // -1 si no lo encuentra.

    if ( index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardaDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    
    cargarDB();

    let nuevoListado = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion ); 

    if ( listadoPorHacer.length === nuevoListado.length ) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardaDB();
        return true;
    }
}



module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}