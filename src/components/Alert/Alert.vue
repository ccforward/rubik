<template>
  <div class="alert" v-bind:class="clazz" v-show="show">
    <r-icon class="alert-icon" v-if="!noIcon">{{ iconVal }}</r-icon>
    <div>
      <slot></slot>
    </div>
    <a class="alert-close-icon" href="#" v-if="close" @click.prevent="show=false">
      <r-icon right="right">cancel</r-icon>
    </a>
  </div>
</template>

<script>
export default {
  name: 'alert',
  data(){
    return {
      show: {
        type: Boolean,
        default: true
      }
    }
  },
  props: {
    info: Boolean,
    success: Boolean,
    warning: Boolean,
    error: Boolean,

    close: Boolean,

    icon: String,
    noIcon: Boolean
  },

  computed: {
    clazz() {
      return {
        'alert-error': this.error,
        'alert-info': this.info,
        'alert-success': this.success,
        'alert-warning': this.warning,
        'alert-close': this.close
      }
    },

    iconVal() {
      if (this.icon) {
        return this.icon
      }

      switch (true) {
        case this.error:
          return 'error'
          break
        case this.info:
          return 'info'
          break
        case this.success:
          return 'check_circle'
          break
        case this.warning:
          return 'warning'
          break
      }
    }
  }
}
</script>