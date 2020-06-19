const routes = require('express').Router();
const Movie = require('./models/Movie')

routes.get('/movies', async (req, res) => {
    const movies = await Movie.find()

    const serializedMovies = movies.filter((user, index, array) => index < 100).map(movie => {
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