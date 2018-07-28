const axios = require('axios');


const getClima = async(lat,lng) =>{

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=ff8442f76eb9be8c44831fd1f23d2e15`)
    if(resp.cod === 400){
        throw new Error(resp.message);
    }

    return {
        temperatura: resp.data.main.temp
    }
}

module.exports = {
    getClima
}