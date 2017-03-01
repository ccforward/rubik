<template>
  <article>
    <h1>输入 input</h1>

    <p>
      TODO: 添加错误提示
    </p>

    <h2>例子</h2>


    <h3>Basic</h3>
    <r-input label="this is label" v-model="val" name="input1-name"></r-input>
    <r-input label="this is label" v-model="val1" name="input2-name" ></r-input>
    <r-input placeholder="disabled" disabled></r-input>
    
    <h3>密码</h3>
    <r-row>
      <r-col xs6>
        <r-input type="password" label="输入密码"></r-input>
      </r-col>
      <r-col xs6>
        <r-input type="password" placeholder="password"></r-input>
      </r-col>
    </r-row>
    

    <h3>带 placeholder</h3>
    <r-input label="this is another label" v-model="val2" placeholder="这里是placeholder"></r-input>
    

    <h3>带 icon</h3>
    <r-input type="password" icon="security" label="Password" v-model="val3"></r-input>
    <r-row>
      <r-col xs6>
        <r-input icon="account_circle" label="this is another label" v-model="val4"></r-input>
      </r-col>
      <r-col xs6>
        <r-input icon="phone" placeholder="telphone" label="this is another label" v-model="val5"></r-input>
      </r-col>
    </r-row>

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
          <td>type</td>
          <td>input 输入框类型</td>
          <td>String</td>
          <td>text</td>
        </tr>
        <tr>
          <td>label</td>
          <td>label 标签</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>id</td>
          <td>input id 属性，对应 label 标签 for 属性</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>name</td>
          <td>input name 属性</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>input 的 placeholder</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>输入框左侧的 icon</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>输入框是否可用</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>v-model 指令</td>
          <td>和 input 的 value 双向绑定</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody> 
    </table>

    <Markup :lang="'html'">
      &lt;r-input label="this is label" v-model="val" name="input1-name"&gt;&lt;/r-input&gt;
      &lt;r-input type="password" label="输入密码"&gt;&lt;/r-input&gt;
      &lt;r-input label="this is another label"  placeholder="这里是placeholder"&gt;&lt;/r-input&gt;
      &lt;r-input type="password" icon="security" label="Password" &gt;&lt;/r-input&gt;
    </Markup>

  </article>
</template>

<script>
export default {
  name: 'inputs',
  data(){
    return {
      val: 'this is text',
      val1: '',
      val2: '',
      val3: '',
      val4: '',
      val5: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  h3 {
    margin 2rem 0
  }
</style>
