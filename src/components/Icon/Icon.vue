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
          'medium':  this.medium,
          'large':  this.large,
          'xLarge':  this.xLarge,
          'left':  this.left,
          'right': this.right
        }
      }
    }
  }
</script>