const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

mongoose.connect(
    process.env.MONGO_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(3333)