<script>
import { merge } from "lodash";

export default {
  render() {
    const on = { ...this.$listeners };
    const props = {
      rowSelection: this.rowSelection,
      locale: this.locale,
      scroll: this.scroll,
      ...this.$attrs,
      pagination: this.pagination
    };
    console.log("测试1", props);
    const table = (
      <a-table props={props} on={on} scopedSlots={this.$scopedSlots}></a-table>
    );
    return <div class="table"> {table} </div>;
  },
  data() {
    return {
      //分页选项配置
      pagination: {
        hideOnSinglePage: true,
        defaultCurrent: 1,
        defaultPageSize: 10,
        pageSize: 10,
        showQuickJumper: true,
        showSizeChanger: true,
        showTotal: total => `共 ${total} 条数据`,
        onChange: (page, pageSize) => {
          this.onPageChange(page);
        },
        onShowSizeChange: (current, size) => {
          this.onPageSizeChange(current, size);
        }
      },
      //行选择（全选，单选）配置
      rowSelection: {
        onSelect: (record, selected, selectedRows) => {
          this.handleSelect(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
          this.handleSelectAll(selected, selectedRows, changeRows);
        }
      },
      //空数据展示文案
      locale: {
        // emptyText: "没有数据啊！",
        // filterConfirm: '确定',
        // filterReset: '重置'
      },
      scroll: {
        // x: 960,
        // y: 350
      }
    };
  },
  watch: {
    "$attrs.pagination": {
      handler(val, oldVal) {
        const { pagination } = this.$attrs;
        this.pagination = merge({ ...this.pagination }, pagination);
        console.log("监听1", this.$attrs);
      },
      deep: true
    }
  },
  methods: {
    //分页
    onPageChange(page) {
      this.$emit("onPageChange", page);
    },
    //分页条数
    onPageSizeChange(current, size) {
      this.$emit("onPageSizeChange", current, size);
    },
    //单选 取消单选
    handleSelect(record, selected, selectedRows) {
      this.$emit("handleSelect", record, selected, selectedRows);
    },
    //全选 反选
    handleSelectAll(selected, selectedRows, changeRows) {
      this.$emit("handleSelectAll", selected, selectedRows, changeRows);
    }
  },
  mounted() {
    console.log("scopedSlots", this.$scopedSlots);
  }
};
</script>
