const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 5000
const {MONGOURI} = require('./keys')




mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on("connected", ()=>{
    console.log("connected to db")
})

mongoose.connection.on("error", (err)=>{
    console.log("err connecting to db", err)
})

require('./models/user')
require('./models/post')

// Always pass the middleware before the route
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))


app.listen(PORT,()=>{
    console.log("Server is running on ", PORT)
})


