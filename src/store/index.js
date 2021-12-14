import Vue from "vue";
import Vuex from "vuex";
import { TOKEN, APPID } from "./utils/localStorageKey";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    token: localStorage.getItem(TOKEN) || "",
    appID: "",
  },

  getters: {
    getToken: () => {
      return localStorage.getItem(TOKEN);
    },
  },

  mutations: {
    setToken: (state, payload) => {
      state.token = payload;
      localStorage.setItem(TOKEN, payload);
    },
    setAppID: (state, payload) => {
      state.appID = payload;
      localStorage.setItem(APPID, payload);
    },
  },

  actions: {
    setTokenAction: (context, payload) => {
      context.commit("setToken", payload);
    },
    setAppIDAction: (context, payload) => {
      context.commit("setAppID", payload);
    },
  },
});