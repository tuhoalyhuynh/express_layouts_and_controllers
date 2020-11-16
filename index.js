// import stuff

const express = require('express');
// const expressEjsLayouts = require('express-ejs-layouts');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
// app.use(expressEjsLayouts);
app.use(ejsLayouts)

// create our routes

app.get('/', (req, res) => {
    res.render('index')
})

// app.listen

app.listen(8000, () => {
    console.log('server has started');
})


// make a views dir
 // put an ejs file in it

// set view engine
// change send to render