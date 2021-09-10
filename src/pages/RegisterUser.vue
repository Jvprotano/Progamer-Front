<template>
  <div id="components">
    <Header2 />
    <div id="register-main">
      <b-container class="reguser-main cards">
        <form class="needs-validation" novalidate>
          <div class="form-row">
            <b-row>
              <div class="col-md-6 mb-3">
                <label for="validationCustom01">Primeiro nome</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  required
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="validationCustom02">Último nome</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom02"
                  required
                />
              </div>
            </b-row>
          </div>
          <div class="form-row">
            <div>
              <label for="validationCustom03">E-mail</label>
              <input
                type="email"
                class="form-control"
                id="validationCustom03"
                required
              />
            </div>
          </div>
          <b-row class="password" v-for="type in typesp" :key="type">
            <b-col sm="12">
              <label :for="`type-${type}`"
                >Senha <code>{{ password }}</code></label
              >
            </b-col>
            <b-col sm="12">
              <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="password" v-for="type in typespc" :key="type">
            <b-col sm="12">
              <label :for="`type-${type}`"
                >Confirmação de senha <code>{{ password }}</code></label
              >
            </b-col>
            <b-col sm="12">
              <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
            </b-col>
          </b-row>
          <div>
            <label for="example-datepicker">Data de nascimento</label>
            <b-form-datepicker
              id="example-datepicker"
              v-model="value"
              class="mb-2"
            ></b-form-datepicker>
          </div>
          <b-row class="register-btn">
            
            <router-link id="register" to="/login"
            ><button class="btn btn-primary" type="submit">Cadastre-se</button></router-link>
      </b-row>
          
        </form>
      </b-container>
    </div>
  </div>
</template>

<script>
import Header2 from "../components/Header2";
export default {
  components: {
    Header2,
  },
  data() {
    return {
      typesp: ["password"],
      typespc: ["password"],
    };
  },
};
/* (function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})(); */
</script>

<style scoped>
.reguser-main {
  margin-top: 100px !important;
  width: 40%;
}
</style>
