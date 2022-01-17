import {GET_JOB_LOADING, GET_JOB_FAILED, GET_JOB_SUCCESS, APPLY_JOB_LOADING, APPLY_JOB_FAILED, APPLY_JOB_SUCCESS } from './actionTypes';

export const getJobLoading = () => {
    return {
        type: GET_JOB_LOADING,
    }
}

export const getJobFailed = (err) => {
    return {
        type: GET_JOB_FAILED,
        payload: err
    }
}

export const getJobSuccess = (data) => {
    return {
        type: GET_JOB_SUCCESS,
        payload: data
    }
}


export const ApplyJobLoading = () => {
    return {
        type: APPLY_JOB_LOADING,
    }
}

export const ApplyJobFailed = (err) => {
    return {
        type: APPLY_JOB_FAILED,
        payload: err
    }
}

export const ApplyJobSuccess = (data) => {
    return {
        type: APPLY_JOB_SUCCESS,
        payload: data
    }
}