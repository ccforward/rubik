<template>
  <article>
    <h1>轮播图 Slider</h1>
    <h2>例子</h2>
    <r-slider :arrow="true" :auto="true" :interval="1000" :dot="'ac_unit'">
      <r-slider-item v-for="img in imgs" v-bind:src="img"></r-slider-item>
    </r-slider>
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
          <td>arrow</td>
          <td>是否显示箭头</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>auto</td>
          <td>是否自动播放</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>interval</td>
          <td>自动播放间隔时间 单位: 毫秒 ms</td>
          <td>Number</td>
          <td>5000</td>
        </tr>
        <tr>
          <td>dot</td>
          <td>底部导航</td>
          <td>String</td>
          <td>fiber_manual_record</td>
        </tr>

      </tbody> 
    </table>

    <Markup :lang="'html'">
      &lt;r-slider :arrow="true" :cycle="false" :interval="1000" :icon="'ac_unit'"&gt;
        &lt;r-slider-item v-bind:src="'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/1.jpg'"&gt;&lt;/r-slider-item&gt;
        &lt;r-slider-item v-bind:src="'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/2.jpg'"&gt;&lt;/r-slider-item&gt;
        &lt;r-slider-item v-bind:src="'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/3.jpg'"&gt;&lt;/r-slider-item&gt;
      &lt;/r-slider&gt;
    </Markup>
  </article>
</template>

<script>
export default {
  name: 'slider',
  data () {
    return {
      imgs: [
        'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/1.jpg',
        'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/2.jpg',
        'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/3.jpg',
        'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/4.jpg'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.slider {
  width 500px
  margin-left 30px
}
</style>
