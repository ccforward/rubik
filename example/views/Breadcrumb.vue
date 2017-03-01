<template>
  <article>
    <h1>面包屑 Breadcrumb</h1>

    <h2>例子</h2>

    <h3>字符间隔</h3>

    <div class="bread-container">
      <r-breadcrumb separator="/" :items="items"></r-breadcrumb>
    </div>
    
    <div class="bread-container">
      <r-breadcrumb separator=">" :items="items"></r-breadcrumb>
    </div>

    <h3>icon间隔</h3>
    <div class="bread-container">
      <r-breadcrumb icon separator="arrow_forward" :items="items"></r-breadcrumb>
    </div>

    <div class="bread-container">
      <r-breadcrumb icon separator="directions_run" :items="items"></r-breadcrumb>
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
          <td>separator</td>
          <td>分隔符</td>
          <td>String</td>
          <td> '/' </td>
        </tr>
        <tr>
          <td>icon</td>
          <td>分隔符是否为 icon</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>items</td>
          <td>面包屑链接</td>
          <td>Array</td>
          <td>[]</td>
        </tr>

      </tbody> 
    </table>

    <h3>items</h3>
    <table class="bordered responsive-table">
      <thead>
        <th>键</th>
        <th>值</th>
      </thead>
      <tbody>
        <tr>
          <td>link</td>
          <td>链接地址</td>
        </tr>
        <tr>
          <td>text</td>
          <td>链接名称</td>
        </tr>
        <tr>
          <td>disable</td>
          <td>是否置为灰色</td>
        </tr>

      </tbody> 
    </table>

    <Markup :lang="'html'">
      &lt;r-breadcrumb separator="/" :items="items"&gt;&lt;/r-breadcrumb&gt;
      &lt;r-breadcrumb separator=">" :items="items"&gt;&lt;/r-breadcrumb&gt;
      &lt;r-breadcrumb icon separator="arrow_forward" :items="items"&gt;&lt;/r-breadcrumb&gt;
    </Markup>
    <Markup :lang="'js'">
      data () {
        return {
          items: [
            {
              link: 'javascript:;',
              text: '首页',
              disable: false
            },{
              link: 'javascript:;',
              text: '导航',
              disable: false
            },{
              link: 'javascript:;',
              text: '组件',
              disable: true
            }
          ]
        }
      }
    </Markup>
  </article>
</template>

<script>
export default {
  name: 'breadcrumbs',
  data () {
    return {
      items: [
        {
          link: 'javascript:;',
          text: '首页',
          disable: false
        },{
          link: 'javascript:;',
          text: '导航',
          disable: false
        },{
          link: 'javascript:;',
          text: '组件',
          disable: true
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  .bread-container {
    display flex
  }
  .breadcrumb {
    -webkit-box-pack end
    justify-content flex-end
  }
</style>
