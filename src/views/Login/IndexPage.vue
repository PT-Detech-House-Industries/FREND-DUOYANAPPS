<template>
  <div class="form-content">
    <TopBorder></TopBorder>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <!-- <label>Username</label> -->
      <input class="login-form" v-model="username" type="text" id="username" 
        placeholder="No.Whatsapp / Email / Username">

      <!-- <label>Password</label> -->
      <input class="login-form" v-model="password" type="password" id="password" placeholder="Password">

      <input class="submit" type="submit" value="Submit">
      <br>
      <!-- <a class="custom-link" href="/register">Register</a> -->
      <div class="custom-link">
        <a href="/register">Daftar Dulu</a>
      </div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  import TopBorder from '../../components/TopBorder.vue';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      logins() {
        // Implementasi logika autentikasi di sini
        // Contoh: Anda dapat melakukan validasi username dan password
        if (this.username === 'user' && this.password === '123') {
          // Berhasil login, arahkan pengguna ke halaman lain
          this.$router.push('/dashboard');
        } else {
          alert('Login gagal. Periksa kembali username dan password Anda.');
        }
      },

      async login() {
        try {
          const response = await axios.post('http://localhost:8000/api/login', {
            login_field: this.username,
            password: this.password,
          });

          // Handle response data here, such as storing tokens or redirecting.
          const access_token = response.data.access_token; // Misalnya, respons memiliki properti 'token'

          // Simpan token ke dalam localStorage
          localStorage.setItem('token', access_token);

          // Handle response data here, such as storing tokens or redirecting.
          this.$router.push('/dashboard');
        } catch (error) {
          // Handle errors here, such as displaying an error message.
          console.error('Login failed:', error);

          // Display error message to the user
          this.errorMessage = 'Login failed. Please check your credentials.';
        }
      },
    },
    components: {
      // HelloWorld
      TopBorder,
    },
    mounted() {
      document.title = 'login - duoyan.maem'
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/scss/_form.scss';
  
  .form-content {
    max-width: 400px;
    // border: 1px solid #ccc;
    border-radius: 5px;
    // background-color: #f9f9f9;
    margin: 0 auto;
    padding: 20px;
    padding-top: 75px;
  }

  form {
    // background-color: #f9f9f9;
    padding: 18px;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }

  .login-form {
    margin: 8px 0;
  }

  .custom-link {
    // /* Definisikan gaya khusus untuk tautan di sini */
    // color: #FFFFFF; /* Misalnya, mengatur warna teks */
    // text-decoration: none; /* Misalnya, memberi garis bawah pada teks */
    // text-align: center; /* Mengatur tata letak teks ke tengah */
    // line-height: 2; /* Mengatur jarak antara baris untuk menggeser teks ke tengah */
    // /* Tambahkan gaya lain sesuai kebutuhan Anda */
    // width: 100%;
    // background-color: red;

    width: 90%;
    background-color: #e74c3c;
    padding: 14px 20px;
    // margin: 8px 0;
    margin-top: 19px;
    margin-bottom: 2px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;

    a {
      text-decoration: none;
      color: white;
      font-size: 12px;
    }
  }
</style><!-- form version 1.1 -->