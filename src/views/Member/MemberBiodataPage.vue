<template>
  <div>
    <!-- <h1>Member Biodata</h1> -->
    <table class="table">
      <tbody>
        <tr>
          <td>ID :</td>
          <td>1</td>
        </tr>
        <tr>
          <td>ID :</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
  // import Vue from 'vue';
  import { mapActions } from 'vuex';
  
  export default {
    name: 'MemberBiodataPage',
    data() {
      return {
        activeTab: 0,
      }
    },
    methods: {
      ...mapActions([
        'fetchMemberCheck',
      ]),
    },
    computed: {
      // coming soon
    },
    created() {
      // coming soon
    },
  }
</script>

<style scoped lang="scss">
  // @import '@/scss/_form.scss';

  /* Gaya khusus untuk komponen Home */
  .container {
    // background: #ebebeb;
    min-height: 100vh;
    text-align: center;
    float: left;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    // display: flex;
    // justify-content: center;
    // align-items: center;
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
    width: 35%;
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

  .table {
    max-width: 400px;
    margin: 0 auto;
  }

  .widget-search {
    .search-container {
      max-width: 400px;
      padding: 20px;
      display: flex;
      margin: 0 auto;
    }

    input[type=text] {
      width: 80%;
      padding: 12px 20px;
      // margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    .search-button {
      // padding: 5px 10px;
      // background-color: #007bff;
      // color: #fff;
      // border: 1px solid #007bff;
      // border-radius: 0 3px 3px 0;
      // cursor: pointer;

      // float: left;
      width: 20%;
      padding: 12px;
      background: #A40D05;
      color: white;
      font-size: 17px;
      border: 1px solid #A40D05;
      border-left: none;
      border-radius: 0 10px 10px 0;
      cursor: pointer;
    }

    .search-button:hover {
      background-color: white;
      color: #A40D05;
      border: 1px solid #A40D05;
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