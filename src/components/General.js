import React from 'react';
import { useParams } from 'react-router-dom';

const General = () => {
  const params = useParams();
  const { country } = params;

  return (
    <main>
      General
      {country}
    </main>
  );
};

export default General;
