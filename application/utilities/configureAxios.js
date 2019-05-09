import axios from 'axios';

import env from '@root/env';
import handleError from './handleError';

const configureAxios = () => {
  const axiosConfig = {
    baseURL: env.API_URL,
    timeout: 8000,
  };

  const axiosInstance = axios.create(axiosConfig);

  /**
   * log outs the request object
   */
  axiosInstance.interceptors.request.use(request => request);

  /**
   * intercepts the response for axios
   * and handle error
   */
  /**
   * intercepts the response for axios
   */
  axiosInstance.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      const message = handleError(error);
      return Promise.reject({ message });
    }
  );

  return axiosInstance;
};

const api = configureAxios();

export default api;
