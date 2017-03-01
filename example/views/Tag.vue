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
          <td>close</td>
          <td>是否带关闭按钮</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>rect</td>
          <td>是否为矩形</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>outline</td>
          <td>是否透明</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>small</td>
          <td>是否小标签</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>

      </tbody> 
    </table>
    <Markup :lang="'html'">
      &lt;r-tag&gt;默认标签&lt;/r-tag&gt;

       &lt;r-tag small class="green white-text"&gt;小标签 &lt;/r-tag&gt;

      // 颜色
      &lt;r-tag class="blue white-text"&gt;蓝色标签&lt;/r-tag&gt;

      // icon
      &lt;r-tag&gt;
        &lt;r-icon left&gt;face&lt;/r-icon&gt;笑
      &lt;/r-tag&gt;

      // 透明
      &lt;r-tag outline class="blue gray-text"&gt;蓝色标签&lt;/r-tag&gt;

      // 矩形
      &lt;r-tag rect class="blue white-text"&gt;蓝色标签&lt;/r-tag&gt;

      // 可关闭
      &lt;r-tag class="blue white-text" close&gt;关闭标签&lt;/r-tag&gt;
    </Markup>
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
