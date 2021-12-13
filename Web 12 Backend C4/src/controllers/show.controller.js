const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const Show = require('../models/show.model');
const authenticate = require('../middlewares/authenticate');

router.get('/:id', authenticate, async (req, res) => {

    try{
        const show = await Show.find({movie: req.params.id}).lean().exec();

        return res.send(show);

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