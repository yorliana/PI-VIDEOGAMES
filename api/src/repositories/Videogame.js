const { Videogame } = require('../db');

const findAll = async function()
{
    return Videogame.findAll();
}


const create = async function(name, description, released, rating, platforms, image)

{
    const videogame = await Videogame({
        name, 
        description,
        released,  
        rating,
        platforms,
        image,
        genres,
    } ,{
        include: Genre
    })
    return videogame;

    };

    module.exports = {
        create,
        findAll,
    }

    

