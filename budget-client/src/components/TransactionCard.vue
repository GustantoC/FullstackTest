<template>
  <div class="card">
    <h4>
      <b>{{ transaction.createdAt }}</b>
    </h4>
    <p>{{ transaction.description }}</p>
    <p>{{ transaction.amount }}</p>
  </div>
</template>

<script>
export default {
  name: "TransactionCard",
  props: ["transaction"],
};
</script>

<style>
.card {
  margin: 0 auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>