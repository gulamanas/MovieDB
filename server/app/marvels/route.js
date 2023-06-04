const C = console.log;

const router = require('express').Router();

const { Marvels } = require('../../system/models');

router.get('/marvels', async (req, res, next) => {
    const allMarvels = await Marvels.findAll();
    res.send({
        values: allMarvels
    });
})

module.exports = router;