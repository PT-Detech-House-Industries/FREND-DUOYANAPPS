<template>
  <div class="form-content">
    <TopBorder></TopBorder>
    <h1>Register</h1>
    <form @submit.prevent="login">
      <label>Email</label>
      <input class="login-form" v-model="email" type="email" id="email" placeholder="contoh-email@mail.com">

      <label>Nomor Whatsapp</label>
      <input class="login-form" v-model="whatsapp_number" type="text" id="whatsapp_number" placeholder="08xxxxxxxxxx">

      <label>Username</label>
      <input class="login-form" v-model="username" type="text" id="username" placeholder="username">

      <label>Password</label>
      <input class="login-form" v-model="password" type="password" id="password" placeholder="Password">

      <input class="submit" type="submit" value="Submit">
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
        email: '',
        whatsapp_number: '',
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
          const response = await axios.post('http://localhost:8000/api/register', {
            username: this.username,
            email: this.email,
            whatsapp_number: this.whatsapp_number,
            password: this.password,
          });
          
          // Handle response data here, such as storing tokens or redirecting.
          const token = response.data.token; // Misalnya, respons memiliki properti 'token'

          // Simpan token ke dalam localStorage
          localStorage.setItem('token', token);

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
</style><!-- form version 1.1 -->