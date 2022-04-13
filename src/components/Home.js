import React from 'react';
import PropTypes from 'prop-types';

const Home = (props) => {
  const { theme } = props;

  const style = {
    backgroundColor: theme,
  };

  return (
    <main className="h-full w-full text-center text-3xl text-white" style={style}>
      Home
    </main>
  );
};

Home.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Home;
