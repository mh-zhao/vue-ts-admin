import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as filters from "./utils/filters";
import {
  Button,
  Dropdown,
  Menu,
  Icon,
  Breadcrumb,
  Tabs,
  Table,
  Pagination,
  LocaleProvider,
  ConfigProvider,
  Tooltip,
  Row,
  Col,
  Form,
  FormModel,
  Input,
  TreeSelect,
  Popover,
  Select,
  DatePicker
} from "ant-design-vue";
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


Vue.use(FormModel);
Vue.use(DatePicker);
Vue.use(Select);
Vue.use(Popover);
Vue.use(Button);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Dropdown);
Vue.use(Breadcrumb);
Vue.use(Tabs);
Vue.use(Table);
Vue.use(Pagination);
Vue.use(LocaleProvider);
Vue.use(ConfigProvider);
Vue.use(Tooltip);
Vue.use(Row);
Vue.use(Col);
Vue.use(Form);
Vue.use(Input);
Vue.use(TreeSelect);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
