<template>
  <article>
    <h1>工具 Helper</h1>

    <p>
      PS: helper 中所有的 css 属性值都设置为了  <code>!important</code>
    </p>

    <h4>1、间距 Space</h4>
    <h6>类型 margin 和 padding</h6>
    <ul>
      <li><code>m</code> - margin</li>
      <li><code>p</code> - padding</li>
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
    <br>

    <h6>margin 和 padding 大小</h6>
    <ul>
      <li><code>-0</code> - 0</li>
      <li><code>-1</code> - 1rem * .25</li>
      <li><code>-2</code> - 1rem * .50</li>
      <li><code>-3</code> - 1rem (14px)</li>
      <li><code>-4</code> - 1rem * 1.5</li>
      <li><code>-5</code> - 1rem * 3</li>
    </ul>
    <br>
    <br>

    <h4>2、文本对齐</h4>
    <ul>
      <li>text-left: <code>text-align: left !important</code></li>
      <li>text-right: <code>text-align: right !important</code></li>
      <li>text-center: <code>text-align: center !important</code></li>
      <li>text-justify: <code>text-align: justify !important</code></li>
    </ul>
    <br>
    <br>

    <h4>3、浮动 float</h4>
    <br>
    <ul>
      <li>left: <code>float: left !important</code></li>
      <li>right: <code>float: right !important</code></li>
    </ul>
    <br>
    <br>
    
    <h4>3、标题 h1 ~ h6 标签：</h4>
    <br> 
    <h1>标题 H1</h1>
    <h2>标题 H2</h2>
    <h3>标题 H3</h3>
    <h4>标题 H4</h4>
    <h5>标题 H5</h5>
    <h6>标题 H6</h6>
    <br>
    <br>


    <h4>4、其他</h4>
    <br>

    <ul>
      <li>relative: <code>position: relative !important</code></li>
      <li>hidden: <code>display: none !important</code></li>
    </ul>
    <br>
    <br>


    

    <br> 

    <Markup :lang="'html'">
      &lt;p class="mt-1"&gt;margin-top-1&lt;/p&gt;
      &lt;p class="pl-1"&gt;padding-left-1&lt;/p&gt;
      &lt;div class="pa-3"&gt;padding-all-3&lt;/div&gt;
      &lt;r-button class="ma-3"&gt;margin-all-3&lt;/r-button&gt;

      &lt;p class="text-right"&gt; right &lt;/p&gt;
      &lt;p class="text-left"&gt; left &lt;/p&gt;
      &lt;p class="text-center"&gt; center &lt;/p&gt;
      &lt;p class="text-justify"&gt; justify &lt;/p&gt;

      &lt;h1&gt;标题 H1&lt;/h1&gt;
      &lt;h2&gt;标题 H2&lt;/h2&gt;
      &lt;h3&gt;标题 H3&lt;/h3&gt;
      &lt;h4&gt;标题 H4&lt;/h4&gt;
      &lt;h5&gt;标题 H5&lt;/h5&gt;
      &lt;h6&gt;标题 H6&lt;/h6&gt;
    </Markup>
    
  </article>
</template>

<script>
export default {
  name: 'helper'
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
