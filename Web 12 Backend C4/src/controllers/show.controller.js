const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const Show = require('../models/show.model');
const authenticate = require('../middlewares/authenticate');
const Screen = require('../controllers/screen.controller');
const Theatre = require('../models/screen.model');

router.get('/:id', authenticate, async (req, res) => {

    try{
        const show = await Show.find({movie: req.params.id}).lean().exec();

        return res.send(show);

    }catch(err){
        return res.status(500).send({ message: err.message, status: 'Failed' });
    }

});

// id for movie
router.get('/nearest/:id', authenticate, async (req, res) => {

    const reqLocation = req.query.location;

    if(!reqLocation){
        return res.send({message:'No location provided', status:'Faild'});
    }

    try{

        let theatres = await Theatre.find({location: reqLocation}).lean().exec();

        theatres = theatres.map(t => t.id);

        let screens = await Screen.find({theatre: $in[theatres]}).lean().exec();

        screens = screens.map(s => s.id);

        let shows = await Show.find({$and: [
            {movie: req.params.id},
            {screen: $in[screens]}
        ]}).lean().exec();

        return res.send(shows);

    }catch(err){
        return res.status(500).send({ message: err.message, status: 'Failed' });
    }

});


router.post('/', authenticate, async (req, res) => {

    try{
        const show = await Show.create(req.body);

        return res.status(201).send(show);


    }catch(err){
        return res.status(500).send({ message: err.message, status: 'Failed' });
    }

});


module.exports = router;