import Vue from "vue";
import Vuex from "vuex";
import common from "./modules/index";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {},
  modules: {
    common
  }
});
