<template>
  <button class="btn" :class="clazz" :type="type" >
    <span class="btn-loading" v-if="loading">
      <r-icon round>sync</r-icon>
      <slot name="loading"></slot>
    </span>
    <span class="btn-content">
      <slot></slot>
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
      circle: Boolean,
      loading: Boolean,
      outline: Boolean,
      large: Boolean,
      small: Boolean,
      icon: Boolean,
      raised: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: 'button'
      }
    },

    computed: {
      clazz() {
        return {
          'primary': this.primary,
          'secondary': this.secondary,

          'info': this.info,
          'success': this.success,
          'warning': this.warning,
          'error': this.error,

          'btn-outline': this.outline,
          'btn-flat': this.flat,
          'btn-circle': this.circle,
          'btn-round': this.round,
          'btn-icon': this.icon,
          
          
          'btn-loading': this.loading,
          'btn-raised': this.raised,
          
          'btn-small': this.small,
          'btn-large': this.large,
          'btn-block': this.block,
        }
      }
    }
  }
</script>