import Vue from "vue";
import Vuex from "vuex";
import todoApp from "./modules/todoApp";
import demoApp from "./modules/demoApp";

Vue.use(Vuex);
export const store = new Vuex.Store({
  modules: {
    todoApp: todoApp,
    demoApp,
  },
});
