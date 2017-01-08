<template>
  <a class="tabs-tab" :class="clazz" :href="href" @click.prevent="click">
    <slot></slot>
  </a>
</template>

<script>
  import Event from '../../mixins/event'

  export default {
    name: 'tab',

    data () {
      return {
        active: false
      }
    },

    mixins: [Event],

    props: {
      href: {
        type: String,
        required: true
      },

      selected: Boolean
    },

    computed: {
      clazz () {
        return {
          'tabs-tab-active': this.active
        }
      },

      events () {
        return [
          ['tab:open', this.activate]
        ]
      },

      target () {
        return this.href.replace('#', '')
      }
    },

    mounted () {
      if (this.selected || window.location.hash.substr(1) === this.target) {
        this.$rubik.load(this.click)
      }
    },

    methods: {
      activate (target) {
        this.active = target === this.target
      },

      click () {
        this.$rubik.bridge.pub('tab:open', this.target)
      }
    }
  }
</script>