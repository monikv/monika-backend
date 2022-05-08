const express = require('express');
const houseRoute = express.Router();

// Student model
let HouseModel = require('../Model/houses');

houseRoute.route('/').get((req, res) => {
  HouseModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })}
  )

 
module.exports = houseRoute;