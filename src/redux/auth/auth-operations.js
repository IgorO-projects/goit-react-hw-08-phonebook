import axios from "axios";
import { 
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    // logoutRequest,
    // logoutSuccess,
    // logoutError,
    // getCurrentUserRequest,
    // getCurrentUserSuccess,
    // getCurrentUserError,
} from './auth-actions.js';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     },
//     unset() {
//         axios.defaults.headers.common.Authorization = '';
//     }
// };

export const register = credentials => async dispatch => {
    dispatch(registerRequest());

    try {
        const response = await axios.post('/users/signup', credentials);
        dispatch(registerSuccess(response.data))
    } catch(error) {
        dispatch(registerError(error.message));
    }
}

export const logIn = credentials => async dispatch => {
    dispatch(loginRequest());

    try {
        const response = await axios.post('/users/login', credentials);
        dispatch(loginSuccess(response.data))
    } catch(error) {
        dispatch(loginError(error.message));
    }
}