const COUNTRY_SELECTED = 'app/country/COUNTRY_SELECTED';

const selectCountry = (name) => ({ type: COUNTRY_SELECTED, payload: name });

const reducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case COUNTRY_SELECTED:
      return {
        ...payload,
      };
    default:
      return state;
  }
};

export { selectCountry };
export default reducer;
