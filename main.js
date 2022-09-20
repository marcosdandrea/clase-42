require("dotenv").config()

const express = require('express')
const app = express()
const productsAPI = require('./controllers/products/products.API')

app.use(express.json())

productsAPI.config(app)

app.use("/", (req, res) => {
    console.log ({detail: "Endpoint is not reachable:", url: req.url, params: req.params, method: req.method})
    res.status(404).send()
})

app.listen(process.env.PORT, ()=>{ 
    console.log ("listening on port " + process.env.PORT)
})
