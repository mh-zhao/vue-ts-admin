<template>
  <div v-if="routes.length !== 1">
    <a-breadcrumb>
      <a-breadcrumb-item>
        <router-link to="/">首页</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item v-for="item in routes" :key="item.path">
        {{ item.meta.title }}
        <!-- <router-link :to="item.path">{{item.meta.title}}</router-link> -->
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
@Component
export default class Mbreadcrumb extends Vue {
  // initial data
  private routes: any[] = [];
  // lifecycle hook
  private created(): void {}
  private mounted(): void {}
  private destroyed(): void {}
  @Watch("$route", { immediate: true }) setBreadcrumb() {
    const { matched } = this.$route;
    const routeList = matched.filter(item => item.meta.title);
    this.routes = routeList;
  }
  // methods
}
</script>

<style scoped lang="less"></style>
