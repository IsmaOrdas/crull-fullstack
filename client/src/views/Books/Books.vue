<template>
<section class="books">
  <p>books</p>  
</section>  
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Books',
  data () {
    return {}
  },
  methods: {
    ...mapActions([
      'fetchBooks'
    ])
  },
  async created () {
    console.log('created')
    this.fetchBooks();
  }
}
</script>

<style>

</style>