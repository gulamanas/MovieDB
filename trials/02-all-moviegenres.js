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
const { MovieGenres, Genres, MovieCast, Movies, Actors, Sequelize } = require('../server/system/models');

query = async () => {
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
                'id'
            ]
        }]
    })

    // C(movieGenres)
    movieGenres.map(r => {
        C(r)
    })
    // C(ret)
}

query()