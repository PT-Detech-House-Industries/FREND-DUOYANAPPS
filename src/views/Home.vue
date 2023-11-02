<template>
  <div>
    <div class="container">
      <TopMenu></TopMenu>
      <div class="title">
        <br>
        <br>
        <br>
        <br>
        <h1>WELCOME</h1>
        <p>Masukan nomor Whatsapp Anda</p>
        <p>Untuk Melihat Status Member</p>
      </div>

      <!-- <img class="no-connection" :src="noConnection"> -->

      <img class="load-data" :src="loadingImage" v-if="loading" />

      <!-- <img class="no-connection" :src="noConnection" v-if="!loading && !showTable" /> -->

      <div v-else>
        <div class="widget-search">
          <div class="search-container">
            <form @submit.prevent="postData">
              <input v-model="inputValue" type="text" class="search-input" placeholder="08XXXXXXXXXX...">
              <button class="search-button">Masuk</button>
            </form>
          </div>
        </div>

        <div v-if="!errorImage">
          <img class="no-connection" :src="noConnection">
          <div class="error-title">
            <h3>Data Tidak Ditemukan</h3>
            <p>
              Silahkan Daftar Terlebih Dahulu <router-link to="/member">Disini</router-link>
            </p>
          </div>
          <br>
          <br>
          <br>
          <br>
        </div>

        <br>

        <div v-if="showTable == true">
          <!-- capsul -->
          <!-- card -->
          <!-- stamp -->
          <!-- bawahnya reward -->
          <!-- beri reward -->
          <!-- Riwayat Transaksi -->
          <!-- Tambah Pelanggan -->
          <!-- beri stamp -->
          <img class="member-card" :src="memberImage">
          <br>
          <br>

          <div :class="{ 
            'tombol-menu': true, 
            'active': isButtonMenuActv1
            }" @click="handleMenuClick(1)">
            PROFILE
          </div>

          <div :class="{
            'tombol-menu': true,
            'active': isButtonMenuActv2
            }" @click="handleMenuClick(2)">
            STAMPEL
          </div>

          <div :class="{
            'tombol-menu': true,
            'active': isButtonMenuActv3 
            }" @click="handleMenuClick(3)">
            REWARD
          </div>

          <br>

          <div class="tab-body-border">
            <div v-if="isButtonMenuActv1">
              <MemberProfile></MemberProfile>
            </div>

            <div v-if="isButtonMenuActv2">
              <!-- Stampel -->
              <MemberBiodata></MemberBiodata>
              <div class="tab-container">
                <div class="tab-header">
                  <div v-for="(tab, index) in tabs" :key="index" @click="changeTab(index)"
                    :class="{ 'active-tab': activeTab === index }">
                    {{ tab.label }}
                  </div>
                </div>
                <div class="tab-content">
                  <div v-for="(tab, index) in tabs" :key="index">
                    <div v-if="activeTab === index">
                      <div v-html="getTabContent(tab)"></div>
                    </div>
                  </div>
                </div>
              </div>
              <br>
              <br>
              <br>
              <br>
              <br>
            </div>

            <div v-if="isButtonMenuActv3">
              <!-- Reward -->
              <table class="table">
                <tbody v-for="data in memberCheck.data" :key="data.id">
                  <tr>
                    <td>ID :</td>
                    <td>{{ data.id }}</td>
                  </tr>
                  <tr>
                    <td>Nama :</td>
                    <td>{{ data.nama }}</td>
                  </tr>
                  <tr>
                    <td>Jenis Member :</td>
                    <td>{{ data.jenis_member}}</td>
                  </tr>
                  <tr>
                    <td>Tanggal Bergabung :</td>
                    <td>{{ data.tanggal_bergabung }}</td>
                  </tr>
                  <tr>
                    <td>Masa Berlaku :</td>
                    <td>{{ data.masa_berlaku }}</td>
                  </tr>
                  <tr>
                    <td>Point Member :</td>
                    <td>{{ data.point_member }}</td>
                  </tr>
                </tbody>
                <br>
                <br>
                <br>
                <br>
              </table>
            </div>
          </div>

          <br>
          <br>
          <br>
          <br>
          <br>

          <!-- <div v-for="datas in memberStample.data" :key="datas.id">
            {{ datas.id }}
          </div>
          <br>
          <br>
          <br>
          <br>
          memberPurchasing
          <div v-for="datas in memberPurchasing.data" :key="datas.id">
            {{ datas.id }}
          </div>
          <br>
          <br>
          <br>
          <br> -->

          <!-- <p>Input Nilai : {{ inputValue }}</p> -->
          <!-- <button class="btn btn-primary">Tombol Bootstrap</button> -->
        </div>
        <!-- end untuk v-if  -->
      </div>

    </div>
  </div>

  <!-- <div class="card-home">
      <div v-for="item in data.products" :key="item.id">
        <img :src="item.thumbnail" alt="Gambar">
      </div>
    </div> -->

  <!-- <div class="row">
      <div class="column" v-for="item in data.products" :key="item.id">
        <img :src="item.thumbnail" alt="Gambar">
      </div>
    </div> -->

  <!-- <div class="card">
      <img class="load-data" :src="loadingImage" v-if="loading" />
      <div class="list-data" v-else>
        <ul v-for="item in data.products" :key="item.id">
          <li>{{ item.id }}</li>
          <li>{{ item.title }}</li>
          <li>{{ item.description }}</li>
          <li>{{ item.price }}</li>
        </ul>
      </div>
    </div> -->
