import axios from 'axios'

const serverApi = axios.create({
  baseURL: 'http://localhost:8000/api/',
  // baseURL: 'https://duoyan.nihonuwu.com/api/',
})

const cors = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
    // 'Content-Type': 'multipart/form-data',
  }
};

const actions = {
  async fetchData({ commit }) {
    try {
      // Panggil API di sini
      const response = await axios.get('https://dummyjson.com/products');
      const data = response.data;
      commit('SET_DATA', data); // Panggil mutasi SET_DATA untuk menyimpan data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  async fetchAbout({ commit }) {
    try {
      // Panggil API di sini
      const response = await serverApi.get('profile-account', cors);
      const data = response.data;
      commit('ProfileAccount', data); // Panggil mutasi SET_DATA untuk menyimpan data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  async fetchAbout1({ commit }) {
    try {
      // Panggil API di sini
      const response = await serverApi.get('service-talent', cors);
      const data = response.data;
      commit('ServiceTalent', data); // Panggil mutasi SET_DATA untuk menyimpan data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  async postServiceTalent({ commit }, formData) {
    try {
      // Panggil API POST di sini dengan menggunakan axios.post
      const response = await serverApi.post('service-talent/store', formData, cors);
      const data = response.data;
      commit('postServiceTalent', data); // Panggil mutasi SET_DATA untuk menyimpan data
    } catch (error) {
      console.error('Error posting data:', error);
    }
  },
  // product
  async fetchProduct({ commit }) {
    try {
      // Panggil API di sini
      const response = await serverApi.get('product', cors);
      const data = response.data;
      commit('productData', data); // Panggil mutasi SET_DATA untuk menyimpan data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  // member
  async fetchMember({ commit }) {
    try {
      // Panggil API di sini
      const response = await serverApi.get('member-purchasing', cors);
      const data = response.data;
      commit('memberData', data); // Panggil mutasi SET_DATA untuk menyimpan data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  async fetchMemberStample({ commit }) {
    try {
      // Panggil API di sini
      const response = await serverApi.get('member-stample', cors);
      const data = response.data;
      commit('memberStample', data); // Panggil mutasi SET_DATA untuk menyimpan data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  async fetchMemberStampleClaim({ commit }) {
    try {
      // Panggil API di sini
      const response = await serverApi.get('member-stample-claim', cors);
      const data = response.data;
      commit('memberStampleClaim', data); // Panggil mutasi SET_DATA untuk menyimpan data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  async fetchMemberPurchasing({ commit }) {
    try {
      // Panggil API di sini
      const response = await serverApi.get('member-purchasing', cors);
      const data = response.data;
      commit('memberPurchasing', data); // Panggil mutasi SET_DATA untuk menyimpan data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  async fetchMemberCheck({ commit }, formData) {
    try {
      // Panggil API di sini
      const response = await serverApi.post('member/check', formData, cors);
      const data = response.data;
      commit('memberCheck', data); // Panggil mutasi SET_DATA untuk menyimpan data
      return response; // Mengembalikan respons
    } catch (error) {
      const errorImage = false;
      // console.error('Error fetching data:', error);
      if (error.response && error.response.status === 500) {
        // console.error('Internal Server Error:', error);
        // Handle kesalahan 500 di sini, misalnya menampilkan pesan error kepada pengguna
        // alert('Terjadi kesalahan, Data Tidak Ditemukan.');
        return errorImage;
        //
      } if (error.response && error.response.status === 404) {
        //
        return errorImage;
        //
      } else {
        console.error('Error fetching data:', error);
      }
    }
  }, // post

  // member award

  async fetchMemberAward({ commit }) {
    try {
      // Panggil API di sini
      const response = await serverApi.get('member-award', cors);
      const data = response.data;
      commit('memberAward', data); // Panggil mutasi SET_DATA untuk menyimpan data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, // get

  async fetchMemberAwardRecord({ commit }) {
    try {
      // Panggil API di sini
      const response = await serverApi.get('member-award-record', cors);
      const data = response.data;
      commit('memberAwardRecord', data); // Panggil mutasi SET_DATA untuk menyimpan data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, // get

};

export default actions;