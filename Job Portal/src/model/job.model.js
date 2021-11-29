const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {type: String, required: true},
    city: {type: String, required: true},
    work_from_home: {type: String, required: true},
    rating:  {type: Number, required: true},
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company',
        required: true
    },
    notice_period: {type: Number, required: true},
    skills: {type: String, required: true}
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('job', jobSchema);