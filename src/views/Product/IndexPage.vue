<template>
  <div>
    <h1>Member Purchasing Page</h1>
    <ul v-for="item in productData.data" :key="item.id">
      <li>{{ item.member_id }}</li>
      <li>{{ item.status_claim }}</li>
      <li>{{ item.quantity_purchased }}</li>
      <li>{{ item.total_price }}</li>
      <li>{{ item.purchase_date }}</li>
      <li>{{ item.status }}</li>
      <li>{{ productData.status_message }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      fetchProduct() {
        // Panggil aksi fetchData dari store untuk mengambil data
        this.$store.dispatch('fetchProduct');
      }, 
    },
    computed: {
      productData() {
        return this.$store.state.productData;
      }
    },
    created() {
      this.fetchProduct();
    },
    mounted() {},
  }
</script>

<style lang="scss">
</style>