console.clear();
console.log('---------------------------------------------------');
console.log("this program has to be run from the 'trials' folder");
console.log('---------------------------------------------------');
const C = console.info;

const { Op } = require('sequelize');

// * following has to go to app root
// * the program will be run from here
process.chdir('..')

// * following is with respect to current file location
const { Movies, Directors, MovieDirections, Sequelize } = require('../server/system/models');

query = async () => {
    const allMovieDirection = await MovieDirections.findAll({
        raw: true,
        nest: false,
        where: {
            movieId: 1
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
    const directors = [];
    // C(movieGenres)
    allMovieDirection.map(r => {
        // C(r)
        let director = `${r['Director.fname']} ${r['Director.lname']}`
        directors.push(director)
    })
    C(directors)
    // C(ret)
}

query()