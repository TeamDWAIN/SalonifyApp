var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Stylist = require('../models/Stylist.js');


router.get('/', function(req, res, next) {
    Stylist.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
  });
  /* GET SINGLE Stylist BY ID */
router.get('/:id', function(req, res, next) {
    Stylist.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* SAVE Stylist */
  router.post('/', function(req, res, next) {
    Stylist.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* UPDATE Stylist */
  router.put('/:id', function(req, res, next) {
    Stylist.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* DELETE Stylist */
  router.delete('/:id', function(req, res, next) {
    Stylist.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  module.exports = router;
  