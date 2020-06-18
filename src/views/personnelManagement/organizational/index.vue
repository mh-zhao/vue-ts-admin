<template>
  <div class="organizational-wrap">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="组织管理">
        <organizational></organizational>
      </a-tab-pane>
      <a-tab-pane key="2" tab="岗位管理">
        <jobs></jobs>
      </a-tab-pane>
      <a-tab-pane key="3" tab="职级管理">
        <rank></rank>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import Organizational from "./organization.vue";
import Jobs from "./jobs.vue";
import Rank from "./rank.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    Organizational,
    Jobs,
    Rank
  }
})
export default class HelloWorld extends Vue {
  // initial data
  // lifecycle hook
  private created(): void {}
  private mounted(): void {}
  private destroyed(): void {}
  // methods
  callback(key) {
    console.log(key);
  }
}
</script>

<style scoped lang="less">
.organizational-wrap {
  /deep/ .ant-tabs-bar {
    margin-bottom: 0;
  }
  /deep/ .box {
    padding: 10px;
  }
}
</style>
