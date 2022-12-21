const express = require("express");
const {Dog, Temper} = require("../../db");
const { getAllDogs } = require("../controllers/dogsController");

const dogsPath = express();

dogsPath.get('/', async(req, res) =>{
    try {
        const {name} = req.query
        const allDogs = await getAllDogs();
        if(name){
            const dogName = await allDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()))
            dogName.length ?             
            res.status(200).send(dogName) :
            res.status(404).send('Dog not found');
        }
        else{
            res.status(200).send(allDogs)
        }        
    } catch (error) {
        res.status(400).send({error: error.message})
    }
})

dogsPath.get('/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const allDogs = await getAllDogs();
        if(id){
            const dogBreed = await allDogs.filter(dog => dog.id == id) 
            dogBreed.length ? 
            res.status(200).send(dogBreed) :
            res.status(404).send('Dog not found');
        }
    } catch (error) {
        res.status(400).send({error: error.message})
    }
})

dogsPath.post('/',async (req, res) =>{
    try {
        const {
            name,
            weightMin,
            weightMax,
            heightMin,
            heightMax,
            life_span,
            origin,
            image,
            createdInDb,
            temperaments
        } = req.body        

        const newDog = await Dog.create({
            name,
            weightMin,
            weightMax,
            heightMin,
            heightMax,
            life_span,
            origin,
            image,
            createdInDb,
        })        
        temperaments.forEach(async (e)=>{
            const [temperDB, created] = await Temper.findOrCreate({
                where: {
                    name: e
                }
            });
            await newDog.addTemper(temperDB);
        })

        res.status(201).send({...newDog.dataValues, temper: temperaments})
    } catch (error) {
        res.status(400).send({error: error.message})
    }    
})

module.exports = dogsPath;