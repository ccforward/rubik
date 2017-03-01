<template>
  <article>
    <h1>选择器 Select</h1>

    <h2>例子</h2>

    <r-row>
      <r-col xs3>
        <r-select v-model="seled1" :options="options" id="test" label="Browser Select" dftDisabled name="test"  :dftText="dft"></r-select>
      </r-col>
    </r-row>
    <p v-if="seled1">
      选择了 {{seled1}}
    </p>

    <h3>默认选中</h3>
    <r-row>
    <r-col xs3>
      <r-select v-model="seled2" :options="options" id="test" label="FF 默认选中" name="test"  :dftText="dft"></r-select>
    </r-col>
    </r-row>

    <h3>Disabled Option</h3>
    <r-row>
    <r-col xs3>
      <r-select v-model="seled2" :options="options2" id="test" label="disabled option" name="test"  :dftText="dft"></r-select>
    </r-col>
    </r-row>
    
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
          <td>options</td>
          <td>
            Option 选项的对象数组 有如下三个键值对<br>
            value: String, (option的value)<br>
            text: String, (option的text)<br>
            disabled: Boolean (option的是否可用)
          </td>
          <td>Array</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>value</td>
          <td>input[type=radio] 的 value 属性</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>dftText</td>
          <td>第一个 option 的 text 值</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>dftDisabled</td>
          <td>第一个 option 是否可用</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Select 是否可用</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>v-model 指令</td>
          <td>和 select 标签的 value 双向绑定</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody> 
    </table>

    <Markup :lang="'html'">
      &lt;r-select v-model="seled1" :options="options" id="test" label="Browser Select" dftDisabled name="test"  :dftText="dft"&gt;&lt;/r-select&gt;

      &lt;r-select v-model="seled2" :options="options" id="test" label="FF 默认选中" name="test"  :dftText="dft"&gt;&lt;/r-select&gt;

      &lt;r-select v-model="seled2" :options="options2" id="test" label="disabled option" name="test"  :dftText="dft"&gt;&lt;/r-select&gt;
    </Markup>
    <Markup :lang="'js'">  
      export default {
        data(){
          return {
            dft: '选择浏览器',
            seled1: null,
            seled2: 'ff',
            options: [
              {
                value: 'chrome',
                text: 'Chrome',
              },
              {
                value: 'safari',
                text: 'Safari',
              },
              {
                value: 'ff',
                text: 'FireFox',
              }
            ],
            options2: [
              {
                value: 'chrome',
                text: 'Chrome',
              },
              {
                value: 'disabled',
                text: 'Disabled: 这个不可用',
                disabled: true
              },
              {
                value: 'disabled',
                text: 'Disabled: 这个不可用 +1',
                disabled: true
              },
              {
                value: 'ff',
                text: 'FireFox',
              }
            ],
          }
        }
      }
    </Markup>
    
  </article>
</template>

<script>
export default {
  name: 'selects',
  data(){
    return {
      dft: '选择浏览器',
      seled1: null,
      seled2: 'ff',
      options: [
        {
          value: 'chrome',
          text: 'Chrome',
        },
        {
          value: 'safari',
          text: 'Safari',
        },
        {
          value: 'ff',
          text: 'FireFox',
        }
      ],
      options2: [
        {
          value: 'chrome',
          text: 'Chrome',
        },
        {
          value: 'disabled',
          text: 'Disabled: 这个不可用',
          disabled: true
        },
        {
          value: 'disabled',
          text: 'Disabled: 这个不可用 +1',
          disabled: true
        },
        {
          value: 'ff',
          text: 'FireFox',
        }
      ],
    }
  }
}
</script>
