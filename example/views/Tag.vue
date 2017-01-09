<template>
  <article>
    <h1>标签 Tag</h1>

    <h2>例子</h2>

    <div class="tag-container">
      <r-tag>默认标签</r-tag>
      <r-tag class="blue white-text">蓝色标签</r-tag>
      <r-tag class="red white-text">红色标签</r-tag>
      <r-tag small class="green white-text">小标签</r-tag>
    </div>
    
    <h3>带 icon</h3>
    <div class="tag-container">
      <r-tag>
        <r-icon left>face</r-icon>笑
      </r-tag>

      <r-tag>
        <r-icon left>directions_bike</r-icon>骑车
      </r-tag>

      <r-tag class="pink white-text">
        <r-icon left>local_gas_station</r-icon>加油站
      </r-tag>

      <r-tag class="black white-text">
        <r-icon>flight</r-icon>
      </r-tag>  
    </div>

    <h3>透明</h3>
    <div class="tag-container">
      <r-tag outline class="blue gray-text">蓝色标签</r-tag>
      <r-tag outline class="red gray-text">红色标签</r-tag>
    </div>

    <h3>矩形</h3>
    <div class="tag-container">
      <r-tag rect class="blue white-text">蓝色标签</r-tag>
      <r-tag rect>
        加油站<r-icon right>local_gas_station</r-icon>
      </r-tag>
    </div>

    <h3>点击关闭</h3>
    <div class="tag-container">
      <r-tag class="blue white-text" close>关闭标签</r-tag>
      <r-tag class="pink black-text" close>关闭标签</r-tag>
    </div>

    <h2>API</h2>

    <code>
      
    </code>
  </article>
</template>

<script>
export default {
  name: 'tags',
}
</script>

<style scoped lang="stylus">
  .tag-container {
    margin 1rem 0
    .tag {
      margin .5rem 
      a {
        color #fff
      }
    }
  }
</style>
