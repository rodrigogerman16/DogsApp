import axios from 'axios';
export const GET_DOGS = 'GET_DOGS';
export const GET_DOGS_BY_NAME = 'GET_DOGS_BY_NAME';
export const GET_DOG_DETAIL = 'GET_DOG_DETAIL';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const CREATE_DOG = 'CREATE_DOG';
export const FILTER_BY_TEMP = 'FILTER_BY_TEMP';
export const FILTER_BY_STORED = 'FILTER_BY_STORED';
export const SORT_BY_WEIGHT = 'SORT_BY_WEIGHT';
export const SORT_BY_NAME = 'SORT_BY_NAME';

export function getDogs(name){
    return async function(dispatch){
        try {
            if(name){
                const dogsName = await axios.get(`http://localhost:3001/dogs?name=${name}`)
                return dispatch({
                    type: GET_DOGS_BY_NAME,
                    payload: dogsName.data
                })
            }
            const dogs = await axios.get('http://localhost:3001/dogs');
            return dispatch({
                type: GET_DOGS,
                payload: dogs.data
            })
        } catch (error) {
            dispatch({
                type: GET_DOGS_BY_NAME,
                payload: error.response
            })
        }
       
    }
}

export function getDogDetail(id){
    return async function(dispatch){
        try {
            const dog = await axios.get(`http://localhost:3001/dogs/${id}`)
            return dispatch({
                type: GET_DOG_DETAIL,
                payload: dog.data
            })
        } catch (error) {
            dispatch({
                type: GET_DOG_DETAIL,
                payload: error.response
            })
        }
        
    }
}

export function getTemperaments(){
    return async function(dispatch){
        try {
            const temps = await axios.get('http://localhost:3001/temps');     
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: temps.data
            })
        } catch (error) {
            dispatch({
                type: GET_TEMPERAMENTS,
                payload: error.response
            })
        }
    }
} 

export function createDog(payload){
    return async function(dispatch){
        try {
            const postDog = await axios.post('http://localhost3001/dogs', payload);
            return dispatch({
                type: CREATE_DOG,
                payload: postDog
            })
        } catch (error) {
            dispatch({
                type: CREATE_DOG,
                payload: error.response
            })
        }
    }
}

export function filterByTemp(payload){
    return{
        type: FILTER_BY_TEMP,
        action: payload
    }
}

export function filterByStored(payload){
    return{
        type: FILTER_BY_STORED,
        action: payload
    }
}

export function sortByName(payload){
    return{
        type: SORT_BY_NAME,
        action: payload
    }
}

export function sortByWeight(payload){
    return{
        type: SORT_BY_WEIGHT,
        action: payload
    }
}