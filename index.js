
// import express from 'express'
// const app = express()

// console.log("hello world");

// app.get("https://pokeapi.co/api/v2/pokemon/ditto" , (req, res) => {
//     res.send();

// })




 const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto') 
    const data = await res.json();
    console.log("Data:",data);


// Server Setup
// app.listen(3000, () => {
//     console.log("Server Online")
// });