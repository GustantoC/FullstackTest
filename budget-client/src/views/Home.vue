<template>
  <div class="home">
    <h1 id="header">Expense-tracker</h1>
    <div id="container">
      <div v-if="loadingStatus">
        <Loading />
      </div>
      <div v-else>
        <b>Your Balance is:</b>
        <hr />
        <span class="balance">{{ balance }}</span>
        <hr />
        <button type="button" class="btn" @click="showModal">
          ➕ New Transaction
        </button>
        <NewTransaction
          v-show="isModalVisible"
          @close="closeModal"
          @closeAdd="closeModalWithAdd"
        />
        <div id="transactions">
          <TransactionCard
            v-for="transaction in transactions"
            :key="transaction.id"
            :transaction="transaction"
          ></TransactionCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TransactionCard from "../components/TransactionCard.vue";
import Loading from "../components/Loading.vue";
import NewTransaction from "../components/NewTransaction.vue";

export default {
  name: "Home",
  components: {
    TransactionCard,
    Loading,
    NewTransaction,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  computed: {
    balance() {
      return this.$store.state.balance.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
    },
    loadingStatus() {
      return this.$store.state.loadingStatus;
    },
    transactions() {
      return this.$store.state.transactions;
    },
  },
  methods: {
    fetchTransactions() {
      this.$store.dispatch("getTranstactions");
    },
    fetchBalance() {
      this.$store.dispatch("getBalance");
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    closeModalWithAdd() {
      this.fetchTransactions();
      this.fetchBalance();
      this.isModalVisible = false;
    },
  },
  mounted() {
    this.fetchTransactions();
    this.fetchBalance();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Exo+2&family=Permanent+Marker&display=swap");

.home {
  /* middle */
  background-image: url("../assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  border-radius: 20px;
  margin: 20px auto;
  width: 50vh;
  padding: 50px;
  background-color: #fff;
  justify-content: center;
  align-content: center;
  top: 0px;
  left: 50%;
  transform: translate(-50%);
  box-shadow: 10px 8px 0 0 rgba(0, 0, 0, 1);
}
#header {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1);
  transition: 0.2s;
  scroll-snap-align: start;
  background-color: #f0a045;
  padding: 10px;
  font-family: "Permanent Marker", cursive;
  font-weight: bold;
}
#header:hover {
  transform: translateY(-1rem);
}
.balance {
  font-size: 3vh;
  font-family: "Exo 2", sans-serif;
}
#transactions {
  margin-top: 50px;
  height: 50vh;
  overflow-y: scroll;
  justify-content: center;
  align-items: center;
}
#transactions::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
#transactions::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.8);
}
#transactions::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.btn {
  /* new tyle button for submit */
  background-color: #f0a045;
  color: #000;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  font-family: "Exo 2", sans-serif;
  transition: 0.2s;
}
.btn:hover {
  transform: translateY(-0.2rem);
}
</style>
