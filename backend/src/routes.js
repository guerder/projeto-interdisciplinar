const routes = require('express').Router();
const Movie = require('./models/Movie')

routes.get('/movies', async (req, res) => {
    const limit = 12;
    const page = req.query.page || 1;
    const skip = (page - 1) * limit;

    const movies = await Movie.find().skip(skip).limit(limit);

    const serializedMovies = movies.map(movie => {
        return {
            id: movie._id,
            title: movie.title, 
            poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            overview: movie.overview,
            tagline: movie.tagline
        }
    });

    return res.json(serializedMovies)
})

module.exports = routes