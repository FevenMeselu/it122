'use strict'
 
import { Car } from "./models/Car.js";
 
// return all records
Car.find({}).lean()
  .then((cars) => {
    console.log(cars);
  })
  .catch(err => next(err));