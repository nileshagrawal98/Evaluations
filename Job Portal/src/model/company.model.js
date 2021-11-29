const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {type: String, required: true},
    established_in: {type: Date, required: true},
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('company', companySchema);