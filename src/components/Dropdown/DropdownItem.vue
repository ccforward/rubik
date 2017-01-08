<template>
  <li>
    <a class="dropdown-item" :href="item.href" v-html="item.text"></a>
  </li>
</template>

<script>
  export default {
    name: 'dropdown-item',
    
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>