import { DateTime } from 'luxon';

const COVID_DATA_FETCHED = 'app/covid/COVID_DATA_FETCHED';

const fetchCovidData = (payload) => ({ type: COVID_DATA_FETCHED, payload });

const reducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case COVID_DATA_FETCHED:
      return {
        ...payload,
      };
    default:
      return state;
  }
};

const getCovidData = (name) => async (dispatch) => {
  const today = DateTime.now().toISODate();
  let formattedName = '';
  switch (name) {
    case 'united states':
      formattedName = 'us';
      break;
    case 'timor-leste':
      formattedName = 'timor-leste';
      break;
    case 'guinea-bissau':
      formattedName = 'guinea-bissau';
      break;
    case 'south korea':
      formattedName = 'korea,_south';
      break;
    case 'dr congo':
      formattedName = 'congo_(kinshasa)';
      break;
    case 'republic of the congo':
      formattedName = 'congo_(brazzaville)';
      break;
    default:
      formattedName = name.replace(/\s/gi, '_');
  }

  await fetch(`https://api.covid19tracking.narrativa.com/api/${today}/country/${formattedName}`)
    .then((data) => data.json())
    .then((data) => {
      let unFormattedName = '';
      switch (formattedName) {
        case 'us':
          unFormattedName = 'US';
          break;
        case 'timor-leste':
          unFormattedName = 'Timor-Leste';
          break;
        case 'guinea-bissau':
          unFormattedName = 'Guinea-Bissau';
          break;
        case 'korea,_south':
          unFormattedName = 'Korea, South';
          break;
        case 'congo_(kinshasa)':
          unFormattedName = 'Congo (Kinshasa)';
          break;
        case 'congo_(brazzaville)':
          unFormattedName = 'Congo (Brazzaville)';
          break;
        default:
          unFormattedName = formattedName.replace('_', ' ');
      }

      const {
        dates: {
          [`${today}`]: {
            countries: {
              [`${unFormattedName}`]: {
                today_confirmed: todayConfirmed,
                today_deaths: todayDeaths,
                today_new_confirmed: todayNewConfirmed,
                today_new_deaths: todayNewDeaths,
                today_new_open_cases: todayNewOpenCases,
                today_new_recovered: todayNewRecovered,
                today_open_cases: todayOpenCases,
                today_recovered: todayRecovered,
                yesterday_confirmed: yesterdayConfirmed,
                yesterday_deaths: yesterdayDeaths,
                yesterday_open_cases: yesterdayOpenCases,
                yesterday_recovered: yesterdayRecovered,
              },
            },
          },
        },
        updated_at: updatedAt,
      } = data;

      const {
        dates: {
          [`${today}`]: {
            countries,
          },
        },
      } = data;

      const isObjectEmpty = (obj) => Object.keys(obj).length === 0;
      isObjectEmpty(countries);

      const formattedData = {
        todayConfirmed,
        todayDeaths,
        todayNewConfirmed,
        todayNewDeaths,
        todayNewOpenCases,
        todayNewRecovered,
        todayOpenCases,
        todayRecovered,
        yesterdayConfirmed,
        yesterdayDeaths,
        yesterdayOpenCases,
        yesterdayRecovered,
        updatedAt,
      };

      dispatch(fetchCovidData(formattedData));
    });
};

export { getCovidData };
export default reducer;
