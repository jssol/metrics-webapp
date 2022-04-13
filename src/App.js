import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header';
import Home from './components/Home';
import { getCountries } from './redux/countries/countries';

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div className="w-screen h-screen overflow-x-hidden flex flex-col text-white">
      <Header theme={theme} />
      <Routes>
        <Route
          exact
          path="/"
          element={(<Home theme={theme} />)}
        />
      </Routes>
    </div>
  );
};

export default App;
