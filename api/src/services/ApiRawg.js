require('dotenv').config();
const axios = require ('axios');
const { detail } = require('../controllers/Videogame');

const {
    API,
} = process.env;

const cleanGame = function (item){
    return {
        'id': item.id,
        'name': item.name,
        'description': item.description,
        'released': item.released,
        'platforms': item.platforms,
        'rating': item.rating,
        'image': item.background_image,


    }
}

const cleanGenre = function (item){
    return{
        id: item.id,
        name: item.name,
    }
}
const videogames = async function(name = null) {
    
   try {
        let url = ('https://api.rawg.io/api/games?key='+ API );

        if (name = null){
            url=+'search=' + name
        }

        const res = await axios.get(url)

        if(res.status == 200){
            return res.data.results.map(cleanGame);
        }


    }catch(e){
        return e;
    }
}




 const videogame = async function(id) {
        try {
            const res = await axios.get(`https://api.rawg.io/api/games/${id}?key=`+ API );
        

            if (res.status == 200){
                return cleanGame(res.data);
            }
        
        }catch(e){
    console.log (e);
    return e;
}
const db = await videogame.finAll({include: [{model: Genre}]});
const suma = [ ...cleanGame, db];
res.status

}

const genresList = async function (){
    try{
        const res = await axios.get('https://api.rawg.io/api/genres?key=' + API);

        if (res.status == 200){
            return res.data.results.map(cleanGenre);
        
        }
    } catch (e){
        console.log (e);
        return e;
    }
}

module.exports = {
    videogames,
    videogame,
    genresList,
}