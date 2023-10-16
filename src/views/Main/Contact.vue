<template>
  <div class="container">
    <TopMenu></TopMenu>
    <div class="title">
      <h1>Kontak Kami</h1>
      <p>Kami adalah perusahaan yang luar biasa.</p>
    </div>
    <ul v-for="item in dataTalent.data" :key="item.id">
      <li>{{ item.id }}</li>
    </ul>
    <div class="card">
      <img class="load-data" :src="loadingImage" v-if="loading" />
      <div class="list-data" v-else>
      <!-- <div class="list-data"> -->
        <ul v-for="item in data.products" :key="item.id">
          <li>{{ item.description }}</li>
          <li>{{ item.price }}</li>
        </ul>
      </div>
    </div>
    <!-- <div class="container">
      <iframe src="https://iik.ac.id/?gclid=CjwKCAjwsKqoBhBPEiwALrrqiM_z8NgionUOCLdXMCMF8DV3CM9zxB1W2eizZvsvO9PZ7L3WrX9HHRoCc_YQAvD_BwE"></iframe>
    </div> -->
  </div>
</template>

<script>
  import TopMenu from '../../components/TopMenu.vue';
  import axios from 'axios';

  export default {
    name: 'ContactPage',
    data() {
      return {
        dataList: [], // Untuk menyimpan data dari API
        loading: true,
        loadingImage: require('../../assets/gif/load-v1.gif'),
        dataTalent: [],
      };
    },
    methods: {
      fetchData() {
        // Panggil aksi fetchData dari store untuk mengambil data
        this.$store.dispatch('fetchData');
      },
      async loadData() {
        setTimeout(async () => {
          this.loading = false;
        },1500);
      },
      fetchTalent() {
        axios.get('http://localhost:8000/api/service-talent/')
          .then(response => {
            this.dataTalent = response.data; // Memasukkan data ke dalam data komponen
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },
    },
    computed: {
      data() {
        return this.$store.state.data;
      },
    },
    components: {
      TopMenu,
    },
    created() {
      this.fetchData(); // Panggil metode fetchData saat halaman dibuat
      this.loadData();
      this.fetchTalent();
    },
    mounted() {
      document.title = 'contact - nihonuwu'
    },
  }
</script>

<style scoped lang="scss">
  /* Gaya khusus untuk komponen Home */
  .container {
    // background: #ebebeb;
    min-height: 100vh;
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
</style> <!-- main -->

<style scoped lang="scss">
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
</style> <!-- iframe -->