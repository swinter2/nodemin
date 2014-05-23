var express = require('express'),
    app = module.exports = express(),
    ModelManager = require('./models/manager');

app.set("views", __dirname + '/views');
app.set("view engine", "jade");

// Include routes.
require('./routes/index')(app);
require('./routes/default')(app);

