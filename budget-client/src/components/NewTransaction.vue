<template>
  <div class="modal-backdrop">
    <div v-if="loadingStatus">
      <Loading />
    </div>
    <div v-else class="modal">
      <header class="modal-header">
        <slot name="header"> Create new transaction </slot>
        <button type="button" class="btn-close" @click="close">x</button>
      </header>

      <section class="modal-body">
        <div>
          <label for="description">Description: </label>
          <input type="text" v-model="description" />
        </div>
        <div>
          <label for="amount">Amount: </label><br />
          <input type="text" v-model="amount" @keypress="isNumber($event)" />
        </div>
        <label class="income">
          <span>This is an income</span
          ><input type="checkbox" v-model="isIncome" />
        </label>
      </section>

      <footer class="modal-footer">
        <button type="button" class="btn-submit" @click="add">Add</button>
      </footer>
    </div>
  </div>
</template>

<script>
import Loading from "../components/Loading.vue";
export default {
  name: "Modal",
  components: {
    Loading,
  },
  data() {
    return {
      description: "",
      amount: '',
      isIncome: false,
      loadingStatus: false,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    add() {
      this.loadingStatus = true;
      this.$store.dispatch("addTransaction", {
        description: this.description,
        amount: this.amount,
        income: this.isIncome,
      });
      this.description = "";
      this.amount = 0;
      this.isIncome = false;
      this.loadingStatus = false;
      this.$emit("closeAdd");
    },
    isNumber: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  width: 50vh;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #e79537;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  text-align: left;
  position: relative;
  padding: 20px 10px;
  margin: 5px 80px;
}

.modal-body > * {
  margin: 10px 0px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #e0b98c;
  background: transparent;
}
.btn-submit {
  background-color: #f0a045;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 30%;
}
input{
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #e0b98c;
}
.income{
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}
</style>