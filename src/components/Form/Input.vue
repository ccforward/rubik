<template>
  <div class="input-field" :class="clazz">
    <i v-if="icon" class="material-icons prefix" v-text="icon"></i>
    <div class="input-box">
      <label :for="id" v-html="label"></label>
      <input :disabled="disabled" :id="id" :name="name" :placeholder="placeholder" :type="type" :value="inputValue" v-on:blur="focused = false" v-on:input="val" v-on:focus="focused = true" ref="input" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'input',
    
    data () {
      return {
        focused: false,
        inputValue: ''
      }
    },

    computed: {
      clazz () {
        return {
          'input-field-focused': this.focused,
          'input-field-active': this.inputValue || this.placeholder || (this.$refs.input && this.$refs.input.value)
        }
      }
    },

    props: {
      type: {
        default: 'text'
      },

      label: String,

      id: String,

      name: String,

      icon: String,

      placeholder: String,

      disabled: Boolean,

      value: {
        required: false
      }
    },

    watch: {
      value (value) {
        this.inputValue = value
      }
    },

    mounted () {
      this.inputValue = this.value
    },

    methods: {
      val (e) {
        this.inputValue = e.target.value
        this.$emit('input', this.inputValue)
      }
    }
  }
</script>