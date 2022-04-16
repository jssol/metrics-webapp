import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import randomNumber from '../logic/randomNumber';
import General from './General';
import { getCountryData } from '../redux/country/country';

const CountryDetails = ({ theme, countries }) => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const { country } = params;
    countries.forEach((count) => {
      if (count.name.common.toLoweCase() === country.toLoweCase()) {
        dispatch(getCountryData(count.cca2.toLoweCase()));
      }
    });
  }, []);

  const { hsl } = theme;
  const { country: countryName } = params;

  const shade = `${hsl + randomNumber(45, 53)}%)`;
  const style = {
    backgroundColor: shade,
  };

  return (
    <main className="h-full w-full relative flex flex-col items-center top-16 z-0 text-white" style={style}>
      <section className="w-full h-10">
        {countryName.charAt(0).upperCase() + countryName.slice(1)}
        {' / '}
        Details
      </section>
      <General />
    </main>
  );
};

CountryDetails.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
  countries: PropTypes.instanceOf(Array).isRequired,
};

export default CountryDetails;
