<template>
  <div class='staff-form'>
    <a-form :form="form">
      <!-- <a-row>
        <a-col span="6">
          <a-form-item label="员工类型">
            <a-select size="small"
            v-decorator="['type',{ rules: [{ required: true, message: 'Please input your note!' }] }]"
            >
              <a-select-option value="jack">
                Jack
              </a-select-option>
              <a-select-option value="lucy">
                Lucy
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col span="6">
          <a-form-item label="转正状态">
            <a-input size="small"></a-input>
          </a-form-item>
        </a-col>
        <a-col span="6">
          <a-form-item label="岗位">
            <a-input size="small"></a-input>
          </a-form-item>
        </a-col>
        <a-col span="6">
          <a-form-item label="员工状态">
            <a-input size="small"></a-input>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col span="6">
          <a-form-item label="入职时间">
            <a-date-picker @change="onDateChange" size="small" v-decorator="['date-picker',]"/>
          </a-form-item>
        </a-col>
        <a-col span="6">
          <a-form-item label="转正时间">
            <a-input size="small"></a-input>
          </a-form-item>
        </a-col>
        <a-col span="6">
          <a-form-item label="职级">
            <a-input size="small"></a-input>
          </a-form-item>
        </a-col>
        <a-col span="6">
          <a-form-item label="性别">
            <a-input size="small"></a-input>
          </a-form-item>
        </a-col>
      </a-row> -->

      <a-row>
        <a-col span="24">
          <a-form-item label="Note">
            <a-input
              v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col span="24" class="foot">
          <a-button type="primary" @click="handleOk" size="small">确认</a-button>
          <a-button size="small" @click="handleReset">重置</a-button>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class StaffForm extends Vue {
  // initial data
  private form:any = this.$form.createForm(this, {name: 'staffForm'})
  // lifecycle hook
  private created():void {}
  private mounted():void {}
  private destroyed():void {}
  // methods
  onDateChange():void {

  }
  handleOk():void {
    this.form.validateFields((err, value) => {
      console.log('表单1',err,value,)
      if (!err) return;
      console.log('表单',value)
    })
  }
  handleReset():void {
    console.log('充值')
    this.form.resetFields();
  }
}
</script>

<style scoped lang='less'>
.staff-form {
  /deep/ .ant-form-item {
    display: flex;
    margin-bottom: 0;
  }
  /deep/ .ant-form-item-label {
    width: 80px;
  }
  /deep/ .ant-form-item-control-wrapper {
    flex: 1;
  }
  /deep/ .ant-form {
    max-width: none;
  }
  .foot {
    text-align: right;
    padding: 10px;
    button {
      margin-right: 10px;
    }
  }

}

</style>