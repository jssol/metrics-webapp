import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import randomNumber from '../logic/randomNumber';
import '../sass/CountryPreview.scss';

const CountryPreview = (props) => {
  const { hsl, country } = props;
  const { name: { common }, capital, cca2 } = country;

  const getImage = (iso) => {
    let url;
    import(`../data/countries/${iso}/vector.svg`)
      .then(({ default: path }) => {
        url = path;
      });
    return url;
  };

  const shade = `${hsl + randomNumber(40, 60)}%)`;
  const map = getImage(cca2.toLowerCase());

  const style = {
    backgroundColor: shade,
  };

  return (
    <NavLink to={`/details/${common.toLowerCase()}`} className="h-full w-full overflow-hidden relative flex flex-col items-end justify-between text-2xl lg:text-xl text-white p-4 aspect-square CountryPreview" style={style}>
      <img src={map} alt={common} className="absolute top-0 left-0 z-0 opacity-75" />
      <FaRegArrowAltCircleRight className="z-10" />
      <section className="flex flex-col items-end text-right z-10">
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
