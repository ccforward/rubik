<template>
  <article>
    <h1>水波 Waves</h1>
    
    <h2>例子</h2>
    <h3>按钮</h3>
    <r-btn class="white black-text z-depth-2" large v-wave="{color:'purple'}">紫色 Waves</r-btn>
    <r-btn class="white black-text z-depth-2" large v-wave="{color:'red'}">红色 Waves</r-btn>
    <br><br>
    <r-btn class="blue white-text" large v-wave.light>浅色 Waves</r-btn>
    <r-btn class="blue white-text" large v-wave="{color:'white'}">白色 Waves</r-btn>
    
    <h3>其他元素</h3>
    
    <div class="wave-demo z-depth-1 grey white-text" v-wave="{color:'green'}">div 绿色 Waves</div>
    <br><br>
    <p class="wave-demo z-depth-1 red lighten-1 white-text" v-wave="{color:'white'}">p 白色 Waves</p>
    
    <h2>API</h2>
    
    <h3>指令说明</h3>

    <table class="bordered responsive-table">
      <thead>
        <th>指令</th>
        <th>说明</th>
      </thead>
      <tbody>
        <tr>
          <td>v-wave="{color:'purple'}"</td>
          <td>指令 value 对象的 color 对应水波颜色</td>
        </tr>
        <tr>
          <td>v-wave.light</td>
          <td>浅色水波 此时 value 对象的 color 无效</td>
        </tr>
      </tbody> 
    </table>

    <p>
      注意：元素在显示水波时会添加样式 position: relative !important 
    </p>
    
    <Markup :lang="'html'">
      &lt;r-btn class="white black-text" large v-wave="{color:'purple'}"&gt;紫色 Waves&lt;/r-btn&gt;
      &lt;r-btn class="blue white-text" large v-wave.light&gt;浅色 Waves&lt;/r-btn&gt;
      &lt;div class="grey white-text" v-wave="{color:'green'}"&gt;div 绿色 Waves&lt;/div&gt;
    </Markup>
  </article>
</template>

<script>
export default {
  name: 'waves'
}
</script>

<style scoped lang="stylus">
  button {
    margin 0 1rem 1rem 0
  }
  .wave-demo {
    display inline-block
    padding 0 3rem
    min-height 3rem
    line-height 3rem
    font-size 1.1rem
    border-radius 3px
    cursor pointer
  }
</style>
