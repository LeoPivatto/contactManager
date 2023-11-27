const mongoose= require("mongoose")

const userSchema= mongoose.Schema({
    username:{
        type:String,
        required:[true,"please add your username"],

    },
    email:{
        type:String,
        required:[true,"please add your email"],
        unique:[true, "email adress already taken"]

    },
    password:{
        type:String,
        required:[true,"please add your password"],
        minLenght:[8, "At least 8 characters for your password"]
    }},
    
    {
        timestamps: true,
    }

)

module.exports= mongoose.model("User", userSchema)