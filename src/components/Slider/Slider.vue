<template>
  <div class="slider">
    <div v-if="arrow" class="slider-left">
      <r-btn icon="icon" v-on:click.native="prev">
        <r-icon>chevron_left</r-icon>
      </r-btn>
    </div>
    <div v-if="arrow" class="slider-right">
      <r-btn icon="icon" v-on:click.native="next">
        <r-icon>chevron_right</r-icon>
      </r-btn>
    </div>
    <div class="slider-controls">
      <r-btn class="slider-controls-item" icon="icon" v-bind:class="{ 'slider-controls-item-active': index === current }" v-for="(item, index) in items">
        <r-icon v-on:click.native="select(index)">{{ dot }}</r-icon>
      </r-btn>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'slider',

    data () {
      return {
        current: null,
        items: [],
        slide_interval: {},
        reverse: false
      }
    },

    props: {
      arrow: {
        type: Boolean,
        default: true
      },
      auto: {
        type: Boolean,
        default: true
      },

      dot: {
        type: String,
        default: 'fiber_manual_record'
      },

      interval: {
        type: Number,
        default: 5000
      }
    },

    watch: {
      current () {
        // Evaulate items when current changes to account for
        // dynamic changing of children
        this.items = this.$children.filter(i => {
          return i.$el.classList && i.$el.classList.contains('slider-item')
        })

        if (this.auto) {
          clearInterval(this.slide_interval)
          this.startInterval()
        }

        this.$rubik.bridge.pub('slider:open', this.items[this.current]._uid, this.reverse)
      }
    },

    mounted () {
      this.init()
    },

    activated () {
      this.init()
    },

    methods: {
      init () {
        this.current = 0
      },

      next () {
        this.reverse = false
        
        if (this.current + 1 === this.items.length) {
          return this.current = 0
        }

        this.current++
      },

      prev () {
        this.reverse = true

        if (this.current - 1 < 0) {
          return this.current = this.items.length - 1
        }

        this.current--
      },

      select (index) {
        this.reverse = index < this.current
        this.current = index
      },

      startInterval () {
        this.slide_interval = setInterval(this.next, this.interval)
      }
    }
  }
</script>
