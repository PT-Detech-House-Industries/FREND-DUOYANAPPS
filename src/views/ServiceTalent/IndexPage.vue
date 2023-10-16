<template>
  <div>
    <h1>Hello, this is Service Talent Page</h1>

    <!-- Formulir input -->
    <form @submit.prevent="postData">
      <div>
        <label for="service_code">Service Code:</label>
        <input v-model="formData.service_code" type="text" id="service_code" required>
      </div>
      <div>
        <label for="service_kind">Service Kind:</label>
        <input v-model="formData.service_kind" type="text" id="service_kind" required>
      </div>
      <div>
        <label for="service_name">Service Name:</label>
        <input v-model="formData.service_name" type="text" id="service_name" required>
      </div>
      <div>
        <label for="duration">Duration:</label>
        <input v-model="formData.duration" type="text" id="duration" required>
      </div>
      <div>
        <label for="price_service">Price Service:</label>
        <input v-model="formData.price_service" type="text" id="price_service" required>
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea v-model="formData.description" id="description" required></textarea>
      </div>
      <div>
        <label for="point">Point:</label>
        <input v-model="formData.point" type="text" id="point" required>
      </div>
      <button type="submit">Submit</button>
    </form>

    <!-- Tabel untuk menampilkan data yang telah disimpan -->
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Service Code</th>
          <th>Service Kind</th>
          <th>Service Name</th>
          <th>Duration</th>
          <th>Price Service</th>
          <th>Description</th>
          <th>Point</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in ServiceTalent.data" :key="data.id">
          <td>{{ data.id }}</td>
          <td>{{ data.code }}</td>
          <td>{{ data.kind }}</td>
          <td>{{ data.name }}</td>
          <td>{{ data.duration }}</td>
          <td>{{ data.service }}</td>
          <td>{{ data.point }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {
    mapActions
  } from 'vuex';
  export default {
    name: 'ServiceTalentPage',
    data() {
      return {
        formData: {
          service_code: '',
          service_kind: '',
          service_name: '',
          duration: '',
          price_service: '',
          description: '',
          point: '',
        },
      };
    },
    methods: {
      // ...mapActions(['fetchData', 'fetchAbout', 'fetchAbout1']),
      ...mapActions(['fetchAbout1','postServiceTalent']),
      // async fetchDataAndAbout() {
      //   await this.fetchData();
      //   await this.fetchAbout();
      //   await this.fetchAbout1();
      // },

      postData() {
        // Validasi input sebelum mengirim data ke server
        if (!this.formData.service_code || !this.formData.service_kind || !this.formData.service_name || !this.formData
          .duration || !this.formData.price_service || !this.formData.description || !this.formData.point) {
          alert('Harap isi semua bidang yang diperlukan.');
          return;
        }
        this.postServiceTalent(this.formData)
          .then(() => {
            this.fetchAbout1();
            // Bersihkan formulir
            this.formData = {
              service_code: '',
              service_kind: '',
              service_name: '',
              duration: '',
              price_service: '',
              description: '',
              point: '',
            };
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    },
    computed: {
      ServiceTalent() {
        return this.$store.state.ServiceTalent;
      },
    },
    created() {
      this.fetchAbout1();
    },
    mounted() {
      document.title = 'service talent - nihonuwu'
    }
  }
</script>

<style></style>