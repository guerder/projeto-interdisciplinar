var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MoviesSchema = new Schema({
    title: String,
    genre: String,
    country: String,
    production_company: String,
    runtime: Number,
    release_date: Date,
    overview: String,
    tagline: String,
    budget: Number,
    revenue: Number,
    popularity: Number,
    vote_average: Number,
    vote_count: Number,
    poster_path: String,
    tmbd_id: Number,
    imdb_id: String
});

module.exports = MoviesSchema;