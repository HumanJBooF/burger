const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll(data => {
        let hbsBurgers = {
            burgers: data
        }
        console.log(hbsBurgers);
        res.render('index', hbsBurgers);
    });

    router.post('/burgers/create', (req, res) => {
        let burgerName = req.body.addBurger
        burger.insertOne(['burger_name'], [burgerName], () => {
            res.redirect('/');
        })
    });

    router.post('/burgers/:id', (req, res) => {
        let condition = req.params.id;
        console.log(condition, 'CHECK THE CONDITION');
        burger.updateOne({
            devoured: true
        }, condition, () => {
            res.redirect('/');
        })
    });
    router.post('/delete/:id', (req, res) => {
        let condition = req.params.id;
        burger.delete({
            delete: true
        }, condition, () => {
            res.redirect('/');
        })
    });

});

module.exports = router;