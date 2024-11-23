import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://recruitment-test.flip.id',
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Encoding': 'identity',
  },
});

export const post = async (url: string, data?: any, headers: any = {}) => {
  try {
    const response = await instance({
      method: 'POST',
      url: url,
      data,
      headers: {...instance.defaults.headers, ...headers},
    });
    if (response?.status === 200) {
      return response.data;
    } else {
      throw response.data;
    }
  } catch (err) {
    throw String(err) || 'Terjadi kesalahan';
  }
};

export const get = async (url: string, params?: any, headers: any = {}) => {
  try {
    const response = await instance({
      method: 'GET',
      url: url,
      params,
      headers: {...instance.defaults.headers, ...headers},
    });
    if (response?.status === 200) {
      return response.data;
    }
  } catch (err) {
    // Handle Error Here
    throw String(err) || 'Terjadi kesalahan';
  }
};
