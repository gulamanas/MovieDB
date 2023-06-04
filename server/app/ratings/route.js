const C = console.log;

const router = require('express').Router();

const { Ratings, Movies, Reviewers } = require('../../system/models')

router.get('/ratings', async (req, res, next) => {
    const allRatings = await Ratings.findAll({
        raw: true,
        include: [{
            model: Movies,
            attributes: [
                'id', 'title', 'language'
            ]
        }, {
            model: Reviewers,
            attributes: [
                'id', 'revName'
            ]
        }]
    })

    const ret = allRatings.map(r => {
        const retObj = {
            id: r.id,
            stars: r.revStars,
            createdAt: r.createdAt,
            updatedAt: r.updatedAt,
            deletedAt: r.deletedAt,
            movieTitle: r['Movie.title'],
            movielanguage: r['Movie.language'],
            revName: r['Reviewer.revName'],
        }
        return retObj

    })

    res.send({
        values: ret
    })
})

module.exports = router;