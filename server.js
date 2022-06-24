// const { say } = require('cowsay');
const express =require ('express');
const app = express ();
const bodyParser = require("body-parser")
const yodasay =require('yodasay');
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
require('dotenv').config()

const port = process.env.PORT || 8000;

// Conexion to data base
const mongoose = require('mongoose');

// console.log(yodasay.say({
//     text: 'Hola'
// }))

mongoose.connect(process.env.DATABASE_URL, 
    // {useNewUrlParser: true, useUnitfieldTopology: true}
)
    .then(() => console.log( "DataBase Connected"))
    .catch(e => console.log(e))




app.use(express.static(__dirname + "/public"))
app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"))

app.use('/', require('./router/webRoute'))
app.use('/mascotas', require('./router/mascotas'))

app.use((req, res, next) => {
    res.status(404).render("404",
        {title: "404",
        description:"Site title" })
})

app.listen(port, () => {
    console.log('server at your service in port', port)
})