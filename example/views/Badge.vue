<template>
  <article>
    <h1>徽标 Badge</h1>
    
    <h2>例子</h2>
    
    <p>
      所有徽标默认显示在右边
    </p>

    <h3>放在图标上</h3>
    <r-icon class="badge-icons red-after" large v-badge:10.inner>call</r-icon>
    <r-icon class="badge-icons" large v-badge:star.inner.icon>face</r-icon>
    <r-icon class="badge-icons green-after" large v-badge:navigation.inner.icon.left>camera</r-icon>

    <h3>放在普通元素上</h3>
    <p>数字</p>
    <span class="badge-demo" v-badge:55.left></span>
    <span class="badge-demo pink-after" v-badge:20.inner.right></span>
    <p>小圆点</p>
    <span class="badge-demo red-after" v-badge:dot></span>
    <span class="badge-demo orange-after" v-badge:dot.left></span>

    <h3>放在链接/文字上</h3>
    <a class="badge-link red-after" v-badge:dot>This is a link</a>
    <br>
    <span class="badge-link orange-after" v-badge:dot.left>This is text</span>
    
    <h2>API</h2>
    <h3>参数</h3>
    <p>
      添加了 v-badge 指令的元素可以添加颜色 class: '[color]-after' (color 为色值) <br>
      PS: 因为徽标存在于伪类 after 上，所以用 [color]-after 调整颜色    
    </p>

    <h3>指令说明</h3>
    <table class="bordered responsive-table">
      <thead>
        <th>指令</th>
        <th>说明</th>
      </thead>
      <tbody>
        <tr>
          <td>v-badge:star.inner.icon <br> 指令的参数 arg</td>
          <td>
            指令的参数 arg (即 star) 对应 徽标显示的内容<br>
            如果徽标是 icon，则指令的 arg 为 icon-font 对应的值
          </td>
        </tr>
        <tr>
          <td>v-badge:navigation.inner.icon.left <br> 指令的 modifiers   </td>
          <td>
            inner: 徽标显示在元素内 <br>
            icon: 徽标是否为 icon <br>  
            left: 徽标显示位置
          </td>
        </tr>
        <tr>
          <td>v-badge:55.left <br> 指令的参数 arg </td>
          <td>
            此指令的 arg 为 55，徽标显示为纯数字 55
          </td>
        </tr>
        <tr>
          <td>v-badge:dot <br> 指令的参数 arg </td>
          <td>
            此指令的 arg 为 dot，徽标显示为一个点 (可做提示用)
          </td>
        </tr>
        
      </tbody> 
    </table>
    <Markup :lang="'html'">
      &lt;r-icon class="red-after" large v-badge:10.inner&gt;call&lt;/r-icon&gt;
      &lt;r-icon large v-badge:star.inner.icon&gt;face&lt;/r-icon&gt;
      &lt;span class="badge-demo" v-badge:star.icon.left&gt;&lt;/span&gt;
      &lt;a class="badge-link red-after" v-badge:dot&gt;This is a link&lt;/a&gt;
    </Markup>
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
  .badge-icons {
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
