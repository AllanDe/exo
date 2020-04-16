<template>
  <div v-bind:style="{background: color}">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type:String,
      default: 'bravo!!!!!'
    },
    color: String
  }
}
</script>
<style>

</style>
