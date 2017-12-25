import Util from "../util/util.js";

export const searchYt = (value, filters) => (dispatch) => {
  dispatch({
    type: "SEARCH_REQUEST"
  });
  Util.searchYt(value, filters).then((response) => {
    dispatch({
        type: 'SEARCH',
        payLoad: response.data
    });
  }, (err) => {
    if(err.status === 401) {
      window.localStorage.clear();
      dispatch({
        type: "CONNECT"
      });
    }
    console.log("Error while fetching search results", err);
  });
};

export const nextPageSearch = (pageToken, value, filters) => (dispatch) => {
  if(!pageToken) return;
  Util.nextPageSearch(pageToken, value, filters).then((response) => {
    dispatch({
        type: 'NEXT_PAGE',
        payLoad: response.data
    });
  }, (err) => {
    if(err.status === 401) {
      window.localStorage.clear();
      dispatch({
        type: "CONNECT"
      });
    }
    console.log("Error while fetching search results", err);
  });
};
