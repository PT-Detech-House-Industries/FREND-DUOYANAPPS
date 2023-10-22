<template>
  <div class="bottom-menu">
    <div class="manu-option">©Duoyan.maem 2020-2023</div>
    <!-- <div class="menu-option">
      <router-link to="/">Beranda</router-link>
    </div>
    <div class="menu-option">
      <router-link to="/about">Tentang</router-link>
    </div>
    <div class="menu-option">
      <router-link to="/contact">Kontak</router-link>
    </div> -->
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
  @import '@/scss/_theme.scss';

  .bottom-menu {
    background-color: $primary-color;
    /* Ganti dengan warna latar yang Anda inginkan */
    color: white;
    /* Ganti dengan warna teks yang Anda inginkan */
    padding: 10px 0;
    /* Sesuaikan dengan gaya Anda */
    /* Width mengikuti #app */
    max-width: 480px;
    height: 40px;
    margin: auto;
    text-align: center;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    position: fixed;
    /* Menjadikan elemen dengan posisi fixed */
    bottom: 0;
    /* Elemen akan tetap di atas layar */
    left: 0;
    /* Elemen akan tetap di kiri layar */
    right: 0;
    /* Elemen akan tetap di kanan layar */
  }

  /* Gaya untuk pilihan menu */
  .menu-option {
    font-size: 24px;
    /* Ukuran font 24px */
    padding: 10px 20px;
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
</style>