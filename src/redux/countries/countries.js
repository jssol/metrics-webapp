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
      const countries = data;
      dispatch(fetchCountries(countries));
    });
};

export { getCountries };
export default reducer;
