const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
// const requireLogin = require("../middleware/requireLogin")



// router.get('/protected', requireLogin, (req, res) =>{
//     res.send("hello user")
// })

// signup route
router.post('/signup', (req, res)=>{
   const { name, email, password } =  req.body
   if (!email || !password || !name){
       return res.status(422).json({error: "Pleae fill all field"})
   }
   User.findOne({email:email})
   .then((savedUser)=>{
       if(savedUser){
        return res.status(422).json({error: "User already exist with that email"})  
       }

       bcrypt.hash(password, 14)
       .then(hashedpassword => {
        const user = new User({
            email,
            password:hashedpassword,
            name
        })
 
        user.save()
        .then(user=>{
            res.json({message:"saved successfully"})
        })
        .catch(err=>{
            console.log(err)
        })
       })
       
   })
   .catch(err=>{
       console.log(err)
   })
})

// signin route
router.post('/signin', (req, res)=>{
    const {email, password} = req.body
    if (!email || !password) {
        return res.status(422).json({error: "Please provide email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if (!savedUser){
            return res.status(422).json({erroe: "Invalid email or password"})
        }
        bcrypt.compare(password, savedUser.password)
        .then(doMatch =>{
            if(doMatch){
                // res.json({message: "successfully signed in"})
                const token = jwt.sign({_id:savedUser._id}, JWT_SECRET)
                res.json({token})
            }
            else{
                return res.status(422).json({erroe: "Invalid email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})



module.exports = router