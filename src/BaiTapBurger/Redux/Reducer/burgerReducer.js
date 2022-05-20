let burgerState = {
  burger: { salad: 1, cheese: 1, beef: 1 },

  menu: { salad: 10, cheese: 15, beef: 25 },

  total: 50,
};

export const burgerReducer = (
  state = burgerState,
  { type, propsBurger, value }
) => {
  switch (type) {
    case "THAY_DOI_SO_LUONG": {
      if (value === -1 && state.burger[propsBurger] < 1) {
        return { ...state };
      }

      let burgerUpdate = { ...state.burger };

      burgerUpdate[propsBurger] += value;

      state.burger = burgerUpdate;
      state.total += value * state.menu[propsBurger];
      return { ...state };
    }

    default:
      return { ...state };
  }
};
