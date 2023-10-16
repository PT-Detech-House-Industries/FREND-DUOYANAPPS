<template>
  <!-- <div class="form-container">
    <h1>Form Contoh</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nama:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div class="form-group">
        <label for="message">Pesan:</label>
        <textarea id="message" v-model="formData.message" rows="4" required></textarea>
      </div>
      <div class="form-group">
        <button type="submit">Kirim</button>
      </div>
    </form>
  </div> -->
  <div class="form-content">
    <form action="/action_page.php">
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name..">

      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name..">

      <label for="country">Country</label>
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>

      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      submitForm() {
        // Mengirim data formulir, Anda dapat menambahkan logika pengiriman di sini
        console.log(this.formData);
      },
    },
  };
</script>

<style lang="scss" scoped>
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
    background-color: #f2f2f2;
    border-radius: 20px;
  }

  input[type=text],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: #45a049;
  }

  // div {
  //   border-radius: 5px;
  //   background-color: #f2f2f2;
  //   padding: 20px;
  // }
</style><!-- form version 1.1 -->

<style lang="scss" scoped>
  .form-container {
    /* max-width: 400px; */
    /* margin: 0 auto; */
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    margin: 0 auto;
    padding: 20px;
  }

  .form-group {
    margin-bottom: 15px;
    float: left;
  }

  // label {
  //   display: block;
  //   margin-bottom: 5px;
  //   font-weight: bold;
  // }

  h1 {
    text-align: center;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    background-color: #3498db;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }

  button:hover {
    background-color: #2980b9;
  }
</style> <!-- form version 1 -->