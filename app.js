const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const birds = require('./routes/birds');
const plants = require('./routes/all-plants');

mongoose.connect('mongodb://localhost:27017/plants');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

app.set('view engine', 'ejs')

app.use('/birds', birds);
app.use('/all-plants', plants);

app.use('/views', express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('APP LISTENING ON PORT 3000!')
})