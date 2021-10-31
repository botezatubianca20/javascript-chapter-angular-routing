const express = require('express');
const router = express.Router();
const EQUIPMENTS = require("../db-data").equipments;
const SATELLITES = require("../db-data").satellites;

router.get('/getById/:equipmentId', (req, res) => {
    const equipmentId = +req.params.equipmentId;
    const equipments = Object.values(EQUIPMENTS);
    equipment = equipments.find(eq => eq.id === equipmentId)
    res.status(200).json(equipment);
});

router.get('/getAllBySatelliteUrl/:satelliteUrl', (req, res) => {
    const satelliteUrl = req.params.satelliteUrl;
    const equipments = Object.values(EQUIPMENTS);
    const satellites = Object.values(SATELLITES);
    const satelliteFound = satellites.find(sat => sat.url === satelliteUrl);
    if (satelliteFound) {
        equipmentsBySatellite = equipments.filter(eq => eq.satelliteId === satelliteFound.id)
        res.status(200).json(Object.values(equipmentsBySatellite));
    }
    else {
        res.status(400);
    }

});


module.exports = router;