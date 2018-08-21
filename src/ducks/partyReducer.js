import axios from 'axios';

const INITIAL_STATE = {
    parties: []
}

const GET_ALL_PARTIES = "GET_ALL_PARTIES";

export function getAllParties(userID) {
    let parties = axios.get(`/api/party/${userID}`).then((result) => {
        return result.data;
    })

    return {
        type: GET_ALL_PARTIES,
        payload: parties
    }
}

export default function partyReducer(state=INITIAL_STATE, action){
    switch(action.type) {

        case GET_ALL_PARTIES + "_PENDING":
            return "Loading";
        case GET_ALL_PARTIES + "_FULFILLED":
            return Object.assign({}, state, {parties: action.payload})

        default: 
            return state;
    }
}