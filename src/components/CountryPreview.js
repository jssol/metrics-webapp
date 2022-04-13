import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import randomNumber from '../logic/randomNumber';
import '../sass/CountryPreview.scss';

const CountryPreview = (props) => {
  const { hsl, country } = props;
  const { name: { common }, capital, cca2 } = country;

  const shade = `${hsl + randomNumber(30, 60)}%)`;
  const bgImage = `url("../src/data/countries/${cca2.toLowerCase()}/vector.svg`;

  const style = {
    backgroundColor: shade,
    backgroundImage: bgImage,
  };

  return (
    <NavLink to={`/details/${common.toLowerCase()}`} className="h-full w-full flex flex-col items-end justify-between text-2xl lg:text-xl text-white p-4 aspect-square CountryPreview" style={style}>
      <FaRegArrowAltCircleRight />
      <section className="flex flex-col items-end text-right">
        <h2 className="font-black">
          {common}
        </h2>
        <p className="text-gray-300 text-xl text-right">
          {capital}
        </p>
      </section>
    </NavLink>
  );
};

CountryPreview.propTypes = {
  hsl: PropTypes.string.isRequired,
  country: PropTypes.instanceOf(Object).isRequired,
};

export default CountryPreview;
