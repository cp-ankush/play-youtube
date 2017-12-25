import Util from "../util/util.js";

export const connectYt = () => (dispatch) => {
  dispatch({
      type: 'CONNECT'
  });
};

export const getAccessToken = (code) => (dispatch) => {
  dispatch({
    type: "ACCESS_TOKEN_REQUEST"
  });
  Util.accessToken(code).then((response) => {
    dispatch({
      type: "ACCESS_TOKEN_RECEIVED",
      payLoad: response.data.access_token
    })
  }, (err) => {
    console.log("Error while fetching access_token");
  });
};
