// require jwt
const jwt = require("jsonwebtoken");

// require the user
const User= require('../models/User')

const isAuth=async(req,res,next)=> {
  
    try {
        const token= req.headers['x-auth-token'];

        //check for token
    if(!token) {
        return res.send({msg: 'No token, authorization denied'});
    }

    // verify token
    const decoded = await jwt.verify(token, 'sghhhhhh');

    const user = await User.findById(decoded.id) 

    // check for the user
    if (!user) {
        return res.send({msg: 'authorization denied'})
    }
// create user
req.user= user

next()

    }
    catch(error) {
return res.send({msg: 'Token is not valid'})
    }
}

module.exports= isAuth;