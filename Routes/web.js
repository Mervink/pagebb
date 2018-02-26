/**
 * @author Leon Mwandiringa
 * @uses define routes
 * @return mixed router Object
 */

 const express = require("express");
 const Route = express.Router();
 const GuestViewsController = require("../App/Controllers/GuestViewsController.js");

 Route.get("/", GuestViewsController.index());

 module.exports = Route;