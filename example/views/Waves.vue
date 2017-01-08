<template>
  <article>
    <h1>水波 Waves</h1>
    
    <h2>例子</h2>
    
    <h3>按钮</h3>
    <r-btn class="grey black-text" large v-wave="{clazz:'purple-text'}">紫色 Waves</r-btn>
    <r-btn class="grey black-text" large v-wave="{clazz:'red-text'}">红色 Waves</r-btn>
    
    
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
