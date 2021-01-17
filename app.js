const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res, next) => {
  fetch('https://apodapi.herokuapp.com/api/?count=10')
    .then(response => response.json())
    .then(response => {
      response.forEach( datas => {
        res.render('index', {
          datas: datas
        })
      })
    })
    .catch(err => {
      console.log(err);
    })
})

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
  next();
})

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});