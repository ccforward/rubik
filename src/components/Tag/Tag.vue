<template>
  <span class="tag" :class="clazz" v-show="value">
    <slot></slot>
    <!-- <a v-if="close" href="#" class="tag-close" @click.prevent="$emit('input', false)"> -->
    <a v-if="close" href="#" class="tag-close" @click.prevent="value=false">
      <r-icon right>cancel</r-icon>
    </a>
  </span>
</template>

<script>
  export default {
    name: 'tag',

    data(){
      return {
        value: {
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