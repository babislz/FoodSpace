const express = require('express')
const routes = require('./routes')

const app = express();

app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => console.log('Server started at: http://127.0.0.1:3000'));