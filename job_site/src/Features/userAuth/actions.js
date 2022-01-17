import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR } from './actionTypes';

export const loginLoading = () => {
    return {
        type: LOGIN_LOADING,
    }
}

export const loginError = (err) => {
    return {
        type: LOGIN_ERROR,
        payload: err
    }
}

export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}
