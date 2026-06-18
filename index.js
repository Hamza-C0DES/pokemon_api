
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

    // app.get("/pokeguess/guess", (req, res) => {
    // const {guess} = req.params.guess;


    app.get("/pokeguess/hint/:n", (req, res) => {
    const {n} = req.params;

    const index = Number(n) - 1;

    if (n > 5 || n < 1) {
        console.log('this is your hint')
        return res.send("Pick a hint number from 1 to 5")

    }
    
    res.json({hint: hints[index]})

    // if (guess == name){
    //     res.send(`You Win! 
    //         <br> 
    //         The correct answer is: ${name}.`);
    // }

    // else (guess !== name){ 
    //     console.log("Wrong Answer")
    //     res.send(`Wrong Answer! 
    //         <br>
    //         Hint #1: Move = ${hints[0]}`);
            
    // }

    

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
