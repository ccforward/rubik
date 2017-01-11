<template>
  <article>
    <h1>Checkbox</h1>

    <h2>例子</h2>
    
    <r-checkbox id="test7" name="test7" label="Testing 7"></r-checkbox>
    <r-checkbox id="test8" name="test8" label="Testing 8" filled="filled"></r-checkbox>
    <r-checkbox id="test9" name="test9" label="Testing 9" indeterminate="indeterminate"></r-checkbox>
    <r-checkbox id="test10" name="test10" label="Testing 10" disabled="disabled"></r-checkbox>
    <r-checkbox id="test10" name="test10" label="Testing 10" checked="checked" disabled="disabled"></r-checkbox>
    
    <r-input id="test2" name="test2" placeholder="Testing 3" label="Testing 2"></r-input>
    
    <r-radio id="test5" name="test5" label="Testing 5"></r-radio>
    <r-radio id="test6" name="test5" label="Testing 6" gap="gap"></r-radio>
    <r-radio id="test62" name="test52" label="Testing 62" gap="gap" checked="checked" disabled="disabled"></r-radio>
    <r-radio id="test61" name="test54" label="Testing 61" disabled="disabled" checked="checked"></r-radio>
    <r-radio id="test71" name="test5" label="Testing 71" disabled="disabled"></r-radio>


    <r-input id="test3" name="test3" label="Testing 3" placeholder="Testing 3"></r-input>
    
  </article>
</template>

<script>
export default {
  name: 'inputs',
  data(){
    return {
      text: '11111'
    }
  }
}
</script>
