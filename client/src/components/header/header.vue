<template>
<div class="header">
  <div id="nav">
    <template v-if='isLoggedIn'>
      <router-link to="/">Home</router-link> |
      <router-link to="/books">Books</router-link> |
      <router-link to="/profile">Profile</router-link>
    </template>
    <template v-else>
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </template>
  </div>
</div>  
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'AppHeader',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'isLoggedIn'
    ])
  },
  methods: {
    ...mapActions([])
  }
}
</script>

<style>

</style>