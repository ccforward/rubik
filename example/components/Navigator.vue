<template>
  <nav>
    <ul>
      <li>
        <router-link :class="active == 'about' || 'home' && activeClass" :to="{path: '/about'}">
          <r-icon>face</r-icon>
          <span>关于</span>
        </router-link>
      </li>
      <li>
        <div>CSS</div>
        <ul>
          <li v-for="item in css">
            <router-link :class="active == item.name && activeClass" :to="{path: '/'+item.name}">
              <r-icon>{{item.icon}}</r-icon>
              <span>{{item.txt}}</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <div>组件</div>
        <ul>
          <li v-for="item in components">
            <router-link :class="active == item.name && activeClass" :to="{path: '/'+item.name}">
              <r-icon>{{item.icon}}</r-icon>
              <span>{{item.txt}}</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <div>表单</div>
        <ul>
          <li v-for="item in forms">
            <router-link :class="active == item.name && activeClass" :to="{path: '/'+item.name}">
              <r-icon>{{item.icon}}</r-icon>
              <span>{{item.txt}}</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <div>指令</div>
        <ul>
          <li v-for="item in directives">
            <router-link :class="active == item.name && activeClass" :to="{path: '/'+item.name}">
              <r-icon>{{item.icon}}</r-icon>
              <span>{{item.txt}}</span>
            </router-link>
          </li>
        </ul>
      </li>

    </ul>
    
  </nav>
</template>

<script>
export default {
  name: 'navigator',
  data() {
    return {
      activeClass: 'active',
      css: [
        {
          name: 'grid',
          icon: 'grid_on',
          txt: '栅格 Grid'
        },{
          name: 'helper',
          icon: 'build',
          txt: '工具 Helper'
        },{
          name: 'color',
          icon: 'palette',
          txt: '颜色 Color'
        },{
          name: 'shadow',
          icon: 'movie',
          txt: '阴影 Shadow'
        },{
          name: 'table',
          icon: 'border_all',
          txt: '表格 Table'
        }
      ],
      components: [
        {
          name: 'alert',
          icon: 'add_alert',
          txt: '警告框 Alert'
        },{
          name: 'breadcrumb',
          icon: 'arrow_forward',
          txt: '面包屑 Breadcrumb'
        },{
          name: 'card',
          icon: 'book',
          txt: '卡片 Card'
        },{
          name: 'tag',
          icon: 'beenhere',
          txt: '标签 Tag'
        },{
          name: 'icon',
          icon: 'toys',
          txt: '图标 Icon'
        },{
          name: 'loader',
          icon: 'refresh',
          txt: '加载 Loader'
        },{
          name: 'button',
          icon: 'credit_card',
          txt: '按钮 Button'
        },{
          name: 'dropdown',
          icon: 'arrow_drop_down_circle',
          txt: '下拉菜单 Dropdown'
        },{
          name: 'tab',
          icon: 'tab',
          txt: '标签页 Tabs'
        },{
          name: 'slider',
          icon: 'play_circle_outline',
          txt: '轮播 Slider'
        },{
          name: 'modal',
          icon: 'chat',
          txt: '对话框 Modal'
        },{
          name: 'pagination',
          icon: 'last_page',
          txt: '分页 Pagination'
        },{
          name: 'toast',
          icon: 'crop_landscape',
          txt: '消息通知 Toast'
        }
      ],
      forms: [
        {
          name: 'input',
          icon: 'input',
          txt: '输入 Input'
        },{
          name: 'file',
          icon: 'file_upload',
          txt: '上传 File'
        },{
          name: 'radio',
          icon: 'radio_button_checked',
          txt: '单选 Radio'
        },{
          name: 'checkbox',
          icon: 'check_box',
          txt: '多选 Checkbox'
        },{
          name: 'select',
          icon: 'keyboard_arrow_down',
          txt: '选择器 Select'
        },
      ],
      directives: [
        {
          name: 'waves',
          icon: 'leak_add',
          txt: '水波 Waves'
        },
        {
          name: 'badge',
          icon: 'fiber_manual_record',
          txt: '徽标 Badge'
        },{
          name: 'tooltip',
          icon: 'swap_vert',
          txt: '提示框 Tooltip'
        },{
          name: 'img-lazy',
          icon: 'image',
          txt: '懒加载 Lazy'
        }
      ]
    }
  },
  computed: {
    active() {
      return this.$route.name
    }
  }
}
</script>

<style lang="stylus">
@import '../style/variable.styl'
nav {
  font-size 14px
  padding 15px
  a {
    display flex
    position relative
    padding 10px 0 10px 10px
    color #525558
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    &.v-link-active,
    &:hover,
    &.active {
      color $txt-green
    }
    .material-icons {
      margin-right 5px
      min-width 20px
      font-size 20px
    }
    span {
      line-height 24px
    }
  }
  div {
    font-size 16px
    margin 8px 0
  }
}
@media (max-width: 700px) {
  nav {
    padding 0
  }
  nav a {
    font-size 12px
  }
}


</style>
