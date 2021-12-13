const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const Screen = require('../models/screen.model');
const authenticate = require('../middlewares/authenticate');

router.get('/', authenticate, async (req, res) => {

    try{
        const screen = await Screen.find({}).lean().exec();

        return res.send(screen);

    }catch(err){
        return res.status(500).send({ message: err.message, status: 'Failed' });
    }

});


router.post('/', authenticate, async (req, res) => {

    try{
        const screen = await Screen.create(req.body);

        return res.status(201).send(screen);


    }catch(err){
        return res.status(500).send({ message: err.message, status: 'Failed' });
    }

});


module.exports = router;