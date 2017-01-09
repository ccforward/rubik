<template>
  <ul class="breadcrumb" :class="clazz" :items="items">
    <r-breadcrumb-item v-for="item in items" :item="item" :disable="item.disable"></r-breadcrumb-item>
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'breadcrumb',
    
    props: {
      separator: {
        type: String,
        default: '/'
      },

      // sColor: {
      //   type: String,
      //   default: ''
      // },

      icon: Boolean,

      items: {
        type: Array,
        default: () => []
      }
    },

    computed: {
      clazz () {
        return {
          'breadcrumb-with-icon': this.icon
        }
      }
    },

    mounted () {
      this.$rubik.load(this.init)
    },

    methods: {
      init () {
        this.$children.forEach(item => {
          // this.sColor && item.$el.classList.add(this.sColor + '-after')
          item.$el.dataset.separator = this.separator
        })
      }
    }
  }
</script>