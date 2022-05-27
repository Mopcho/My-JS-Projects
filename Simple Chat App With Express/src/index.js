const express = require('express');
const hbs = require('express-handlebars');

const port = 5000;

const app = express();

app.use('hbs',hbs.engine({extname:'hbs'}));
app.set('view engine', 'hbs');
app.set('views' , './src/views');

app.listen(port,`Server listnening on port ${port}`);