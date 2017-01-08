<template>
  <article>
    <h1>提示框 Tooltip</h1>
    
    <h2>例子</h2>
    
    <h3>四向</h3>
    <div class="tooltip-container">
      <span class="tt-top green white-text z-depth-1" v-tooltip:top="{ text: '提示在上边' }">上</span>
      <span class="tt-right green white-text z-depth-1" v-tooltip:right="{ text: '提示在右边' }">右</span>
      <span class="tt-bottom green white-text z-depth-1" v-tooltip:bottom="{ text: '提示在下边' }">下</span>
      <span class="tt-left green white-text z-depth-1" v-tooltip:left="{ text: '提示在左边' }">左</span>
    </div>

    <h3>按钮</h3>
    <r-btn class="grey white-text" v-tooltip:right="{ text: '我真的是个按钮' }">我是按钮</r-btn>
    
    
    <h2>API</h2>
    <code>
      &lt;span class="green white-text" v-tooltip:top="{ text: '提示在上边' }"&gt;上&lt;/span&gt;
      &lt;r-btn class="grey white-text" v-tooltip:right="{ text: '来自按钮的提示文字' }"&gt;我是按钮&lt;/r-btn&gt;
    </code>
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
    width 200px
    height 200px
    margin 10px 0
    span {
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
