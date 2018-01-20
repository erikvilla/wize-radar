/**
 * resolveEach - Returns handler based on a dictionary depending on action types
 * In case handlers are empty, it will return initial state
 *
 * @param  {object} initialState Initial state of reducer
 * @param  {object} handlers     Set of <actionType : handler> values
 * @example  resolveEach(initialState, { ADD: addToList, REMOVE: removeFromList});
 */
export default function resolveEach(initialState, handlers) {
  return function resolve(state = initialState, action) {
    return handlers[action.type] ? handlers[action.type](state, action) : state;
  };
}
