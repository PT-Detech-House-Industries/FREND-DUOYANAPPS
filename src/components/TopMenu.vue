<template>
  <div>
    <div class="nav-menu">
      <div class="nav-logo">
        <router-link to="/">
          <img src="../assets/png/logo.png" alt="Logo" class="logo">
        </router-link>
        <div class="nav-items">
          <router-link to="/dashboard">Beranda</router-link>
          <router-link to="/about">Tentang</router-link>
          <router-link to="/member">Member</router-link>
        </div>
      </div>
    </div>
    <!-- new -->
    <!-- <a href="#home" class="active">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a> -->
    <!-- old -->
    <!-- <div class="top-menu">
      <router-link to="/">
        <img src="../assets/png/logo.png" alt="Logo" class="logo">
      </router-link>
      <div class="kanan">
        <div class="menu-option">
          <router-link to="/dashboard">Beranda</router-link>
        </div>
        <div class="menu-option">
          <router-link to="/about">Tentang</router-link>
        </div>
        <div class="menu-option">
          <router-link to="/contact">Kontak</router-link>
        </div>
        <div class="menu-option">
          <router-link to="/member">Member</router-link>
        </div>
        <div class="menu-option">
          <form @submit.prevent="logout">
            <input class="submit" type="submit" value="Logout">
          </form>
          <router-link to="/contact">Logout</router-link>
        </div>
      </div>
    </div> -->
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

<style scoped lang="scss">
  @import '@/scss/_theme.scss';
  .nav-menu {
    background-color: $primary-color;
    max-width: 480px;
    margin: auto;
    text-align: center;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    // margin: auto;
    // text-align: center;
    // display: inline-block;
  }

  .nav-logo {
    margin: 10px;
  }

  .nav-items {
    margin: 10px;
    // float: left;
    display: flex;
    justify-content: space-around;

    a {
      text-decoration: none;
      color: #f2f2f2;
      display: block;
      padding: 14px 16px;
    }
  }

  // .nav-items {
  //   list-style: none;
  //   list-style: none;
  //   margin: 0;
  //   padding: 0;
  //   display: flex;
  //   justify-content: space-around; 
  // }

  // .nav-items a {
  //   text-decoration: none;
  //   color: #f2f2f2;
  //   font-size: 17px;
  //   text-align: center;
  //   display: block;
  //   padding: 14px 16px;
  // }
</style><!-- head menu -->

<!-- <style scoped lang="scss">
  @import '@/scss/_theme.scss';

  .topnav {
    background-color: $primary-color;
    // max-width: 480px;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .nav-content {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    align-items: center;
  }

  .nav-items {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 14px 16px;
    }
    a {
      text-decoration: none;
      color: #f2f2f2;
      font-size: 17px;
      text-align: center;
      display: block;
    }
  }

  // .topnav a {
  //   float: right;
  //   display: block;
  //   color: #f2f2f2;
  //   text-align: center;
  //   padding: 14px 16px;
  //   text-decoration: none;
  //   font-size: 17px;
  // }

  // .topnav a:hover {
  //   background-color: #ddd;
  //   color: black;
  // }

  // .topnav a.active {
  //   background-color: #04AA6D;
  //   color: white;
  // }
</style> -->
<!-- untuk head -->