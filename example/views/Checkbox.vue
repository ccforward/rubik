<template>
  <article>
    <h1>多选框 Checkbox</h1>

    <h2>例子</h2>

    <h3>Basic</h3>
    <r-checkbox id="check0" :selected="sel" :val="'red'" label="Red"></r-checkbox>
    <r-checkbox id="check1" :selected="sel" :val="'yellow'" label="Yellow 默认选中" checked="checked"></r-checkbox>
    <r-checkbox id="check2" :selected="sel" :val="'blue'" label="Blue"></r-checkbox>
    <p>
      已选 {{ sel }}
    </p>

    <r-checkbox id="checkd" label="默认选中" checked="checked"></r-checkbox>
    <r-checkbox id="check-f" label="选中为填充效果" filled></r-checkbox>
    <r-checkbox id="check-i" label="模糊状态 Indeterminate Style" indeterminate></r-checkbox>
    
    <h3>Disabled</h3>
    <r-checkbox id="check-d1" label="Green" disabled="disabled"></r-checkbox>
    <r-checkbox id="check-d2" label="Brown" checked="checked" disabled="disabled"></r-checkbox>
    
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
          <td>''</td>
        </tr>
        <tr>
          <td>id</td>
          <td>input[type=checkbox] id 属性，对应 label 标签 for 属性</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>name</td>
          <td>input[type=checkbox] name 属性</td>
          <td>String</td>
          <td>''</td>
        </tr>
        <tr>
          <td>checked</td>
          <td>checkbox 是否选中</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>checkbox 是否可用</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>val</td>
          <td>input[type=checkbox] 的值 (val会赋值到value中)</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>selected</td>
          <td>一组 checkbox 的已选项</td>
          <td>Array</td>
          <td>-</td>
        </tr>
        <tr>
          <td>filled</td>
          <td>选中状态为填充效果</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>indeterminate</td>
          <td>初始化状态为模糊效果</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
      </tbody> 
    </table>

    <Markup :lang="'html'">
      &lt;r-checkbox id="check0" :selected="selected" :val="'red'" label="Red"&gt;&lt;/r-checkbox&gt;
      &lt;r-checkbox id="check1" :selected="selected" :val="'yellow'" label="Yellow 默认选中" checked="checked"&gt;&lt;/r-checkbox&gt;
      &lt;r-checkbox id="check2" :selected="selected" :val="'blue'" label="Blue"&gt;&lt;/r-checkbox&gt;
    </Markup>
    <Markup :lang="'js'">
      export default {
        name: 'checkboxes',
        data(){
          return {
            selected: ['red'],
          }
        }
      }
    </Markup>

    <Markup :lang="'html'">
      &lt;r-checkbox id="checkd" label="默认选中" checked="checked"&gt;&lt;/r-checkbox&gt;
      &lt;r-checkbox id="check-f" label="选中为填充效果" filled&gt;&lt;/r-checkbox&gt;
      &lt;r-checkbox id="check-i" label="模糊状态 Indeterminate Style" indeterminate&gt;&lt;/r-checkbox&gt;
      
      &lt;r-checkbox id="check-d1" label="Green" disabled="disabled"&gt;&lt;/r-checkbox&gt;
      &lt;r-checkbox id="check-d2" label="Brown" checked="checked" disabled="disabled"&gt;&lt;/r-checkbox&gt;
    <Markup>

  </article>
</template>

<script>
export default {
  name: 'checkboxes',
  data(){
    return {
      sel: ['red'],
    }
  }
}
</script>
