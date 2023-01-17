const express = require("express")
const { createUser, userDetails, getUser } = require("../controllers/userController")
const router = express.Router()

router.post("/createUser", createUser)
router.post("/userDetails/:userDetailsId", userDetails)
router.get("/getUser", getUser)

module.exports  = router