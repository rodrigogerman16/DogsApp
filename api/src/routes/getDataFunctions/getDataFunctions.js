const axios = require('axios');
const {API_KEY} = process.env
const {Dog} = require('../../db')

const getApiInfo = async() =>{
    const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const apiInfo = await apiUrl.data
    .map(dog => {
        return{
        id:dog.id,
        name: dog.name,
        weightMin:parseInt(dog.weight.metric.split(' - ')[0]),
        weightMax:Number.isNaN(parseInt(dog.weight.metric.split(' - ')[1]))  ? 50 : parseInt(dog.weight.metric.split(' - ')[1]),
        heightMin:Number.isNaN(parseInt(dog.height.metric.split(' - ')[0])) ? 1 :parseInt(dog.height.metric.split(' - ')[0]),
        heightMax:Number.isNaN(parseInt(dog.height.metric.split(' - ')[1])) ? 10 : parseInt(dog.height.metric.split(' - ')[1]), 
        life_span: dog.life_span,
        origin: dog.origin,
        image:dog.image.url,
        temper: typeof(dog.temperament) === 'string' ? dog.temperament.split(', ') : dog.temperament       
        }
    })
    return apiInfo;
}

const getDbInfo = async() =>{
    const instance = await Dog.findAll({ include: { all: true, nested: true }});
    const data = JSON.parse(JSON.stringify(instance))
    if(data === null) {
        return []
    }
    const dogs = data.map(dbDog => {
        const dog = {...dbDog, temper: dbDog.tempers.map(t => t.name)}
        delete dog.tempers
        return dog
    })

    return dogs
    //serializacion
}


const getAllDogs = async() =>{
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo)
    return infoTotal
}

module.exports = {
    getApiInfo,
    getDbInfo,
    getAllDogs
}