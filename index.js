// import stuff

const express = require('express');
const app = express();

app.set('view engines', 'ejs');



// create our routes

app.get('/', (req, res) => {
    res.render('index.ejs')
})

// app.listen

app.listen(8000, () => {
    console.log('server has started');
})


// make a views dir
 // put an ejs file in it

// set view engine
// change send to render