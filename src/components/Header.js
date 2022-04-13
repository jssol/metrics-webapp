import React from 'react';
import PropTypes from 'prop-types';
import { FaCog, FaSearch } from 'react-icons/fa';

const Header = (props) => {
  const { theme } = props;

  const style = {
    backgroundColor: theme,
  };

  return (
    <header className="w-full flex items-center justify-between px-6 py-4" style={style}>
      <h1 className="text-3xl text-white font-bold">
        <span className="text-black">Cultur</span>
        escape
      </h1>
      <section>
        <FaSearch />
        <FaCog />
      </section>
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Header;
