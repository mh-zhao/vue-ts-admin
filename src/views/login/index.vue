<!--
 * @Author: mhzhao
 * @Date: 2020-06-03 10:56:11
 * @LastEditTime: 2020-06-05 14:23:55
-->
<template>
  <max-view :width="width" :height="height">
    <div class="login">
      {{w}}---{{h}}
      <a-button type="primary" @click="handleBtn">
        Primary
      </a-button>
    </div>
  </max-view>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getData, getPost } from "../../api/common";
import MaxView from '../layout/components/max-view.vue'
@Component({
  components: {
    MaxView
  }
})
export default class HelloWorld extends Vue {
  // initial data
  height = 1080;
  width = 1920;
  w = window.innerWidth;
  h = window.innerHeight;
  // lifecycle hook
  private created(): void {}
  private mounted(): void {
    
  }
  private destroyed(): void {}
  // methods
  async handleBtn() {
    const data = await getPost({ key: "1" });
    console.log("数据2", data);
    const res = await getData();
    console.log("数据1", res);
  }
  
}
</script>

<style scoped lang="less">
.login {
  
}
</style>
