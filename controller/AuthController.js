const jwt = require('jwt');
import crypto from 'crypto';
const User = require('../models/User')

exports.signUp = async(req, res) => {
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
}

exports.signIn = async(req, res) => {
    // tap.into req.body and save user info into database
    const email= req.body.email;
    const user = { name: email}
    // jwt.sign(user, process.env.SECRET_ACCESS_TOKEN)
}