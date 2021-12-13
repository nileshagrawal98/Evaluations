const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const Seat = require('../models/seat.model');
const authenticate = require('../middlewares/authenticate');

router.get('/:id', authenticate, async (req, res) => {

    try{
        const seat = await Seat.find({show: req.params.id}).lean().exec();

        return res.send(seat);

    }catch(err){
        return res.status(500).send({ message: err.message, status: 'Failed' });
    }

});


router.post('/', authenticate, async (req, res) => {

    try{
        const required = req.query.required || 1;

        const show = await Show.findByID(req.body.show).lean().exec();

        const total_seats = show.total_seats;

        let seat;

        if(total_seats >= required){
            seat = await Seat.create({show: req.body.show});
            const seatsLeft = total_seats - required;
            Show.findByIdAndUpdate(req.body.show, {total_seats: seatsLeft}).lean().exec();
        }else{
            return res.send({message:'Enough ticket not available', status:'Failed'});
        }

        return res.status(201).send(seat);

    }catch(err){
        return res.status(500).send({ message: err.message, status: 'Failed' });
    }

});


module.exports = router;