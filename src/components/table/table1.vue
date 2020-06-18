<template>
  <div class="table">
    <a-table
      v-bind="{ rowSelection, locale, scroll, ...$attrs, pagination }"
      size="middle"
    >
    </a-table>
  </div>
</template>

<script lang="ts">
import { merge } from "lodash";
import { Component, Vue, Watch, Emit } from "vue-property-decorator";
@Component
export default class Table extends Vue {
  // initial data
  //分页选项配置
  private pagination: object = {
    hideOnSinglePage: true,
    defaultCurrent: 1,
    defaultPageSize: 10,
    pageSize: 10,
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: total => `共 ${total} 条数据`,
    onChange: (page: any, pageSize: any) => {
      this.onPageChange(page);
    },
    onShowSizeChange: (current: any, size: any) => {
      this.onPageSizeChange(current, size);
    }
  };
  //行选择（全选，单选）配置
  private rowSelection: object = {
    onSelect: (record: any, selected: any, selectedRows: any) => {
      this.handleSelect(record, selected, selectedRows);
    },
    onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
      this.handleSelectAll(selected, selectedRows, changeRows);
    }
  };
  //空数据展示文案
  private locale: object = {
    // emptyText: "没有数据啊！",
    // filterConfirm: '确定',
    // filterReset: '重置'
  };
  private scroll: object = {
    // x: 960,
    y: 350
  };
  // lifecycle hook
  private created(): void {
    console.log("table", this.$attrs);
    console.log("table2", this.$props);
  }
  private mounted(): void {}
  private destroyed(): void {}

  @Watch("$attrs.pagination") setTotal() {
    const { pagination } = this.$attrs;
    this.pagination = merge({ ...this.pagination }, pagination);
    console.log("监听", this.pagination);
  }
  //分页
  @Emit() onPageChange(page: any): void {}
  //分页条数
  @Emit() onPageSizeChange(current: any, size: any): void {}
  //单选 取消单选
  @Emit() handleSelect(record: any, selected: any, selectedRows: any): void {}
  //全选 反选
  @Emit() handleSelectAll(
    selected: any,
    selectedRows: any,
    changeRows: any
  ): void {}

  // methods
}
</script>

<style scoped lang="less"></style>
