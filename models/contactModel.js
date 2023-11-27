const mongoose= require("mongoose")

const contactSchema= mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "User"
    }

    ,

    name:{
        type:String,
        required:[true,"please add your name"],

    },
    
    phone:{
        type:String,
        required:[true,"add the phone number"],
        minLenght:[8, "add your whole phone-number"]
    },
    
    email:{
        type:String,
        required:[true, "add your email"]
    }
},{
    timestamps: true
})

module.exports= mongoose.model("CONTACT", contactSchema)