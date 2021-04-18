import * as filterActionTypes from './filterActionTypes';

export const changeFilter = value => {
  // console.log(value);
  return {
    type: filterActionTypes.FILTER_CONTACT,
    payload: value,
  };
};
