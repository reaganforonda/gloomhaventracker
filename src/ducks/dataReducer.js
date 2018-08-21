import axios from 'react';

const INITIAL_STATE ={
    achievements:[]
}

const GET_ALL_ACHIEV = "GET_ALL_ACHIEV";

export function getAllAchievs(){
    let achievs = axios.get('/api/achievments').then((result) =>{
        return result.data;
    })

    return {
        type: GET_ALL_ACHIEV,
        payload: achievs
    }
}

export default function dataReducer(state=INITIAL_STATE, action){
    switch(action.type) {

        case GET_ALL_ACHIEV + "_PENDING":
            return "Loading";
            
        case GET_ALL_ACHIEV + "_FULFILLED":
            return Object.assign({}, state, {achievements: action.payload});

        default:
            return state;
    }
}