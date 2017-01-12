<template>
  <div class="row" :class="clazz">
    <slot></slot>
  </div>
</template>

<script>
  const justifyArr = ['start', 'end', 'center', 'space-between',  'space-around']
  const alignArr = ['top', 'bottom', 'middle']
  export default {
    name: 'row',

    props: {
      // no-gutter
      noGutter: {
        type: Boolean,
        default: false
      },

      // start end center space-between  space-around
      justify: {
        type: String,
        default: ''
      },

      //  top bottom middle
      align: {
        type: String,
        default: ''
      }
    },

    computed: {
      clazz() {
        let clazz = ''
        if(this.noGutter){
          clazz += 'no-gutter'
        }
        if(~justifyArr.indexOf(this.justify)){
          clazz += ' row-flex-' + this.justify
        }
        if(~alignArr.indexOf(this.align)){
          clazz += ' row-flex-' + this.align
        }
        return clazz
      }
    }
  }
</script>