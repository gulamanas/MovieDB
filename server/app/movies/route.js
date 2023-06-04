const C = console.log;

const router = require('express').Router();

const { Movies } = require('../../system/models');

router.get('/movies', async (req, res, next) => {
    const rows = await Movies.findAll()
    C(rows)

    res.send({
        values: rows
    })
})

module.exports = router;