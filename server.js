const express = require('express')
const res = require('express/lib/response')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})

document.getElementById("btn").onclick = converter;

function converter() {
    app.post('/getJson', (req, res) => {
        const currencyOne = req.body.currencyOne;
        const currencyTwo = req.body.currencyTwo;
        const amount = req.body.amount;
    })
    if (currencyOne == "EU")
        if (currencyTwo == "USD")
            value = amount * 1.13;
    if (currencyOne == "USD")
        if (currencyTwo = "EU")
            value = amount / 1.13;
    return value;
}

app.locals.result = 1.13;


app.listen(3000)