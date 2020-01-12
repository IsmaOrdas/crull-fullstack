<template>
<div class="header">status: {{ status }}</div>  
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'AppHeader',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'status'
    ])
  },
  methods: {
    ...mapActions([])
  }
}
</script>

<style>

</style>