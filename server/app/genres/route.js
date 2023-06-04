const C = console.log;

const router = require('express').Router();

const { Genres } = require('../../system/models');

router.get('/genres', async (req, res, next) => {
    const allGenres = await Genres.findAll();

    res.send({
        values: allGenres
    })
})

module.exports = router;
