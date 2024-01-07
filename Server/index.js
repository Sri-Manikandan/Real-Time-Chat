const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoute');

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.get('/',(req,res)=>{
    res.send("Welcome to our chat app APIs...")
})

app.listen(port,(req,res)=>{
    console.log(`Server running at port ${port}`);
});

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('MongoDB connected'))
.catch(err => console.log("MongoDB connection error: ", err.message));