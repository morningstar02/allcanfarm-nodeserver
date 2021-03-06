const express = require('express');
const actions = require('../methods/actions');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
})

router.get('/dashboard', (req, res) => {
    res.send('Dashboard');
})

//@desc Adding new user
//@route POST /adduser

router.post('/adduser', actions.addNew)

//@desc Authenticate user
//@route POST /authenticate

router.post('/authenticate', actions.authenticate);

//@desc Get info on a user
//@route POST /getinfo
router.get('/getinfo', actions.getinfo)

module.exports = router;