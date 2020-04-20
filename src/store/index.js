import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    setUsers: (state, params) => {
      state.users = params.users
    }
  },
  actions: {
    async getUsers({ commit }) {
      await axios
        .get("https://nick-roy-api.herokuapp.com/user/getAll")
        .then(response => {
          const users = response.data
            .reverse()
            .slice(0, 3)
            .map(user => {
              return { ...user, editing: false, menu: false, valid: true }
            })
          commit('setUsers', { users })
        })
        .catch(error => console.log(error));
    },
    async createUser({ dispatch }, params) {
      await axios
        .post("https://nick-roy-api.herokuapp.com/user/create", {
          forename: params.forename,
          surname: params.surname,
          email: params.email,
          dob: params.dob
        })
        .then(response => {
          console.log(response.data);
          dispatch('getUsers')
        })
        .catch(error => console.log(error));
    },
    async deleteUser({ dispatch }, params) {
      await axios
        .delete(`https://nick-roy-api.herokuapp.com/user/delete/${params.id}`)
        .then(response => {
          console.log(response);
          dispatch('getUsers')
        })
        .catch(error => console.log(error));
    },
    async updateUser({ dispatch }, params) {
      const updateDocument = {
        forename: params.forename,
        surname: params.surname,
        email: params.email,
        dob: params.dob
      };
      await axios
        .put(
          `https://nick-roy-api.herokuapp.com/user/update/${params._id}`,
          updateDocument
        )
        .then(response => {
          dispatch('getUsers')
          console.log(response);
        })
        .catch(error => console.log(error));
    }
  }
});