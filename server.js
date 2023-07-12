


const express = require("express")
const app = express();


app.get("/", (req,res) => {
    res.send(`Hello World : ${new Date()}`)
})

app.listen(3000, ()=>{
    console.log(`listening at 3000`)
})












