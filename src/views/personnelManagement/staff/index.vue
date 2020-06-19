<template>
  <div class="staff">
    <!-- <table-toolbar
      type="1"
      @on-search="onSearch"
      @handle-menu-click="handleMenuClick"
    >
      <a-button type="primary">
        新增职级
      </a-button>
    </table-toolbar> -->
    <div class="toolbar">
      <a-row>
        <a-col span="12" class="left">
          <a-popover trigger="click" placement="bottomLeft">
            <template slot="content">
              <staff-form></staff-form>
            </template>
            <a-button type="primary" icon="filter">
              筛选
            </a-button>
          </a-popover>

          <a-input-search
            placeholder="姓名/员工编号/手机"
            style="width: 200px"
            @search="onSearch"
          />
        </a-col>
        <a-col span="12" class="right">
          <a-button type="primary">
            添加员工
          </a-button>

          <a-dropdown>
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="1"> <a-icon type="user" />调整部门</a-menu-item>
              <a-menu-item key="2"> <a-icon type="user" />转正</a-menu-item>
              <a-menu-item key="3"> <a-icon type="user" />离职</a-menu-item>
              <a-menu-item key="4"> <a-icon type="user" />人事变更</a-menu-item>
            </a-menu>
            <a-button> 人事异动 <a-icon type="down" /> </a-button>
          </a-dropdown>

          <a-dropdown>
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="1"> <a-icon type="user" />导入员工</a-menu-item>
              <a-menu-item key="2"> <a-icon type="user" />导入税务模板人员</a-menu-item>
              <a-menu-item key="3"> <a-icon type="user" />批量修改基本信息</a-menu-item>
              <a-menu-item key="4"> <a-icon type="user" />批量修改岗位信息</a-menu-item>
            </a-menu>
            <a-button> 批量导入 <a-icon type="down" /> </a-button>
          </a-dropdown>

          <a-dropdown>
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="1"> <a-icon type="user" />人员信息</a-menu-item>
              <a-menu-item key="2"> <a-icon type="user" />税务模板</a-menu-item>
            </a-menu>
            <a-button> 导出 <a-icon type="down" /> </a-button>
          </a-dropdown>

        </a-col>
      </a-row>
    </div>

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
import staffForm from "../../../components/filterform/staffForm.vue"
import { getRankTableData } from "../../../api/common";
@Component({
  components: {
    mTable,
    staffForm
  }
})
export default class Staff extends Vue {
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
.staff {
  .toolbar {
    padding: 10px;
    .left {
      display: flex;
      button {
        margin-right: 10px;
      }
    }
    .right {
      text-align: right;
      button {
        margin-left: 10px;
      }
    }
  }
  .box {
    padding: 10px;
  }
}
</style>
