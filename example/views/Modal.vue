<template>
  <article>
    <h1>对话框 Modal</h1>
    
    <h2>例子</h2>

    <r-btn class="blue white-text" v-modal:modalA>中间弹出</r-btn>
    <r-modal id="modalA">
      <r-card>
        <r-card-text>
          <p class="txt">
            {{txt}}
          </p>
        </r-card-text>
        <r-card-row actions="actions">
          <r-placeholder/>
          <r-btn @click.native="modal('modalA')">取消</r-btn>
          <r-btn class="blue white-text" @click.native="modal('modalA')">确认</r-btn>
        </r-card-row>
      </r-card>
    </r-modal>

    <r-btn class="red white-text" v-modal:modalB>顶部弹出</r-btn>
    <r-modal id="modalB" top>
      <r-card class="red white-text">
        <r-card-row actions="actions">
          <div class="modal-txt">顶部对话框</div>
          <r-btn class="blue white-text" large @click.native="modal('modalB')">知道了</r-btn>
        </r-card-row>
      </r-card>
    </r-modal>

    <r-btn class="green white-text" v-modal:modalC>底部弹出</r-btn>
    <r-modal id="modalC" bottom>
      <r-card class="green white-text">
        <r-card-row actions="actions">
          <div class="modal-txt">底部对话框</div>
          <r-btn class="blue white-text" @click.native="modal('modalC')">知道了</r-btn>
        </r-card-row>
      </r-card>
    </r-modal>

    <h2>API</h2>
    
    <h3>指令说明</h3>
    <p>
      v-modal 作用在触发modal的元素上
    </p>
    <table class="bordered responsive-table">
      <thead>
        <th>指令</th>
        <th>说明</th>
      </thead>
      <tbody>
        <tr>
          <td>v-modal:modalA</td>
          <td>
            指令的参数 arg (即 modalA) 对应 r-modal 组件的属性 id (modalA)
          </td>
        </tr>
      </tbody> 
    </table>

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
          <td>id</td>
          <td>modal 的 id 属性对应 v-modal 指令的 arg</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>top</td>
          <td>modal 从顶部显示</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>bottom</td>
          <td>modal 从底部显示</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>-</td>
          <td>modal 从中间显示 (top 和 bottom 都为false)</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        

      </tbody> 
    </table>


    <Markup :lang="'html'">
      &lt;r-btn class="green white-text" v-modal:modal=""&gt;底部弹出&lt;/r-btn&gt;
      &lt;r-modal id="modal" bottom&gt;
        &lt;r-card class="green white-text"&gt;
          &lt;r-card-row actions="actions"&gt;
            &lt;div&gt;底部对话框&lt;/div&gt;
            &lt;r-placeholder/&gt;
            &lt;r-btn class="blue white--text" @click.native="modal('modal')"&gt;知道了&lt;/r-btn&gt;
          &lt;/r-card-row&gt;
        &lt;/r-card&gt;
      &lt;/r-modal&gt;
    </Markup>
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
  .modal-txt {
    flex auto
    text-align center
    font-size 1.5rem
  }
</style>
