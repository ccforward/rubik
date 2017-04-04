<template>
  <div class="input-field file-field" :class="clazz">
    <r-btn v-if="disabled" disabled>FILE <i class="material-icons">file_upload</i></r-btn>
    <r-btn v-else info>FILE <i class="material-icons">file_upload</i></r-btn>
    <input name="name" type="file" :multiple="multiple" :disabled="disabled" ref="file"/>
    <div class="file-path">
      <input type="text" v-model="fileName" :placeholder="placeholder">
    </div>
    <i v-if="fileName" class="material-icons icon" @click="clear">cancel</i>
  </div>
</template>

<script>
  export default {
    name: 'file',
    
    data () {
      return {
        fileName: '',
        active: false
      }
    },

    computed: {
      clazz () {
        return {
          'file-field-disabled': this.disabled,
          'file-field-active': this.active,
        }
      }
    },

    props: {
      name: String,

      value: [Object, FileList, ''],

      placeholder: String,

      multiple: Boolean,

      disabled: Boolean

    },

    mounted () {
      const vm = this

      this.$refs.file.onchange = function (e) {
        if(this.files.length){
          vm.$emit('input', this.files)

          vm.active = true
          if(vm.multiple){
            let files = []
            for(let i=0,l=this.files.length;i<l;i++){
              files.push(this.files[i].name)
            }
            vm.fileName = files.join(' , ')
          }else {
            vm.fileName = this.files[0].name
          }
        }        
      }
    },
    methods:{
      clear(){
        this.$refs.file.value = this.fileName = ''
        this.$emit('input', '')
      }
    }
  }
</script>