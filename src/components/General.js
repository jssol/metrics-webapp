import React from 'react';
import { useSelector } from 'react-redux';

const General = () => {
  const country = useSelector((state) => state.country);

  const {
    name,
    cca2,
    cca3,
    independent,
    unMember,
    currencies,
    capital,
    region,
    subregion,
    languages,
    coordinates,
    landlocked,
    area,
    population,
    fifa,
    drivingSide,
    timezones,
    continents,
    flag,
    emblem,
    startOfWeek,
  } = country;

  return (
    <main className="w-11/12 flex flex-col py-4">
      <section className="flex items-center justify-center shadow">
        <img src={flag} alt={cca3} className="w-full aspect-square" />
        <img src={emblem} alt={cca3} className="w-full aspect-square" />
      </section>
      <section className="flex flex-col">
        <h3>General</h3>
        <p className="ml-3">
          Common name:
          {name.common}
        </p>
        <p className="ml-3">
          Official name:
          {name.official}
        </p>
        <p className="ml-3">
          Capital city:
          {capital}
        </p>
        <p className="ml-3">
          Continents:
          {continents}
        </p>
        <p className="ml-3">
          Currencies:
          {currencies}
        </p>
        <p className="ml-3">
          Languages:
          {languages}
        </p>
        <p className="ml-3">
          Population:
          {population}
        </p>
        <h3>Legal status</h3>
        <p className="ml-3">
          Independent:
          {independent}
        </p>
        <p className="ml-3">
          UN membership:
          {unMember}
        </p>
        <h3>Geography</h3>
        <p className="ml-3">
          Coordinates:
          {coordinates}
        </p>
        <p className="ml-3">
          Region:
          {region}
        </p>
        <p className="ml-3">
          Sub-region:
          {subregion}
        </p>
        <p className="ml-3">
          Landlocked:
          {landlocked}
        </p>
        <p className="ml-3">
          Area:
          {area}
        </p>
        <p className="ml-3">
          Timezones:
          {timezones}
        </p>
        <h3>ISO codes</h3>
        <p className="ml-3">
          CCA2:
          {cca2}
        </p>
        <p className="ml-3">
          CCA3:
          {cca3}
        </p>
        <h3>Other</h3>
        <p className="ml-3">
          Start of week:
          {startOfWeek}
        </p>
        <p className="ml-3">
          Fifa code:
          {fifa}
        </p>
        <p className="ml-3">
          Driving side:
          {drivingSide}
        </p>
      </section>
    </main>
  );
};

export default General;
