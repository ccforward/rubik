<template>
  <article>
    <h1>按钮 Button</h1>

    <h2>例子</h2>
    <h3>Default</h3>
    <r-btn>Default</r-btn>
    <r-btn disabled>Default</r-btn>

    <h3>Primary</h3>
    <r-btn primary>Primary</r-btn>
    <r-btn primary disabled>Primary</r-btn>

    <h3>Secondary</h3>
    <r-btn secondary>Secondary</r-btn>
    <r-btn secondary disabled>Secondary</r-btn>

    <h3>Info</h3>
    <r-btn info>Info</r-btn>
    <r-btn info disabled>Info</r-btn>
    
    <h3>Success</h3>
    <r-btn success>Success</r-btn>
    <r-btn success disabled>Success</r-btn>

    <h3>Warnin</h3>
    <r-btn warning>Warnin</r-btn>
    <r-btn warning disabled>Warnin</r-btn>

    <h3>Error</h3>
    <r-btn error>Error</r-btn>
    <r-btn error disabled>Error</r-btn>

    <h3>Outline</h3>
    <r-btn info outline>Outline</r-btn>
    <r-btn info outline disabled>Outline</r-btn>

    <h3>Flat</h3>
    <r-btn info flat>Flat</r-btn>
    <r-btn info flat disabled>Flat</r-btn>

    <h3>Link 链接</h3>
    <r-btn link :href="link" :target="target">_Blank</r-btn>
    <r-btn link :href="link" :target="'_self'" success>_Self</r-btn>
    <r-btn link primary>Link</r-btn>

    <h3>icon</h3>

    <r-btn icon>
      <r-icon>android</r-icon>
    </r-btn>

    <r-btn icon>
      <r-icon>call</r-icon>
    </r-btn>

    <r-btn icon>
      <r-icon>face</r-icon>
    </r-btn>

    <h3>圆形 icon</h3>
    <r-btn info circle>
      <r-icon>check</r-icon>
    </r-btn>

    <r-btn info circle>
      <r-icon>android</r-icon>
    </r-btn>

    <h3>椭圆形</h3>
    <r-btn info round>椭圆形</r-btn>
    <r-btn success round>椭圆形</r-btn>

    <h3>椭圆形 icon</h3>
    <r-btn error round>
      <r-icon>delete</r-icon>
      Delete
    </r-btn>
    <r-btn success round>
      <r-icon>call</r-icon>
      Telphone
    </r-btn>
    

    <h3>Small</h3>
    <r-btn info small>Small</r-btn>
    <r-btn info small disabled>Small</r-btn>

    <h3>Large</h3>
    <r-btn info large>Large</r-btn>
    <r-btn info large disabled>Large</r-btn>

    <h3>Block</h3>
    <r-btn block>Block</r-btn>
    <r-btn block disabled>Block</r-btn>


    <h3>Loading</h3>
    <r-btn info :loading="loading" @click.native="load()" :disabled="loading">
      <span slot="loader"></span> 3s Loading
    </r-btn>

    <h2>API</h2>
    <Markup :lang="'html'">
      &lt;r-btn&gt;Default&lt;/r-btn&gt;

      &lt;r-btn primary&gt;Primary&lt;/r-btn&gt;

      &lt;r-btn secondary&gt;Secondary&lt;/r-btn&gt;

      &lt;r-btn info&gt;Info&lt;/r-btn&gt;
      
      &lt;r-btn link :href="link" :target="target"&gt;_Blank&lt;/r-btn&gt;
      &lt;r-btn link :href="link" :target="'_self'" success&gt;_Self&lt;/r-btn&gt;
      &lt;r-btn link primary&gt;Link&lt;/r-btn&gt;

      &lt;r-btn icon&gt;
        &lt;r-icon&gt;android&lt;/r-icon&gt;
      &lt;/r-btn&gt;

      &lt;r-btn error round&gt;
        &lt;r-icon&gt;delete&lt;/r-icon&gt;
        Delete
      &lt;/r-btn&gt;

      &lt;r-btn block&gt;Block&lt;/r-btn&gt;

      &lt;r-btn info :loading="loading" @click.native="load()" :disabled="loading"&gt;
        &lt;span slot="loading"&gt;&lt;/span&gt; 3s Loading
      &lt;/r-btn&gt;
    </Markup>
    <Markup :lang="'js'">
      export default {
        data () {
          return {
            link: 'https://www.ccforward.net/',
            target: '_blank',
            loading: false
          }
        },
        methods: {
            load () {
              this.loading = true
              setTimeout(() => this.loading = false, 3000)
            }
          }
      }
    </Markup>
  </article>
</template>

<script>
export default {
  name: 'buttons',
  data () {
    return {
      link: 'https://www.ccforward.net/',
      target: '_blank',
      loading: false
    }
  },
  methods: {
      load () {
        this.loading = true
        setTimeout(() => this.loading = false, 3000)
      }
    }
}
</script>

<style scoped lang="stylus">
  .btn {
    margin 1rem
  }
</style>
