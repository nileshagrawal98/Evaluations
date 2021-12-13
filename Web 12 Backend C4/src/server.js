const express = require('express');
const app = express();
const connect = require('./configs/db');

app.use(express.json());


const upload = require('./middlewares/upload');
const {register, login} = require('./controllers/auth.contoller');
const movieController = require('./controllers/movie.controller');
const showController = require('./controllers/show.controller');
const screenController = require('./controllers/screen.controller');
const seatController = require('./controllers/seat.controller');

app.use('/login', login);
app.use('/register', upload.single('profile_photo_url'), register);

app.use('/movies', movieController);
app.use('/shows', showController);
app.use('/seats', seatController);
app.use('/screens', screenController);






const start = () =>{
    app.listen(3000, async () =>{
        await connect();

        console.log("Listening on port 3000");
    });
}

module.exports = start;