<template>
  <div class="card-row" :class="clazz" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'card-row',
    
    props: {
      actions: Boolean,

      height: {
        type: String,
        default: 'auto'
      },

      img: String
    },

    computed: {
      clazz () {
        return {
          'card-row-actions': this.actions
        }
      },

      styles () {
        const style = {
          height: this.height
        }

        if (this.img) {
          style.background = `url(${this.img}) center center / cover no-repeat`
        }
        
        return style
      }
    }
  }
</script>