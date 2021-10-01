<template>
  <form @submit.prevent="submit()">
    <div class="login-page">
      <div class="card">
        <div class="card-header">
          Login
        </div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="email"
              v-model="form.email"
              class="form-control"
              placeholder="E-mail"
            />
          </div>
          <div class="form-group">
            <input
              required
              type="password"
              placeholder="Senha"
              class="form-control"
              v-model="form.password"
            />
          </div>

          <button class="btn btn-primary w-100">
            Entrar
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    form: {
      email: "gustavo.sumi@progamer.com",
      password: "admin@123",
    },
  }),
  methods: {
    ...mapActions("auth", ["ActionDoLogin"]),
    async submit() {
      try {
        await this.ActionDoLogin(this.form);
        this.$router.push({ name: "home" });
      } catch (error) {
        console.log(error);
        alert(error.errorMessage);
      }
    },
  },
};
</script>
