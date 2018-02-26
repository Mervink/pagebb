/**
 * @author Leon Mwandiringa 
 * @uses bootstrap global dependencies for use
 * @return mixed app object 
 */
//require needed dependencies
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const routes = require("../Routes/web.js");

//run the app
const app = express();


//run global middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exteded: false}));
app.set("view engine", "ejs");

//run the defined routes
app.use("", routes);

//export the app object
module.exports = app;
