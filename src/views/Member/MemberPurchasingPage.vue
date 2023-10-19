<template>
  <div>
    <h1>Member Purchasing Page</h1>
    <ul v-for="item in memberPurchasing.data" :key="item.id">
      <li>{{ item.member_id }}</li>
      <li>{{ item.status_claim }}</li>
      <li>{{ item.quantity_purchased }}</li>
      <li>{{ item.total_price }}</li>
      <li>{{ item.purchase_date }}</li>
      <li>{{ item.status }}</li>
      <li>{{ memberPurchasing.status_message }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      fetchMemberPurchasing() {
        // Panggil aksi fetchData dari store untuk mengambil data
        this.$store.dispatch('fetchMemberPurchasing');
      }, 
    },
    computed: {
      memberPurchasing() {
        return this.$store.state.memberPurchasing;
      }
    },
    created() {
      this.fetchMemberPurchasing();
    },
    mounted() {},
  }
</script>

<style lang="scss">
</style>