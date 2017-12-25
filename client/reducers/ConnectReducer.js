

/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" is set so that we don't throw an error when app first boots up

export default function (state = false, action) {
    switch (action.type) {
        case 'CONNECT':
          const redirctUrl = "https://accounts.google.com/o/oauth2/v2/auth?" +
            "scope=https://www.googleapis.com/auth/youtube.force-ssl&" +
            "response_type=code&" +
            "redirect_uri=http://localhost:3000/&" +
            "client_id=378063054676-cqr4tcan9rcplgj6qoi46604movd6ns8.apps.googleusercontent.com"
          window.location.assign(redirctUrl);
          break;
        case 'ACCESS_TOKEN_REQUEST':
          return true;
          break;
        case 'ACCESS_TOKEN_RECEIVED':
          window.localStorage.clear();
          localStorage.setItem("access_token", action.payLoad);
          return false;
          break;
        default:
          return state;
    }
    return state;
}
