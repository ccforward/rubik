<template>
  <article>
    <h1>标签页 Tabs</h1>
    
    <h2>例子</h2>

    <r-tabs> 
      <r-tabs-nav >
        <r-tab href="tab1" class="black-after" selected>Tab 1</r-tab>
        <r-tab href="tab2" class="black-after">Tab 2</r-tab>
        <r-tab href="tab3" class="black-after">Tab 3</r-tab>
        <r-tab href="tab4" class="black-after">Tab 4</r-tab>
      </r-tabs-nav>

      <r-tabs-content class="white">
        <r-tabs-item id="tab1">
          <p>{{txt}}</p>
          <p>{{txt}}</p>
          <p>{{txt}}</p>
        </r-tabs-item>
        <r-tabs-item id="tab2">{{txt}}</r-tabs-item>
        <r-tabs-item id="tab3">
          <p>{{txt}}</p>
          <p>{{txt}}</p>
          <p>{{txt}}</p>
        </r-tabs-item>
        <r-tabs-item id="tab4">{{txt}}</r-tabs-item>
      </r-tabs-content>
    </r-tabs>

    <h2>组件说明</h2>
    <table class="bordered responsive-table">
      <thead>
        <th>组件</th>
        <th>说明</th>
        <th>属性</th>
      </thead>
      <tbody>
        <tr>
          <td>&lt;r-tabs&gt;</td>
          <td>Tabs 根组件</td>
          <td>-</td>
        </tr>
        <tr>
          <td>&lt;r-tabs-nav&gt;</td>
          <td>Tabs导航 根组件</td>
          <td>-</td> 
        </tr>
        <tr>
          <td>&lt;r-tab&gt;</td>
          <td>Tabs导航 列表组件</td>
          <td>
            href: 和 r-tabs-item 的 id 一一对应 <br>
            selected: 手动选中当前导航
          </td>
        </tr>
        <tr>
          <td>&lt;r-tabs-content&gt;</td>
          <td>Tabs内容 根组件</td>
          <td>-</td>
        </tr>
        <tr>
          <td>&lt;r-tabs-item&gt;</td>
          <td>Tabs内容 列表组件</td>
          <td>id: 和 r-tab 的 href 一一对应</td>
        </tr>

      </tbody> 
    </table>

    <h2>API</h2>
    

    <Markup :lang="'html'">
      &lt;r-tabs&gt; 
        &lt;!-- 标签页导航 --&gt;
        &lt;r-tabs-nav &gt;
          &lt;r-tab href="tab1" selected&gt;Tab 1&lt;/r-tab&gt;
          &lt;r-tab href="tab2"&gt;Tab 2&lt;/r-tab&gt;
          &lt;r-tab href="tab3"&gt;Tab 3&lt;/r-tab&gt;
          &lt;r-tab href="tab4"&gt;Tab 4&lt;/r-tab&gt;
        &lt;/r-tabs-nav&gt;

        &lt;!-- 标签页内容 --&gt;
        &lt;r-tabs-content&gt;
          &lt;r-tabs-item id="tab1"&gt;
            &lt;p&gt;...&lt;/p&gt;
            &lt;p&gt;...&lt;/p&gt;
            &lt;p&gt;...&lt;/p&gt;
          &lt;/r-tabs-item&gt;
          &lt;r-tabs-item id="tab2"&gt;...&lt;/r-tabs-item&gt;
          &lt;r-tabs-item id="tab3"&gt;
            &lt;p&gt;...&lt;/p&gt;
            &lt;p&gt;...&lt;/p&gt;
            &lt;p&gt;...&lt;/p&gt;
          &lt;/r-tabs-item&gt;
          &lt;r-tabs-item id="tab4"&gt;...&lt;/r-tabs-item&gt;
        &lt;/r-tabs-content&gt;
      &lt;/r-tabs&gt;
    </Markup>
  </article>
</template>

<script>
export default {
  name: 'tab',
  data(){
    return {
      txt: 'I have to remind myself that some birds don’t mean to be caged . Their feathers are just too bright. And when they fly away, the part of you that knows it was a sin to lock them up. DOES rejoice. Still, the place you live in is that much more drab and empty that they’re gone. I guess I just miss my friend. '
    }
  }
}
</script>

<style scoped lang="stylus">
  .tabs {
    a {
      color #fff
    }
  }
</style>
