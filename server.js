const express =require ('express');
const app = express ();

const port = 8000;

app.use(express.static(__dirname + "/public"))
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"))

app.get ('/', (req, res) => {
    res.render('index', {title: 'dynamic title'})
})

app.get ('/services', (req, res) => {
    res.render('services', {titleServices: 'dynamic services title'})
})

app.use((req, res, next) => {
    res.status(404).render("404",
        {title: "404",
        description:"Site title" })
})

app.listen(port, () => {
    console.log('server at your service in port', port)
})