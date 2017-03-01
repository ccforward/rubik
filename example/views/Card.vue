<template>
  <article>
    <h1>卡片 Card <strong class="red-text">beta</strong></h1>

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

    <h3>带有头(Header)和尾(Footer)</h3>

    <section class="card-item">
      <r-card>
        <r-card-row class="green darken-1">
          <r-card-title class="white-text">Header 卡片头部</r-card-title>
        </r-card-row>
        <r-card-text>
          <r-card-row height="75px">
            <r-icon class="mr-5">call</r-icon>
            <div>
              <p>手机号</p>
              <p>+8618899990000</p>
            </div>
          </r-card-row>
        </r-card-text>
        <r-card-row actions>
          <r-btn class="red-text" flat>Footer Button</r-btn>
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
          <r-btn class="red-text" flat="flat">Footer Button</r-btn>
        </r-card-row>
      </r-card>

      <r-card class="card-pic" :img="imgs[2]" height="auto">
        <r-card-row class="white-text pl-3 pt-3 pb-3" actions>Footer 带有阴影 </r-card-row>
      </r-card>
    </section>

    <h3>水平排列 Horizontal</h3>
    <section class="card-item horizon">
      <r-card horizontal>
        <r-card-row :img="imgs[0]" height="150px"></r-card-row>
        <r-card-column>
          <r-card-row class="brown white-text" height="75px">
            <r-card-text>
              <p>
                {{txt}}
              </p>
            </r-card-text>
          </r-card-row>
          <r-card-row class="brown darken-2" actions>
            <r-btn class="white-text" flat>
              <r-icon left>call</r-icon>
              1234567890
            </r-btn>
          </r-card-row>
        </r-card-column>
      </r-card>
    </section>
    
    <h2>API</h2>
    <h3>props</h3>
    <p>
      TODO...
    </p> 
    <Markup :lang="'html'">
      // Basic

      &lt;r-card&gt;
        &lt;r-card-text&gt;
          &lt;p&gt;...&lt;/p&gt;
        &lt;/r-card-text&gt;
      &lt;/r-card&gt;

      // Header Footer

      &lt;r-card&gt;
        &lt;r-card-row class="green darken-1"&gt;
          &lt;r-card-title class="white-text"&gt;Header 卡片头部&lt;/r-card-title&gt;
        &lt;/r-card-row&gt;
        &lt;r-card-text&gt;
          &lt;r-card-row height="75px"&gt;
            &lt;r-icon class="mr-5"&gt;call&lt;/r-icon&gt;
            &lt;div&gt;
              &lt;p&gt;手机号&lt;/p&gt;
              &lt;p&gt;+8618899990000&lt;/p&gt;
            &lt;/div&gt;
          &lt;/r-card-row&gt;
        &lt;/r-card-text&gt;
        &lt;r-card-row actions&gt;
          &lt;r-btn class="red-text" flat&gt;Footer Button&lt;/r-btn&gt;
        &lt;/r-card-row&gt;
      &lt;/r-card&gt;

      // 图片

      &lt;r-card class="card-pic" :img="imgs[2]" height="auto"&gt;
        &lt;r-card-row class="white-text pl-3 pt-3 pb-3" actions&gt;Footer 带有阴影 &lt;/r-card-row&gt;
      &lt;/r-card&gt;

    </Markup>
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
h1 {
  strong {
    font-size 1.5rem
    vertical-align top
  }
}
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
