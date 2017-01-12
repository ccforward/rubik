<template>
  <article>
    <h1>选择器 Select</h1>

    <h2>例子</h2>

    <r-row>
      <r-col xs6>
        <r-select v-model="seled1" :options="options" id="test" label="Browser Select" dftDisabled name="test"  :dftTxt="dft"></r-select>
      </r-col>
    </r-row>
    <p v-if="seled1">
      选择了 {{seled1}}
    </p>

    <h3>默认选中</h3>
    <r-row>
    <r-col xs6>
      <r-select v-model="seled2" :options="options" id="test" label="FF 默认选中" name="test"  :dftTxt="dft"></r-select>
    </r-col>
    </r-row>

    <h3>Disabled Option</h3>
    <r-row>
    <r-col xs6>
      <r-select v-model="seled2" :options="options2" id="test" label="disabled option" name="test"  :dftTxt="dft"></r-select>
    </r-col>
    </r-row>
    
    
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
