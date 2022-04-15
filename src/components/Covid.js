import React from 'react';
import { useParams } from 'react-router-dom';

const Covid = () => {
  const params = useParams();
  const { country } = params;

  return (
    <main>
      Covid
      {country}
    </main>
  );
};

export default Covid;
