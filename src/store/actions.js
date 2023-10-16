import axios from 'axios'

const serverApi = axios.create({
  baseURL: 'http://localhost:8000/api/',
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
};

export default actions;