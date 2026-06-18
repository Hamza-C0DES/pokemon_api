
import express from 'express'
const app = express()

// console.log("hello world");

// app.get("https://pokeapi.co/api/v2/pokemon/ditto" , (req, res) => {
//     res.send();

// })

const id = Math.floor(Math.random() * 151) + 1;
console.log(`ID = ${id}`)
 const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) 
    const data = await res.json();
    const name = data.name;

    const move = data.moves[0].move.name; // Hint 1
    const weight = data.weight; // Hint 2
    const height = data.height; // Hint 3
    const abilities = data.abilities[0].ability.name // Hint 4
    const types = data.types[0].type.name; // Hint 5 

    const hints = [move, weight, height, abilities, types] // Array Containing All 5 Hints

    app.get("/pokeguess/:guess/:guess2", (req, res) => {
    const {guess, guess2} = req.params.guess;
    
    if (guess == name){
        res.send(`You Win! 
            <br> 
            The correct answer is: ${name}.`);
    }

    else if (guess !== name){ 
        console.log("Wrong Answer")
        res.send(`Wrong Answer! 
            <br>
            Hint #1: Move = ${hints[0]}`);
            
    }
    else if (guess2 !== name){
        console.log("Wrong Answer")
        res.send(`Hint #2: Move = ${hints[1]}`);    
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
    
    // console.log(Object.keys(data)); // Shows the attributes //
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
