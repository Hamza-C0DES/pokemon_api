
import express from 'express'
const app = express()

console.log("hello world");

app.get("https://pokeapi.co/api/v2/pokemon/ditto" , (req, res) => {
    res.send();

})



 fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


app.listen(3000, () => {
    console.log("Server Online")
});