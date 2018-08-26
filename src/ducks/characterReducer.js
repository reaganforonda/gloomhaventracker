import axios from 'axios';

const INITIAL_STATE = {
    character: '',
    allCharacters: []
}

const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
const LOAD_CHARACTER = "LOAD_CHARACTER";

export function getAllCharacters(userID) {
    let characters = axios.get(`/api/characters/${userID}`).then((result) => {
        return result.data;
    });

    return {
        type : GET_ALL_CHARACTERS,
        payload: characters
    }
};

export function loadSelectedCharacter(characterID) {
    let character = axios.get(`/api/character/:${characterID}`).then((result) => {
        return result.data;
    })

    return {
        type: LOAD_CHARACTER,
        payload: character
    }
}


export default function characterReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case GET_ALL_CHARACTERS + "_FULFILLED":
            return Object.assign({}, state, {allCharacters: action.payload});
        case GET_ALL_CHARACTERS + "_PENDING":
            return "Loading";
        
        case LOAD_CHARACTER + "_PENDING":
            return "Loading";

        case LOAD_CHARACTER + "_FULFILLED":
            return Object.assign({}, state, {character: action.payload})

        default:
            return state;
    }
}