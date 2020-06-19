<template>
  <div class=''>
    <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
        placeholder="Username"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        Remember me
      </a-checkbox>
      <a class="login-form-forgot" href="">
        Forgot password
      </a>
      <a-button type="primary" html-type="submit" class="login-form-button">
        Log in
      </a-button>
      Or
      <a href="">
        register now!
      </a>
    </a-form-item>
  </a-form>
  <!-- <a-form-model :rules="rules" :model="formVal" ref="ruleForm">
    <a-form-model-item label="测试" prop="name">
      <a-input v-model="formVal.name"></a-input>
    </a-form-model-item>
    <a-button @click="handleBtn">提交</a-button>
    <a-button @click="handleReset">重置</a-button>
  </a-form-model> -->
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class HelloWorld extends Vue {
  // initial data
  private formVal:object = {
    name: ''
  }
  private rules:object = {
    name: [{ required: true, message: 'Please input Activity name' },]
  }
  private formLayout:string = 'horizontal'
  private form:any = this.$form.createForm(this, { name: 'setForm' })
  // lifecycle hook
  private created():void {}
  private mounted():void {}
  private destroyed():void {}
  // methods
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  handleSelectChange(value) {
    console.log(value);
    // this.form.setFieldsValue({
    //   note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    // });
  }
  onBtn() {
    this.form.validateFields((err, values) => {
      console.log('表单',err)
        console.log('表单2',values)
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
  }
  handleBtn() {
    this.$refs.ruleForm.validate((err,vaules) => {
       console.log('提交',err,vaules)
    })
   
  }
  handleReset() {
    this.$refs.ruleForm.resetFields();
  }
}
</script>

<style scoped lang='less'>

</style>