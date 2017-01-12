<template>
  <div class="input-field file-field">
    <r-btn info>
      FLIE
    </r-btn>
    <input id="file" name="name" type="file" ref="file"/>
    <div class="file-path">
      <input class="file-path" type="text" placeholder="上传个文件">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'file',
    
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

      label: String,

      id: String,

      name: String,

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