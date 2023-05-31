import { ADD_FAV , ORDER, REMOVE_FAV, FILTER } from "./actions/types.js";


const initialState = {
    myFavorites:[],
    allFavCharacters: [],
}

const rootReducer = (state = initialState , action) => {
    switch(action.type){
        case ADD_FAV:
            return {...state,
                myFavorites:[...state.allFavCharacters, action.payload],
                allFavCharacters:[...state.allFavCharacters, action.payload]
            }
        
        case REMOVE_FAV:
            return {...state,
                myFavorites: state.allFavCharacters.filter((fav)=>fav.id !== Number(action.payload)),
                allFavCharacters: state.allFavCharacters.filter((fav)=>fav.id !== Number(action.payload))
            }

        case FILTER:
            return {...state,
            myFavorites: action.payload === "All" ? state.allFavCharacters : state.allFavCharacters.filter(char => char.gender === action.payload)
            }

        case ORDER:
            return {...state,
            myFavorites: state.allFavCharacters.sort((a, b) => (action.payload === "A" ? a.id - b.id : b.id - a.id)),
            }

        default:
            return {...state};
    }
};

export default rootReducer;