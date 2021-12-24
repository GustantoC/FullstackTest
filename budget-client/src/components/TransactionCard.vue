<template>
  <div class="card">
    <div class="card-content">
      <b>{{ transactionData.description }}</b>
      <p v-if="transactionData.income" style="color: green">
        {{ amountFormatted }}
      </p>
      <p v-else style="color: red">{{ amountFormatted }}</p>
      <p>{{ createdAtFormatted }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransactionCard",
  props: ["transaction"],
  computed: {
    transactionData(){
      return this.transaction;
    },
    createdAtFormatted() {
      let date = new Date(this.transactionData.createdAt);
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    amountFormatted() {
      return this.transactionData.amount.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
    },
  },
};
</script>

<style>
.card {
  margin: 4px auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 60%;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.5);
}
.card-content{
  padding: 10px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.7);
}
</style>