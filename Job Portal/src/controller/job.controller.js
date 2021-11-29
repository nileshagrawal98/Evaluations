const express = require('express');
const router = express.Router();
const Job = require('../model/job.model');
const crudController = require('./crud.controller');

router.get('/', crudController.getAll(Job));
router.get('/:id', crudController.getOne(Job));
router.post('/', crudController.post(Job));
router.patch('/:id', crudController.patch(Job));
router.delete('/:id', crudController.deleteOne(Job));



router.get('/city/:name/skill/:skill', async (req, res) => {

    try{

        const jobs = await Job.find({$and: [ {"city": req.params.name}, {"skills": req.params.skill} ] } ).lean().exec();

        return res.send(jobs);

    } catch(err){
        return res.status(500).send({message: err.message, status: 'failed'});
    }

});

router.get('/workFromHome/yes', async (req, res) => {

    console.log("here")

    try{

        const jobs = await Job.find({"work_from_home": "yes"}).lean().exec();

        return res.send(jobs);

    } catch(err){
        return res.status(500).send({message: err.message, status: 'failed'});
    }

});

router.get('/noticePeriod/:number', async (req, res) => {

    try{

        const jobs = await Job.find({"notice_period": {$lte: req.params.number}}).lean().exec();

        return res.send(jobs);

    } catch(err){
        return res.status(500).send({message: err.message, status: 'failed'});
    }

});

router.get('/sort/rating', async (req, res) => {

    try{

        const jobs = await Job.find({}).sort({"rating": -1}).lean().exec();

        return res.send(jobs);

    } catch(err){
        return res.status(500).send({message: err.message, status: 'failed'});
    }

});

module.exports = router;