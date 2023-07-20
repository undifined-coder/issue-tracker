require('dotenv').config();  //Load Env by dotenv
const express = require('express');

const db = require('./config/mongoose');
const port = process.env.PORT || 3000;
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');//express ejs-layout

app.use(express.urlencoded());
app.use(express.static('assets'));
app.use(expressLayouts);

// extract style and scripts
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// use express router
app.use('/', require('./routes'));
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});