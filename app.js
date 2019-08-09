const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(400).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);
