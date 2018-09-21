const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll(data => {
        let hbsBurgers = {
            burgers: data
        }
        res.render('index', hbsBurgers);
    });


});

module.exports = router;