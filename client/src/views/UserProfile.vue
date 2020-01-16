<template>
<section class="library__user-profile flex justify-center">
  <form class="library__user-profile-form" action="" method="post">
    <div class="mb-8">
      <label class="inline-block mb-2 text-left" for="username">Usuario</label>
      <input v-model='userProfile.username' disabled type="text" name="username" id="" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
    </div>
    <div class="mb-8">
      <label class="inline-block mb-2 text-left" for="password">Contraseña</label>
      <input v-model='userProfile.password' disabled type="text" name="password" id="" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
    </div>
  </form>
</section>
</template>

<script>
export default {
  name: 'UserProfile',
  data () {
    return {
      userProfile: {}
    }
  },
  mounted () {
    this.userProfile = JSON.parse(localStorage.getItem('_user'));
  }
}
</script>

<style lang="scss" scoped>
.library {

  &__user-profile-form {
    width: 500px;
  }
}
</style>