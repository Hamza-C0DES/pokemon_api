
import express from 'express'
const app = express()

// console.log("hello world");

// app.get("https://pokeapi.co/api/v2/pokemon/ditto" , (req, res) => {
//     res.send();

// })

const id = Math.floor(Math.random() * 151) + 1;
console.log(id)
 const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) 
    const data = await res.json();
    const name = data.name
    app.get("/pokeguess/:guess", (req, res) => {
    const guess = req.params.guess;
    
    if (guess == name){
        console.log("You Won");
    }else { 
        const hint1 = data.moves[0].name
        console.log("That is the wrong answer",hint1)
        
        
    }

    // const guess = params.guess;
    // const guess = data.moves[1]

    })
    // console.log("Data:",data);
    const moves = data.moves[0];
    // const cryAudio = data.cries.latest;
    const features = data.abilities[0];
    const stats = data.stats[0];
    // console.log(stats)

    // console.log(Object.keys(data));
    console.log(`Name: ${name}`);
    

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
