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
      console.log("getting Transtactions...");
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
          context.commit("setBalance", data.balance);
        })
        .catch((error) => {
          console.log(error);
        })
    },
    addTransaction(_, transaction) {
      console.log(transaction);
      axios({
        method: "POST",
        url: "/",
        data: transaction,
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
