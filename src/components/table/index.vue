<script lang="tsx">
import { merge } from "lodash";
import { Component, Vue, Emit, Watch } from "vue-property-decorator";
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
    // y: 350
  };
  // lifecycle hook
  private created(): void {}
  private mounted(): void {}
  private destroyed(): void {}

  //监听
  @Watch("$attrs.pagination") setPageOption(): void {
    const { pagination } = this.$attrs;
    this.pagination = merge({ ...this.pagination }, pagination);
  }
  //Emit
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

  render() {
    const on = { ...this.$listeners };
    const props = {
      rowSelection: this.rowSelection,
      locale: this.locale,
      scroll: this.scroll,
      ...this.$attrs,
      pagination: this.pagination
    };
    const table = (
      <a-table props={props} on={on} scopedSlots={this.$scopedSlots}></a-table>
    );
    return <div class="table"> {table} </div>;
  }
}
</script>

<style lang="less">
.table {
  a {
    display: inline-block;
  }
}
</style>
