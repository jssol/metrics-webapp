import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CountryDetails = (props) => {
  const [path, setPath] = useState('');
  useEffect(() => {
    const { country: { cca2 } } = props;
    import(`../data/countries/${cca2.toLowerCase()}/vector.svg`)
      .catch(() => import('../data/countries/cd/vector.svg'))
      .then(({ default: path }) => {
        setPath(path);
      });
  }, []);

  const { theme: { hex } } = props;

  const style = {
    backgroundColor: hex,
  };

  return (
    <main className="h-full w-full relative flex flex-col items-end justify-between text-2xl lg:text-xl text-white p-4 aspect-square" style={style}>
      <img src={path} alt={common} className="w-3/5 absolute top-4 left-4 z-0 opacity-30" />
      <section className="flex flex-col items-end text-right z-10">
        <h2 className="font-black">
          Congo DR
        </h2>
        <p className="text-gray-300 text-xl text-right">
          Kinshasa
        </p>
      </section>
    </main>
  );
};

CountryDetails.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
  country: PropTypes.instanceOf(Object).isRequired,
};

export default CountryDetails;