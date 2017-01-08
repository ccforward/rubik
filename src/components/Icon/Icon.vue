<template>
  <i class="material-icons icon" :class="clazz"><slot></slot></i>
</template>

<script>
  export default {
    name: 'icon',

    data(){
      return {
        active: false
      }
    },

    props: {
      medium: Boolean,
      large: Boolean,
      xLarge: Boolean,
      left: Boolean,
      right: Boolean
    },

    computed: {
      clazz(){
        return {
          'icon-medium':  this.medium,
          'icon-large':  this.large,
          'icon-x-large':  this.xLarge,
          'icon-left':  this.left,
          'icon-right': this.right
        }
      }
    }
  }
</script>