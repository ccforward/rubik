<template>
  <article>
    <h1>栅格 Grid</h1>
    <p>
      这里采用比较灵活的12栅格系统，支持常见的 1 2 3 4 6 列布局。
    </p>
    <ul>
      <li><p>使用 r-row 在水平方向建立一组 r-col </p></li>
      <li><p>内容放在 r-col 内</p></li>
      <li><p>通过 r-col 的 xs[n] (xs1 ~ xs12) 来定义一个 r-col 跨越的范围</p></li>
      <li><p>一个 r-row 中的 r-col 数量超过12会自动换行排列 </p></li>
    </ul>

    <h2>Flex 布局</h2>
    <p>
      我们采用Flex布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。<br>
      子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。
    </p>

    <r-row>
      <r-col xs12>
        <r-card class="blue">
          <r-card-text>12</r-card-text>
        </r-card>
      </r-col>
      <r-col xs6>
        <r-card class="pink">
          <r-card-text>6</r-card-text>
        </r-card>
      </r-col>
      <r-col xs6>
        <r-card class="pink">
          <r-card-text>6</r-card-text>
        </r-card>
      </r-col>

      <r-col xs4>
        <r-card class="blue">
          <r-card-text>4</r-card-text>
        </r-card>
      </r-col>
      <r-col xs4>
        <r-card class="blue">
          <r-card-text>4</r-card-text>
        </r-card>
      </r-col>
      <r-col xs4>
        <r-card class="blue">
          <r-card-text>4</r-card-text>
        </r-card>
      </r-col>

      <r-col xs3>
        <r-card class="green">
          <r-card-text>3</r-card-text>
        </r-card>
      </r-col>
      <r-col xs3>
        <r-card class="green">
          <r-card-text>3</r-card-text>
        </r-card>
      </r-col>
      <r-col xs3>
        <r-card class="green">
          <r-card-text>3</r-card-text>
        </r-card>
      </r-col>
      <r-col xs3>
        <r-card class="green">
          <r-card-text>3</r-card-text>
        </r-card>
      </r-col>

      <r-col xs2>
        <r-card class="pink">
          <r-card-text>2</r-card-text>
        </r-card>
      </r-col>
      <r-col xs2>
        <r-card class="pink">
          <r-card-text>2</r-card-text>
        </r-card>
      </r-col>
      <r-col xs2>
        <r-card class="pink">
          <r-card-text>2</r-card-text>
        </r-card>
      </r-col>
      <r-col xs2>
        <r-card class="pink">
          <r-card-text>2</r-card-text>
        </r-card>
      </r-col>
      <r-col xs2>
        <r-card class="pink">
          <r-card-text>2</r-card-text>
        </r-card>
      </r-col>
      <r-col xs2>
        <r-card class="pink">
          <r-card-text>2</r-card-text>
        </r-card>
      </r-col>
    </r-row>

    <h2>组件</h2>
    <table class="bordered responsive-table">
      <thead>
        <th>组件</th>
        <th>说明</th>
      </thead>
      <tbody>
        <tr>
          <td>&lt;r-row&gt;</td>
          <td>一行</td>
        </tr>
        <tr>
          <td>&lt;r-col&gt;</td>
          <td>一列</td>
        </tr>
        <tr>
          <td>&lt;r-container&gt;</td>
          <td>栅格根组件 默认居中并带有padding</td>
        </tr>
        <tr>
          <td>&lt;r-content&gt;</td>
          <td>栅格根组件 默认居中无padding</td>
        </tr>
        <tr>
          <td>&lt;r-placeholder&gt;</td>
          <td>水平占位符 占据当前方向的剩余空间</td>
        </tr>
        <tr>
          <td>&lt;r-col-placeholder&gt;</td>
          <td>垂直占位符 占据当前方向的剩余空间</td>
        </tr>


      </tbody> 
    </table>
    <p>一般情况下 r-row 和 r-col 两个组件基本能满足布局需求</p>

    <h2>API</h2>

    <h3>Container props</h3>
    <table class="bordered responsive-table">
      <thead>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </thead>
      <tbody>
        <tr>
          <td>fluid</td>
          <td>流式布局: &lt;r-container fluid&gt;&lt;/r-container&gt; </td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
      </tbody> 
    </table>
    <h3>Row props</h3>
    <table class="bordered responsive-table">
      <thead>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </thead>
      <tbody>
        <tr>
          <td>no-gutter</td>
          <td>取消栅格间距</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>align</td>
          <td>flex 布局下的垂直对齐方式，可选值为top、middle、bottom</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>justify</td>
          <td>flex 布局下的水平排列方式，可选值为start、end、center、space-around、space-between</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody> 
    </table>

    <h3>Col props</h3>
    <table class="bordered responsive-table">
      <thead>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </thead>
      <tbody>
        <tr>
          <td>xs[n]</td>
          <td>栅格跨越范围 n=[1~12]</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody> 
    </table> 

    <Markup :lang="'html'">
      &lt;r-row&gt;
        &lt;r-col xs6&gt;
          ...
        &lt;/r-col&gt;
        &lt;r-col xs6&gt;
          ...
        &lt;/r-col&gt;
      &lt;/r-row&gt;
    </Markup>
    
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
  li {
    margin-left 20px
    list-style circle
    p {
      margin-bottom 5px
    }
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
