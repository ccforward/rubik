<template>
  <article>
    <h1>下拉菜单 Dropdown</h1>
    
    <h2>例子</h2>

    <h3>Hover</h3>
    <span>左侧划出</span>
    <r-btn class="green white-text" v-dropdown:dropdownA>下拉菜单<r-icon>arrow_drop_down</r-icon></r-btn>
    <r-dropdown id="dropdownA" :items="list" hover></r-dropdown>
    <br><br>
    <span>右侧划出</span>
    <r-btn class="green white-text" v-dropdown:dropdownB>下拉菜单<r-icon>arrow_drop_down</r-icon></r-btn>
    <r-dropdown id="dropdownB" right hover>
      <li><a class="dropdown-item" href="javascript:;">吃饭</a></li>
      <li><a class="dropdown-item" href="javascript:;">睡觉</a></li>
      <li><a class="dropdown-item" href="javascript:;">打豆豆</a></li>
      <li><a class="dropdown-item" href="javascript:;"><span class="red-after" v-badge:2>好消息</span></a></li>
    </r-dropdown>

    <h3>Click</h3>

    <r-btn class="red white-text" v-dropdown:dropdownC>下拉菜单<r-icon>arrow_drop_down</r-icon></r-btn>
    <r-dropdown id="dropdownC" :items="list"></r-dropdown>

    <h3>Link / Text</h3>
    <a v-dropdown:dropdownD href="javascript:;">下拉菜单-链接</a>
    <r-dropdown id="dropdownD" :items="list"></r-dropdown>

    <span class="dropdown-span" v-dropdown:dropdownE href="javascript:;">下拉菜单-文字</span>
    <r-dropdown id="dropdownE" :items="list" right hover></r-dropdown>

    <h3>Icon</h3>
    <r-icon class="dropdown-icon" v-dropdown:dropdown>info</r-icon>
    <r-dropdown id="dropdown" :items="list"></r-dropdown>

    <h2>API</h2>
    <h3>参数: <strong>id</strong></h3>
    <p>
      v-dropdown 指令的 value 和下拉菜单触发元素的 id 一一对应 <br>
      如下面的API的 dropdownA dropdownB dropdownC
    </p>
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
          <td>items</td>
          <td>下拉菜单的对象数组 { href:'', text:'' }</td>
          <td>Array</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>right</td>
          <td>下拉菜单从右侧划出，默认是左侧</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>hover</td>
          <td>hover时画出菜单 默认 click</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>

      </tbody> 
    </table>

    <Markup :lang="'html'">
      &lt;r-btn class="green white-text" v-dropdown:dropdownA&gt;下拉菜单&lt;r-icon&gt;arrow_drop_down&lt;/r-icon&gt;&lt;/r-btn&gt;
      &lt;r-dropdown id="dropdownA" :items="list" hover&gt;&lt;/r-dropdown&gt;

      // 下拉选项支持自定义方式添加
      &lt;r-btn class="green white-text" v-dropdown:dropdownB&gt;下拉菜单&lt;r-icon&gt;arrow_drop_down&lt;/r-icon&gt;&lt;/r-btn&gt;
      &lt;r-dropdown id="dropdownB" right hover&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href=""&gt;吃饭&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href=""&gt;睡觉&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href=""&gt;打豆豆&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href=""&gt;&lt;span v-badge:2&gt;好消息&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
      &lt;/r-dropdown&gt;

      &lt;r-btn class="red white-text" v-dropdown:dropdownC&gt;下拉菜单&lt;r-icon&gt;arrow_drop_down&lt;/r-icon&gt;&lt;/r-btn&gt;
      &lt;r-dropdown id="dropdownC" :items="list"&gt;&lt;/r-dropdown&gt;
    </Markup>
  </article>
</template>

<script>
export default {
  name: 'dropdowns',
  data(){
    return {
      list: [
        {
          href: 'javascript:;',
          text: '首页'
        },
        {
          href: 'javascript:;',
          text: '吃饭'
        },
        {
          href: 'javascript:;',
          text: '睡觉'
        },
        {
          href: 'javascript:;',
          text: '打豆豆'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  .dropdown-span {
    display inline-block
    margin 0 20px
    cursor pointer
  }
  .dropdown-icon {
    display inline-block
    cursor pointer
    &:hover {
      color #f06
    }
  }
</style>
