<template>
<section class="container mx-auto flex justify-center">
  <register-form></register-form>
</section>
</template>

<script>
import RegisterForm from '../components/register/register-form';
export default {
  name: 'Registration',
  components: {
    RegisterForm
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>