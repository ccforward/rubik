<template>
  <article>
    <h1>警告 Alert</h1>

    <h2>例子</h2>

    <div class="alert-container">
      <span> INFO </span>
      <r-alert info>{{ txt }} </r-alert>

      <span> SUCCESS </span>
      <r-alert success >{{ txt }}</r-alert>
      
      <span> WARNING </span>
      <r-alert warning >{{ txt }}</r-alert>
      
      <span> ERROR </span>
      <r-alert error >{{ txt }}</r-alert>
      
    </div>

    <h3>没有 icon</h3>
    <div class="alert-container">
      <r-alert warning no-icon >这里有出租车</r-alert>
      <r-alert info no-icon >蓝牙信号正常</r-alert>
    </div>

    <h3>自定义 icon</h3>
    <div class="alert-container">
      <r-alert warning icon="local_taxi" >这里有出租车</r-alert>
      <r-alert info icon="bluetooth" >蓝牙信号正常</r-alert>
    </div>

    <h3>关闭 icon</h3>
    <div class="alert-container">
      <r-alert warning icon="local_taxi" close>这里有出租车</r-alert>
      <r-alert info icon="bluetooth" close >蓝牙信号正常</r-alert>
    </div>

    <h2>API</h2>
    
    <code>
      &lt;r-alert info&gt;...&lt;/r-alert&gt;
      &lt;r-alert warning no-icon &gt;...&lt;/r-alert&gt;
      &lt;r-alert warning icon="local_taxi" &gt;...&lt;/r-alert&gt;
      &lt;r-alert warning icon="local_taxi" close&gt;...&lt;/r-alert&gt;
    </code>
  </article>
</template>

<script>
export default {
  name: 'alerts',
  data(){
    return {
      txt: '这是一条警告提示'
    }
  }
}
</script>

<style scoped lang="stylus">
  .alert-container {
    width 50%
    .alert {
      margin 10px 0
    }
  }
</style>

