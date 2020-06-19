const db = require('./config/db');
const movieRepository = require('./repository/movieRepository');

const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('./Movies.csv')
    .pipe(csv())
    .on('data', (row) => {
        movieRepository.create(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed')
    });