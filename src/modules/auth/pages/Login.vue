<template>
  <form @submit.prevent="submit()">
    <div id="components">
      <div id="login">
        <div class="card-body">
          <b-container class="login-main">
            <b-row class="login-header">
              <h2 class="text-black">LOGIN</h2>
            </b-row>
            <b-row class="user">
              <label class="font-500">Email</label>
            </b-row>
            <div class="form-group">
              <input
                required
                type="email"
                v-model="form.email"
                class="form-control"
                placeholder="E-mail"
              />
            </div>
            <b-row class="password">
              <label class="font-500">Senha</label>
            </b-row>
            <b-col sm="12">
              <div class="form-group">
                <input
                  required
                  type="password"
                  placeholder="Senha"
                  class="form-control"
                  v-model="form.password"
                />
              </div>
            </b-col>
            <b-row>
              <b-col cols="12">
                <b-form-checkbox
                  id="checkbox-1"
                  name="checkbox-1"
                  value="remember"
                  unchecked-value="dont_remember"
                >
                  <p class="textcheck text-black">Lembre-se de mim</p>
                </b-form-checkbox>

                <div></div>
              </b-col>
            </b-row>
            <button class="btn-login">Entrar</button>
            <b-row class="register">
              <p class="register">
                Ainda não é membro?<router-link
                  id="register"
                  to="/registerUser"
                >
                  Clique aqui
                </router-link>
              </p>
            </b-row>
          </b-container>
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
        alert(error);
      }
    },
  },
};
</script>
<style scoped>
#login {
  margin-top: 100px !important;
  width: 30% !important;
  height: 400px !important;
  margin: auto;
  background-color: #f7f7f8 !important;
  color: #0e0e10;
  border-radius: 20px;
  border: solid 0.5px;
}

@media (max-width: 750px) {
  #login {
    width: 100% !important;
  }
}

@media (min-width: 1600px) {
  #login {
    width: 26% !important;
  }
}

@media (min-width: 1920px) {
  #login {
    width: 21% !important;
  }
}

.login-header {
  text-align: center;
}

.user {
  margin-top: 28px !important;
}

.password {
  margin-top: 20px !important;
}

a {
  text-decoration: none !important;
  color: #a970ff !important;
}

a:hover {
  color: #a970ff !important;
  text-decoration: underline !important;
}

.forgot {
  margin: 5px 0px 0px 27px;
}

.custom-control {
  margin-top: 8px;
}

.textcheck {
  margin-left: 3px !important;
}

.btn {
  background-color: #8351dc !important;
  color: #fff !important;
  font-weight: bold !important;
  width: 200px !important;
  display: flex;
  align-items: center;
  margin-top: 32px !important;
  border-radius: 10px !important;
  border: 0px solid transparent !important;
  padding-top: 7px;
  padding-bottom: 7px;
}

.btn-login {
  justify-content: center;
}

.btn:hover {
  background-color: #772ce8 !important;
}

.register {
  text-align: center;
  margin-top: 34px !important;
  color: #fff;
  margin-bottom: 30px;
}

.login-main {
  padding: 35px !important;
  width: 100% !important;
}

.label {
  display: inline-flexbox !important;
}
</style>
