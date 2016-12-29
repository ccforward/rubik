<template>
  <transition :name="transition">
    <div class="slider-item" :class="{ 'reverse': reverse }" :style="styles" v-show="active">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  import Eventable from '../../mixins/event'

  export default {
    name: 'slider-item',

    mixins: [
      Eventable
    ],

    data () {
      return {
        active: false,
        reverse: false
      }
    },

    props: {
      src: {
        type: String,
        required: true
      },

      transition: {
        type: String,
        default: 'shift'
      }
    },

    computed: {
      events () {
        return [
          ['slider:open', this.open]
        ]
      },

      styles () {
        return { 
          backgroundImage: `url(${this.src})`
        }
      }
    },

    methods: {
      open (target, reverse = false) {
        this.active = this._uid === target
        this.reverse = reverse
      }
    }
  }
</script>