<template>
  <div class="modal-layer" :class="{ 'modal-layer-open': this.active }">
    <transition name="modal">
      <div class="modal" :class="clazz" :id="id" v-show="active" ref="modal">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>


<script>
  import Toggle from '../../mixins/toggle'

  export default {
    name: 'modal',

    mixins: [Toggle],

    props: {
      top: Boolean,

      bottom: Boolean,

      id: {
        type: String,
        required: true
      }
    },

    computed: {
      clazz () {
        if(this.top && this.bottom){
          this.top = this.bottom = false
        }
        return {
          'modal-top': this.top,
          'modal-bottom': this.bottom
        }
      }
    },

    methods: {
      close (e) {
        if (!e) {
          return this.active = false
        }

        if (e.target === this.$refs.modal || this.$refs.modal.contains(e.target)) {
          return
        }

        if (this.activator === null) {
          return
        }
        
        try {
          if (e.target === this.activator
              || this.activator.contains(e.target)
          ) {
            return
          }
        } catch (e) {}

        this.active = false
      }
    }
  }
</script>