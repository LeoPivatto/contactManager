const express= require("express")
const router= express.Router()
const {getContact,getContacts,createContact,updateContact,deleteContact}= require("../controlers/contactControler")
const validatetoken = require("../middleware/validateToken")


router.use(validatetoken)

router.route("/").get(getContacts)

router.route("/").post(createContact)

router.route("/:id").get(getContact)

router.route("/:id").put(updateContact)

router.route("/:id").delete(deleteContact)


module.exports= router

