import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import randomNumber from '../logic/randomNumber';
import '../sass/CountryPreview.scss';

const CountryPreview = (props) => {
  const { hsl, country } = props;
  const { name: { common }, capital, cca2 } = country;

  const shade = `${hsl + randomNumber(30, 60)}%)`;
  const bgImage = `url("../data/countries/${cca2.toLowerCase()}/vector.svg`;

  const style = {
    backgroundColor: shade,
    backgroundImage: bgImage,
  };

  return (
    <NavLink to={`/details/${common.toLowerCase()}`} className="h-full w-full text-center text-xl text-white p-2 aspect-square CountryPreview" style={style}>
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
