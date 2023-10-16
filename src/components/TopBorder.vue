<template>
  <div class="top-border"></div>
</template>

<script>
</script>

<style scoped lang="scss">
  @import '@/scss/_theme.scss';

  .top-border {
    /* Ganti dengan warna latar yang Anda inginkan */
    background-color: $primary-color;
    /* Ganti dengan warna teks yang Anda inginkan */
    padding: 5px 0;
    /* Sesuaikan dengan gaya Anda */
    /* Width mengikuti #app */
    max-width: 480px;
    margin: auto;
    text-align: center;
    position: fixed;
    /* Menjadikan elemen dengan posisi fixed */
    top: 0;
    /* Elemen akan tetap di atas layar */
    left: 0;
    /* Elemen akan tetap di kiri layar */
    right: 0;
    /* Elemen akan tetap di kanan layar */
  }

</style>