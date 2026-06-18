
import express from 'express'
const app = express()

// console.log("hello world");

// app.get("https://pokeapi.co/api/v2/pokemon/ditto" , (req, res) => {
//     res.send();

// })
 const id = 1;

 const res = await fetch(`https://pokeapi.co/api/v2/pokemon/{id}`) 
    const data = await res.json();
    // console.log("Data:",data);
    const moves = data.moves[0];
    // const cryAudio = data.cries.latest;
    const features = data.abilities[0];
    const stats = data.stats[0];
    // console.log(stats)

    // console.log(Object.keys(data));
    console.log(data);
    

    // console.log(data.stats);
    // console.log(Object.keys(data.moves[0]));
    // console.log(Object.keys(data.cries));
    // console.log(Object.keys(data.types));



// const id = 132;
// const game_id = Buffer.from(String(id)).toString("base64")

// Server Setup
app.listen(3000, () => {
    console.log("Server Online")
});
