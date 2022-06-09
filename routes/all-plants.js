const express = require('express');
const router = express.Router();

const Plant = require('../models/plant')

router.get('/', async (req, res) => {
    // const newPlant = await new Plant({name: 'Cherry Tomato', daysToHarvest: 60, sewByEarliest: 'MAR', sewByLatest: 'MAY'});
    // await newPlant.save();
    const plants = await Plant.find({});
    res.render('all-plants', { plants });

});

module.exports = router