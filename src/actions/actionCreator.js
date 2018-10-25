import {
  ADD_TOCART,
  REMOVE_FROMCART,
  SET_VISIBILITY_FILTER
} from "./actionsTypes";

export const addToCart = id => ({
  type: ADD_TOCART,
  id: id
});

export const removeFromCart = id => ({
  type: REMOVE_FROMCART,
  id: id
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
