// require mongoose
const mongoose= require('mongoose');

// require schema from mongoose
const Schema= mongoose.Schema;

// create the schema
const userSchema= new Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

module.exports= User= mongoose.model("User", userSchema)