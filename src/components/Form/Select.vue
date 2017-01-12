<template>
  <div class="input-field input-select" :class="clazz">
    <span class="caret">▼</span>
    <label :for="id" v-text="label"></label>
    <select :disabled="disabled" :id="id" :name="name" @blur="update" @click="focused = true" @input="update" ref="select">
      <option v-if="dftText" value="" selected="selected" :disabled="dftDisabled" v-text="dftText"></option>
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
      label: {
        type: String,
        value: ''
      },

      id: {
        type: String,
        value: ''
      },

      name: {
        type: String,
        value: ''
      },

      options: {
        type: Array,
        default: []
      },

      value: {
        required: false
      },

      dftText: {
        type: String,
        default: ''
      },

      dftDisabled: Boolean,

      disabled: Boolean,

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