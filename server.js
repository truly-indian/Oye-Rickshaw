const express = require('express')
const pool = require('./db')
const bodyParser = require("body-parser");
const adminRoutes = require('./routes/adminRoutes')

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use('/', adminRoutes)



app.listen('3000' , ()=> {
    console.log("serer started successfully!!")
})