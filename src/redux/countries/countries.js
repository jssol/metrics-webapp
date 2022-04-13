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
  await fetch('https://api.spacexdata.com/v3/countries')
    .then((data) => data.json())
    .then((data) => {
      const countries = [];
      data.forEach((country) => {
        countries.push({
          id: country.id,
          name: country.rocket_name,
          description: country.description,
          image: country.flickr_images[0],
          wikipedia: country.wikipedia,
        });
      });

      dispatch(fetchCountries(countries));
    });
};

export { getCountries };
export default reducer;
