const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res, next) => {
  fetch('https://apodapi.herokuapp.com/api/?count=10')
    .then(response => response.json())
    .then(response => {
      res.render('index', {
        title: 'Apod API',
        datas: response
      })
    })
    .catch(err => {
      console.log(err);
    });
});

app.use((req, res, next) => {
  res.send(`
    <style>
      * { padding: 0; margin: 0; }
      #not-found{ 
        position: absolute; width: 100%; height: 100%; 
        display: flex; justify-content: center; align-items: center; 
      }
    </style>
    <div id="not-found">
      <p>404 Page Not Found</p>
    <div>
  `)
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});