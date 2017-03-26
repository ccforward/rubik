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
    </section>

    <section class="loader-box">
      <r-btn info small @click.native="showLoader('half')">Half</r-btn>
      <r-loader half :show="type.half"></r-loader>
    </section>

    <section class="loader-box">
      <r-btn info small @click.native="showLoader('reverse')">Reverse</r-btn>
      <r-loader reverse :show="type.reverse"></r-loader>
    </section>
    
    <h3>Bar</h3>
    <section class="loader-box">
      <r-btn info small @click.native="showLoader('bar')">Normal</r-btn>
      <r-loader bar :show="type.bar"></r-loader>
    </section>

    <section class="loader-box">
      <r-btn info small @click.native="showLoader('round')">Round</r-btn>
      <r-loader bar-round :show="type.round"></r-loader>
    </section>

    <section class="loader-box">
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
