import axios from 'react';

const INITIAL_STATE ={
    achievements:[],
    classes: []
}

const GET_ALL_ACHIEV = "GET_ALL_ACHIEV";
const GET_ALL_CLASSES = "GET_ALL_CLASSES";

export function getAllAchievs(){
    let achievs = axios.get('/api/achievments').then((result) =>{
        return result.data;
    })

    return {
        type: GET_ALL_ACHIEV,
        payload: achievs
    }
}

export function getAllClasses(){
    let classes = axios.get('/api/classes').then((result) => {
        return result.data;
    })

    return {
        type: GET_ALL_CLASSES,
        payload: classes
    }
}

export default function dataReducer(state=INITIAL_STATE, action){
    switch(action.type) {

        case GET_ALL_ACHIEV + "_PENDING":
            return "Loading";
            
        case GET_ALL_ACHIEV + "_FULFILLED":
            return Object.assign({}, state, {achievements: action.payload});

        case GET_ALL_CLASSES + "_PENDING":
            return "Loading";

        case GET_ALL_CLASSES + "_FULFILLED":
            return Object.assign({}, state, {classes : action.payload})

        default:
            return state;
    }
}