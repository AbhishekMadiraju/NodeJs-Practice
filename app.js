const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.set('view engine', 'pug');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(400).render('404', {pageTitle: 'Page not found'});
})

app.listen(3000);
