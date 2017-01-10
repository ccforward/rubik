<template>
  <article>
    <h1>分页 Pagination</h1>

    <h2>例子</h2>
      
    <r-pagination :total="5" :cur="current"></r-pagination>
    <r-pagination :total="100" :cur="current2"></r-pagination>
    
    <h3>圆形 round</h3>
    <r-pagination :total="5" :cur="current" round></r-pagination>
    <r-pagination :total="100" :cur="current2" round></r-pagination>


    <h2>API</h2>

    <code>
      &lt;r-pagination :total="5" :cur="pageData"&gt;&lt;/r-pagination&gt;
      &lt;r-pagination :total="100" :cur="pageData"&gt;&lt;/r-pagination&gt;

      &lt;r-pagination :total="5" :cur="pageData2" round&gt;&lt;/r-pagination&gt;
      &lt;r-pagination :total="100" :cur="pageData2" round&gt;&lt;/r-pagination&gt;
    </code>
  </article>
</template>

<script>
export default {
  name: 'paginations',
  data(){
    return {
      current: 2,
      current2: 3
    }
  }
}
</script>
