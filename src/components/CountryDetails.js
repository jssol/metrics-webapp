import React  from 'react';
import PropTypes from 'prop-types';

const CountryDetails = (props) => {
  const { theme: { hex } } = props;

  const style = {
    backgroundColor: hex,
  };

  return (
    <main className="h-full w-full relative flex flex-col items-end justify-between text-2xl lg:text-xl text-white p-4 aspect-square" style={style}>
      CountryDetails
    </main>
  );
};

CountryDetails.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
};

export default CountryDetails;
