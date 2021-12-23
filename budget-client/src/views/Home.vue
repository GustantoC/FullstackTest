<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TransactionCard
      v-for="transaction in transactions"
      :key="transaction.id"
      :transaction="transaction"
    ></TransactionCard>
  </div>
</template>

<script>
import TransactionCard from "../components/TransactionCard.vue";

export default {
  name: "Home",
  components: {
    TransactionCard,
  },
  computed: {
    transactions() {
      return this.$store.state.transactions;
    },
    balance() {
      return this.$store.state.balance;
    },
  },
  methods: {
    fetchTransactions() {
      this.$store.dispatch("getTranstactions");
    },
    fetchBalance() {
      this.$store.dispatch("getBalance");
    },
  },
  created() {
    this.fetchTransactions();
    this.fetchBalance();
  },
};
</script>
