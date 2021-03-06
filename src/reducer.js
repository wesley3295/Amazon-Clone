export const initialState = {
  basket: [],
  value: 0,
  user: null,
};

const reducer = (state, action) => {
  // console.log("action:", action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
        value: state.value + parseFloat(action.item.price),
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket:[]
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id:${action.id}) as it's not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
        value: state.value - parseFloat(action.price),
      };
      case "SET_USER":
          return{
            ...state,
            user:action.user
          };
    default:
      return state;
  }
};
export default reducer;
