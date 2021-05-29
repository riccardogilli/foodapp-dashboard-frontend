import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    recipes: [],
    appStatus: {},
  },
  mutations: {
    setUsers: (state, payload) => {
      state.users = payload;
    },
    setRecipes: (state, payload) => {
      state.recipes = payload;
    },
    setAppStatus: (state, payload) => {
      state.appStatus = payload;
    },
  },
  actions: {
    fetchUsers: (context) => {
      axios.get(process.env.VUE_APP_RESTENDPOINT + "users").then((res) => {
        context.commit("setUsers", res.data);
      });
    },
    fetchRecipes: (context) => {
      axios.get(process.env.VUE_APP_RESTENDPOINT + "recipes").then((res) => {
        context.commit("setRecipes", res.data);
      });
    },
    fetchAppStatus: (context) => {
      axios.get(process.env.VUE_APP_RESTENDPOINT + "appstatus").then((res) => {
        context.commit("setAppStatus", res.data);
      });
    },
    updateApp: (context, payload) => {
      axios
        .post(process.env.VUE_APP_RESTENDPOINT + "appstatus", payload)
        .then(context.dispatch("fetchAppStatus"));
    },
  },
  modules: {},
});
