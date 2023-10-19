<template>
  <div class="container">
    <TopMenu></TopMenu>
    <h1>member</h1>
    <ul v-for="item in memberData.data" :key="item.id">
      <li>{{ item.id }}</li>
      <li>{{ item.invoice }}</li>
      <li>{{ item.quantity_purchased }}</li>
      <li>{{ item.total_price }}</li>
      <li>{{ item.purchase_date }}</li>
      <li>{{ item.status }}</li>
      <li>{{ memberData.status_message }}</li>
    </ul>
    <div class="box">
      <ul v-for="item in memberStampleClaim.data" :key="item.id">
        <li>{{ item.member_id }}</li>
        <li>{{ item.status_claim }}</li>
        <li>{{ item.quantity_purchased }}</li>
        <li>{{ item.total_price }}</li>
        <li>{{ item.purchase_date }}</li>
        <li>{{ item.status }}</li>
        <li>{{ memberStampleClaim.status_message }}</li>
      </ul>
    </div>
    <!-- <MemberStample></MemberStample> -->
  </div>
</template>

<script>
  import TopMenu from '../../components/TopMenu.vue';
  // import MemberStample from './MemberStamplePage.vue';
  export default {
    name: 'MemberPage',
    components: {
      TopMenu,
      // MemberStample,
    },
    data() {
      return {
        
      };
    },
    methods: {
      fetchMember() {
        // Panggil aksi fetchData dari store untuk mengambil data
        this.$store.dispatch('fetchMember');
      },
      fetchMemberStampleClaim
      () {
        // Panggil aksi fetchData dari store untuk mengambil data
        this.$store.dispatch('fetchMemberStampleClaim');
      },
    },
    computed: {
      memberData() {
        return this.$store.state.memberData;
      },

      memberStampleClaim() {
        return this.$store.state.memberStampleClaim;
      }
    },
    created() {
      this.fetchMember();
      this.fetchMemberStampleClaim();
    },
    mounted() {},
    
  }
</script>

<style lang="scss"></style>