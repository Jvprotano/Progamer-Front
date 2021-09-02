<template>
  <div id="login">
    <b-container class="login-main">
    <b-row class="login-header">
        <h2>Login</h2>
    </b-row>
      <b-row class="user" v-for="type in typesu" :key="type">
        <b-col sm="12">
          <label :for="`type-${type}`"
            >Usuário: <code>{{ text }}</code
            ></label
          >
        </b-col>
        <b-col sm="12">
          <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
        </b-col>
      </b-row>
        <b-row class="password" v-for="type in typesp" :key="type">
        <b-col sm="12">
          <label :for="`type-${type}`"
            >Senha: <code>{{ password }}</code
            ></label
          >
        </b-col>
        <b-col sm="12">
          <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
          <b-col>
              <p>Esqueceu </p>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typesu: ["text", /* "password" */],
      typesp: ["password"],
    };
  },
};
</script>

<style>
#login {
    margin-top: 100px !important;
  width: 400px;
  height: 400px;
  margin: auto;
  background-color: #0F0C1D;
  color: #fff;
  border-radius: 10px;
  border: solid 0.5px;
}

.login-header{
    text-align: center;
}

.user{
    margin-top: 20px !important;
}

.password{
    margin-top: 20px !important;
}
</style>
