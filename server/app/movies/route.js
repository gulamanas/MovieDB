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

router.post('/movies', async (req, res, next) => {
    try {
        const { title, language, releaseDate } = req.body;

        if (!title || !language || !releaseDate) {
            throw new Error('all fields are required')
        }

        const newMovies = await Movies.create({
            title: title,
            language: language,
            releaseDate: releaseDate
        })

        res.send({
            values: {
                id: newMovies.id,
                title: newMovies.title,
                language: newMovies.language,
                releaseDate: newMovies.releaseDate
            }
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router;