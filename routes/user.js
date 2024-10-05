const express = require('express');
const {handleUserSignUp} =require('../controllers/user')

const router=express.Router();

//signup route
router.post('/signup',handleUserSignUp)

module.exports = router;