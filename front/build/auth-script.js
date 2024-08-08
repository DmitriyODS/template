const { createApp } = Vue

const app = createApp({
  data() {
    return {
      isRegister: false,
      login: '',
      password: '',
      passwordRepeat: '',
      username: '',
      surname: '',
      userphone: '',
    }
  },
  methods: {
    loginUser() {},
    registerUser() {},
  }
})

app.mount('#app')