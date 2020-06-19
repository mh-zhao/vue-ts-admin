<template>
  <div class="table">
    <table-toolbar
      @on-input-change="onInputChange"
      @on-search="onSearch"
      @on-tree-change="onTreeChange"
      @handle-menu-click="handleMenuClick"
    ></table-toolbar>

    <m-table
      :loading="isShowLoading"
      :columns="tableColumns"
      :data-source="tableData"
      :pagination="pagination"
      @on-page-change="onPageChange"
      @on-page-size-change="onPageSizeChange"
      @handle-select="handleSelect"
      @handle-select-all="handleSelectAll"
    >
      <a slot="name" slot-scope="text" @click="handleText(text)">{{ text }}</a>
      <span slot="test1" slot-scope="text">
        <a-tooltip placement="topLeft">
          <template slot="title">
            {{ text }}
          </template>
          {{ text }}
        </a-tooltip>
      </span>
    </m-table>
  </div>
</template>

<script lang="ts">
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "测试1",
    ellipsis: true,
    dataIndex: "test1",
    key: "test1",
    scopedSlots: { customRender: "test1" }
  },
  {
    title: "测试1",
    dataIndex: "test2",
    key: "test2",
    scopedSlots: { customRender: "test2" }
  },
  {
    title: "测试1",
    dataIndex: "test3",
    key: "test3",
    scopedSlots: { customRender: "test3" }
  },
  {
    title: "测试1",
    dataIndex: "test4",
    key: "test4",
    scopedSlots: { customRender: "test4" }
  },
  {
    title: "测试1",
    dataIndex: "test5",
    key: "test5",
    scopedSlots: { customRender: "test5" }
  },
  {
    title: "测试1",
    dataIndex: "test6",
    key: "test6",
    scopedSlots: { customRender: "test6" }
  },
  {
    title: "测试1",
    dataIndex: "test7",
    key: "test7",
    scopedSlots: { customRender: "test7s" }
  },
  {
    title: "操作",
    dataIndex: "action",
    key: "action",
    align: "center",
    fixed: "right",
    scopedSlots: { customRender: "action" }
  }
];
const data = [
  {
    key: "1",
    name: "王五",
    test1:
      "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
  },
  {
    key: "2",
    name: "张三"
  },
  {
    key: "3",
    name: "李四"
  }
];
import mTable from "../../components/table/index.vue";
import tableToolbar from "../../components/toolbar/index.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    mTable,
    tableToolbar
  }
})
export default class Table extends Vue {
  // initial data
  private isShowLoading = true;
  private tableColumns: any[] = columns;
  private tableData: any[] = [];
  private pagination: object = {};
  // lifecycle hook
  private created(): void {}
  private mounted(): void {
    setTimeout(() => {
      this.pagination = {
        total: 50
      };
      this.tableData = data;
      this.isShowLoading = false;
      console.log("测试", this.pagination);
    }, 2000);
  }
  private destroyed(): void {}
  // methods
  //分页
  onPageChange(page: any): void {
    console.log("分页", page);
  }
  //分页条数
  onPageSizeChange(current: any, size: any): void {
    console.log("分页条数", current, size);
  }
  //单选 取消单选
  handleSelect(record: any, selected: any, selectedRows: any) {
    console.log("单选:", record, selected, selectedRows);
  }
  //全选 反选
  handleSelectAll(selected: any, selectedRows: any, changeRows: any) {
    console.log("全选反选:", selected, selectedRows, changeRows);
  }
  handleText(val: string) {
    console.log("时间", val);
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

<style scoped lang="less"></style>
