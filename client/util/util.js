import axios from "axios";

const api = axios.create({});

const Util = {
  accessToken(code) {
    const apiUrl = "https://www.googleapis.com/oauth2/v4/token?" +
    `code=${code}&` +
    "client_id=378063054676-cqr4tcan9rcplgj6qoi46604movd6ns8.apps.googleusercontent.com&" +
    "client_secret=v72fY3Ic1OYHPk25bFxVu97x&" +
    "redirect_uri=http://localhost:3000/&grant_type=authorization_code";
    return api.post(apiUrl);
  },
  searchYt(value, filters) {
    let apiUrl = "https://www.googleapis.com/youtube/v3/search?" +
    `access_token=${localStorage.access_token}&` +
    `part=snippet&q=${value}&order=viewCount`;
    apiUrl += filters && filters !== "both"? `&type=${filters}` : "";
    return api.get(apiUrl);
  },
  nextPageSearch(pageToken, value, filters) {
    let apiUrl = "https://www.googleapis.com/youtube/v3/search?" +
    `pageToken=${pageToken}&` +
    `access_token=${localStorage.access_token}&` +
    `part=snippet&q=${value}&order=viewCount`;
    apiUrl += filters && filters !== "both"? `&type=${filters}` : "";
    return api.get(apiUrl);
  }
};


export default Util;
