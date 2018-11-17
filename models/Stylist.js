var mongoose = require('mongoose');

var StylistSchema = new mongoose.Schema({

    firstname: String,
    lastname: String,
    specialties: String,
});

module.exports = mongoose.model('Stylist', StylistSchema);
