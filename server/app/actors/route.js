const C = console.log;

const router = require('express').Router();

const { Actors } = require('../../system/models')

router.get('/actors', async (req, res, next) => {
    const allActors = await Actors.findAll();
    res.send({
        values: allActors
    })
})

module.exports = router;
