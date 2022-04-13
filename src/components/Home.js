import React from 'react';
import PropTypes from 'prop-types';
import CountryPreview from './CountryPreview';

const Home = (props) => {
  const { theme, countries } = props;
  const { hsl } = theme;

  return (
    <main className="h-full w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
      {
        countries.map((country) => (
          <CountryPreview
            key={country.cca2.toLowerCase()}
            hsl={hsl}
            country={country}
          />
        ))
      }
    </main>
  );
};

Home.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
  countries: PropTypes.instanceOf(Array).isRequired,
};

export default Home;
