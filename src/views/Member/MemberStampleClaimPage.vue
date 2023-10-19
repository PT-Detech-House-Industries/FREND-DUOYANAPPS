<template>
  <div>
    <h1>Member Stample Claim Page</h1>
    <ul v-for="item in fetchMemberStampleClaim.data" :key="item.id">
        <li>{{ item.member_id }}</li>
        <li>{{ item.status_claim }}</li>
        <li>{{ item.quantity_purchased }}</li>
        <li>{{ item.total_price }}</li>
        <li>{{ item.purchase_date }}</li>
        <li>{{ item.status }}</li>
        <li>{{ fetchMemberStampleClaim.status_message }}</li>
      </ul>
  </div>
</template>

<script>
  export default {
    name: 'MemberStampleClaim',
    components: {},
    data() {},
    methods: {
      fetchMemberStampleClaim() {
        // Panggil aksi fetchData dari store untuk mengambil data
        this.$store.dispatch('fetchMemberStample');
      },
    },
    computed: {
      memberStampleClaim() {
        return this.$store.state.memberStampleClaim;
      },
    },
    created() {
      this.fetchMemberStampleClaim();
    },
    mounted() {},
  };
</script>

<style lang="scss"></style>