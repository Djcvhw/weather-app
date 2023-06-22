import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const WeatherView = () => {
  const currentWeather = useSelector(({weather}) => weather.currentWeather);

  return currentWeather && <Card sx={{ minWidth: 275, marginTop: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {currentWeather.location.name}
        </Typography>
        <Typography variant="h6" component="div">
          {currentWeather.location.region}
        </Typography>
        <Typography variant="h6" component="div">
          {currentWeather.location.country}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Temperature:
          </Typography>
          <Typography variant="body2">
            {currentWeather.current.temp_c}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Feels like:
          </Typography>
          <Typography variant="body2">
          {currentWeather.current.feelslike_c}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Humidity:
          </Typography>
          <Typography variant="body2">
            {currentWeather.current.humidity}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Pressure:
          </Typography>
          <Typography variant="body2">
            {currentWeather.current.pressure_mb}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Wind:
          </Typography>
          <Typography variant="body2">
            {currentWeather.current.wind_kph}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Condition:
          </Typography>
          <Typography variant="body2">
            {currentWeather.current.condition.text}
          </Typography>
        </Box>
      </CardContent>
    </Card>;
}

export default WeatherView;