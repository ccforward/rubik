<template>
  <article>
    <h1>卡片 Card</h1>
    <h2>例子</h2>

    <h3>default</h3>
    <section class="card-item default">
      <r-card>
        <r-card-text>
          <p>{{txt}}</p>
        </r-card-text>
      </r-card>

      <r-card class="green darken-1 white-text">
        <r-card-text>
          <p>{{txt}}</p>
        </r-card-text>
      </r-card>
    </section>

    <h3>header footer</h3>
    <section class="card-item">
      <r-card>
        <r-card-row class="green darken-1">
          <r-card-title class="white-text">Delta SkyMiles</r-card-title>
        </r-card-row>
        <r-card-text>
          <r-card-row height="75px">
            <r-icon class="mr-5">card_membership</r-icon>
            <div>
              <div>Frequent Flyer Number</div>
              <strong>113241423</strong>
            </div>
          </r-card-row>
        </r-card-text>
        <r-card-row actions="actions">
          <r-btn class="red-text darken-1" error flat="flat">View Email</r-btn>
        </r-card-row>
      </r-card>
    </section>

    <h3>图片</h3>
    <section class="card-item pics">
      <r-card class="card-pic">
        <r-card-row img="http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/1.jpg" height="320px"></r-card-row>
        <r-card-text>
          <div>{{txt}}</div>
        </r-card-text>
        <r-card-row actions="actions">
          <r-btn class="primary-text" flat="flat">View Updates</r-btn>
        </r-card-row>
      </r-card>

      <r-card class="card-pic" :img="imgs[2]" height="auto">
          <r-card-row class="white-text pl-3 pt-3 pb-3" actions="actions">This is footer description</r-card-row>
        </r-card>
    </section>

    <h3>水平排列 Horizontal</h3>
    <section class="card-item horizon">
      <r-card horizontal="horizontal">
        <r-card-row :img="imgs[0]" height="125px"></r-card-row>
        <r-card-column>
          <r-card-row class="brown white-text" height="75px">
            <r-card-text><strong>Reservation at Lazy Bear</strong>
              <div>Feb 23, 7:00pm</div>
            </r-card-text>
          </r-card-row>
          <r-card-row class="brown darken-2" actions="actions">
            <r-btn class="white-text" flat="flat">
              <r-icon left="left">directions</r-icon>Directions
            </r-btn>
          </r-card-row>
        </r-card-column>
      </r-card>

      <r-card horizontal="horizontal">
        <r-card-column class="amber white-text">
          <r-card-row>
            <!-- <r-spacer></r-spacer> -->
            <r-card-text class="text-xs-right"><strong>Car Rental with Hertz</strong>
              <div>Mar 5, 8:00pm</div>
            </r-card-text>
          </r-card-row>
        </r-card-column>
        <r-card-row :img="imgs[1]" height="125px"></r-card-row>
      </r-card>
    </section>
    
    <h2>API</h2>
    <h3>props</h3>
    <table>
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
    <code>
      &lt;r-slider :arrow="true" :cycle="false" :interval="1000" :icon="'ac_unit'"&gt;
        &lt;r-slider-item v-bind:src="'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/1.jpg'"&gt;&lt;/r-slider-item&gt;
        &lt;r-slider-item v-bind:src="'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/2.jpg'"&gt;&lt;/r-slider-item&gt;
        &lt;r-slider-item v-bind:src="'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/3.jpg'"&gt;&lt;/r-slider-item&gt;
      &lt;/r-slider&gt;
    </code>
  </article>
</template>

<script>
export default {
  name: 'cards',
  data () {
    return {
      imgs: [
        'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/1.jpg',
        'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/2.jpg',
        'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/3.jpg',
        'http://7xiblh.com1.z0.glb.clouddn.com/rubikui/img/4.jpg'
      ],
      txt: 'I have to remind myself that some birds don’t mean to be caged . Their feathers are just too bright. And when they fly away, the part of you that knows it was a sin to lock them up. DOES rejoice. Still, the place you live in is that much more drab and empty that they’re gone. I guess I just miss my friend. '
    }
  }
}
</script>

<style scoped lang="stylus">
.card-item {
  display flex
  margin-bottom 30px
  .card {
    flex 1
  }
  &.default,
  &.pics,
  &.horizon {
    .card:first-child {
      margin-right 50px
    }
  }
}
.card-pic {
  width 320px
  max-height 400px
  &:nth-child(2){
    .card-row-actions {
      background rgba(0,0,0,.5)
    }
  }
}
</style>
