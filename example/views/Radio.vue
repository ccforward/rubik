<template>
  <article>
    <h1>单选 Radio</h1>

    <h2>例子</h2>
      
    <h3>Basic</h3>
    <r-radio id="gender-male" name="gender" v-model="gender" value="男" label="男"></r-radio>
    <r-radio id="gender-female" name="gender" v-model="gender" value="女" label="女"></r-radio>

    <p>选中的性别：{{ gender }}</p>

    <r-radio id="checked-yes" name="checked" label="默认选中" checked></r-radio>

    <h3>圆点</h3>
    <r-radio id="color-b" name="color" dot value="黑" v-model="color" label="黑色"></r-radio>
    <r-radio id="color-w" name="color" dot value="白" v-model="color" label="白色"></r-radio>

    <p>选中的颜色：{{ color }}</p>

    <h3>disabled</h3>
    <r-radio id="d1" name="d1" label="disabled 选中 圆点" dot checked ></r-radio>
    <r-radio id="d2" name="d2" label="disabled 选中" disabled checked></r-radio>
    <r-radio id="d3" name="d3" label="disabled 未选中" disabled></r-radio>

    <h2>API</h2>

    <h3>props</h3>
    <table class="bordered responsive-table">
      <thead>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </thead>
      <tbody>
        <tr>
          <td>label</td>
          <td>label 标签</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>id</td>
          <td>input[type=radio] id 属性，对应 label 标签 for 属性</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>name</td>
          <td>input[type=radio] name 属性</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>checked</td>
          <td>radio 是否选中</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>radio 是否可用</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>value</td>
          <td>input[type=radio] 的 value 属性</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>v-model 指令</td>
          <td>和 input[type=radio] 的 value 双向绑定</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody> 
    </table>

    <Markup :lang="'html'">
      &lt;r-radio id="gender-male" name="gender" v-model="gender" value="男" label="男"&gt;&lt;/r-radio&gt;
      &lt;r-radio id="gender-female" name="gender" v-model="gender" value="女" label="女"&gt;&lt;/r-radio&gt;
      &lt;r-radio id="checked-yes" name="checked" label="默认选中" checked&gt;&lt;/r-radio&gt;

      &lt;r-radio id="color-b" name="color" dot label="黑色"&gt;&lt;/r-radio&gt;
      &lt;r-radio id="color-w" name="color" dot label="白色"&gt;&lt;/r-radio&gt;

      &lt;r-radio id="d1" name="d1" label="disabled 选中 圆点" dot checked &gt;&lt;/r-radio&gt;
      &lt;r-radio id="d2" name="d2" label="disabled 选中" disabled checked&gt;&lt;/r-radio&gt;
      &lt;r-radio id="d3" name="d3" label="disabled 未选中" disabled&gt;&lt;/r-radio&gt;
    </Markup>  
    <Markup :lang="'js'">
      export default {
        data(){
          return {
            gender: '男',
            color: '',
          }
        }
      }
    </Markup>

    </code>

  </article>
</template>

<script>
export default {
  name: 'radios',
  data(){
    return {
      gender: '男',
      color: '',
    }
  }
}
</script>

<style lang="stylus" scoped>
  h3 {
    margin 2rem 0
  }
</style>
