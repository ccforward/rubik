<template>
  <article>
    <h1>消息通知 Toast</h1>

    <p>
      确切说 toast 不是个组件 而是一个功能函数
    </p>

    <h2>例子</h2>
    
    <r-btn info @click.native="toast(top)">上边</r-btn>
    <r-btn info @click.native="toast(right)">右边</r-btn>
    <r-btn info @click.native="toast(bottom)">下边</r-btn>
    <r-btn info @click.native="toast(left)">左边</r-btn>
    <br>

    <h3>定时显示</h3>
    <p>默认显示 3 秒</p>
    <r-btn info @click.native="toast(bottom2)">0.5秒后消失</r-btn>
    <r-btn info @click.native="toast(bottom10)">10秒后消失</r-btn>
    <br>

    <h3>回调函数</h3>
    <r-btn success @click.native="toast(callback)">回调函数</r-btn>
    <br>

    <h2>API</h2>
    <p>
      显示 toast 只需调用 Vue 组件原型链上的 toast.fire() 方法
    </p>

    <h3>参数说明</h3>
    <p>
      fire 方法 <br> 
      fire (msg, position, countdown, fn)
    </p>
    <table class="bordered responsive-table">
      <thead>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </thead>
      <tbody>
        <tr>
          <td>msg</td>
          <td>消息的具体内容</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>position</td>
          <td>消息显示位置 四个可选值: top right bottom left</td>
          <td>String</td>
          <td>bottom</td>
        </tr>
        <tr>
          <td>coundown</td>
          <td>消息显示时长 单位: ms (毫秒)</td>
          <td>Number</td>
          <td>3000</td>
        </tr>
        <tr>
          <td>fn</td>
          <td>消息消失后的回调函数</td>
          <td>Function</td>
          <td>-</td>
        </tr>

      </tbody> 
    </table>

    <Markup :lang="'js'">
      const fn = () => alert('toast 的回调函数')
      export default {
        name: 'toast',
        data(){
          return {
            top: ['顶部消息', 'top'],
            right: ['右侧消息', 'right'],
            bottom: ['底部消息', 'bottom'],
            left: ['左侧消息', 'left'],
            bottom2: ['底部消息', 'bottom', 500],
            bottom10: ['底部消息', 'bottom', 10000],
            callback: ['2秒后执行回调', 'bottom', 2000, fn],
          }
        },
        methods: {
          toast (data) {
            // toast 的 fire
            this.$rubik.toast.fire(...data)
          }
        }
      }
    </Markup>
  </article>
</template>

<script>
const fn = () => alert('toast 的回调函数')
export default {
  name: 'toast',
  data(){
    return {
      top: ['顶部消息', 'top'],
      right: ['右侧消息', 'right'],
      bottom: ['底部消息', 'bottom'],
      left: ['左侧消息', 'left'],
      bottom2: ['底部消息', 'bottom', 500],
      bottom10: ['底部消息', 'bottom', 10000],
      callback: ['2秒后执行回调', 'bottom', 2000, fn],
    }
  },
  methods: {
    toast (data) {
      this.$rubik.toast.fire(...data)
    }
  }
}
</script>
