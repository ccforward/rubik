<template>
  <article>
    <h1>图片懒加载 Lazy</h1>
    <h2>例子</h2>

    <h3>img 标签</h3>
    <img class="img" v-for="img in imgs" v-lazy="img">

    <h3>背景图懒加载 background-image</h3>
    <div class="img" v-for="img in images" v-lazy:background-image="img"></div>
    <h2>API</h2>
    
    <h3>指令说明</h3>

    <table class="bordered responsive-table">
      <thead>
        <th>指令</th>
        <th>说明</th>
      </thead>
      <tbody>
        <tr>
          <td>v-lazy="img"</td>
          <td>此指令只能用在 img 标签，图片加载后会替换 img 标签的 src 属性</td>
        </tr>
        <tr>
          <td>v-lazy:background-image="img"</td>
          <td>此指令可用在巨大多数标签上，图片加载后会成为该元素 CSS 的 background-image</td>
        </tr>

      </tbody> 
    </table>

    <Markup :lang="'html'">
       &lt;img class="img" v-for="img in imgs" v-lazy="img"&gt;
       &lt;div class="img" v-for="img in images" v-lazy:background-image="img"&gt;&lt;/div&gt;
    </Markup>
  </article>
</template>

<script>
export default {
  name: 'slider',
  data () {
    return {
      imgs: [
        'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/1.jpg?t='+ new Date().getTime(),
        'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/2.jpg?t='+ new Date().getTime(),
        'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/3.jpg?t='+ new Date().getTime(),
        'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/4.jpg?t='+ new Date().getTime()
      ],
      images: [
        'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/5.jpg?t='+ new Date().getTime(),
        'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/6.jpg?t='+ new Date().getTime(),
        'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/7.jpg?t='+ new Date().getTime(),
        'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/8.jpg?t='+ new Date().getTime()
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.img {
  display block
  width 300px
  height 300px
  background-size 100%
  margin 30px
}
</style>
