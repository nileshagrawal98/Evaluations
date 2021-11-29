const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

const connect = require('./configs/db');

const jobController = require('./controller/job.controller');
const companyController = require('./controller/company.controller');

app.use('/job', jobController);
app.use('/company', companyController);


app.listen(2900, async() => {
    await connect();

    console.log("Listening on port 2900");
})


