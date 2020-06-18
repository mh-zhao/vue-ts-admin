<template>
  <div class="m-table">
    <a-table
      :loading="loading"
      :locale="locale"
      :scroll="scroll"
      size="middle"
      :pagination="paginationOption"
      :columns="tableColumns"
      :data-source="tableData"
      :row-selection="rowSelectionOption"
    >
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="action" slot-scope="text, record, index" class="action">
        <a @click="handleEdit(text, record, index)">编辑</a>
        <a @click="handleDel(text, record, index)">删除</a>
      </span>
    </a-table>
  </div>
</template>

<script lang="ts">
import { merge } from "lodash";
import { Component, Vue, Prop, Emit, Watch } from "vue-property-decorator";
@Component
export default class MTable extends Vue {
  @Prop({ default: () => [] }) readonly tableColumns!: [];
  @Prop({ default: () => [] }) readonly tableData!: [];
  @Prop({ default: () => {} }) readonly rowSelection?: object;
  @Prop({ default: () => {} }) readonly pagination?: object;
  @Prop({ default: () => true }) readonly loading?: boolean | object;
  // initial datas
  //分页选项配置
  private paginationOption: object = {
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
  private rowSelectionOption: object = {
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
  private created(): void {}
  private mounted(): void {}
  private destroyed(): void {}

  //监听
  @Watch("pagination") setPageOption(): void {
    this.paginationOption = merge(
      { ...this.paginationOption },
      this.pagination
    );
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
  handleEdit(text: any, record: any, index: any) {
    console.log("编辑", text, record, index);
  }
  handleDel(text: any, record: any, index: any) {
    console.log("删除", text, record, index);
  }
}
</script>

<style scoped lang="less">
.action {
  a {
    display: inline-block;
    padding: 2px 5px;
  }
}
</style>
