<template>
  <div class="tableToolbar">
    <a-row>
      <a-col :span="12">
        <a-form layout="inline">
          <a-form-item v-if="type === 0">
            <a-input-search
              placeholder="组织名称"
              style="width: 200px"
              @search="onSearch"
            />
          </a-form-item>
          <template v-else>
            <a-form-item label="岗位名称:">
              <a-input
                style="width: 200px"
                @change="onInputChange"
                v-model="inputVal"
              />
            </a-form-item>

            <a-form-item label="所属公司:">
              <a-tree-select
                style="width: 200px"
                @change="onTreeChange"
                :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                :tree-data="treeList"
                tree-default-expand-all
              >
              </a-tree-select>
            </a-form-item>
          </template>
        </a-form>
      </a-col>
      <a-col :span="12" class="right">
        <!-- 自定义按钮 -->
        <slot></slot>

        <a-dropdown>
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item key="1">
              <a-icon type="user" />批量导入岗位</a-menu-item
            >
            <a-menu-item key="2"> <a-icon type="user" />导出</a-menu-item>
            <a-menu-item key="3"> <a-icon type="user" />批量删除</a-menu-item>
            <a-menu-item key="4">
              <a-icon type="user" />批量更新数据</a-menu-item
            >
          </a-menu>
          <a-button> 更多操作 <a-icon type="down" /> </a-button>
        </a-dropdown>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
const treeList = [
  {
    title: "Node1",
    value: "0-0",
    key: "0-0",
    children: [
      {
        value: "0-0-1",
        key: "0-0-1",
        // scopedSlots: {
        //   // custom title
        title: "title"
        // },
      },
      {
        title: "Child Node2",
        value: "0-0-2",
        key: "0-0-2"
      }
    ]
  },
  {
    title: "Node2",
    value: "0-1",
    key: "0-1"
  }
];
import { isArray } from "lodash";
import { Component, Vue, Prop, Emit, Watch } from "vue-property-decorator";
@Component
export default class TableToolbar extends Vue {
  @Prop({ default: () => 0 }) readonly type?: number;
  @Prop({ default: () => [] }) readonly treeData?: [];
  @Prop({ default: () => false }) readonly isRequestData?: false;
  // initial data
  private inputVal = "";
  private searchVal = "";
  private treeList: any = [];
  // lifecycle hook
  private created(): void {}
  private mounted(): void {
    this.getTreeData();
  }
  private destroyed(): void {}
  // emit
  @Emit() onInputChange(): void {}
  @Emit() onSearch(value: any): void {}
  @Emit() onTreeChange(value: any, label: any, extra: any): void {}
  @Emit() handleMenuClick(value: any): void {}

  @Watch("treeData") setTreeData() {
    this.treeList = isArray(this.treeData) ? this.treeData : [];
  }
  // methods
  getTreeData(): void {
    if (this.isRequestData) return;
    this.treeList = treeList;
  }
}
</script>

<style lang="less">
.tableToolbar {
  padding: 10px;
  .right {
    text-align: right;
    button {
      margin-left: 10px;
    }
  }
}
</style>
