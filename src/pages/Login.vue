<template>
  <div class="header">
    <Header2 />
    <div id="login">
      <b-container class="login-main">
        <b-row class="login-header">
          <h2>LOGIN</h2>
        </b-row>
        <b-row class="user" v-for="type in typesu" :key="type">
          <b-col sm="12">
            <label :for="`type-${type}`"
              >Usuário: <code>{{ text }}</code></label
            >
          </b-col>
          <b-col sm="12">
            <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="password" v-for="type in typesp" :key="type">
          <b-col sm="12">
            <label :for="`type-${type}`"
              >Senha: <code>{{ password }}</code></label
            >
          </b-col>
          <b-col sm="12">
            <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <b-form-checkbox
              id="checkbox-1"
              v-model="statuscb"
              name="checkbox-1"
              value="remember"
              unchecked-value="dont_remember"
            >
              Lembre-se de mim
            </b-form-checkbox>

            <div></div>
          </b-col>
          <!-- <b-col cols="6">
          <router-link id="forgot" to="/forgot">
            <p class="forgot">Esqueceu sua senha?</p>
          </router-link>
        </b-col> -->
        </b-row>
        <b-row class="btn-login">
          <b-button>Entrar</b-button>
        </b-row>
        <b-row class="register">
          <p class="register">
            Ainda não é membro?<router-link id="register" to="/register">
              Clique aqui
            </router-link>
          </p>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Header2 from "../components/Header2";
export default {
  data() {
    return {
      typesu: ["text" /* "password" */],
      typesp: ["password"],
      statuscb: "dont_remember",
    };
  },
  components: {
    Header2,
  },
};
</script>

<style scoped>
#login {
  margin-top: 100px !important;
  width: 400px !important;
  height: 400px !important;

  margin: auto;
  background-color: #f7f7f8 !important;
  color: #0e0e10;
  border-radius: 10px;
  border: solid 0.5px;
}

.login-header {
  text-align: center;
}

.user {
  margin-top: 20px !important;
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
  margin-top: 5px;
}

.custom-control-label {
  margin-left: 3px;
}

.btn {
  background-color: #8351dc !important;
  color: #fff !important;
  font-weight: bold !important;
  width: 200px !important;
  display: flex;
  align-items: center;
  margin-top: 30px !important;
  border-radius: 10px;
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
}

.login-main {
  padding: 35px !important;
}
.label {
  display: inline-flexbox !important;
}
</style>
