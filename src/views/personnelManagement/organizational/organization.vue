<template>
  <div class="organizational">
    <table-toolbar @on-search="onSearch" @handle-menu-click="handleMenuClick">
      <a-button type="primary">
        新增部门
      </a-button>
    </table-toolbar>

    <div class="box">
      <m-table
        :loading="isShowloding"
        :columns="organizationColumns"
        :data-source="organizationTableData"
        :pagination="pagination"
        :rowSelection="null"
        @on-page-change="onPageChange"
        @on-page-size-change="onPageSizeChange"
      >
        <!-- <a slot="name" slot-scope="text" @click="handleText(text)">{{ text }}</a> -->
      </m-table>
    </div>
  </div>
</template>

<script lang="ts">
const organizationColumns = [
  {
    title: "组织名称",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" }
  }
];

import { Component, Vue } from "vue-property-decorator";
import mTable from "../../../components/table/index.vue";
import tableToolbar from "../../../components/tableToolbar/index.vue";
import { getTable } from "../../../api/common";
@Component({
  components: {
    mTable,
    tableToolbar
  }
})
export default class Organizational extends Vue {
  // initial data
  private organizationColumns: any[] = organizationColumns;
  private organizationTableData: any[] = [];
  private pagination: object = {};
  private isShowloding: boolean | object = true;
  // lifecycle hook
  private created(): void {}
  private mounted(): void {
    this.getTableData();
  }
  private destroyed(): void {}
  // methods
  callback(key: any) {
    console.log(key);
  }

  async getTableData() {
    const res = await getTable();
    const data: any[] = [];
    res.data.list.forEach(item => {
      const childrens: any[] = [];
      if (item.children.length !== 0) {
        item.children.forEach(i => {
          childrens.push({
            key: i.id,
            name: i.name,
            test1: i.test1
          });
        });
      }

      data.push({
        key: item.id,
        name: item.name,
        test1: item.test1,
        children: childrens.length ? childrens : null
      });
    });
    this.organizationTableData = data;
    this.pagination = { total: 50 };
    setTimeout(() => {
      this.isShowloding = false;
    }, 1000);
    console.log("数据1", data);
  }

  //分页
  onPageChange(pageNum: any) {
    console.log("1分页", pageNum);
  }
  //分页条数
  onPageSizeChange(pageNum: any, size: any) {
    console.log("分页条数", pageNum, size);
  }

  onInputChange(val: string): void {
    console.log("input:", val);
  }
  onSearch(value: any): void {
    console.log("搜索框:", value);
  }
  onTreeChange(value: any, label: any, extra: any): void {
    console.log("树形框:", value, label, extra);
  }
  handleMenuClick(value: any): void {
    console.log("按钮:", value);
  }
}
</script>

<style lang="less">
.organizational {
}
</style>
