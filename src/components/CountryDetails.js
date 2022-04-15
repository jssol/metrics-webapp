import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import randomNumber from '../logic/randomNumber';

const CountryDetails = (props) => {
  const params = useParams();

  const { theme: { hsl } } = props;
  const { country } = params;

  const shade = `${hsl + randomNumber(45, 53)}%)`;
  const style = {
    backgroundColor: shade,
  };

  return (
    <main className="h-full w-full relative flex flex-col items-center top-16 z-0 text-white">
      <section className="w-full h-full" style={style}>
        Country details
        {' '}
        {country}
      </section>
    </main>
  );
};

CountryDetails.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
};

export default CountryDetails;
