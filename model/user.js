const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: [true,'Please provide a name'],
    //     maxlength: [40 , 'Name should be under 40 characters']
    // },
    // email: {
    //     type: String,
    //     required: [true,'Please provide a email'],
    //     validate: [validator.isEmail , 'Please enter email in correct format '],
    //     unique: true
    
    // },
    // password: {
    //     type: String,
    //     minlength:[6,'Password should be atleast 6 chars'],
    //     select: false , /// to avaoid password to come with user to use password field ow we have to explixitly define    
    // },
    
    // isIndian: {
    //     type: Boolean,
    //     required: [true]
    // },

    // googleId : {
    //     type: String,
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now,

    // },     
    name:String,
    googleId : String,
    email : String
});


module.exports=mongoose.model('User' , userSchema);