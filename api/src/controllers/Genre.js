const { genresList } = require('../services/ApiRawg');
const genres = async (req,res) => {
    const data = await genresList(req.params.genres);
    res.json(data);
    console.log(genres)
}

module.exports = {
    genres
};