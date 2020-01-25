<template>
<div class="library__register">
  <alert-box :show="showAlert" type='error'></alert-box>
  <form @submit.prevent="dispatchRegisterUser" action="" method="post">
    <div class="mb-8">
      <label class="inline-block mb-2 text-left" for="username">Usuario</label>
      <input v-model='form.username' type="text" name="username" id="" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
    </div>
    <div class="mb-8">
      <label class="inline-block mb-2 text-left" for="password">Contraseña</label>
      <input v-model='form.password' type="password" name="password" autocomplete="off" id="" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
    </div>
    <div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Entrar</button>
    </div>
  </form>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import AlertBox from '@/components/AlertBox'
export default {
  name: 'RegisterForm',
  components: {
    AlertBox
  },
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      showAlert: false
    }
  },
  methods: {
    ...mapActions([
      'registration'
    ]),
    async dispatchRegisterUser () {
      console.log('dispatchRegisterUser')
      const registered = await this.registration({...this.form});

      if (registered) {
        if (this.showAlert === true) {
          this.showAlert = false;
        }
        localStorage.setItem('_token', registered.data.token)
        localStorage.setItem('_user', JSON.stringify(registered.data.user))
        this.$router.push('/')
      } else {
        this.showAlert = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.library {
  &__register {
    width: 500px;
  }
}
</style>