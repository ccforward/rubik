<template>
  <span class="tag" :class="clazz" v-show="value">
    <slot></slot>
    <a v-if="close" href="#" class="tag-close" @click.prevent="$emit('input', false)">
      <r-icon right>cancel</r-icon>
    </a>
  </span>
</template>

<script>
  export default {
    name: 'tag',

    props: {
      close: Boolean,

      label: Boolean,

      outline: Boolean,

      small: Boolean,

      value: {
        type: Boolean,
        default: true
      }
    },

    computed: {
      classes () {
        return {
          'tag-label': this.label,
          'tag-outline': this.outline,
          'tag-small': this.small,
          'tag-removable': this.close
        }
      }
    }
  }
</script>