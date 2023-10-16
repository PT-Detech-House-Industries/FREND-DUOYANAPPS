// export const SET_DATA = (state, newData) => {
//   state.dataUserLogin = newData;
// }

const mutations = {
  // Definisikan mutations di sini
  SET_DATA(state, newData) {
    state.data = newData;
  },

  AboutDashboard(state, AboutDashboard) {
    state.AboutDashboard = AboutDashboard;
  },
  
  ProfileAccount(state, ProfileAccount) {
    state.ProfileAccount = ProfileAccount;
  },

  ServiceTalent(state, ServiceTalent) {
    state.ServiceTalent = ServiceTalent;
  },

  postServiceTalent(state, postServiceTalent) {
    state.postServiceTalent = postServiceTalent;
  },
};

export default mutations;