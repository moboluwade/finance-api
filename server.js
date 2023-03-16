import express from "express";
import crypto from 'crypto';
const app = express();
const env = require('dotenv');
const jwt = require('jwt');
const mongoose = require('mongoose');
const PORT = 3030;

// app.use(express.json())
mongoose.connect(process.env.DATABASE_CONNECTION_LINK);


const userSchema = new Schema({
    id: mongoose.ObjectId,
    email: String,
    password: String,
    acccount_number: String,
    Balance: String
})

const User= mongoose.model('User', userSchema)

app.route('/signup')
    .post('/signup',(req,res)=>{
        const email = req.body.email;
        const password = req.body.password;
        const cofirmPassword = req.body.cofirmPassword
        if(email===null && password===null && confirmPassword===null){
            res.send('Input fields cannot be empty')
        } else{
            const user = new User({
                email: email,
                // password: 
                // has passwords with bcrpt
                // id: mongoose.ObjectId,
                acccount_number: crypto.randomBytes(12).toString(10),
                Balance: '0.00'
            })
            user.save((err)=>{
                if(err){
                    console.log(err)
                }
            })
        }
        //tap into req.body and check database for authentication
    })

app.route('/signin')
    .post('/signin',(req,res)=>{
        // tap.into req.body and save user info into database
        const email= req.body.email;
        const user = { name: email}
        // jwt.sign(user, process.env.SECRET_ACCESS_TOKEN)
    })




// transactions
app.route('/trasactions')
    .get((req,res)=>{
        //show user transactions data from transactions table
    })

app.route('/withdrawal')
    .get((req,res)=>{
        //give a user a simple form\
        //form should contain:
        //amount
    })
    .post((req,res)=>{
        //first authenticate user
        //then authenticate user
        //take the amount from the user database
        //subtract the amount taken
        //create a history of the transaction
        //
    })

app.route('/transfer')
    .post('transfer',(req,res)=>{

    })
app.route('/')
app.listen(PORT, ()=>{
    console.log(`app is listening on port ${PORT}`)
})