const C = console.log;

const router = require('express').Router();

const { MovieCast, Movies, Actors } = require('../../system/models')

router.get('/moviecast', async (req, res, next) => {
    const moviecast = await MovieCast.findAll({
        raw: true,
        nest: false,
        include: [{
            model: Movies,
            attributes: [
                'id', 'title'
            ]
        }, {
            model: Actors,
            attributes: [
                'id', 'fname', 'lname', 'gender'
            ]
        }]
    })

    const ret = moviecast.map(r => {
        const retObj = {
            id: r.id,
            createdAt: r.createdAt,
            updatedAt: r.updatedAt,
            deletedAt: r.deletedAt,
            characterName: r.role,
            movieTitle: r['Movie.title'],
            actorName: r['Actor.fname'] + ' ' + r['Actor.lname'],
            gender: r['Actor.gender']
        }
        return retObj
    })

    res.send({
        values: ret
    });
})

module.exports = router;