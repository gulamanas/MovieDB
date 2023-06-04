const C = console.log;

const router = require('express').Router();

const { Reviewers } = require('../../system/models')

router.get('/reviewers', async (req, res, next) => {
    const allReviewers = await Reviewers.findAll();
    res.send({
        values: allReviewers
    })
})

module.exports = router;
