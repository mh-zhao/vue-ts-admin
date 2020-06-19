

<script lang='tsx'>
import {Form} from 'ant-design-vue'
import { Component, Vue } from 'vue-property-decorator';
@Component({
  props: {Form}
})
class HelloWorld extends Vue {
  // initial data
  
  // lifecycle hook
  private created():void {}
  private mounted():void {
  }
  private destroyed():void {}
  // methods
  onBtn() {
    this.Form.validateFields((err:any, values:object) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator,createFormField } = this.Form;
    return(
      <div class=''>
        <a-form>
          <a-form-item label="test:">
           {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please enter a user name' }],
              })(
                <a-input
                  id="username"
                  prefix-icon="iconfont-user"
                  placeholder="Please enter a user name"
                >
                  <a-icon slot="prefix" type="user" />
                </a-input>,
              )}
          </a-form-item>
        </a-form>
        <a-button onClick={this.onBtn}>按钮</a-button>
      </div>
    )
  }
}

const mapPropsToFields = () => {
  console.log('值',Form)
  return {
    username:  Form.createFormField({
            // ...this.username,
            value: '11'
          })
  }
}

// export default HelloWorld
export default Form.create({mapPropsToFields})(HelloWorld)
</script>

<style scoped lang='less'>

</style>