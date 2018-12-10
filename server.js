var express = require('express');
var Mustache = require("mustache");
var model = require("./model.js");
var parse = require("body-parser");
var fileSystem = require("fs");
var port = parseInt(process.argv[2]);
var app = express();
app.use(parse.urlencoded({extended: false}));
app.use(parse.json());
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get("/index.html", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get('/app.js', function(req, res) {
    res.sendFile(__dirname + '/app/app.js');
});
app.get("/cart.js", function(req, res) {
    res.sendFile(__dirname + "/app/cart.js");
});
app.get("/mustache.js", function(req, res) {
    res.sendFile(__dirname + "/mustache.min.js");
});
 app.get('/lib/:id', function(req, res) {
     res.sendFile(__dirname + '/lib/' + req.params.id);
 });

app.get("/load", function(req, res) {
    console.log(req.body);
    model.load().then(function(products) {
        //Console.log('The load function in the server file');
        var view = fileSystem.readFileSync("./view.mjs", "utf8");
        res.send(Mustache.render(view, { products: products }));
    });
});
app.post("/checkOut", function(req, res){
    //console.log("Test");
    model.checkOut().then(function(cart){

    });
});
app.post("/update", function(req, res) {
    console.log(req.body.ID);
    model.update(req.body.ID, req.body.checked2).then(function(productsTemp) {
        var view = fileSystem.readFileSync("./view.mjs", "utf8");
        res.send(Mustache.render(view, { products: productsTemp }));
    });
});
app.get("/cart", function(req, res) {
    model.redirectItems().then(function(cart) {
        var view = fileSystem.readFileSync("./cart/view.mjs", "utf8");
        res.send(Mustache.render(view, { cart: cart }));
    });
});
app.post("/add", function(req, res) {
    model.add(req.body.product).then(function(cart) {
    });
});
app.listen(port, function() {
    console.log('listening on *:' + port);
});