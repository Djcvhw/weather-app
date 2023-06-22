import { weatherApi } from './api';
import Config from "../config";
import store from '../store';

const params = { key: Config.authToken };

const getCurrentWeather = async (request) => {
  const state = store.getState();

  try {
    const response = await weatherApi.get('current.json', { params: {...params, q: request, aqi: 'no' } });

    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

const searchLocation = async (request) => {
  const state = store.getState();

  try {
    const response = await weatherApi.get('search.json', { params: { ...params, q: request } });

return response.data;
  } catch (e) {
    return e.response.data;
  }
};



export default {
  getCurrentWeather,
  searchLocation,
};
