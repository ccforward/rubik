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
    
    <h3>props</h3>
    <table class="bordered responsive-table">
      <thead>
        <th>属性</th>
        <th>说明</th>
      </thead>
      <tbody>
        <tr>
          <td>info</td>
          <td>蓝色 普通通知</td>
        </tr>
        <tr>
          <td>success</td>
          <td>绿色 好消息通知</td>
        </tr>
        <tr>
          <td>warning</td>
          <td>橙色 警告通知</td>
        </tr>
        <tr>
          <td>error</td>
          <td>红色 错误通知</td>
        </tr>
        <tr>
          <td>no-icon</td>
          <td>不显示左侧的 icon</td>
        </tr>
        <tr>
          <td>close</td>
          <td>显示关闭的 icon</td>
        </tr>

        <tr>
          <td>icon</td>
          <td>自定义 icon</td>
        </tr>

      </tbody> 
    </table>

    <Markup :lang="'html'">
      &lt;p&gt;1234&lt;/p&gt;
      &lt;div&gt;4567&lt;/div&gt;
      &lt;r-alert info&gt;...&gt;/r-alert&gt;
      &lt;r-alert warning no-icon &gt;...&lt;/r-alert&gt;
      &lt;r-alert warning icon="local_taxi" &gt;...&lt;/r-alert&gt;
      &lt;r-alert warning icon="local_taxi" close&gt;...&lt;/r-alert&gt;
    </Markup>
    </pre>
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
    width 70%
    .alert {
      margin 10px 0
    }
  }
  @media (max-width: 600px) {
    .alert-container {
      width 100%
    }
  }
</style>

