import { APPLY_JOB_FAILED, APPLY_JOB_LOADING, APPLY_JOB_SUCCESS, GET_JOB_FAILED, GET_JOB_LOADING, GET_JOB_SUCCESS } from './actionTypes';

const initState = {
    jobs: [], loading: false, error: false, applied: []
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_JOB_LOADING:
            return {
                ...state, loading: true
            }
        case GET_JOB_FAILED:
            return {
                ...state, loading: false, error: true
            }
        case GET_JOB_SUCCESS:
            return {
                ...state, jobs: payload, loading: false
            }
        case APPLY_JOB_LOADING:
            return {
                ...state, loading: true
            }
        case APPLY_JOB_FAILED:
            return {
                ...state, loading: false, error: true
            }
        case APPLY_JOB_SUCCESS:
            return {
                ...state, applied: [...state.applied, payload], loading: false
            }
        default:
            return state;
    }
}