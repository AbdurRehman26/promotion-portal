const getters = {
  token: state => state.auth.token,
  user: state => JSON.parse(state.auth.user)
};
export default getters;
