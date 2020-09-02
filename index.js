const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//set up express 
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { 
useNewUrlParser: true, 
useUnifiedTopology: true,
useCreateIndex: true
});

const PORT = process.env.PORT || 5000;


//set up route

app.use('/users', require('./routes/userRoute'));


app.listen(PORT, () => 
    console.log(`The server is running on port: ${PORT}`)
);
