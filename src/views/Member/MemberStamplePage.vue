<template>
  <div>
    sdf
    <ul v-for="item in memberStample.data" :key="item.id">
      <li>{{ item.member_id }}</li>
      <li>{{ item.status_claim }}</li>
      <li>{{ item.quantity_purchased }}</li>
      <li>{{ item.total_price }}</li>
      <li>{{ item.purchase_date }}</li>
      <li>{{ item.status }}</li>
      <li>{{ memberStample.status_message }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      fetchMemberStample() {
        // Panggil aksi fetchData dari store untuk mengambil data
        this.$store.dispatch('fetchMemberStample');
      },
    },
    computed: {
      memberStample() {
        return this.$store.state.memberStample;
      },
    },
    created() {
      this.fetchMemberStample();
    },
    mounted() {},
  }
</script>

<style></style>