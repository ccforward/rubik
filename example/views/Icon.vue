<template>
  <article>
    <h1>图标 ICON</h1>
    <p>
      图标直接采用 Material Design 官方提供的 <a href="https://material.io/icons/" target="_blank">图标库</a>
    </p>
    <h2>例子</h2>
    <div class="icon-content">
      <r-icon>3d_rotation</r-icon>
      <r-icon>check</r-icon>
      <r-icon>delete</r-icon>
      <r-icon>face</r-icon>
      <r-icon>http</r-icon>
      <r-icon>flash_auto</r-icon>
      <r-icon>android</r-icon>
      <r-icon>call</r-icon>
    </div>
    <h2>API</h2>
    <code>
      &lt;r-icon&gt;call&lt;/r-icon&gt;

      &lt;r-icon&gt;http&lt;/r-icon&gt;

      &lt;r-icon&gt;delete&lt;/r-icon&gt;
    </code>
  </article>
</template>

<script>
export default {
  name: 'icons',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icon-content {
    overflow hidden
  }
  .icon {
    font-size 40px
    margin 10px
    color #bbb
    float left
    &:nth-child(1) {
      color #00ffe9
    }
    &:nth-child(2) {
      color #00f
    }
    &:nth-child(3) {
      color #f06
    }
    &:nth-child(4) {
      color #9c0
    }
    &:nth-child(5) {
      color #f0f
    }
  }
</style>
