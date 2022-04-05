import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from "vue-axios";
import 'regenerator-runtime/runtime'

Vue.use(Vuex, VueAxios ,axios);

export default new Vuex.Store({
  state: {
    performanceData: null,
  },
  mutations: {
    setPerformanceData: (state, performanceData) => (state.performanceData = performanceData),
  },
  actions: {
    async getPerformanceData({ commit }) {
      await axios
        .get('https://fe-task.getsandbox.com/performance', {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          // console.log(response.data);
          commit('setPerformanceData', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
