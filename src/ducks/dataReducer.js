import axios from 'axios';

const INITIAL_STATE ={
    achievements:[],
    classes: [],
    classPerks: []
}

const GET_ALL_ACHIEV = "GET_ALL_ACHIEV";
const GET_ALL_CLASSES = "GET_ALL_CLASSES";
const GET_CLASS_PERKS = 'GET_CLASS_PERKS';

export function getClassPerks(classID) {
    let perks = axios.get(`/api/data/perks/${classID}`).then((result) => {
        return result.data
    })

    return {
        type: GET_CLASS_PERKS,
        payload: perks
    }
}

export function getAllAchievs(){
    let achievs = axios.get('/api/data/achievments').then((result) =>{
        return result.data;
    })

    return {
        type: GET_ALL_ACHIEV,
        payload: achievs
    }
}

export function getAllClasses(){
    let classes = axios.get('/api/data/classes').then((result) => {
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
            return Object.assign({}, state, {classes : action.payload});

        case GET_CLASS_PERKS + "_PENDING":
            return "Loading";
        
        case GET_CLASS_PERKS + "_FULFILLED":
            return Object.assign({}, state, {classPerks : action.payload});

        default:
            return state;
    }
}