import Vue from "vue";
import Vuex from "vuex";
import axios from "../helpers/connect";
import swal from "sweetalert2";

const Toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
})
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transactions: [],
    balance: 0,
    loadingStatus: true,
  },
  mutations: {
    setTransactions(state, transactions) {
      state.transactions = transactions;
    },
    setBalance(state, balance) {
      state.balance = balance;
    },
    setLoadingStatus(state, loadingStatus) {
      state.loadingStatus = loadingStatus;
    }
  },
  actions: {
    getTranstactions(context) {
      context.commit("setLoadingStatus", true);
      axios({
        method: "GET",
        url: "/",
      })
        .then(({ data }) => {
          context.commit("setTransactions", data);
          return axios({
            method: "GET",
            url: "/balance",
          })
        })
        .then(({ data }) => {
          context.commit("setBalance", data.balance);
          context.commit("setLoadingStatus", false);
        })
        .catch((error) => {
          console.log(error);
        })
    },
    addTransaction(_, transaction) {
      axios({
        method: "POST",
        url: "/",
        data: transaction,
      })
        .then(() => {
          // run getTransactions
          return this.dispatch("getTranstactions");
        })
        .then(() => {
          Toast.fire({
            icon: 'success',
            title: 'Successfully added transaction'
          })
        })
        .catch(({ response }) => {
          if (response) {
            let { data } = response;
            Toast.fire({
              icon: 'error',
              title: 'Error!',
              text: data.message
            })
          }
        })
    }
  },
  modules: {},
});
