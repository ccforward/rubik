<template>
  <article>
    <h1>加载 Loader</h1>
    <p>
      The loader component base on <a target="_blank" href="http://www.raphaelfabeni.com.br/css-loader/">css-loader</a>
    </p>
    <h2>例子</h2>
    <h3>Default</h3>
    <section class="loader-box">
      <r-btn info small @click.native="showLoader('normal')">Normal</r-btn>
      <r-loader normal :show="type.normal"></r-loader>
   
      <r-btn info small @click.native="showLoader('half')">Half</r-btn>
      <r-loader half :show="type.half"></r-loader>
   
      <r-btn info small @click.native="showLoader('reverse')">Reverse</r-btn>
      <r-loader reverse :show="type.reverse"></r-loader>
    </section>
    
    <h3>Bar</h3>
    <section class="loader-box">
      <r-btn info small @click.native="showLoader('bar')">Normal</r-btn>
      <r-loader bar :show="type.bar"></r-loader>
    
      <r-btn info small @click.native="showLoader('round')">Round</r-btn>
      <r-loader bar-round :show="type.round"></r-loader>
    
      <r-btn info small @click.native="showLoader('barReverse')">reverse</r-btn>
      <r-loader bar-reverse :show="type.barReverse"></r-loader>
    </section>

    <h3>Double</h3>
    <section class="loader-box">
      <r-btn info small @click.native="showLoader('double')">Double</r-btn>
      <r-loader double :show="type.double"></r-loader>
    </section>

    <br>
    <br>
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
          <td>show</td>
          <td>是否显示</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>normal</td>
          <td>默认类型</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>half</td>
          <td>半圆形的默认类型</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>reverse</td>
          <td>反向旋转的默认类型</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>bar</td>
          <td>loading条类型</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>bar-round</td>
          <td>圆角的loading条</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>bar-reverse</td>
          <td>反向动画的loading条</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>double</td>
          <td>两个默认的loading</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>

      </tbody> 
    </table>
    <Markup :lang="'html'">
      &lt;r-btn info small @click.native="showLoader('normal')"&gt;Normal&lt;/r-btn&gt;
      &lt;r-loader normal :show="type.normal"&gt;&lt;/r-loader&gt;

      &lt;r-btn info small @click.native="showLoader('round')"&gt;Round&lt;/r-btn&gt;
      &lt;r-loader bar-round :show="type.round"&gt;&lt;/r-loader&gt;

      &lt;r-btn info small @click.native="showLoader('reverse')"&gt;Reverse&lt;/r-btn&gt;
      &lt;r-loader reverse :show="type.reverse"&gt;&lt;/r-loader&gt;

      &lt;r-btn info small @click.native="showLoader('bar')"&gt;Normal&lt;/r-btn&gt;
      &lt;r-loader bar :show="type.bar"&gt;&lt;/r-loader&gt;

      &lt;r-btn info small @click.native="showLoader('round')"&gt;Round&lt;/r-btn&gt;
      &lt;r-loader bar-round :show="type.round"&gt;&lt;/r-loader&gt;

      &lt;r-btn info small @click.native="showLoader('barReverse')"&gt;reverse&lt;/r-btn&gt;
      &lt;r-loader bar-reverse :show="type.barReverse"&gt;&lt;/r-loader&gt;

      &lt;r-btn info small @click.native="showLoader('double')"&gt;Double&lt;/r-btn&gt;
      &lt;r-loader double :show="type.double"&gt;&lt;/r-loader&gt;

    </Markup>

    <Markup :lang="'js'">
      export default {
        
        data () {
          return {
            type: {
              normal: false,
              half: false,
              reverse: false,
              bar: false,
              round: false,
              barReverse: false,
              double: false
            }
          }
        },
        methods: {
          showLoader(loader){
            this.type[loader] = true
            setTimeout( _ => {
              this.type[loader] = false
            }, 1500)
          }
        }
      }
    </Markup>
  </article>
</template>

<script>
export default {
  name: 'loaders',
  data () {
    return {
      type: {
        normal: false,
        half: false,
        reverse: false,
        bar: false,
        round: false,
        barReverse: false,
        double: false
      }
    }
  },
  methods: {
    showLoader(loader){
      this.type[loader] = true
      setTimeout( _ => {
        this.type[loader] = false
      }, 1500)
    }
  }
}
</script>

<style scoped lang="stylus">
  .loader-box {
    margin-bottom 10px
  }
</style>
