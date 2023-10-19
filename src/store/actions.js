import axios from 'axios'

const serverApi = axios.create({
  // baseURL: 'http://localhost:8000/api/',
  baseURL: 'https://duoyan.nihonuwu.com/api/',
})

const cors = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
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
};

export default actions;