<template>
  <div class="jobs">
    <table-toolbar
      type="1"
      :isRequestData="true"
      :treeData="treeData"
      @on-search="onSearch"
      @handle-menu-click="handleMenuClick"
    >
      <a-button type="primary">
        新增部门
      </a-button>
    </table-toolbar>

    <div class="box">
      <m-table
        :loading="isShowloding"
        :columns="jobsColumns"
        :data-source="jobsTableData"
        :pagination="pagination"
        @on-page-change="onPageChange"
        @on-page-size-change="onPageSizeChange"
        @handle-select="handleSelect"
        @handle-select-all="handleSelectAll"
      >
        <!-- <a slot="name" slot-scope="text" @click="handleText(text)">{{ text }}</a> -->
      </m-table>
    </div>
  </div>
</template>

<script lang="ts">
const jobsColumns = [
  {
    title: "岗位名称",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" }
  }
];

const treeData = [
  {
    title: "哈哈哈",
    value: "0-0",
    key: "0-0",
    children: [
      {
        value: "0-0-1",
        key: "0-0-1",
        title: "title"
      },
      {
        title: "Child Node2",
        value: "0-0-2",
        key: "0-0-2"
      }
    ]
  },
  {
    title: "哈哈哈2",
    value: "0-1",
    key: "0-1"
  }
];

import { Component, Vue } from "vue-property-decorator";
import mTable from "../../../components/table/index.vue";
import tableToolbar from "../../../components/tableToolbar/index.vue";
import { getPostTableData } from "../../../api/common";
@Component({
  components: {
    mTable,
    tableToolbar
  }
})
export default class Jobs extends Vue {
  // initial data
  private jobsColumns: any[] = jobsColumns;
  private jobsTableData: any[] = [];
  private pagination: object = {};
  private isShowloding: boolean | object = true;
  private treeData: any[] = [];
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
    const res = await getPostTableData();
    const data: any[] = [];
    res.data.list.forEach(item => {
      data.push({
        key: item.id,
        name: item.name,
        test1: item.test1
      });
    });
    this.jobsTableData = data;
    this.pagination = { total: 50 };
    setTimeout(() => {
      this.isShowloding = false;
      this.treeData = treeData;
    }, 1000);
    console.log("数据2", data);
  }

  //分页
  onPageChange(pageNum: any) {
    console.log("2分页", pageNum);
  }
  //分页条数
  onPageSizeChange(pageNum: any, size: any) {
    console.log("分页条数", pageNum, size);
  }
  //单选 取消单选
  handleSelect(record: any, selected: any, selectedRows: any) {
    console.log("单选:", record, selected, selectedRows);
  }
  //全选 反选
  handleSelectAll(selected: any, selectedRows: any, changeRows: any) {
    console.log("全选反选:", selected, selectedRows, changeRows);
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

<style scoped lang="less">
.jobs {
}
</style>
