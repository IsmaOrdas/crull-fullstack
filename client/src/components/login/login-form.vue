<template>
<div class="library__login">
  <form @submit.prevent="dispatchLogin" action="" method="post">
    <div class="mb-8">
      <label class="inline-block mb-2 text-left" for="username">Usuario</label>
      <input v-model='form.username' type="text" name="username" id="" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
    </div>
    <div class="mb-8">
      <label class="inline-block mb-2 text-left" for="password">Contraseña</label>
      <input v-model='form.password' type="password" name="password" id="" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
    </div>
    <div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Entrar</button>
    </div>
  </form>
</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'LoginForm',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(
      ['logUser']
    ),
    async dispatchLogin () {
      console.log('dispatchLogin', this.form);
      const logged = await this.logUser({...this.form})
      console.log(logged)

      if (logged) {
        localStorage.setItem('_token', logged.data.token)
        localStorage.setItem('_user', JSON.stringify(logged.data.user))
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.library {
  &__login {
    width: 500px;
  }
}
</style>