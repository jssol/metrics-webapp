import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import randomNumber from '../logic/randomNumber';

const CountryPreview = (props) => {
  const { hsl, country } = props;
  const { name: { common }, capital, cca2: iso } = country;

  const shade = `${hsl + randomNumber(30, 60)}%)`;
  const bgImage = `url("../data/countries/${iso.toLowerCase()}/vector.svg`;

  const style = {
    backgroundColor: shade,
    backgroundImage: bgImage,
  };

  return (
    <NavLink to={`/details/${common.toLowerCase()}`} className="h-full w-full text-center text-3xl text-white" style={style}>
      <h2>
        {common}
      </h2>
      <p>
        {capital}
      </p>
    </NavLink>
  );
};

CountryPreview.propTypes = {
  hsl: PropTypes.string.isRequired,
  country: PropTypes.instanceOf(Object).isRequired,
};

export default CountryPreview;
