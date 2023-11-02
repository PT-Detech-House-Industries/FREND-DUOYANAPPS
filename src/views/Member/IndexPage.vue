<template>
  <div>
    <div class="container">
      <TopMenu></TopMenu>
        <div class="title">
          <br>
          <br>
          <br>
          <br>
          <h1>MEMBER</h1>
          <p>form untuk member duoyan maem.</p>
        </div>
        <img class="load-data" :src="loadingImage" v-if="loading"/>

        <div v-else>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="nama">Nama:</label>
              <input type="text" id="nama" v-model="formData.nama" required>
            </div>

            <div class="form-group">
              <label for="nomor_whatsapp">Nomor WhatsApp:</label>
              <input type="text" id="nomor_whatsapp" v-model="formData.nomor_whatsapp" required>
            </div>

            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" v-model="formData.email" required>
            </div>

            <!-- <div class="form-group">
              <label for="jenis_member">Jenis Member:</label>
              <select id="jenis_member" v-model="formData.jenis_member" required>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
                <option value="platinum">Platinum</option>
              </select>
            </div> -->

            <button type="submit">Daftar</button>
          </form>
        </div>
    </div>
  </div>

  <!-- <div class="container">
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
    <MemberStample></MemberStample>
  </div> -->
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
        loading: true,
        formData: {
          nama: '',
          nomor_whatsapp: '',
          email: '',
          jenis_member: 'silver',
        },
        // image
        loadingImage: require('../../assets/gif/load-v1.gif'),
      };
    },
    methods: {
      submitForm() {
        // Di sini Anda dapat menambahkan logika untuk mengirim data pendaftaran ke server atau melakukan validasi lainnya.
        // Contoh sederhana: menampilkan data yang diisi pada konsol.
        console.log('Data Pendaftaran:', this.formData);
      },
      fetchMember() {
        // Panggil aksi fetchData dari store untuk mengambil data
        this.$store.dispatch('fetchMember');
      },
      fetchMemberStampleClaim
      () {
        // Panggil aksi fetchData dari store untuk mengambil data
        this.$store.dispatch('fetchMemberStampleClaim');
      },
      async loadData() {
        setTimeout(async () => {
          this.loading = false;
        }, 1500);
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
      this.loadData();
    },
    mounted() {
      document.title = 'member - duoyan.maem'
    },
    
  }
</script>

<style scoped lang="scss">
  // @import '@/scss/_form.scss';

  /* Gaya khusus untuk komponen Home */
  * {
    box-sizing: border-box;
  }
  .container {
    // background: #ebebeb;
    min-height: 100vh;
    text-align: center;
    float: left;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  .title {
    padding-top: 75px;
  }
  .load-data {
    width: 35%;
  }
</style> <!-- main -->

<style scoped>
  .form-group {
    margin-bottom: 20px;
  }

  label {
    display: block;
  }
</style><!-- form -->