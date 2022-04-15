import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getCovidData } from '../redux/covid/covid';

const Covid = ({ countryName }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCovidData(countryName));
  }, []);
  const covidData = useSelector((state) => state.covid);

  const { todayConfirmed } = covidData;

  return (
    <main>
      Covid
      {countryName}
      {todayConfirmed}
    </main>
  );
};

Covid.propTypes = {
  countryName: PropTypes.string.isRequired,
};

export default Covid;
