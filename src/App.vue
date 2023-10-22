<template>
  <div id="app">
    <router-view></router-view>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <BottomMenu></BottomMenu>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  import BottomMenu from './components/BottomMenu.vue';
  export default {
    name: 'App',
    components: {
      // HelloWorld
      BottomMenu,
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/scss/_theme.scss';

  @font-face {
    font-family: 'PlusJakartaSans';
    src: url('@/assets/fonts/plus-jakarta-sans/PlusJakartaSans-VariableFont_wght.ttf') format('truetype');
    /* Tambahkan format lain jika diperlukan */
  }

  #app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
    font-family: 'PlusJakartaSans', sans-serif !important;
    // background-color: #F7F7F8;
    color: #2c3e50;
    max-width: 480px;
    min-height: 100vh;
    padding-bottom: 1px;
    margin-top: 0;
    margin: auto;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }

  /* Media query untuk perangkat mobile */
  @media screen and (max-width: 768px) {
    #app {
      /* Gaya khusus untuk perangkat mobile */
      min-height: 100vh;
    }
  }

  /* Media query untuk tablet */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    #app {
      /* Gaya khusus untuk tablet */
      min-height: 100vh;
    }
  }
</style>