const lugar = require('./lugar/lugar.js');
const colors = require('colors');
const clima = require('./clima/clima.js');
const argv = require('./config/yargs.js').argv;


let getInfo = async(direccion) =>{
    
    try{
        let coords = await lugar.getLugarLatLong(direccion);
        let ambiente = await clima.getClima(coords.lat,coords.lng);
    
        return `La temperatura en ${coords.direccion} es de ${ambiente.temperatura}°C`;
    
    }catch(e){
        return `No se pudo encontrar la temperatura en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then( mensaje => console.log(mensaje))
    .catch(e => console.log(e));