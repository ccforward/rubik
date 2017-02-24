<template>
  <div class="input-field">
    <input type="checkbox" :checked="checked" :class="clazz" :disabled="disabled" :id="id" :name="name" :value="val" ref="checkbox" />
    <label :for="id" v-html="label"></label>
  </div>
</template>

<script>
  export default {
    name: 'checkbox',

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

      disabled: Boolean,

      val: String,

      selected: Array,

      filled: Boolean,

      indeterminate: Boolean

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
      
      if(this.checked){
        this.$refs.checkbox.checked = true
        if(this.selected && this.selected.indexOf(this.val) < 0)
          this.selected.push(this.val)
      }else if (this.selected && this.selected.indexOf(this.val) >= 0 ) {
        this.$refs.checkbox.checked = true
      }

      this.$refs.checkbox.onchange = function () {
        const chk = this.checked
        const val = vm.val

        if (!vm.selected || typeof vm.selected === 'string') {
          return vm.$emit('input', chk ? true : false)
        }

        const idx = vm.selected.indexOf(val)

        if (chk) {
          vm.selected.push(val)
        } else {
          vm.selected.splice(idx, 1)
        }

        vm.$emit('input', val)
      }
    }
  }
</script>