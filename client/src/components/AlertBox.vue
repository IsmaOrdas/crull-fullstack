<template>
<div :class='cssClass'>
  <p>error message</p>
</div>
</template>

<script>
export default {
  name: 'AlertBox',
  data () {
    return {}
  },
  props: {
    type: {
      type: String,
      required: false
    },
    show: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    cssClass () {
      return {
        'hidden': !this.show,
        'rounded': true,
        'text-sm': true,
        'mb-4': true,
        'p-2': true,
        'bg-red-400': this.type === 'error',
        'bg-green-400': this.type !== 'error'
      }
      
    }
  }
}
</script>

<style>
.alert {
  width: 100%;
}
</style>