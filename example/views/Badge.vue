<template>
  <article>
    <h1>徽标 Badge</h1>
    
    <h2>例子</h2>

    <h3>放在图标上</h3>
    <r-icon class="badge-icon" large v-badge:star.inner.icon>face</r-icon>
    <r-icon class="badge-icon green-after" large v-badge:navigation.inner.icon.left>camera</r-icon>

    <h3>放在普通元素上</h3>
    <p>数字</p>
    <span class="badge-demo" v-badge:star.icon.left></span>
    <span class="badge-demo pink-after" v-badge:20.inner.right></span>
    <p>小圆点</p>
    <span class="badge-demo red-after" v-badge:dot></span>
    <span class="badge-demo orange-after" v-badge:dot.left></span>

    <h3>放在链接/文字上</h3>
    <a class="badge-link red-after" v-badge:dot>This is a link</a>
    <br>
    <span class="badge-link orange-after" v-badge:dot.left>This is text</span>
    
    <h2>API</h2>
    <code>
      &lt;r-icon class="badge-icon" large v-badge:star.inner.icon&gt;face&lt;/r-icon&gt;
      &lt;span class="badge-demo" v-badge:star.icon.left&gt;&lt;/span&gt;
      &lt;a class="badge-link red-after" v-badge:dot&gt;This is a link&lt;/a&gt;
    </code>
  </article>
</template>

<script>
export default {
  name: 'badge'
}
</script>

<style scoped lang="stylus">
  h3 {
    margin-bottom 1rem
  }
  .badge-icon {
    display inline-block
    margin 0 20px
    text-align center
  }
  .badge-demo {
    display inline-block
    width 42px
    height 42px
    margin 0 20px
    background #eee
    border-radius 6px
    text-align center
  }
</style>
