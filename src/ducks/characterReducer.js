import axios from 'axios';

const INITIAL_STATE = {
    character: [],
    allCharacters: []
}

const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';

export function getAllCharacters(userID) {
    let characters = axios.get(`/api/characters/${userID}`).then((result) => {
        return result.data;
    });

    return {
        type : GET_ALL_CHARACTERS,
        payload: characters
    }
};


export default function characterReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case GET_ALL_CHARACTERS + "_FULFILLED":
            return Object.assign({}, state, {allCharacters: action.payload});
        case GET_ALL_CHARACTERS + "_PENDING":
            return "Loading";

        default:
            return state;
    }
}