<template>
  <div class="card" :class="clazz" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'card',
    
    props: {
      height: {
        type: String,
        default: 'auto'
      },

      horizontal: Boolean,

      img: String
    },

    computed: {
      clazz () {
        return {
          'card-horizontal': this.horizontal
        }
      },

      styles () {
        let styles = {
          height: this.height
        }

        if (this.img) {
          styles.background = `url(${this.img}) center center / cover no-repeat`
        }

        return styles
      }
    }
  }
</script>