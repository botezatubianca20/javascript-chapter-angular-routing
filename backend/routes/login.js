const express = require('express');
const router = express.Router();
const USERS = require("../db-data").users;

router.post('/', (req, res) => {
    const {email, password} = req.body;
    const user = Object.values(USERS).find(user => user.email === email);

    if (user && user.password === password) {
        res.status(200).json({email: user.email, admin: user.admin});
    } else {
        res.status(403);
    }
});


module.exports = router;