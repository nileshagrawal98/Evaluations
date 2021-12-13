const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const Theatre = require('../models/theatre.model');
const authenticate = require('../middlewares/authenticate');

router.get('/', authenticate, async (req, res) => {

    try{
        const theatre = await Theatre.find({}).lean().exec();

        return res.send(theatre);

    }catch(err){
        return res.status(500).send({ message: err.message, status: 'Failed' });
    }

});


router.post('/', authenticate, async (req, res) => {

    try{
        const theatre = await Theatre.create(req.body);

        return res.status(201).send(theatre);

    }catch(err){
        return res.status(500).send({ message: err.message, status: 'Failed' });
    }

});


module.exports = router;