<template>
  <article>
    <h1>工具 Helper</h1>

    <p>
      PS: helper 中所有的 css 属性值都设置为了  <code>!important</code>
    </p>

    <h4>1、间距 Space</h4>
    <h6>类型 margin 和 padding</h6>
    <ul>
      <li><code>m-</code> - margin</li>
      <li><code>p-</code> - padding</li>
    </ul>
    <br> 
    <h6>方向</h6>
    <ul>
      <li><code>t</code> - top</li>
      <li><code>r</code> - right</li>
      <li><code>b</code> - bottom</li>
      <li><code>l</code> - left</li>
      <li><code>x</code> - x 方向 right left</li>
      <li><code>y</code> - y 方向 top bottom</li>
      <li><code>a</code> - 所有方向 上右下左</li>
    </ul>
    <br>

    <h6>margin 和 padding 大小</h6>
    <ul>
      <li><code>0</code> - 0</li>
      <li><code>1</code> - 1rem * .25</li>
      <li><code>2</code> - 1rem * .50</li>
      <li><code>3</code> - 1rem (14px)</li>
      <li><code>4</code> - 1rem * 1.5</li>
      <li><code>5</code> - 1rem * 3</li>
    </ul>
    <br>

    <h4>2、标题 h1 ~ h6 标签：</h4>
    <br> 
    <h1>标题 H1</h1>
    <h2>标题 H2</h2>
    <h3>标题 H3</h3>
    <h4>标题 H4</h4>
    <h5>标题 H5</h5>
    <h6>标题 H6</h6>

    <br> 

    <code class="code">
      &lt;  &gt;

      <p class="mt-1">margin-top-1</p>
      <p class="pl-1">padding-left-1</p>
 
      <li class="pb-2">...</li>
       
       
    </code>
    
  </article>
</template>

<script>
export default {
  name: 'grid'
}
</script>

<style lang="stylus" scoped>
  code {
    width auto !important
    margin-bottom 5px !important
    &.code {
      width 100% !important
    }
  }
</style>
