import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { searchCountry } from '../redux/search/search';

const Form = () => {
  const [country, setCountry] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCountry(country));
    setCountry('');
  };

  return (
      <form className="w-1/3 flex items-center relative" onSubmit={handleSubmit}>
        <input className="w-full rounded-lg text-slate-600 transition-all outline-blue-100 focus:outline-blue-300" type="search" name="country" onChange={handleChange} placeholder="Search country by name" title="Enter a country name or iso code" value={country} />
        <button className="flex items-center justify-center rounded-full" type="submit">
          <FaSearch />
        </button>
      </form>
  );
};

export default Form;
