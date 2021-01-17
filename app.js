const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Nasa Apod Api'
  })
})

app.listen(3000);