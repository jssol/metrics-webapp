import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div className="w-screen h-screen overflow-x-hidden flex flex-col">
      <Header />
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
