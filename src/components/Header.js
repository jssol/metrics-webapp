import React from 'react';
import PropTypes from 'prop-types';
import { FaCog, FaSearch } from 'react-icons/fa';

const Header = (props) => {
  const { theme } = props;

  const style = {
    backgroundColor: theme,
  };

  return (
    <header className="w-full flex items-center justify-between px-4 py-2" style={style}>
      <h2 className="text-black">
        Cultur
        <span className="text-white">escape</span>
      </h2>
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
