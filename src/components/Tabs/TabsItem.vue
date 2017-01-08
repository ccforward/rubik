<template>
  <transition :name="transition">
    <div class="tabs-item shift" :id="id" v-show="active">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  import Event from '../../mixins/event'

  export default {
    name: 'tabs-item',
    
    data () {
      return {
        active: false
      }
    },

    mixins: [
      Event
    ],

    props: {
      id: {
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
          ['tab:open', this.open]
        ]
      }
    },

    methods: {
      open (target) {
        this.active = this.id === target
      }
    }
  }
</script>