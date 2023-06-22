import api from '../../api';

const initialState = {
  currentWeather: null,
  locations: [],
  loadingLocations: false,
  loadingCurrentWeather: false,
};

export const weather = {
  state: initialState,
  reducers: {
    reset:    () => initialState,
    setCurrentWeather: (state, payload) => ({
      ...state,
      currentWeather: payload,
    }),
    setLocations: (state, payload) => ({
      ...state,
      locations: payload,
    }),
    setLoadingLocations: (state, payload) => ({
      ...state,
      loadingLocations: payload,
    }),
    setLoadingCurrentWeather: (state, payload) => ({
      ...state,
      loadingCurrentWeather: payload,
    })
  },
  effects: (dispatch) => ({
    async searchLocations(payload) {
      await dispatch.weather.setLoadingLocations(true);
      const locations = await api.weather.searchLocation(payload);
      await dispatch.weather.setLocations(locations);
      await dispatch.weather.setLoadingLocations(false);
    },
    async getCurrentWeather(payload) {
      await dispatch.weather.setLoadingCurrentWeather(true);
      const currentWeather = await api.weather.getCurrentWeather(payload);
      await dispatch.weather.setCurrentWeather(currentWeather);
      await dispatch.weather.setLoadingCurrentWeather(false);
    },
  }),
};
