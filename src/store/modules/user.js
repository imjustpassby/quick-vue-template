import Cookies from "js-cookie"
const user = {
  state: {
    cookie: window.sessionStorage.getItem('cookie')
  },
  mutations: {
    SET_COOKIE(state, cookie) {
      state.cookie = cookie;
      window.sessionStorage.setItem('cookie',  JSON.stringify(cookie));
    }
  },
  actions: {
  }
}

export default user
