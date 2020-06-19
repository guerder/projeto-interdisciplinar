var mongoose = require('mongoose');
MoviesSchema = require('../models/movies');

var Movies = mongoose.model('movies', MoviesSchema);
module.exports = Movies;