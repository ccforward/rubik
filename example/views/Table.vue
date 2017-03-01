<template>
  <article>
    <h1>表格 Table</h1>

    <h2>Basic</h2>
    <table>
        <thead>
          <tr>
              <th>属性</th>
              <th>说明</th>
              <th>默认值</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>width</td>
            <td>宽度</td>
            <td>100px</td>
          </tr>
          <tr>
            <td>color</td>
            <td>颜色</td>
            <td>#f06</td>
          </tr>
          <tr>
            <td>height</td>
            <td>高度</td>
            <td>150px</td>
          </tr>
        </tbody>
    </table>

    <h2>边框 Border</h2>
    <p>给 table 元素添加 class bordered</p>
    <table class="bordered">
        <thead>
          <tr>
              <th>属性</th>
              <th>说明</th>
              <th>默认值</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>width</td>
            <td>宽度</td>
            <td>100px</td>
          </tr>
          <tr>
            <td>color</td>
            <td>颜色</td>
            <td>#f06</td>
          </tr>
          <tr>
            <td>height</td>
            <td>高度</td>
            <td>150px</td>
          </tr>
        </tbody>
    </table>

    <h2>条纹 Striped</h2>
    <p>给 table 元素添加 class striped</p>
    <table class="striped">
        <thead>
          <tr>
              <th>属性</th>
              <th>说明</th>
              <th>默认值</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>width</td>
            <td>宽度</td>
            <td>100px</td>
          </tr>
          <tr>
            <td>color</td>
            <td>颜色</td>
            <td>#f06</td>
          </tr>
          <tr>
            <td>height</td>
            <td>高度</td>
            <td>150px</td>
          </tr>
        </tbody>
    </table>

    <h2>高亮 Highlight</h2>
    <p>给 table 元素添加 class highlight</p>
    <table class="highlight">
        <thead>
          <tr>
              <th>属性</th>
              <th>说明</th>
              <th>默认值</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>width</td>
            <td>宽度</td>
            <td>100px</td>
          </tr>
          <tr>
            <td>color</td>
            <td>颜色</td>
            <td>#f06</td>
          </tr>
          <tr>
            <td>height</td>
            <td>高度</td>
            <td>150px</td>
          </tr>
        </tbody>
    </table>

    <h2>居中 Centered</h2>
    <p>给 table 元素添加 class centered</p>
    <table class="centered">
        <thead>
          <tr>
              <th>属性</th>
              <th>说明</th>
              <th>默认值</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>width</td>
            <td>宽度</td>
            <td>100px</td>
          </tr>
          <tr>
            <td>color</td>
            <td>颜色</td>
            <td>#f06</td>
          </tr>
          <tr>
            <td>height</td>
            <td>高度</td>
            <td>150px</td>
          </tr>
        </tbody>
    </table>

    <h2>响应式 Responsive</h2>
    <p>给 table 元素添加 class responsive-table</p>
    <table class="responsive-table">
        <thead>
          <tr>
              <th>属性</th>
              <th>说明</th>
              <th>默认值</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>width</td>
            <td>宽度</td>
            <td>100px</td>
          </tr>
          <tr>
            <td>color</td>
            <td>颜色</td>
            <td>#f06</td>
          </tr>
          <tr>
            <td>height</td>
            <td>高度</td>
            <td>150px</td>
          </tr>
        </tbody>
    </table>


    <Markup :lang="'html'">
      &lt;table class="bordered striped highlight centered"&gt;
        &lt;thead&gt;
          &lt;tr&gt;
              &lt;th&gt;属性&lt;/th&gt;
              &lt;th&gt;说明&lt;/th&gt;
              &lt;th&gt;默认值&lt;/th&gt;
          &lt;/tr&gt;
        &lt;/thead&gt;

        &lt;tbody&gt;
          &lt;tr&gt;
            &lt;td&gt;width&lt;/td&gt;
            &lt;td&gt;宽度&lt;/td&gt;
            &lt;td&gt;100px&lt;/td&gt;
          &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;
    </Markup>
    
  </article>
</template>

<script>
export default {
  name: 'table'
}
</script>

<style lang="stylus" scoped>
  
</style>
