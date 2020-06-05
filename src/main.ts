import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as filters from "./utils/filters";
import { Button, Dropdown, Menu, Icon } from "ant-design-vue";

//reset CSS
import "./assets/css/reset.css";
import "./assets/css/common.css";

//mockjs基础用法
import "./mock";

Vue.config.productionTip = false;

//注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.use(Button);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Dropdown);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
