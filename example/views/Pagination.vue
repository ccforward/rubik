<template>
  <article>
    <h1>分页 Pagination</h1>

    <h2>例子</h2>
      
    <r-pagination :total="5" :cur="current1" :cb="cb1"></r-pagination>
    <r-pagination :total="100" :cur="current2" :cb="cb2"></r-pagination>

    <h3>圆形 round</h3>
    <r-pagination :total="5" :cur="current3" :cb="cb3" round></r-pagination>
    <r-pagination :total="100" :cur="current4" :cb="cb4" round></r-pagination>


    <h2>API</h2>

    <table class="bordered responsive-table">
      <thead>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </thead>
      <tbody>
        <tr>
          <td>total</td>
          <td>总页数</td>
          <td>Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>cur</td>
          <td>当前页</td>
          <td>Number</td>
          <td>1</td>
        </tr>
        <tr>
          <td>cb</td>
          <td>点击页码后的回调函数, 回调函数参数为页码数</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>round</td>
          <td>是否展示为圆形</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>

      </tbody> 
    </table>

    <Markup :lang="'html'">
      &lt;r-pagination :total="5" :cur="pageData"&gt;&lt;/r-pagination&gt;
      &lt;r-pagination :total="100" :cur="pageData"&gt;&lt;/r-pagination&gt;

      &lt;r-pagination :total="5" :cur="pageData2" round&gt;&lt;/r-pagination&gt;
      &lt;r-pagination :total="100" :cur="pageData2" round&gt;&lt;/r-pagination&gt;
    </Markup>
  </article>
</template>

<script>
export default {
  name: 'paginations',
  data(){
    return {
      current: 1,
      current1: 1,
      current2: 2,
      current3: 3,
      current4: 4
    }
  },
  methods: {
    cb1(p){
      this.current1 = p
    },
    cb2(p){
      this.current2 = p
    },
    cb3(p){
      this.current3 = p
    },
    cb4(p){
      this.current4 = p
    },

  }
}
</script>
