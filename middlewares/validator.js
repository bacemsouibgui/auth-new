// require body
const {body, validationResult} = require('express-validator');

const registerRules=()=> [
    body("name", "Name is required").notEmpty(),
    body("lastName", "LastName is required").notEmpty(),
    body("email","email is required").isEmail(),
    body("password", "password must contain at least 6 characters").isLength({
        min:6,
        max:20
    })

];

const LoginRules=()=> [
    body("email","email is required").isEmail(),
    body("password", "password must contain at least 6 characters").isLength({
        min:6,
        max:20
    })
]

const validator=(req,res,next)=> {
const errors= validationResult(req)
if(!errors.isEmpty()) {
    return res.send({
        errors: errors.array().map((el)=>({
            msg: el.msg
        }))
    })
}
next()
}

module.exports={registerRules, LoginRules,validator }