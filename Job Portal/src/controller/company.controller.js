const express = require('express');
const router = express.Router();
const Company = require('../model/company.model');
const crudController = require('./crud.controller');
const Job = require("../model/job.model");

router.get('/', crudController.getAll(Company));
router.get('/:id', crudController.getOne(Company));
router.post('/', crudController.post(Company));
router.patch('/:id', crudController.patch(Company));
router.delete('/:id', crudController.deleteOne(Company));

router.get('/most/jobs', async(req, res, next) => {

    try{

        let obj = {};

        const jobs = await Job.find({}).sort().lean().exec();

        jobs.forEach(e => {
            if(obj[e.company_id] == undefined){
                obj[e.company_id] = 1;
            }else{
                obj[e.company_id]++;
            }
        });

        let max = 0;
        let maxId = null;

        for(let k in obj){
            if(obj[k] > max){
                maxId = k;
            }
        }

        let maxCompany = await Company.findById(maxId).lean().exec();


        return res.send(maxCompany);

    } catch(err){
        return res.status(500).send({message: err.message, status: 'failed'});
    }

})

module.exports = router;
