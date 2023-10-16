<template>
  <div class="top-menu">
    <router-link to="/">
      <img src="../assets/png/logo.png" alt="Logo" class="logo">
    </router-link>
    <div class="kanan">
      <!-- <div class="menu-option">
        <router-link to="/dashboard">Beranda</router-link>
      </div>
      <div class="menu-option">
        <router-link to="/about">Tentang</router-link>
      </div>
      <div class="menu-option">
        <router-link to="/contact">Kontak</router-link>
      </div> -->
      <div class="menu-option">
        <form @submit.prevent="logout">
          <input class="submit" type="submit" value="Logout">
        </form>
        <!-- <router-link to="/contact">Logout</router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    async logout() {
      try {
        // Ambil token akses dari localStorage
        const accessToken = localStorage.getItem('access_token');

        // Pastikan token akses ada sebelum melakukan permintaan logout
        if (accessToken) {
          // Setel konfigurasi Axios dengan header bearer token
          const config = {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          };

          // Lakukan permintaan logout ke API dengan konfigurasi yang telah disetel
          await axios.get('http://localhost:8000/api/logout', config);
        }

        // Hapus token akses dari localStorage
        localStorage.removeItem('access_token');

        // Redirect ke halaman login atau halaman lain sesuai kebutuhan
        this.$router.push('/login');
        
      } catch (error) {
        // Handle errors here, such as displaying an error message.
        console.error('Login failed:', error);
        // Display error message to the user
        this.errorMessage = 'Login failed. Please check your credentials.';
      }
    },
  },
};
</script>

<style scoped lang="scss">
  @import '@/scss/_theme.scss';

  .logo {
    width: 35px;
    /* Sesuaikan ukuran logo */
    height: auto;
    float: left;
    margin-left: 15px;
  }

  .top-menu {
    background-color: $primary-color;
    /* Ganti dengan warna latar yang Anda inginkan */
    color: white;
    /* Ganti dengan warna teks yang Anda inginkan */
    padding: 10px 0;
    /* Sesuaikan dengan gaya Anda */
    /* Width mengikuti #app */
    max-width: 480px;
    height: 50px;
    margin: auto;
    text-align: center;

    // border-bottom-left-radius: 20px;
    // border-bottom-right-radius: 20px;

    position: fixed;
    /* Menjadikan elemen dengan posisi fixed */
    top: 0;
    /* Elemen akan tetap di atas layar */
    left: 0;
    /* Elemen akan tetap di kiri layar */
    right: 0;
    /* Elemen akan tetap di kanan layar */
  }

  /* Gaya untuk pilihan menu */
  .menu-option {
    font-size: 18px;
    /* Ukuran font 24px */
    padding: 6px 4px;
    margin-left: 10px;
    /* Sesuaikan dengan gaya Anda */
    cursor: pointer;
    /* Menambahkan tanda kursor saat dihover */
    display: inline-block;
    /* Menyusun menu secara horizontal */
  }

  /* Gaya saat menghover pilihan menu */
  .menu-option:hover {
    background-color: #555;
    /* Ganti dengan warna latar yang Anda inginkan saat hover */
  }

  /* Gaya untuk tautan dalam pilihan menu */
  .menu-option a {
    text-decoration: none;
    /* Menambahkan properti text-decoration */
    color: inherit;
    /* Warisan warna teks dari parent (.menu-option) */
  }
</style> <!-- untuk header  -->

<style>
.kanan {
  float: right;
}
</style><!-- untuk active -->
