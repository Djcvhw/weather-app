import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import SearchField from './SearchField';
import WeatherView from './WeatherView';

const Weather = () => {

  return <Box>
    <SearchField />
    <WeatherView />
  </Box>
}

export default Weather;