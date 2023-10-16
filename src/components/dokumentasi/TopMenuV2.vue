<template>
  <div class="top-menu">
    <router-link to="/">
      <img src="../assets/png/logo.png" alt="Logo" class="logo">
    </router-link>
    <button class="kanan" @click="toggleElement">Toggle Element</button>
    <div id="myElement" class="merah" :class="{ 'active': isActive }">
      <div class="menu-option">
        <router-link to="/dashboard">Beranda</router-link>
      </div>
      <div class="menu-option">
        <router-link to="/about">Tentang</router-link>
      </div>
      <div class="menu-option">
        <router-link to="/contact">Kontak</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    // add function
    toggleElement() {
      this.isActive = !this.isActive; //true
    },
  },
  mounted() {
    // Memanipulasi elemen dengan jQuery saat komponen di-mount
    $('#myElement').addClass('active');

    $(document).ready(function() {
      $("p").click(function() {
        $(this).fadeOut();
      });
    }); // untuk memanipulasi elemen p, menghilang
  },
  beforeDestroy() {
    // Membersihkan event-handler atau elemen yang dimanipulasi dengan jQuery
    $('#myElement').off(); // Hapus event-handler jika ada
  },
};
</script>

<style scoped lang="scss">
  @import '@/scss/_theme.scss';

  .logo {
    width: 50px;
    /* Sesuaikan ukuran logo */
    height: auto;
    float: left;
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
    font-size: 12px;
    /* Ukuran font 24px */
    padding: 2px 4px;
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

.active {
  background-color: red;
  padding: 10px;
  width: auto;
  transition: background-color 0.3s ease, padding 0.3s ease;
}
</style><!-- untuk active -->
