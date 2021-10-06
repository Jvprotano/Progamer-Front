<template>
  <div id="components">
    <Header2 />
    <b-container class="cards">
      <div>
        <b-row>
          <h2 class="form-title">Cadastre-se agora</h2>
          <p class="form-phrase">
            Falta apenas alguns passos para você se tornar membro dessa enorme
            comunidade!
          </p>
        </b-row>

        <b-form @submit.prevent="salvar()" v-on:submit.prevent="submitForm" v-if="show">
          <b-row>
            <b-col class="col-12 col-sm-12 col-md-6">
              <b-form-group
                class="pad-top"
                id="name"
                label="Primeiro nome:"
                label-for="name"
              >
                <b-form-input
                  id="name"
                  v-model="form.name"
                  placeholder="Primeiro nome"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col class="col-12 col-sm-12 col-md-6">
              <b-form-group
                class="pad-top"
                id="lname" 
                label="Último nome:"
                label-for="lname"
              >
                <b-form-input
                  id="lname"
                  v-model="form.lastName"
                  placeholder="Último nome"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-12 col-sm-12 col-md-6">
            <b-form-group
              class="pad-top"
              id="email"
              label="Email:"
              label-for="email"
            >
              <b-form-input
                id="email"
                v-model="form.email"
                type="text"
                placeholder="usuario@hotmail.com"
              ></b-form-input>
            </b-form-group>
            </b-col>
            <b-col class="col-12 col-sm-12 col-md-6">
            <b-form-group
              class="pad-top"
              id="date"
              label="Data de nascimento:"
              label-for="date"
            >
              <b-form-input
                id="date"
                v-model="form.dateBirth"
                type="date"
                placeholder=""
              ></b-form-input>
            </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-12 col-sm-12 col-md-6">
              <b-form-group
                class="pad-top-pass"
                id="password"
                label="Senha:"
                label-for="password"
              >
                <b-form-input
                  id="password"
                  v-model="form.password"
                  type="password"
                ></b-form-input>
                <p class="restpass"> Mínimo 8 caracteres, contendo pelo menos uma letra maiúscula, uma letra minúscula e um número.</p>
              </b-form-group>
            </b-col>
            <b-col class="col-12 col-sm-12 col-md-6">
              <b-form-group
                class="pad-top-pass"
                id="ConfirmPassword"
                label="Confirme a senha:"
                label-for="ConfirmPassword"
              >
                <b-form-input
                  id="ConfirmPassword"
                  v-model="form.ConfirmPassword"
                  type="password"
                  placeholder=""
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          
          <p v-if="errors.length">
                <ul>
                    <li v-for="error in errors" :key="error">{{error}} </li>
                </ul>
                </p>
          <b-row class="content-center" v-show="btnSubmit">
            <b-button type="submit" class="btn content-center" 
              >Cadastrar</b-button>
          </b-row>
          <div class="spinner" v-show="spinner">
              <vue-simple-spinner size="medium" message="Carregando..."></vue-simple-spinner>
          </div>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
import Header2 from "../components/Header2";
import VueSimpleSpinner from 'vue-simple-spinner';
import User from "../services/user";
import Cadastro from '../services/courses';
export default {
  data() {
    return {
      errors: [],
        form:{
        name: "",
        lastName: "",
        email: "",
        password: "",
        ConfirmPassword: "",
        dateBirth: null,
        },
        show: true,
        spinner: false,
        btnSubmit: true,
      }
      
},

 /*  let app = new Vue({
  el: '#app',
  data: {

    errors: [],
    name: "Jose",
        lastName: "Vinicius",
        email: "juse@hotmail.com",
        password: "Senha123",
        ConfirmPassword: "Senha123",
        dateBirth: null,
  }, */
  
  
  methods: {
    registerUser() {
      Cadastro.registerUser(this.form).then(response => {
        this.registerUser = response.registerUser
        alert('salvo com sucesso!')
      })
    },
      
    onSubmit(event) {
      event.preventDefault();
    },
    onReset(event) {
      event.preventDefault();
      this.form.name = "";
      this.form.lastName = "";
      this.form.email = "";
      this.form.password = "";
      this.form.ConfirmPassword = "";
      this.form.dateBirth = "";
      this.form.checked = [];
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    submitForm: function(e) {
      this.errors = [];
      
      if (!this.form.name) {
        this.errors.push("O primeiro nome é obrigatório.");
      }
      
      if (!this.form.lastName) {
        this.errors.push("O último nome é obrigatório.");
      }

      if (!this.form.email) {
        this.errors.push('O e-mail é obrigatório.');
      } else if (!this.validEmail(this.form.email)) {
        this.errors.push('Utilize um e-mail válido.');
      }

      if (!this.form.dateBirth) {
        this.errors.push("A data de nascimento é obrigatória.");
      } else if (!this.validDate(this.form.dateBirth)) {
        this.errors.push("A data de nascimento não é válida.");
      }
      
      if (!this.form.password) {
        this.errors.push("A senha é obrigatória.");
      } else if (!this.stardPassword(this.form.password)) {
        this.errors.push("A senha precisa estar no padrão solicitado.");
      } 

      if (!this.form.ConfirmPassword) {
        this.errors.push("A confirmação de senha é obrigatória.");
      }  else if (!this.validPassword(this.form.ConfirmPassword)) {
        this.errors.push("As senhas precisam ser iguais.");
      } 

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validDate: function (dateBirth) {
      let today = new Date();
      today = new Date(today.getTime() - (today.getTimezoneOffset() * 60000)).toISOString();
      let parts = today.split('T')
      today = (parts[0]);
      return dateBirth <= today ? true : false
    },
    stardPassword: function (password){
      var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
      return re.test(password);
    },
     validPassword: function() {
      var pass1 = this.form.password;
      var pass2 = this.form.ConfirmPassword;
      if (pass1 === pass2) {
        return true;
      }
    },
    salvar(){
      let result = this.submitForm();
      //começo do spinner
      this.btnSubmit = false;
      this.spinner = true;
      if (result){
        User.salvar(this.form).then(apiResponse => {
        console.log(apiResponse);
        this.spinner = false;
        this.$router.push({name:'login'})
      })
      .catch(error => this.errors.push(error.response.data.Message));
      this.spinner = false;
      this.btnSubmit = true;
      }
    }
      
  },
  mounted(){

  },
  components: {
    Header2,
    VueSimpleSpinner,
  },
};
</script>

<style scoped>
#name {
  width: 85% !important;
}

#lname{
  width: 85% !important;
}

#date {
  width: 78% !important;
}

#password {
  width: 85% !important;
}

#ConfirmPassword {
  width: 85% !important;
}
.cards {
  margin-top: 2% !important;
  width: 55% !important;
  padding: 3% !important;
}

.form-title {
  text-align: center;
}
.form-phrase {
  text-align: center;
}

.form-control {
  width: 100% !important;
}

.pad-top {
  padding-top: 3% !important;
}

.btn {
  margin-top: 5% !important;
  width: 60% !important;
}

li:first-child{
  margin-top: 2% !important;
}

li{
   /* list-style: square; */
  color: red !important;
}

.restpass{
  font-size: small !important;
  color: #6A7376 !important;
}

.pad-top-pass{
  padding-top: 5% !important;
}

.restpass{
  margin-bottom: 0% !important;
}
</style>
