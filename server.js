var express = require('express'),
    app = express();

app.use('/admin/static', express.static(__dirname + '/app/nodemin/static'));
app.use(require('./app/nodemin'));

var port = process.env.PORT || 8000;
app.listen(port, function () {
    console.log("Listening on port: " + port);
});

