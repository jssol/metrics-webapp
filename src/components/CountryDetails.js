import React from 'react';
import PropTypes from 'prop-types';
import { useParams, NavLink, Outlet } from 'react-router-dom';
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
    <main className="h-full w-full relative flex flex-col items-center top-16 z-0 text-white" style={style}>
      <section className="w-full h-10">
        Country details
        {' '}
        {country}
      </section>
      <section>
        <NavLink to="general">General</NavLink>
        <NavLink to="covid">Covid</NavLink>
      </section>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

CountryDetails.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
};

export default CountryDetails;
