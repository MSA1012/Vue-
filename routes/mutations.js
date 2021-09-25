import { SET_MENUS } from "module";
const mutations = {
  [SET_MENUS](state, routes) {
    state.asyncRoutes = routes;
  },
};
export default mutations;
