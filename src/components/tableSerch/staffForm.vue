
<script lang='tsx'>
import {Form} from 'ant-design-vue'

import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  props: {
    Form,
    formData: {
      type: object
    }
  }
})
class StaffForm extends Vue {
  // initial data

  // lifecycle hook
  private created():void {}
  private mounted():void {}
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
    const { getFieldDecorator } = this.Form
    return(
      <div class=''>
        <a-form>
          <a-form-item label="哈哈">
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

const mapPropsToFields = (props) => {
  console.log('props：',props)
}

export default Form.create({mapPropsToFields})(StaffForm)
</script>

<style scoped lang='less'>

</style>