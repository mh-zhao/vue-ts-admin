/*
 * @Author: mhzhao
 * @Date: 2020-06-05 15:18:28
 * @LastEditTime: 2020-06-05 15:22:25
 */ 
const common = {
  state: {
    reportFormFullscreen: false, //报表全屏
  },

  mutations: {
    SET_STATE: (state:any, data:object) => {
      state = Object.assign(state, data);
    }
  },

  actions: {

  }
}

export default common;