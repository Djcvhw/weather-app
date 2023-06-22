import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

const SearchField = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const locations = useSelector(({ weather }) => weather.locations);
  const loading = useSelector(({ weather }) => weather.loadingLocations);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (inputValue.length > 1 && !loading) {
        await dispatch.weather.searchLocations(inputValue);
      }
    })();

  }, [inputValue]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  useEffect(() => {
    setOptions(locations);
  }, [locations]);

  return <Autocomplete
          id="search-city"
          sx={{ width: 300 }}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(option, value) => option.name === value.name}
          getOptionLabel={(option) => `${option.name} (${option.country})`}
          options={options}
          loading={loading}
          onChange={async (event, newValue) => {
            setOptions(newValue ? [newValue, ...options] : options);
            setValue(newValue);
            if (newValue) {
              dispatch.weather.getCurrentWeather(newValue.name);
            }
          }}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          value={value}
          renderInput={(params) => (<TextField
              {...params}
              label="Search city (at least 3 characters)"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
}

export default SearchField;