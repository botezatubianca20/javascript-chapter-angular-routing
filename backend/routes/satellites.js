const express = require('express');
const router = express.Router();
const SATELLITES = require("../db-data").satellites;

router.get('/getAll', (req, res) => {
    res.status(200).json(Object.values(SATELLITES));
});

router.get('/getSatelliteByUrl/:url', (req, res) => {
    const satelliteUrl = req.params.url;
    if (satelliteUrl.length > 0) {
        const satellites = Object.values(SATELLITES);
        const satellite = satellites.find(satellite => satellite.url === satelliteUrl);
        res.status(200).json(satellite);
    }
    else{
        res.status(400);
    }
    
});

module.exports = router;