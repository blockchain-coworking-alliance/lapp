import * as Action from './ActionTypes';

export const getAllItems = () => {
  return {
    type: Action.GET_ALL_ITEMS,
  };
};

export const getItem = (name) => {
  return {
    type: Action.GET_ITEM,
    payload: name,
  };
};

export const unSelectItem = () => {
  return {
    type: Action.UNSELECT_ITEM,
  };
};
