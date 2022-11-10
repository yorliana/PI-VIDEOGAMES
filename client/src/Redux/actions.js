import axios from 'axios';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const ORDER_GAMES = 'ORDER_GAMES';
export const GET_GENRES = 'GET_GENRES';
export const FILTER_GAMES = 'FILTER_GAMES';
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_NAME';
export const GET_DETAIL = 'GET_DETAIL';
export const CLEAR_DETAIL = 'CLEAR_DETAIL';
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME'; 




export function getVideogames(){
    return async function (dispatch){
            
        return fetch (`http://localhost:3001/api/videogames/Home`)
        
        .then(res => res.json())
        
        .then(res => {
            console.log(res)
            dispatch(
                {

                type: GET_VIDEOGAMES,


                payload: res
            })
        })
    }
}
    

export function getVideogamesByName(name){
    return(async function (dispatch){
        let info = await axios.get(`http://localhost:3001/api/videogames?name=${name} `);
       
        return(dispatch({
            type: GET_VIDEOGAMES_BY_NAME,
            payload: info.data
        }));
    });
};

export function getGenres(){
    return(async function (dispatch){
        let info = await (axios(`http://localhost:3001/api/genres`));
        return(dispatch({
            type: GET_GENRES,
            payload: info.data
        }));
    });
};

export function orders(payload){
    return({
        type: ORDER_GAMES,
        payload
    });
};

export function filters(){
    return({
        type: FILTER_GAMES,
        
    });
};

export function getDetail(id){
    return(async function (dispatch) {
        let info = await (axios(`http://localhost:3001/api/videogames/${id}`));
        return(dispatch({
            type: GET_DETAIL,
            payload: info.data
        }));
    });
};

export function clearDetail(){
    return({
        type: CLEAR_DETAIL,
    });
};

export function createGame(payload){
    return( async function(){
       const response = await axios.post('http://localhost:3001/videogames', payload);
       console.log(response);
       return (response);
    });
}; 