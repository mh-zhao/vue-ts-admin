<!--
 * @Author: mhzhao
 * @Date: 2020-06-04 11:09:16
 * @LastEditTime: 2020-06-04 15:22:38
-->
<template functional>
  <a-sub-menu :key="props.menuInfo.path">
    <span slot="title">
      <a-icon type="pie-chart" /> <span>{{ props.menuInfo.permName }}</span>
    </span>
    <template v-for="item in props.menuInfo.menu">
      <a-menu-item v-if="!item.menu" :key="item.path">
        <a-icon type="pie-chart" /> <span>{{ item.permName }}</span>
      </a-menu-item>
      <sub-menu v-else :key="item.path" :menuInfo="item"></sub-menu>
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  name: "SubMenu",
  props: {
    menuInfo: {
      type: Object,
      required: true
    }
  }
};
</script>
