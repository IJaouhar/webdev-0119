const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const port = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(expressLayouts);
app.set('layout', 'layouts/layout');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);

app.use(express.static('public'));

app.use((req, res, next) => {
  console.log(" I'm a middleware 🤪 🤯 ");
  next();
});

app.get('/', (req, res) => {
  const name = 'Yoshi';
  const surname = 'bcn';
  res.render('index', {
    name: name,
    city: surname
  });
});

app.get('/profile', (req, res) => res.render('profile'));

app.get('/about', (req, res) => res.render('about'));

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
