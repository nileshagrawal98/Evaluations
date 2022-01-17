import { ADD_JOB_FAILED, ADD_JOB_LOADING, ADD_JOB_SUCCESS } from './actionTypes';

export const addJobLoading = () => {
    return {
        type: ADD_JOB_LOADING,
    }
}

export const addJobFailed = (err) => {
    return {
        type: ADD_JOB_FAILED,
        payload: err
    }
}

export const addJobSuccess = (data) => {
    return {
        type: ADD_JOB_SUCCESS,
        payload: data
    }
}