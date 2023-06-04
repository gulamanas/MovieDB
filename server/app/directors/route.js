const C = console.log;

const router = require('express').Router();

const { Directors } = require('../../system/models')

router.get('/director', async (req, res, next) => {
    const allDirector = await Directors.findAll();
    res.send({
        values: allDirector
    })
})

module.exports = router;
