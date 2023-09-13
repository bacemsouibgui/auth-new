// require router from express
const router= require('express').Router()

//require bcrypt
const bcrypt = require('bcrypt');

// require jwt
const jwt = require('jsonwebtoken');

//require User
const User= require('../models/User')

// require isAuth
const isAuth= require('../middlewares/isAuth');
const { registerRules, LoginRules, validator } = require('../middlewares/validator');

router.post('/register', registerRules(),validator,async(req,res)=> {
    const {name, lastName, email, password} = req.body

    try {
        let user= await User.findOne({email})
        if (user) {
            return res.send({msg: "User already exist"})
        }

    // create user
    user= new User({name, lastName, email, password})

    // create salt and hash
    const salt = 10;
    const hashedPassword= await bcrypt.hash(password, salt)
    
    // replace password with hashedPassword
    user.password= hashedPassword

    // save the user
    await user.save()

    // sign the user
    const payload= {
        id: user._id
    }
    // token
    const token = await jwt.sign(payload, 'sghhhhhh', {
        expiresIn: '7 days'
    })

    res.send({msg: 'User registred with success', user, token})
  
    }

    catch (error) {
        res.send({msg: 'server error'})

    }
})

// Post api/auth/ Login
//Login user
//access public
router.post('/login', LoginRules(), validator,async(req,res)=> {
    const {email,password} = req.body
    try {
        let user= await User.findOne({email})

        if (!user) {
            return res.send({msg: 'Bad Credentials ! email'})
        }

        // check password
        const isMatch= await bcrypt.compare(password, user.password)

        if(!isMatch) {
            return res.send({msg: 'Bad Credentials ! Password'})
        }
    // sign the user
    const payload= {
        id: user._id
    }
    // token
    const token = await jwt.sign(payload, 'sghhhhhh', {
        expiresIn: '7 days'
    })
        res.send ({msg: 'logged with success',token})

    }
    catch(error) {
        console.log(error)

    }
})

// route GET
//private route
router.get('/user',isAuth, (req,res)=> {
    res.send({user: req.user})

})

module.exports=router
