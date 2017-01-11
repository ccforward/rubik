<template>
  <div class="input-field">
    <input type="checkbox" :checked="checked" :class="clazz" :disabled="disabled" :id="id" :name="name" :value="val" ref="checkbox" />
    <label :for="id" v-html="label"></label>
  </div>
</template>

<script>
  export default {
    name: 'checkbox',
    
    data () {
      return {
        model: null
      }
    },

    props: {
      disabled: Boolean,

      filled: Boolean,

      id: {
        type: String,
        default: ''
      },

      indeterminate: Boolean,
      
      label: {
        type: String,
        default: ''
      },

      name: {
        type: String,
        default: ''
      },

      value: {
        required: false
      },

      val: String,

      list: [Array, String],

      checked: Boolean
    },

    computed: {
      clazz () {
        return {
          'filled': this.filled
        }
      }
    },

    mounted () {
      const vm = this

      this.$refs.checkbox.indeterminate = this.indeterminate

      this.state()

      this.$refs.checkbox.onchange = function () {
        const c = this.checked
        // const v = this.value
        const v = vm.val

        if (!vm.list || typeof vm.list === 'string') {
          return vm.$emit('input', c ? true : false)
        }

        const i = vm.list.indexOf(v)

        if (c) {
          vm.list.push(v)
        } else {
          vm.list.splice(i, 1)
        }

        vm.$emit('input', v)
      }
    },

    methods: {
      state () {
        if(this.checked){
          this.$refs.checkbox.checked = true
          this.list && this.list.push(this.val)
        }else if (this.list && this.list.includes(this.val) ) {
          this.$refs.checkbox.checked = true
        }
      }
    }
  }
</script>