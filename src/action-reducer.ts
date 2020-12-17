/**
 * @author Luke Brandon Farrell
 * @description Application reducer.
 */

/**
 * Initial data.
 */
const initialState = {
  type: null,
  payload: null,
  meta: null,
  error: false
};

/**
 * Calculates the application state.
 *
 * @param state
 * @param action
 * @return {*}
 */
export const ActionReducer = (state = initialState, action: any) => {
  return {
    ...state,
    ...action
  };
};
