
import express from 'express'
const app = express()

app.get("https://pokeapi.co/api/v2/pokemon/ditto" , (req, res) => {
    res.send();

})



 fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));





console.log("hello world");