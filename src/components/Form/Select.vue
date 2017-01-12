<template>
  <div class="input-field input-select" :class="clazz">
    <span class="caret">▼</span>
    <label :for="id" v-text="label"></label>
    <select :disabled="disabled" :id="id" :name="name" @blur="update" @click="focused = true" @input="update" ref="select">
      <option v-if="dftTxt" value="" selected="selected" :disabled="dftDisabled" v-text="dftTxt"></option>
      <option v-for="o in options" v-bind:value="o.value"  :disabled="o.disabled" v-text="o.text" ref="options"></option>
    </select>
  </div>
</template>


<script>
  export default {
    name: 'select',
    
    data () {
      return {
        input: '',
        focused: false
      }
    },

    props: {
      dftTxt: {
        type: String,
        default: ''
      },

      dftDisabled: Boolean,

      disabled: Boolean,

      id: {
        type: String,
        value: ''
      },

      label: {
        type: String,
        value: ''
      },

      name: {
        type: String,
        value: ''
      },

      options: {
        type: Array,
        default: () => []
      },

      value: {
        required: false
      }
    },

    computed: {
      clazz () {
        return {
          'input-field-active': true,
          'input-field-focused': this.focused && !this.multiple
        }
      }
    },

    mounted () {
      if (this.value) {
        this.$refs.select.value = this.value
      }
    },

    methods: {
      update () {
        this.$emit('input', this.$refs.select.value)
      }
    }
  }
</script>