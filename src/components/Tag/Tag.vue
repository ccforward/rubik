<template>
  <span class="tag" :class="clazz" v-show="show">
    <slot></slot>
    <!-- <a v-if="close" href="#" class="tag-close" @click.prevent="$emit('input', false)"> -->
    <a v-if="close" href="#" class="tag-close" @click.prevent="show=false">
      <r-icon right>cancel</r-icon>
    </a>
  </span>
</template>

<script>
  export default {
    name: 'tag',

    data(){
      return {
        show: {
          type: Boolean,
          default: true
        }
      }
    },

    props: {
      close: Boolean,

      rect: Boolean,

      outline: Boolean,

      small: Boolean,
      
    },

    computed: {
      clazz () {
        return {
          'tag-rect': this.rect,
          'tag-outline': this.outline,
          'tag-small': this.small
        }
      }
    }
  }
</script>