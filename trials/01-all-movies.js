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
const { MovieCast, Movies, Actors, Sequelize } = require('../server/system/models');

query = async () => {
    const moviecast = await MovieCast.findAll({
        raw: true,
        // nest: false,
        include: [{
            model: Movies,
            // attributes: [
            //     'id', 'title'
            // ]
        }, {
            model: Actors,
            // attributes: [
            //     'id', 'fname', 'lname', 'gender'
            // ]
        }]
    })

    moviecast.map(r => {
        // C(r.id)
        // C(r.role)
        C(r)
    })

    // const ret = moviecast.map(r => {
    //     const retObj = {
    //         id: r.id,
    //         characterName: r.role,
    //         movieTitle: r['Movie.title'],
    //         actorName: r['Actor.fname'] + ' ' + r['Actor.lname'],
    //         gender: r['Actor.gender']
    //     }
    //     return retObj
    // })
    // C(ret)
}

query()