const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_ACCESS_KEY, function (err, user) {
            // console.log(user)
            if(err) return reject(err);

            return resolve(user);
        });
    })
}


const authenticate = async (req, res, next) => {

    const providedToken = req.headers.authorization;

    if(!providedToken || !providedToken.startsWith('Bearer ')){
        return res.status(400).send({message: 'Invalid token', status: 'Failed'});
    }

    const token = providedToken.split('Bearer ')[1];
    let user;
    try{
        // console.log(token)
        user = await verifyToken(token);
        // console.log(user)
    }catch(err){
        return res.status(400).send({message: 'Invalid Token', status: 'Failed'});
    }

    if(!user){
        return res.status(400).send({message: 'Invalid Token', status: 'Failed'});
    }

    req.user = user;

    next();

}


module.exports = authenticate;