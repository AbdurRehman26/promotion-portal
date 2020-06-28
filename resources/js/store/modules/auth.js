import { login, logout, getInfo, signUp } from '@/api/auth';
import { getToken, setToken, removeToken } from '@/utils/auth';
import store from '@/store';

const state = {};

const mutations = {
  SET_USER: (state, user) => {
    state.user = JSON.stringify(user);
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo)
        .then(response => {
          commit('SET_TOKEN', response.data.token);
          setToken(response.data.token);
          resolve(response);
          location.href = "/";
        })
        .catch(error => {
          console.log(error, 1312321)
          reject(error);
        });
    });
  },

  // user login
  register({ commit }, userInfo) {
    const { email, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ email: email.trim(), password: password })
        .then(response => {
          commit('SET_TOKEN', response.access_token);
          setToken(response.access_token);
          resolve();
        })
        .catch(error => {
          console.log(error, 1312321)
          reject(error);
        });
    });
  },


  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then(response => {
          commit('SET_USER', response);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          commit('SET_TOKEN', '');
          commit('SET_ROLES', []);
          removeToken();
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '');
      commit('SET_ROLES', []);
      removeToken();
      resolve();
    });
  },

  // Dynamically modify permissions
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      // const token = role + '-token';

      // commit('SET_TOKEN', token);
      // setToken(token);

      // const { roles } = await dispatch('getInfo');

      const roles = [role.name];
      const permissions = role.permissions.map(permission => permission.name);
      commit('SET_ROLES', roles);
      commit('SET_PERMISSIONS', permissions);

      // generate accessible routes map based on roles
      const accessRoutes = await store.dispatch('permission/generateRoutes', { roles, permissions });

      // dynamically add accessible routes

      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
