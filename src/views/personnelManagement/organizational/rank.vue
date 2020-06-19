<template>
  <div class="rank">
    <table-toolbar
      type="1"
      @on-search="onSearch"
      @handle-menu-click="handleMenuClick"
    >
      <a-button type="primary">
        新增职级
      </a-button>
    </table-toolbar>

    <div class="box">
      <m-table
        :loading="isShowloding"
        :columns="rankColumns"
        :data-source="rankTableData"
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
const rankColumns = [
  {
    title: "职级名称",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" }
  }
];

import { Component, Vue } from "vue-property-decorator";
import mTable from "../../../components/table/index.vue";
import tableToolbar from "../../../components/toolbar/index.vue";
import { getRankTableData } from "../../../api/common";
@Component({
  components: {
    mTable,
    tableToolbar
  }
})
export default class Rank extends Vue {
  // initial data
  private rankColumns: any[] = rankColumns;
  private rankTableData: any[] = [];
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
    const res = await getRankTableData();
    const data: any[] = [];
    res.data.list.forEach(item => {
      data.push({
        key: item.id,
        name: item.name,
        test1: item.test1
      });
    });
    this.rankTableData = data;
    this.pagination = { total: 50 };
    setTimeout(() => {
      this.isShowloding = false;
    }, 1000);
    console.log("数据3", data);
  }

  //分页
  onPageChange(pageNum: any) {
    console.log("3分页", pageNum);
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

<style lang="less">
.rank {
}
</style>
