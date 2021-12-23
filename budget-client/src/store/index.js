import Vue from "vue";
import Vuex from "vuex";
import axios from "../helpers/connect";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transactions: [],
    balance: 0,
  },
  mutations: {
    setTransactions(state, transactions) {
      state.transactions = transactions;
    },
    setBalance(state, balance) {
      state.balance = balance;
    }
  },
  actions: {
    getTranstactions(context) {
      axios({
        method: "GET",
        url: "/",
      })
        .then(({ data }) => {
          context.commit("setTransactions", data);
        })
        .catch((error) => {
          console.log(error);
        })
    },
    getBalance(context) {
      axios({
        method: "GET",
        url: "/balance",
      })
        .then(({ data }) => {
          context.commit("setBalance", data);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  },
  modules: {},
});
