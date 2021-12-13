const express = require('express');
const app = express();
const connect = require('./configs/db');

app.use(express.json());


const {register, login} = require('./controllers/auth.contoller');

app.use('/login', login);
app.use('/register', register);



const start = () =>{
    app.listen(3000, async () =>{
        await connect();

        console.log("Listening on port 3000");
    });
}

module.exports = start;