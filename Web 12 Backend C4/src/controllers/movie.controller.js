const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const Movie = require('../models/movie.model');
const authenticate = require('../middlewares/authenticate');


router.post('/', authenticate, async (req, res) => {

    try{
        const movie = await Movie.create({
            name: req.body.name,
            actors: req.body.actors,
            languages: req.body.languages,
            directors: req.body.directors,
            // poster_url: req.file.path,
        });

        return res.status(201).send(movie);


    }catch(err){
        return res.status(500).send({ message: err.message, status: 'Failed' });
    }

});


module.exports = router;