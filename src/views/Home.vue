<template>
  <div class="container">
    <TopMenu></TopMenu>
    <div class="title">
      <h1>Selamat datang !</h1>
      <p>Ini adalah halaman Beranda aplikasi kami.</p>
      <div>
        <button @click="tampilkanToast">Tampilkan Toast</button>
      </div>
    </div>
    <div class="widget-search">
      <div class="search-container">
        <input type="text" class="search-input" placeholder="Cari...">
        <button class="search-button">Cari</button>
      </div>
    </div>
    <!-- <div class="card-home">
      <div v-for="item in data.products" :key="item.id">
        <img :src="item.thumbnail" alt="Gambar">
      </div>
    </div> -->
    <div class="row">
      <div class="column" v-for="item in data.products" :key="item.id">
        <img :src="item.thumbnail" alt="Gambar">
      </div>
    </div>
    <div class="card">
      <img class="load-data" :src="loadingImage" v-if="loading" />
      <div class="list-data" v-else>
        <!-- <div class="list-data"> -->
        <ul v-for="item in data.products" :key="item.id">
          <li>{{ item.id }}</li>
          <li>{{ item.title }}</li>
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
  import TopMenu from '../components/TopMenu.vue';
  import Toasted from 'vue-toasted';
  import Vue from 'vue';
  
  export default {
    name: 'HomePage',
    data() {
      return {
        dataList: [], // Untuk menyimpan data dari API
        loading: true,
        loadingImage: require('../assets/gif/load-v1.gif')
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
        }, 1500);
      },
      tampilkanToast() {
        this.$toasted.show('Pesan Anda di sini', {
          type: 'my-custom-toast', // Gunakan jenis toast kustom yang Anda daftarkan
        });
      },
    },
    components: {
      TopMenu,
    },
    computed: {
      data() {
        return this.$store.state.data;
      },
    },
    created() {
      this.fetchData(); // Panggil metode fetchData saat halaman dibuat
      this.loadData();
    },
    mounted() {
      // Register the toast plugin and configure options
      Vue.use(Toasted);

      const toastOptions = {
        theme: 'toasted-primary',
        position: 'top-center',
        duration: 100,
      };

      Vue.toasted.register('my-custom-toast', (message) => {
        return message;
      }, toastOptions);
      
      document.title = 'home - nihonuwu'
    }
  };
</script>

<style scoped lang="scss">
  @import '@/scss/_form.scss';

  /* Gaya khusus untuk komponen Home */
  .container {
    // background: #ebebeb;
    min-height: 100vh;
    text-align: center;
    float: left;
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

  .card-home {
    box-sizing: border-box;
    max-width: 400px;
    margin: 0 auto;
  }

  .card-home img {
    float: left;
    max-width: 45%;
    /* Mengatur lebar maksimum gambar */
    height: auto;
    margin: 10px;
    /* Jarak antara gambar-gambar di bawah */
  }

  .widget-search {
    .search-container {
      max-width: 400px;
      padding: 20px;
      display: flex;
      margin: 0 auto;
    }

    .search-button {
      padding: 5px 10px;
      background-color: #007bff;
      color: #fff;
      border: 1px solid #007bff;
      border-radius: 0 3px 3px 0;
      cursor: pointer;
    }

    .search-button:hover {
      background-color: #0056b3;
    }

  }

  /* Create two equal columns that floats next to each other */
  .column {
    float: left;
    width: 50%;
    padding: 10px;
    /* Should be removed. Only for demonstration */
  }

  .column img {
    float: left;
    max-width: 100%;
    /* Mengatur lebar maksimum gambar */
    height: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .row {
    max-width: 400px;
    margin: 0 auto;
  }

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  * {
    box-sizing: border-box;
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