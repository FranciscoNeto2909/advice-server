const { db } = require("./db/advices")
const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())
app.listen("3001", console.log("Executando..."))

app.get("/", (req, res) => {
    res.send(db.advices)
})
app.get("/suggestedAdvice", (req, res) => {
    res.send(db.suggestedAdvice)
})
app.post("/suggestAdvice", (req, res) => {
    const advice = req.body
    if (advice.title !== "" && advice.advice !== "") {
        db.suggestedAdvice.push(advice)
        res.send(advice)
    } else {
        console.error()
    }
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
app.up
app.delete("/removeAdvice/:id", (req, res) => {
    const adviceId = req.params.id
    db.advices = db.advices.filter(adv => adv.id.toString() !== adviceId.toString())
})
app.delete("/removeSuggestedAdvice/:id", (req, res) => {
    const adviceId = req.params.id
    db.suggestedAdvice = db.suggestedAdvice.filter(adv => adv.id.toString() !== adviceId.toString())
})