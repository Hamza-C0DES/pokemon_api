
// import express from 'express'
// const app = express()

// console.log("hello world");

// app.get("https://pokeapi.co/api/v2/pokemon/ditto" , (req, res) => {
//     res.send();

// })




 const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto') 
    const data = await res.json();
    console.log("Data:",data);

  const options = {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer https://pokeapi.co/api/v2/version/15/'
  },
  body: JSON.stringify({
    name: "heartgold",
    rarity: "50",
  }),
};
    console.log(options);



// const id = 132;
// const game_id = Buffer.from(String(id)).toString("base64")

// Server Setup
// app.listen(3000, () => {
//     console.log("Server Online")
// });