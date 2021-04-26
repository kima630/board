import axios from 'axios';
import {LOGIN_USER} from './types';

export const loginUser = (dataToSubmit) => {
  const request = axios
      .post('/account/auth/token', dataToSubmit)
      .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
};
