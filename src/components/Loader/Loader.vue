<template>
  <div v-show="show" class="loader is-active" :class="clazz"></div>
</template>

<script>

  export default {
    name: 'loader',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      normal: Boolean,
      half: Boolean,
      reverse: Boolean,

      bar: Boolean,
      barRound: Boolean,
      barReverse: Boolean,

      double: Boolean
      
    },
    computed: {
      clazz() {
        return {
          'loader-normal': this.normal,
          'loader-normal half': this.half,
          'loader-normal reverse': this.reverse,
          'loader-bar': this.bar,
          'loader-bar round': this.barRound,
          'loader-bar reverse': this.barReverse,
          'loader-double': this.double,
        }
      }
    }
  }
</script>