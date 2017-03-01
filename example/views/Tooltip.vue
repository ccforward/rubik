<template>
  <article>
    <h1>提示框 Tooltip</h1>
    <p>
      tooltip 用法类似元素的 title 属性，所以做成了指令而不是组件
    </p>
    <h2>例子</h2>
    
    <h3>四向</h3>
    <div class="tooltip-container">
      <div class="tt-top green white-text z-depth-1" v-tooltip:top="{ text: '提示在上边' }">上</div>
      <div class="tt-right green white-text z-depth-1" v-tooltip:right="{ text: '提示在右边' }">右</div>
      <div class="tt-bottom green white-text z-depth-1" v-tooltip:bottom="{ text: '提示在下边' }">下</div>
      <div class="tt-left green white-text z-depth-1" v-tooltip:left="{ text: '提示在左边' }">左</div>
    </div>

    <h3>按钮</h3>
    <r-btn class="grey white-text" v-tooltip:right="{ text: '我真的是个按钮' }">我是按钮</r-btn>
    
    
    <h2>API</h2>

    <h3>指令说明</h3>
    <table class="bordered responsive-table">
      <thead>
        <th>指令</th>
        <th>说明</th>
      </thead>
      <tbody>
        <tr>
          <td>v-tooltip:top="{ text: '提示在上边' }"</td>
          <td>指令的参数 arg (即 top) 对应 tooltip 的显示位置</td>
        </tr>
        <tr>
          <td>v-tooltip:top="{ text: '提示在上边' }"</td>
          <td>指令的 value 对象的 text 为 tooltip 的展示内容</td>
        </tr>
      </tbody> 
    </table>

    <Markup :lang="'html'">
      &lt;span class="green white-text" v-tooltip:top="{ text: '提示在上边' }"&gt;上&lt;/span&gt;
      &lt;r-btn class="grey white-text" v-tooltip:right="{ text: '我真的是个按钮' }"&gt;我是按钮&lt;/r-btn&gt;
    </Markup>
  </article>
</template>

<script>
export default {
  name: 'tooltips'
}
</script>

<style scoped lang="stylus">
  .tooltip-container {
    position relative
    width 140px
    height 100px
    margin 4rem 2rem
    div {
      position absolute
      width 4.5rem
      height 1.8rem
      line-height 1.8rem
      font-size 1.3rem
      text-align center
      border-radius 5px
      cursor pointer
    }
  }
  .tt-top {
    top 0
    left 50%
    transform translateX(-50%)
  }
  .tt-right {
    right 0
    top 50%
    transform translateY(-50%)
  }
  .tt-bottom {
    bottom 0
    left 50%
    transform translateX(-50%)
  }
  .tt-left {
    left 0
    top 50%
    transform translateY(-50%)
  }
</style>
