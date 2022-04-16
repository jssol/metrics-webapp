import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missions from './redux/missions/missions';
import rockets from './redux/rockets/rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import App from './App';

const rootReducer = combineReducers({
  missions,
  rockets,
});

const Store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Header component', () => {
  test('renders app title', () => {
    render(
      <Provider store={Store}>
        <App />
      </Provider>,
    );
    const appTitle = screen.getByText(/Culturescape/i);
    expect(appTitle).toBeInTheDocument();
  });
});
