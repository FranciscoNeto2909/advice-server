const { db } = require("./db/advices")
const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || "3001"
app.use(express.json())
app.use(cors())
app.listen(port, console.log("Executando..."))

app.get("/", (req, res) => {
    res.send(db.advices)
})

app.post("/addAdvice", (req, res) => {
    const advice = req.body
    if (advice.title !== "" && advice.advice !== "") {
        db.advices.push(advice)
        res.send(advice)
    } else {
        console.error()
    }
})

app.delete("/removeAdvice/:id", (req, res) => {
    const adviceId = req.params.id
    db.advices = db.advices.filter(adv => adv.id.toString() !== adviceId.toString())
})