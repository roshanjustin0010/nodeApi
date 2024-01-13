const express = require("express")
const app = express()
const mongoose = require('mongoose')

mongoose.connect('momgpo://localhost/subscribers',{useNewUrlParser: true})
const db = mongoose.connection
// db.on('error',(error) => console.error(error))
db.on('error', (error) => {
    console.error(error);
  });
db.on('open',() => console.log('connected to database successfully'))


app.listen(3000, () => console.log('server started rose !!!'))