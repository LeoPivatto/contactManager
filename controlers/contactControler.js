
const asyncHandler= require("express-async-handler")
const contact= require("../models/contactModel")


//get all contacts GET
const getContacts= asyncHandler( async (req,res)=>{
const contacts= await contact.find({ user_id: req.user.id });
    res.status(200).json(contacts)
})


//createcontact POST
const createContact= asyncHandler( async(req,res)=>{
    console.log(req.body)
    const {name, phone, email}= req.body

    if(!name || !phone || !email){
        res.status(400)
        throw new Error("ALL FIELDS ARE MANDATORY")
    }
    const createCont= await contact.create({
        name,
        phone,
        email,
        user_id: req.user.id,}
    )
    res.status(200).json(createCont)
})


//get contact GET
const getContact=asyncHandler( async (req,res)=>{
    
    const getcontact= await contact.findById(req.params.id)

    if(!getcontact){
        res.status(404)
        throw new Error("ERROR, CONTACT didn't found")
    }

    res.status(200).json(getcontact)
})


//update contact PUT
const updateContact= asyncHandler( async(req,res)=>{
    const updatecontact= await contact.findById(req.params.id)

    if(!updatecontact){
        res.status(404)
        throw new Error("ERROR, CONTACT didn't found")
    }


    if(updatecontact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("dont have permission to update other user contact")
    }

    const updatedcontact= await contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    
    res.status(200).json(updatedcontact)
})




//delete contact delete
const deleteContact= asyncHandler( async(req,res)=>{
    const deletecontact= await contact.findById(req.params.id)

    if(!deletecontact){
        res.status(404)
        throw new Error("ERROR, CONTACT didn't found")
    }


      if(deletecontact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("dont have permission to delete other user contact")
    }


      await contact.deleteOne({ _id: req.params.id });

     res.status(200).json(contact)
})




console.log(process.env.port); 

module.exports= {getContact,getContacts,createContact,updateContact,deleteContact}