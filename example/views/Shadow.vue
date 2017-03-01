<template>
  <article>
    <h1>阴影 Shadow</h1>
    <p>
      添加 class "z-depth-x" (x: 0~5) 来添加阴影。
    </p>
    <p>
      z-depth-0 可以用来把默认的阴影去除。
    </p>

    <div class="row">
      <div class="col xs1">
        <div class="z-depth-0 shadow-txt">z-depth-0</div>
      </div>
      <div class="col xs1">
        <div class="z-depth-1 shadow-txt">z-depth-1</div>
      </div>
      <div class="col xs1">
        <div class="z-depth-2 shadow-txt">z-depth-2</div>
      </div>
      <div class="col xs1">
        <div class="z-depth-3 shadow-txt">z-depth-3</div>
      </div>
      <div class="col xs1">
        <div class="z-depth-4 shadow-txt">z-depth-4</div>
      </div>
      <div class="col xs1">
        <div class="z-depth-5 shadow-txt">z-depth-5</div>
      </div>
    </div>

    <Markup :lang="'html'">
      &lt;div class="col xs1"&gt;
        &lt;div class="z-depth-0">z-depth-0&lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="col xs1"&gt;
        &lt;div class="z-depth-1">z-depth-1&lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="col xs1"&gt;
        &lt;div class="z-depth-2">z-depth-2&lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="col xs1"&gt;
        &lt;div class="z-depth-3">z-depth-3&lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="col xs1"&gt;
        &lt;div class="z-depth-4">z-depth-4&lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="col xs1"&gt;
        &lt;div class="z-depth-5">z-depth-5&lt;/div&gt;
      &lt;/div&gt;
    </Markup>
    
  </article>
</template>

<script>
export default {
  name: 'shadow'
}
</script>

<style lang="stylus" scoped>
  .row {
    margin-bottom 20px
  }
  .shadow-txt {
    margin .5rem 0
    padding 44% 0
    padding calc(50% - 20px) 0
    color #fff
    background #26a69a
    text-align center
    font-size 1rem
  }
</style>
