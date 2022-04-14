const COUNTRIES_FETCHED = 'app/countries/COUNTRIES_FETCHED';

const fetchCountries = (countries) => ({ type: COUNTRIES_FETCHED, payload: countries });

const reducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case COUNTRIES_FETCHED:
      return [...payload];
    default:
      return state;
  }
};

const getCountries = () => async (dispatch) => {
  await fetch('https://restcountries.com/v3.1/all')
    .then((data) => data.json())
    .then((data) => {
      const countries = [];
      data.forEach((country) => {
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
          latlng: coords,
          population,
          timezones,
          continents,
          flags: { svg: flag },
          coatOfArms: { svg: emblem },
          area,
        } = country;

        const formattedCountry = {
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
          coords,
          population,
          timezones,
          continents,
          flag,
          emblem,
          area,
        };

        countries.push(formattedCountry);
      });
      dispatch(fetchCountries(countries));
    });
};

export { getCountries };
export default reducer;