</template>

<script>
  import TopMenu from '../components/TopMenu.vue';
  import MemberBiodata from '../views/Member/MemberBiodataPage.vue';
  import MemberProfile from '../views/Member/MemberProfilePage.vue';
  import Toasted from 'vue-toasted';
  import Vue from 'vue';
  import {
    mapActions
  } from 'vuex';
  export default {
    name: 'HomePage',
    components: {
      TopMenu,
      MemberBiodata,
      MemberProfile,
    },
    data() {
      return {
        activeTab: 0,
        tabs: [{
            label: 'Biodata',
            content: 'Halaman Stampel'
          },
          {
            label: 'Reward',
            content: 'Halaman Reward'
          },
          {
            label: 'Stampel',
            content: 'Halaman Stampel'
          },
        ],
        dataList: [], // Untuk menyimpan data dari API
        loading: true,
        errorImage: true,
        inputValue: '',
        submitted: false,
        showTable: false,
        isButtonMenuActv1: true,
        isButtonMenuActv2: false,
        isButtonMenuActv3: false,
        // gambar
        loadingImage: require('../assets/gif/load-v1.gif'),
        memberImage: require('../assets/jpg/membercard.jpg'),
        noConnection: require('../assets/png/no-connection.png'),
        // memberFrontImage: require('../assets/jpg/membercard-front.jpg'),
        // memberBackImage: require('../assets/jpg/membercard-back.jpg'),
      };
    },
    methods: {
      getTabContent(tab) {
        // Di sini Anda dapat mengembalikan konten berdasarkan tab atau logika lainnya.
        // Contoh sederhana, tetapi Anda bisa membuatnya lebih dinamis.
        if (tab.label === 'Biodata') {
          // return `<div><img style="width: 80%;" src="${this.memberFrontImage}" alt="Stample Image" /></div>`;
          return '<div><p>Belum ada <em>Data StampZ</em></p></div>';
        } else if (tab.label === 'Reward') {
          // return `<div><img style="width: 80%;" src="${this.memberBackImage}" alt="Reward Image" /></div>`;
          return '<div><p>Belum ada <em>Data Reward</em></p></div>';
        } else if (tab.label === 'Stampel') {
          return '<div><p>Belum ada <em>Data Stampel</em></p></div>';
        } else {
          return 'Konten tidak ditemukan';
        }
      },
      changeTab(index) {
        this.activeTab = index;
      },
      handleMenuClick(buttonNumber) {
        if (buttonNumber == 1) {
          // this.isButtonMenuActv1 = !this.isButtonMenuActv1;
          this.isButtonMenuActv1 = true;
          this.isButtonMenuActv2 = false;
          this.isButtonMenuActv3 = false;
        } else if (buttonNumber == 2) {
          // this.isButtonMenuActv2 = !this.isButtonMenuActv2;
          this.isButtonMenuActv2 = true;
          this.isButtonMenuActv1 = false;
          this.isButtonMenuActv3 = false;
        } else if (buttonNumber == 3) {
          // this.isButtonMenuActv3 = !this.isButtonMenuActv3;
          this.isButtonMenuActv3 = true;
          this.isButtonMenuActv2 = false;
          this.isButtonMenuActv1 = false;
        }
      },
      ...mapActions([
        'fetchMemberCheck',
        'fetchMemberStample',
        'fetchMemberPurchasing',
        'fetchMemberAward',
        'fetchMemberAwardRecord'
      ]),
      postData() {
        if (!this.inputValue) {
          alert('Harap isi semua bidang yang diperlukan.');
          return;
        }
        const formData = new FormData();
        formData.append('nomor_whatsapp', this.inputValue);
        this.fetchMemberCheck(formData) // Ganti dengan metode yang benar
          .then((response) => {
            if (response.status == 201) {
              // Jika pengambilan data berhasil (status 200 OK), tampilkan tabel hasil
              this.showTable = true;
              this.loading = true;
              this.errorImage = true;
              this.loadData();
            } else {
              // Jika respons bukan status 200, misalnya status 500 (Internal Server Error)
              // Set showTable menjadi false
              this.showTable = false;
              this.loading = false;
              this.errorImage = false;
              // alert('Terjadi kesalahan internal pada server. Silakan coba lagi nanti.');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      },
      sendValue() {
        // Metode ini akan memperbarui data inputValue setiap kali input berubah
        // this.$emit('input', this.inputValue);
        // console.log(this.inputValue);
        this.showTable = true;
        this.loading = true; // Setel loading menjadi true sebelum memanggil loadData
        this.loadData();
      },
      // fetchMemberCheck() {
      //   this.$store.dispatch('fetchMemberCheck');
      // },
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
    computed: {
      data() {
        return this.$store.state.data;
      },
      memberCheck() {
        return this.$store.state.memberCheck;
      },
      memberStample() {
        return this.$store.state.memberStample;
      },
      memberPurchasing() {
        return this.$store.state.memberPurchasing;
      },
      memberAward() {
        return this.$store.state.memberAward;
      },
      memberAwardRecord() {
        return this.$store.state.memberAwardRecord;
      },
    },
    created() {
      // this.fetchData(); // Panggil metode fetchData saat halaman dibuat
      this.loadData();
      this.fetchMemberStample();
      this.fetchMemberPurchasing();
      this.fetchMemberAward();
      this.fetchMemberAwardRecord();
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
      document.title = 'home - duoyan.maem'
    }
  };
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

  .error-title {
    padding-top: 35px;
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

<style scoped lang="scss">
  .member-card {
    width: 80%;
    margin-bottom: 10px;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
</style><!-- member -->

<!-- start -->
<style scoped lang="scss">
  .tab-container {
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    max-width: 360px;
  }

  .tab-header {
    display: flex;
  }

  .tab-header div {
    flex: 1;
    text-align: center;
    padding: 10px;
    background-color: #f0f0f0;
    cursor: pointer;
  }

  .tab-header .active-tab {
    background-color: #007BFF;
    color: white;
  }

  .tab-content {
    padding: 10px;
  }
</style><!-- member -->

<style scoped lang="scss">
  .no-connection {
    width: 80%;
    margin-bottom: 10px;
  }
</style>
<!-- error -->

<style>
  .tombol-menu {
    max-width: 360px;
    background-color: #FFFFFF;
    color: #3A5C9D;
    padding: 5px 15px;
    border-radius: 20px;
    cursor: pointer;
    margin: 0 auto;
    margin-bottom: 10px;
    text-align: center;
    border: 1px solid #3A5C9D;
  }

  .tombol-menu.active {
    background-color: #3A5C9D;
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
  }
</style>
<!-- tabs -->

<style>
  .tab-body-border {
    width: 360px;
    min-height: 500px;
    margin: 0 auto;
    padding: 25px;
    border-radius: 20px;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
</style>
<!-- body -->