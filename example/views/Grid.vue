<template>
  <article>
    <h1>栅格 Grid</h1>
    <p>
      添加 class "z-depth-x" (x: 0~5) 来添加阴影。
    </p>
    <p>
      z-depth-0 可以用来把默认的阴影去除。
    </p>

    <div class="row">
      <div class="col xs12">
        <r-card class="blue">
          <r-card-text>12</r-card-text>
        </r-card>
      </div>
      <div class="col xs6">
        <r-card class="pink">
          <r-card-text>6</r-card-text>
        </r-card>
      </div>
      <div class="col xs6">
        <r-card class="pink">
          <r-card-text>6</r-card-text>
        </r-card>
      </div>

      <div class="col xs4">
        <r-card class="blue">
          <r-card-text>4</r-card-text>
        </r-card>
      </div>
      <div class="col xs4">
        <r-card class="blue">
          <r-card-text>4</r-card-text>
        </r-card>
      </div>
      <div class="col xs4">
        <r-card class="blue">
          <r-card-text>4</r-card-text>
        </r-card>
      </div>

      <div class="col xs2">
        <r-card class="pink">
          <r-card-text>2</r-card-text>
        </r-card>
      </div>
      <div class="col xs2">
        <r-card class="pink">
          <r-card-text>2</r-card-text>
        </r-card>
      </div>
      <div class="col xs2">
        <r-card class="pink">
          <r-card-text>2</r-card-text>
        </r-card>
      </div>
      <div class="col xs2">
        <r-card class="pink">
          <r-card-text>2</r-card-text>
        </r-card>
      </div>
      <div class="col xs2">
        <r-card class="pink">
          <r-card-text>2</r-card-text>
        </r-card>
      </div>
      <div class="col xs2">
        <r-card class="pink">
          <r-card-text>2</r-card-text>
        </r-card>
      </div>

      <div class="col xs1">
        <r-card class="green">
          <r-card-text>1</r-card-text>
        </r-card>
      </div>
      <div class="col xs1">
        <r-card class="green">
          <r-card-text>1</r-card-text>
        </r-card>
      </div>
      <div class="col xs1">
        <r-card class="green">
          <r-card-text>1</r-card-text>
        </r-card>
      </div>
      <div class="col xs1">
        <r-card class="green">
          <r-card-text>1</r-card-text>
        </r-card>
      </div>
      <div class="col xs1">
        <r-card class="green">
          <r-card-text>1</r-card-text>
        </r-card>
      </div>
      <div class="col xs1">
        <r-card class="green">
          <r-card-text>1</r-card-text>
        </r-card>
      </div>
      <div class="col xs1">
        <r-card class="green">
          <r-card-text>1</r-card-text>
        </r-card>
      </div>
      <div class="col xs1">
        <r-card class="green">
          <r-card-text>1</r-card-text>
        </r-card>
      </div>
      <div class="col xs1">
        <r-card class="green">
          <r-card-text>1</r-card-text>
        </r-card>
      </div>
      <div class="col xs1">
        <r-card class="green">
          <r-card-text>1</r-card-text>
        </r-card>
      </div>
      <div class="col xs1">
        <r-card class="green">
          <r-card-text>1</r-card-text>
        </r-card>
      </div>
      <div class="col xs1">
        <r-card class="green">
          <r-card-text>1</r-card-text>
        </r-card>
      </div>

    </div>

    <code>
      
    </code>
    
  </article>
</template>

<script>
export default {
  name: 'grid'
}
</script>

<style lang="stylus" scoped>
  .row {
    margin-bottom 20px
  }
  .card {
    font-size 1.3rem
    text-align center
    color #fff
    padding 1.5rem 0
    margin .5rem 0
  }
  .card-text {
    padding 0
  }
</style>
