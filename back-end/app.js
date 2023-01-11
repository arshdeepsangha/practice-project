require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const port = process.env.PORT || 5000;


app.post('/register', (request, response) => {
    response.send({
        message: `User ${request.body.username} was registered!`,
    });
    console.log('User was created.');
});


app.listen(port);
console.log('App is listenting on http://localhost:5000');