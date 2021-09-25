import { SET_MENUS } from "module";
import { app_login, app_userInfo } from "module";
const actions = {
  [SET_MENUS]({ commit }, data) {
    return new Promise((resolve, reject) => {
      app_login(data)
        .then((res) => {
          //存菜单
          commit(SET_MENUS, res.data);
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};
export default actions;
