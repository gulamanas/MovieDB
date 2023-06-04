const C = console.log;

const router = require('express').Router();

const { MovieGenres, Movies, Genres } = require('../../system/models')

router.get('/moviegenres', async (req, res, next) => {
    const movieGenres = await MovieGenres.findAll({
        raw: true,
        nest: false,
        include: [{
            model: Movies,
            attributes: [
                'id', 'title'
            ]
        }, {
            model: Genres,
            attributes: [
                'id', 'title'
            ]
        }]
    })

    const ret = movieGenres.map(r => {
        const retObj = {
            id: r.id,
            createdAt: r.createdAt,
            updatedAt: r.updatedAt,
            deletedAt: r.deletedAt,
            movieTitle: r['Movie.title'],
            genreTilte: r['Genre.title'],

        }
        return retObj
    })

    res.send({
        values: ret
    })
})

module.exports = router;