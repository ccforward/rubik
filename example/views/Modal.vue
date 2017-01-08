<template>
  <article>
    <h1>对话框 Modal</h1>
    
    <h2>例子</h2>

    <r-btn class="primary white-text" v-modal:modal="">Regular</r-btn>
    <r-modal id="modal">
      <r-card>
        <r-card-text>
          <p class="txt">
            {{txt}}
          </p>
        </r-card-text>
        <r-card-row actions="actions">
          <r-placeholder/>
          <r-btn v-on:click.native="modal('modal')">Cancel</r-btn>
          <r-btn class="green white-text" v-on:click.native="modal('modal')">Submit</r-btn>
        </r-card-row>
      </r-card>
    </r-modal>

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
    

    <code>
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
    </code>
  </article>
</template>

<script>
export default {
  name: 'modals',
  data(){
    return {
      txt: 'I have to remind myself that some birds don’t mean to be caged . Their feathers are just too bright. And when they fly away, the part of you that knows it was a sin to lock them up. DOES rejoice. Still, the place you live in is that much more drab and empty that they’re gone. I guess I just miss my friend. '
    }
  },
  methods:{
    modal (id) {
        this.$rubik.bridge.pub(`modal:close:${id}`)
      }
  }
}
</script>

<style scoped lang="stylus">
  .btn {
    margin 10px
  }
</style>
