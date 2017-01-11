<template>
  <article>
    <h1>多选框 Checkbox</h1>

    <h2>例子</h2>
    
    <r-checkbox id="check0" :list="list" :val="'red'" label="Red"></r-checkbox>
    <r-checkbox id="check1" :list="list" :val="'yellow'" label="Yellow 默认选中" checked="checked"></r-checkbox>
    <r-checkbox id="check2" :list="list" :val="'blue'" label="Blue"></r-checkbox>

    <p>
      已选 {{ list }}
    </p>

    <r-checkbox id="checkd" label="默认选中" checked="checked"></r-checkbox>
    <r-checkbox id="check-f" label="选中为填充效果" filled></r-checkbox>
    <r-checkbox id="check-i" label="Indeterminate Style" indeterminate></r-checkbox>
    <r-checkbox id="check-d1" label="Green" disabled="disabled"></r-checkbox>
    <r-checkbox id="check-d2" label="Brown" checked="checked" disabled="disabled"></r-checkbox>
    
  </article>
</template>

<script>
export default {
  name: 'checkboxes',
  data(){
    return {
      list: ['red'],
    }
  }
}
</script>
