<template>
<div class="container mx-auto flex justify-center">
  <login-form></login-form>
</div>
</template>

<script>
import LoginForm from '@/components/login/login-form'
export default {
  name: 'Login',
  components: {
    LoginForm
  },
  data () {
    return {}
  }
}
</script>