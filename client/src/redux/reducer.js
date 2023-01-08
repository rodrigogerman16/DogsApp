import { 
    GET_DOGS,
    GET_DOGS_BY_NAME,
    GET_DOG_DETAIL,
    GET_TEMPERAMENTS,
    CREATE_DOG,
    FILTER_BY_TEMP,
    FILTER_BY_STORED,
    SORT_BY_WEIGHT,
    SORT_BY_NAME
} from "./actions";

const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: []
};

function rootReducer(state = initialState, action){
    switch(action.type){

        case GET_DOGS: return{
            ...state,
            dogs: action.payload,
            allDogs: action.payload
        };

        case GET_DOGS_BY_NAME: 
        let dogFounded = typeof action.payload === 'object' ? action.payload : state.allDogs;
        return{
            ...state,
            dogs: dogFounded
        };

        case GET_DOG_DETAIL: return{
            ...state,
            dogs: action.payload
        };

        case GET_TEMPERAMENTS: return{
            ...state,
            temperaments: action.payload
        };

        case CREATE_DOG: return{
            ...state
        };

        case FILTER_BY_TEMP:
            const allDogs = state.allDogs;
            const filterByTemp = action.payload === 'all' ? 
            allDogs :
            allDogs.filter(dog => dog.temper?.find(temper => temper.name === action.payload || temper === action.payload))
            return {
                ...state, 
                dogs: filterByTemp 
            }
        ;

        case FILTER_BY_STORED:
            const dbDogs = state.allDogs.filter(dog => dog.createdInDb);
            const apiDogs =  state.allDogs.filter(dog => !dog.createdInDb);
            const dogFilter = action.payload === 'db' && dbDogs.length ? dbDogs : apiDogs
            return {
                ...state,
                dogs: action.payload === "all" ? state.allDogs : dogFilter
            } 
        ;
        
        case SORT_BY_WEIGHT:
            const actualDogs = state.dogs
            const sortedWeight = action.payload === "asc" ?            
            actualDogs.sort(function(a,b) {
                return a.weightMin - b.weightMin;
            }) :
            actualDogs.sort(function(a,b) {
                return b.weightMin - a.weightMin;
            })

            return {
                ...state,
                dogs: sortedWeight,
            }
        ;

        case SORT_BY_NAME:
            const sortedByName = action.payload === 'asc' ? 
            state.dogs.sort(function (a, b) { 
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
                return 0
            }) :
            state.dogs.sort(function (a, b) { 
                if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
                return 0;
            })
            return {
                ...state,
                dogs: sortedByName
            }
        ;     

        default: return state;
    }
};

export default rootReducer;