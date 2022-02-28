const express = require('express');
const ejs = require('ejs');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/index.html');
    res.render('index');
});

app.get('/:path', (req, res) => {
    const path = req.params.path;
    res.render(path);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Ready. Set. Go.');
});