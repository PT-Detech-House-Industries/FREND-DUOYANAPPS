<template>
  <div>
    <TopMenu></TopMenu>
    <div class="title text-center">
      <br>
      <br>
      <br>
      <br>
      <h1>Member</h1>
      <p>form untuk member duoyan maem.</p>
    </div>
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