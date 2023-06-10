const C = console.log;

const router = require('express').Router();

const { Movies, Directors, MovieDirections } = require('../../system/models')

router.get('/moviedirection', async (req, res, next) => {
    const allMovieDirection = await MovieDirections.findAll({
        raw: true,
        nest: false,
        include: [{
            model: Movies,
            attributes: [
                'id', 'title', 'language'
            ]
        }, {
            model: Directors,
            attributes: [
                'id', 'fname', 'lname'
            ]
        }]
    })

    const ret = allMovieDirection.map(r => {
        const retObj = {
            id: r.id,
            createdAt: r.createdAt,
            updatedAt: r.updatedAt,
            deletedAt: r.deletedAt,
            movieTitle: r['Movie.title'],
            movielanguage: r['Movie.language'],
            directorName: `${r['Director.fname']} ${r['Director.lname']}`,
        }
        return retObj;
    })

    res.send({
        values: ret
    })
})

router.get('/moviesdirector/:id', async (req, res) => {
    const movieId = req.params.id;

    const allMovieDirection = await MovieDirections.findAll({
        raw: true,
        nest: false,
        where: {
            movieId: movieId
        },
        include: [{
            model: Movies,
            attributes: [
                'id', 'title', 'language'
            ]
        }, {
            model: Directors,
            attributes: [
                'id', 'fname', 'lname'
            ]
        }]
    })

    const ret = allMovieDirection.map(r => {
        const retObj = {
            id: r.id,
            createdAt: r.createdAt,
            updatedAt: r.updatedAt,
            deletedAt: r.deletedAt,
            movieTitle: r['Movie.title'],
            movielanguage: r['Movie.language'],
            directorName: `${r['Director.fname']} ${r['Director.lname']}`,
        }
        return retObj;
    })

    res.send({
        values: ret
    })
})

module.exports = router;
