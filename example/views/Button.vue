<template>
  <article>
    <h1>按钮 Button</h1>

    <h2>例子</h2>
    <r-btn>Default</r-btn>

    <r-btn info disabled>INFO</r-btn>
 
    <r-btn success disabled>Success</r-btn>
    <r-btn success>Success</r-btn>

    <r-btn error>small</r-btn>
    <r-btn error large>Error</r-btn>
     
    <r-btn block>Block</r-btn>
     
    <r-btn success floating>
      <r-icon>check</r-icon>
    </r-btn>
    <r-btn error>
      <r-icon>delete</r-icon>
      Delete
    </r-btn>

    <h2>API</h2>
    <code>
      &lt;r-btn&gt;Default&lt;/r-btn&gt;
      
      &lt;r-btn info disabled&gt;INFO&lt;/r-btn&gt;

      &lt;r-btn success floating&gt;
        &lt;r-icon&gt;check&lt;/r-icon&gt;
      &lt;/r-btn&gt;

    </code>
  </article>
</template>

<script>
export default {
  name: 'button',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang="stylus">
  button {
    margin 1rem
  }
</style>
