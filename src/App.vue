<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <router-view></router-view>
    </a-locale-provider>
  </div>
</template>

<script lang="ts">
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class App extends Vue {
  private locale: any = zhCN;
}
</script>

<style lang="less"></style>
