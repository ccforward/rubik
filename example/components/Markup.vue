<template>
   <div class="markup" v-bind:data-lang="lang">
      <code :class="lang" ref="markup">
       <slot></slot>
      </code>
    </div>
</template>

<script>
import hljs from 'highlight.js/lib/highlight.js'
export default {
  name: 'markup',
  props: {
    lang: String,
  },
  mounted() {
    hljs.highlightBlock(this.$refs.markup)
  }
}
</script>

<style lang="stylus">
  .markup {
    position relative
    &:after{
      position: absolute
      right: 1rem
      transition: opacity .2s ease-in
      content: attr(data-lang)
      color: rgba(#000, 0.3)
      font-size: 1rem
      font-weight: 700
      top: .5rem
    }
  }
  .hljs {
    color #424242
    .hljs-tag,
    .hljs-variable {
      color #ab47bc
    }
    .hljs-attr,
    .hljs-keyword {
      color #2196f3
    }
    .hljs-literal,
    .hljs-number,
    .hljs-string {
      color #e57373
    }
  }
</style>


