var config = {
    apiKey: "AIzaSyBthC9BLzwfHrmp1xiFk1rglVDqYQ5rB-s",
    authDomain: "cs-3033-fa18.firebaseapp.com",
    databaseURL: "https://cs-3033-fa18.firebaseio.com",
    projectId: "cs-3033-fa18",
    storageBucket: "cs-3033-fa18.appspot.com",
    messagingSenderId: "494659703474"
};
var firebase = require("firebase");
// initialize the firebase app
firebase.initializeApp(config);
var available = true;
var unavailable = true;


var products = [];
var cart = [];
var book;
var data;
var database = firebase.database();
loadProducts();
//the loading function
function loadProducts(){
    products = [];
    //console.log("TESTETSTE");
    database.ref("departments/books").on("value", function(snapshot) {
        data = snapshot.val();
    
        Object.keys(data["products"]).forEach(function(key) {
            book = data["products"][key];
            book.stocked = !(book.stock == 0);
            //console.log("TESTETSTE222");
            if(book.id != null)
                products.push(book);
        });
        //console.log(products);
        //console.log(products.length);
        //populate(products);
    });
}
//calls loading function
exports.load = function() {
    console.log('Loading...');
    return new Promise(function(resolve, reject){
        loadProducts();
        resolve(products);
    });
};
//returns cart array to the cart page
exports.redirectItems = function(){
    var promise = new Promise(function(resolve, reject){
        resolve(cart);
    });
    return promise;
}
//adds a book to the cart array
exports.add = function(product){
    var promise = new Promise(function(resolve, reject){
        database.ref("departments/books").on("value", function(snapshot) {
            data = snapshot.val();
            var total = 0;
            Object.keys(data["products"]).forEach(function(key) {
                book = data["products"][key];
                book.stocked = !(book.stock == 0);
                
                if(book.id == product){
                    console.log(book);
                    cart.push(book);
                }
                    
                
            });
            //console.log(products);
            //console.log(products.length);
            //populate(products);
        });
    });
    return promise;
};
//updates firebase and decrements the stock by one for each item in the cart
exports.checkOut = function(){
    console.log("Checking out");
    var promise = new Promise(function(resolve, reject){
        cart.forEach(function(book){
            var newStock = book.stock - 1;
            console.log(book.id);
            database.ref('departments/books/products/' + book.id).update(
                {"stock": newStock}
            );
        });
        cart = [];
        resolve(null);
    });
    return promise;
};
//This filters the page
exports.update = function(ID, checked2){
    //console.log(id);
    //console.log(checked2);
    
    var promise = new Promise(function(resolve, reject){
        var productsTemp = products.slice(0);
        productsTemp.forEach(function(product){
            var index = productsTemp.indexOf(product);
            if(checked2 == "true"){
                console.log(ID);
                if(ID == "chbAvailable"){
                    
                    if(product.stock == 0)
                        delete productsTemp[index];
                    
                }
                else if(ID == "chbUnavailable"){

                    if(product.stock > 0)
                        delete productsTemp[index];
                }
                else if(ID == "chbZero"){
                    if(product.price > 25)
                        delete productsTemp[index];
                }
                else if(ID == "chbMiddle"){
                    if(product.price < 25 || product.price > 50)
                        delete productsTemp[index];
                }
                else if(ID == "chbHigh"){
                    if(product.price < 50)
                        delete productsTemp[index];
                }
                else if(ID == "chbThumb0"){
                    if(product.rating != 0)
                        delete productsTemp[index];
                }
                else if(ID == "chbThumb1"){
                    if(product.rating != 1)
                        delete productsTemp[index];
                }
                else if(ID == "chbThumb2"){
                    if(product.rating != 2)
                        delete productsTemp[index];
                };
            };
        });
        var productsTemp = productsTemp.filter(function (temp) {
			return temp != null;
        });
        resolve(productsTemp)
    });
    return promise;
};