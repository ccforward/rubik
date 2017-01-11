<template>
  <div class="input-field">
    <input type="radio" :class="clazz" :disabled="disabled" :id="id" :name="name" :value="value" ref="radio" />
    <label :for="id" v-html="label"></label>
  </div>
</template>


<script>
  export default {
    name: 'radio',
    props: {
      label: {
        type: String,
        default: ''
      },

      id: {
        type: String,
        default: ''
      },

      name: {
        type: String,
        default: ''
      },

      checked: Boolean,

      value: [String, Number, Boolean],

      // 环形
      dot: Boolean,

      disabled: Boolean,
    },

    computed: {
      clazz () {
        return {
          'dot': this.dot
        }
      }
    },
    watch: {
      value (value) {
        this.value = value
        this.$refs.radio.checked = this.$el.value === this.value
      }
    },

    mounted () {
      const vm = this

      this.$refs.radio.checked = this.$el.value === this.value
      
      if(this.checked){
        this.$refs.radio.checked = true
      }

      this.$refs.radio.onchange = function () {
        vm.$emit('input', this.value)
      }
    }
  }
</script>