/**
 * Created by renhe_cx on 2/1/16.
 */
var express = require('express');
var app = express();
app.get('/register', function (req, res) {
    console.log('register');
});
app.listen(8080);