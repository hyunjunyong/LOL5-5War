import axios from 'axios';

const API_ENDPOINT = {
  getTeam: 'http://suehig.synology.me:10500/lolteam',
};

export default class API {
  // constructor() {
  //   this.urlBase = process.env.VUE_APP_API_HOST;
  // }

  // Getter & Setter
  get urlBase() {
    return this._urlBase;
  }
  set urlBase(newValue) {
    this._urlBase = newValue;
  }

  get auth() {
    return this._auth;
  }
  set auth(newValue) {
    this._auth = newValue;
  }

  isEmpty(value) {
    return value == null || value.length === 0;
  }

  post(endpoint, body = null) {
    // return axios.post(this.urlBase + endpoint, body, { headers:headers } );
    return axios({
      method: 'post',
      url: endpoint,
      data: body,
      headers: {
        'Content-Type': 'application/json',
        // "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        // "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
      },
      mode: 'cors',
    });
  }

  get(endpoint, queries = null) {
    // return axios.get(this.urlBase + endpoint, { headers:headers } );
    return axios({
      method: 'get',
      url: endpoint,
      headers: {
        'Content-Type': 'application/json',
      },
      params: queries,
      mode: 'cors',
    });
  }

  delete(endpoint, body) {
    return axios({
      method: 'delete',
      url: endpoint,
      data: body,
      mode: 'cors',
    });
  }

  put(endpoint, body) {
    return axios({
      method: 'put',
      url: endpoint,
      data: body,
      mode: 'cors',
    });
  }

  getTeam(nick) {
    return this.post(API_ENDPOINT.getTeam, {
      nick: nick,
    });
  }
}
