const e = require('express')
const express = require('express')
const router = express.Router()
const UserAction = require('../controllers/user')

// List Users
router.get('/', UserAction.getAllUsers)

module.exports = router