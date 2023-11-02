<template>
  <div>
    <div class="container justify-content-center">
      <TopMenu></TopMenu>
      <div class="title text-center">
        <h1>Tentang Kami</h1>
        <p>Kami adalah perusahaan yang luar biasa.</p>
      </div>

      <div class="row">
        <!-- Kolom Bootstrap untuk tampilan mobile -->
        <div class="col-6 bg-danger">
          <div class="mt-3">
            <p>Ini adalah kolom tampilan mobile.</p>
          </div>
        </div>
        <div class="col-6 bg-success">
          <p>Ini adalah kolom lain untuk tampilan mobile.</p>
        </div>
      </div>

    </div>
  </div><!-- bootstrap -->

  <!-- <div class="container">
    <TopMenu></TopMenu>
    <div class="title">
      <h1>Tentang Kami</h1>
      <p>Kami adalah perusahaan yang luar biasa.</p>
    </div>
    <table>
      <thead>
        <tr>
          <th>Harga</th>
          <th>Nama</th>
          <th>Durasi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in AboutDashboard.data" :key="data.id">
          <td>{{ data.id }}</td>
          <td>{{ data.nickname }}</td>
          <td>{{ data.id }}</td>
        </tr>

        <tr v-for="data in ServiceTalent.data" :key="data.id">
          <td>{{ data.id }}</td>
          <td>{{ data.code }}</td>
        </tr>
      </tbody>
    </table>
    <div class="container">
      <iframe src="https://iik.ac.id/?gclid=CjwKCAjwsKqoBhBPEiwALrrqiM_z8NgionUOCLdXMCMF8DV3CM9zxB1W2eizZvsvO9PZ7L3WrX9HHRoCc_YQAvD_BwE"></iframe>
    </div>
  </div> -->
</template>

<script>
  import TopMenu from '../../components/TopMenu.vue';
  import { mapActions } from 'vuex';
  export default {
    name: 'AboutPage',
    data() {
      return {
        dataList: [], // Untuk menyimpan data dari API
        loading: true,
        loadingImage: require('../../assets/gif/load-v1.gif')
      };
    },
    methods: {
      ...mapActions(['fetchData', 'fetchAbout', 'fetchAbout1']),
      
      async fetchDataAndAbout() {
        await this.fetchData();
        await this.fetchAbout();
        await this.fetchAbout1();
      },
      
      fetchData() {
        // Panggil aksi fetchData dari store untuk mengambil data
        this.$store.dispatch('fetchData');
      },
      async loadData() {
        setTimeout(async () => {
          this.loading = false;
        }, 1500);
      },
      // fetchAbout() {
      //   // Panggil aksi fetchData dari store untuk mengambil data
      //   this.$store.dispatch('fetchAbout');
      // },
    },
    components: {
      TopMenu,
    },
    computed: {
      data() {
        return this.$store.state.data;
      },
      AboutDashboard() {
        return this.$store.state.ProfileAccount;
      },
      ServiceTalent() {
        return this.$store.state.ServiceTalent;
      },
    },
    created() {
      this.fetchData(); // Panggil metode fetchData saat halaman dibuat
      this.loadData();
      this.fetchAbout();
      this.fetchAbout1();
      // this.fetchService();
      // this.fetchTalent();
    },
    mounted() {
      document.title = 'about - duoyan.maem'
    },
  }
</script>

<style scoped lang="scss">
  /* Gaya khusus untuk komponen Home */
  .container {
    // background: #ebebeb;
    min-height: 100vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .title {
    padding-top: 75px;
  }

  .list-data {
    ul {
      list-style-type: none;

      li {
        text-align: left;
      }
    }
  }

  .load-data {
    width: 50%;
  }
</style>

<style>
  /* Style untuk iframe agar tetap berukuran layar mobile */
  iframe {
    width: 100%;
    max-width: 400px;
    /* Sesuaikan dengan lebar layar yang Anda inginkan */
    height: 100vh;
    display: block;
    margin: 0 auto;
    /* Ini akan menempatkan iframe di tengah horisontal */
  }

  /* Style untuk kontainer yang mengatur posisi vertical di tengah */
  .halaman {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* Menggunakan tinggi 100% dari viewport */
  }
</style>