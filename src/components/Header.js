import React from 'react';
import PropTypes from 'prop-types';
import { FaCog, FaSearch, FaChevronLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { closeDetails } from '../redux/details/details';

const Header = (props) => {
  const dispatch = useDispatch();
  const detailsOpen = useSelector((state) => state.details);
  const { theme } = props;
  const { hex } = theme;
  const style = {
    backgroundColor: hex,
  };

  const handleClick = () => {
    dispatch(closeDetails());
  };

  return (
    <header className="w-full flex fixed top-0 z-10 shadow-md items-center justify-between px-6 py-4" style={style}>
      {!detailsOpen && (
        <>
          <h1 className="text-3xl text-white font-bold">
            <span className="text-black">Cultur</span>
            escape
          </h1>
          <section className="flex items-center text-2xl">
            <FaSearch />
            <FaCog className="ml-3" />
          </section>
        </>
      )}
      {detailsOpen && <NavLink onClick={handleClick}><FaChevronLeft /></NavLink>}
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
};

export default Header;
