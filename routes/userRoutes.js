const express= require("express")
const {registerUser, currentUser, loginUser} = require("../controlers/userControler")
const validatetoken = require("../middleware/validateToken")


const router= express.Router()

router.post("/register", registerUser)

router.post("/login", loginUser)

router.get("/current", validatetoken)

router.get("/current", currentUser)


module.exports = router