const express = require('express')
const app = express();
const knex = require('knex')(require('../knexfile.js')["development"]);

const port = 9999;

app.get('/', (request, response) =>{
    response.send('application up and running.')
})

app.listen(port, ()=>{
    console.log("You knex and Express application are running succesfully")
})

app.get('/pets',(request,response)=>{
    knex('pet')
        .select('*')
        .then(pets => {
            var petNames = pets.map(pet => pet.name)
            response.json(petNames);
        })


})