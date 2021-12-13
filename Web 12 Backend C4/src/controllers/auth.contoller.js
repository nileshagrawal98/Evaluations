const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/user.model')

const newToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_ACCESS_KEY);
}


const register = async (req, res) => {

    let user;
    console.log(req)

    try {
        user = await User.findOne({ email: req.body.email }).lean().exec();

        if (user) {
            return res.status(400).send({ message: 'Email already registered', status: 'failed' });
        }

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            // profile_photo_url: req.file.path,
            roles: req.body.roles
        });

        const token = newToken(user);

        return res.status(201).send({ user, token });
    } catch (err) {
        return res.status(500).send({ message: err.message, status: 'Failed' });
    }

}

const login = async(req, res) => {

    let user;
    try {

        user = await User.findOne({email: req.body.email});

        if(!user){
            return res.status(400).send({message: 'Wrong email or password', status: 'Failed'});
        }

        const match = await user.checkPassword(req.body.password);
        console.log(match)
        if(!match){
            return res.status(400).send({message: 'Wrong email or password', status: 'Failed'});
        }

        const token = newToken(user);

        return res.send({user, token})

    } catch (err) {
        return res.status(500).send({ message: err.message, status: 'Failed' });
    }


}

module.exports = {register, login, newToken}