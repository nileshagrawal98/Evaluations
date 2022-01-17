import { APPLY_JOB_FAILED, APPLY_JOB_LOADING, APPLY_JOB_SUCCESS, GET_JOB_FAILED, GET_JOB_LOADING, GET_JOB_SUCCESS, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from './actionTypes';

const initState = {
    role: ''
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_LOADING:
            return {
                ...state, loading: true
            }
        case LOGIN_ERROR:
            return {
                ...state, loading: false, error: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state, role: payload, loading: false
            }
        default:
            return state;
    }
}