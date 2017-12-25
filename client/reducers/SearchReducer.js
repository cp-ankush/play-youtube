/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" is set so that we don't throw an error when app first boots up
export default function (state = {request: false, data: "", nextPageToken:""},
  action) {
    switch (action.type) {
      case 'SEARCH_REQUEST':
        return Object.assign({}, state, {request: true});
        break;
      case "SEARCH":
        console.log("search", action);
        return Object.assign({}, state, {request: false,
          data: action.payLoad.items,
          nextPageToken: action.payLoad.nextPageToken});
        break;
      case "NEXT_PAGE":
        console.log("state:", state);
        return Object.assign({}, state, {
          data: state.data.concat(action.payLoad.items),
          nextPageToken: action.payLoad.nextPageToken
        });
        break;
      default:
        return state;
        break;
    }
    return state;
}
