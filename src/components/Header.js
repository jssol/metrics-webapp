import React from 'react';
import PropTypes from 'prop-types';
import { FaCog, FaSearch } from 'react-icons/fa';

const Header = (props) => {
  const { theme } = props;
  const { hex } = theme;

  const style = {
    backgroundColor: hex,
  };

  return (
    <header className="w-full flex items-center justify-between px-6 py-4" style={style}>
      <h1 className="text-3xl text-white font-bold">
        <span className="text-black">Cultur</span>
        escape
      </h1>
      <section className="flex items-center text-2xl">
        <FaSearch />
        <FaCog className="ml-3" />
      </section>
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
};

export default Header;
