<template>
  <div class=''>
    <a-form :form="form">
      <a-form-item label="哈哈">
        <a-input
        v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
        ></a-input>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class HelloWorld extends Vue {
  // initial data
  form:object = this.$form.createForm(this, { name: 'coordinated' })
  // lifecycle hook
  private created():void {}
  private mounted():void {}
  private destroyed():void {}
  // methods
  
}
</script>

<style scoped lang='less'>

</style>