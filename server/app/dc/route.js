const C = console.log;

const router = require('express').Router();

const { DCMovies } = require('../../system/models');

router.get('/dc', async (req, res, next) => {
    const allDc = await DCMovies.findAll();
    res.send({
        values: allDc
    });
})

module.exports = router;