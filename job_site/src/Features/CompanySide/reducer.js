import { ADD_JOB_FAILED, ADD_JOB_LOADING, ADD_JOB_SUCCESS } from './actionTypes';

const initState = {
    jobs:[], loading: false, error: false
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_JOB_LOADING:
            return {
                ...state, loading: true
            }
        case ADD_JOB_FAILED:
            return {
                ...state, loading: false, error: true
            }
        case ADD_JOB_SUCCESS:
            return {
                ...state, jobs:[...state.jobs, payload], loading: false
            }
        default:
            return state;
    }
}