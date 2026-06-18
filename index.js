
import express from 'express'
const app = express()

// console.log("hello world");

// app.get("https://pokeapi.co/api/v2/pokemon/ditto" , (req, res) => {
//     res.send();

// })




 const res = await fetch('https://pokeapi.co/api/v2/pokemon/6') 
    const data = await res.json();
    console.log("Data:",data);
    const cryAudio = data.cries.latest;
    const stats = data.stats[0]
    console.log(cryAudio)

    console.log(data.stats);



// const id = 132;
// const game_id = Buffer.from(String(id)).toString("base64")

// Server Setup
// app.listen(3000, () => {
//     console.log("Server Online")
// });