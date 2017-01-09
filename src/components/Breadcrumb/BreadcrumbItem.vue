<template>
  <li>
    <a class="breadcrumb-item" :class="clazz" :href="item.link" v-html="item.text"></a>
  </li>
</template>

<script>
  export default {
    name: 'breadcrumb-item',
    
    props: {
      disable: Boolean,

      item: {
        type: Object,
        required: true
      }
    },

    computed: {
      clazz () {
        return {
          'breadcrumb-item-disable': this.disable
        }
      }
    }
  }
</script>