<template>
  <button class="btn" :class="clazz" :type="type" >
    <span class="btn-content">
      <slot></slot>
    </span> 
    <span class="btn-loading" v-if="loading">
      <slot namel="loading"></slot>
    </span>
  </button>
</template>

<script>
  import status from '../../mixins/status'

  export default {
    name: 'button',
    
    mixins: [status],

    props: {
      block: Boolean,
      flat: Boolean,
      round: Boolean,
      floating: Boolean,
      loading: Boolean,
      outline: Boolean,
      large: Boolean,
      small: Boolean,
      icon: Boolean,
      raised: {
        type: Boolean,
        default: true
      },
      ripple: {
        type: [Boolean, Object],
        default: false
      },
      type: {
        type: String,
        default: 'button'
      }
    },

    computed: {
      clazz() {
        return {
          'btn-block': this.block,
          'btn-flat': this.flat,
          'btn-round': this.round,
          'btn-floating': this.floating,
          'btn-loading': this.loading,
          'btn-outline': this.outline,
          'btn-large': this.large,
          'btn-small': this.small,
          'btn-icon': this.icon,
          'btn-raised': this.raised,
          'primary': this.primary,
          'secondary': this.secondary,
          'success': this.success,
          'info': this.info,
          'warning': this.warning,
          'error': this.error,
        }
      }
    }
  }
</script>