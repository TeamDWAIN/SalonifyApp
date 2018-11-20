var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Stylist = require('../models/Request.js');


router.get('/', function(req, res, next) {
    Request.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
  });
  /* GET SINGLE Request BY ID */
router.get('/:id', function(req, res, next) {
    Request.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* SAVE Request */
  router.post('/', function(req, res, next) {
    Request.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* UPDATE Request */
  router.put('/:id', function(req, res, next) {
    Request.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* DELETE Request */
  router.delete('/:id', function(req, res, next) {
    Request.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  module.exports = router;