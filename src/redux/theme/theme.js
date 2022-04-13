const THEME_CHANGED = 'app/theme/THEME_CHANGED';

const changeTheme = (theme) => ({ type: THEME_CHANGED, payload: theme });

const reducer = (state = '#4369b2', action) => {
  const { type, payload } = action;

  switch (type) {
    case THEME_CHANGED:
      return payload;
    default:
      return state;
  }
};

export { changeTheme };
export default reducer;
