<template>
  <ul class="dropdown" :class="clazz" :data-bottom="bottom" :data-hover="hover" :data-right="right" :id="id">
    <r-dropdown-item v-for="item in items" :item="item"></r-dropdown-item>
    <slot></slot>
  </ul>
</template>


<script>
  import Toggle from '../../mixins/toggle'

  export default {
    name: 'dropdown',

    mixins: [
      Toggle
    ],

    props: {
      bottom: Boolean,

      id: {
        type: String,
        required: true
      },

      hover: Boolean,

      items: {
        type: Array,
        default: () => []
      },

      right: Boolean
    },

    computed: {
      clazz () {
        return {
          'dropdown-open': this.active,
          'dropdown-open-from-right': this.right
        }
      }
    },

    mounted () {
      this.$rubik.bridge.sub(`${this.$options.name}:opened`, this.opened)
    },

    methods: {
      opened (id) {
        this.active = id === this.id
      }
    }
  }
</script>