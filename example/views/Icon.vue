<template>
  <article>
    <h1>图标 ICON</h1>
    <p>
      图标直接采用 Material Design 官方提供的 <a class="demo-link" href="https://material.io/icons/" target="_blank">图标库</a>
    </p>
    <h2>例子</h2>

    <h3>Basic</h3>
    <div class="icon-content">
      <r-icon>3d_rotation</r-icon>
      <r-icon>check</r-icon>
      <r-icon>delete</r-icon>
      <r-icon>android</r-icon>
      <r-icon>call</r-icon>
    </div>

    <h3>medium</h3>
    <div class="icon-content">
      <r-icon medium>3d_rotation</r-icon>
      <r-icon medium>check</r-icon>
      <r-icon medium>delete</r-icon>
      <r-icon medium>android</r-icon>
      <r-icon medium>call</r-icon>
    </div>

    <h3>large</h3>
    <div class="icon-content">
      <r-icon large>3d_rotation</r-icon>
      <r-icon large>check</r-icon>
      <r-icon large>delete</r-icon>
      <r-icon large>android</r-icon>
      <r-icon large>call</r-icon>
    </div>

    <h3>xLarge</h3>
    <div class="icon-content">
      <r-icon xLarge>3d_rotation</r-icon>
      <r-icon xLarge>check</r-icon>
      <r-icon xLarge>delete</r-icon>
      <r-icon xLarge>android</r-icon>
      <r-icon xLarge>call</r-icon>
    </div>
    
    <h2>API</h2>
    <h3>props</h3>
    <table class="bordered responsive-table">
      <thead>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </thead>
      <tbody>
        <tr>
          <td>medium</td>
          <td>中等尺寸</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>large</td>
          <td>大尺寸</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>xLarge</td>
          <td>特大尺寸</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
      </tbody> 
    </table>
    <Markup :lang="'html'">
      &lt;r-icon&gt;call&lt;/r-icon&gt;

      &lt;r-icon medium&gt;call&lt;/r-icon&gt;

      &lt;r-icon large&gt;call&lt;/r-icon&gt;

      &lt;r-icon xLarge&gt;call&lt;/r-icon&gt;
    </Markup>
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
      color #f00
    }
    &:nth-child(2) {
      color #00f
    }
    &:nth-child(3) {
      color #f0f
    }
    &:nth-child(4) {
      color #9c0
    }
    &:nth-child(5) {
      color #005
    }
  }
</style>
