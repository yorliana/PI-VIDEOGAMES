
const { videogames, videogame, genresList } = require('../services/ApiRawg');

const{ create } =  require('../repositories/Videogame');

const list = async (req, res) => {
    const name = req.params.name || null;

   const data = await videogames(name);
    res.json(data);
    console.log(list)
};

const detail = async (req, res) => {
   const data = await videogame(req.params.id);
    res.json (data);
    console.log (detail)
}

const platform = async (req, res) =>{
   
        try {
            const platforms = await Platform.findAll();
            res.status(200).json(platforms);
        } catch (error) {
            console.log(error);
        }
    };

const storage = (req,res) => {
    const { name, description, released, raLing, platforms, image, genres } = res.query;

    res.json(create(name, description, released, raLing, platforms, image, genres ));
    console.log(storage)
}





module.exports = {
    list,
    detail,
    storage,
    platform,
    
};