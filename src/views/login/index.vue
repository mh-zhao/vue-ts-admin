<!--
 * @Author: mhzhao
 * @Date: 2020-06-03 10:56:11
 * @LastEditTime: 2020-06-11 09:54:39
-->
<template>
  <div class="login">
    asdf
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getData, getPost } from "../../api/common";
@Component({
  components: {
  }
})
export default class HelloWorld extends Vue {
  // initial data
  
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
