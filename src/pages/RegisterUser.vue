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
        <b-form v-on:submit.prevent="submitForm" v-if="show">
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
                  v-model="form.lname"
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
                v-model="form.date"
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
                id="pass"
                label="Senha:"
                label-for="pass"
              >
                <b-form-input
                  id="pass"
                  v-model="form.pass"
                  type="password"
                ></b-form-input>
                <p class="restpass"> Mínimo 8 caracteres, contendo pelo menos uma letra maiúscula, uma letra minúscula e um número.</p>
              </b-form-group>
            </b-col>
            <b-col class="col-12 col-sm-12 col-md-6">
              <b-form-group
                class="pad-top-pass"
                id="confpass"
                label="Confirme a senha:"
                label-for="confpass"
              >
                <b-form-input
                  id="confpass"
                  v-model="form.confpass"
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
          <b-row class="content-center">
            <b-button type="submit" class="btn content-center"
              >Cadastrar</b-button
            >
          </b-row>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
import Header2 from "../components/Header2";
export default {
  data() {
    return {
      errors: [],
      form: {
        name: "",
        lname: "",
        email: "",
        pass: "",
        confpass: "",
        date: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      /* alert(JSON.stringify(this.form)); */
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.lname = "";
      this.form.email = "";
      this.form.pass = "";
      this.form.confpass = "";
      this.form.date = "";
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
      if (!this.form.lname) {
        this.errors.push("O último nome é obrigatório.");
      }
      if (!this.form.email) {
        this.errors.push('O e-mail é obrigatório.');
      } else if (!this.validEmail(this.form.email)) {
        this.errors.push('Utilize um e-mail válido.');
      }
      if (!this.form.pass) {
        this.errors.push("A senha é obrigatória.");
      } else if (!this.stardPassword(this.form.pass)) {
        this.errors.push("A senha precisa estar no padrão solicitado.");
      }
      if (!this.form.confpass) {
        this.errors.push("A confirmação de senha é obrigatória.");
      }  else if (!this.validPassword(this.form.confpass)) {
        this.errors.push("As senhas precisão ser iguais.");
      } 
      if (!this.form.date) {
        this.errors.push("A data de nascimento é obrigatória.");
      }  else if (!this.validDate(this.form.date)) {
        this.errors.push("A data de nascimento não é válida.");
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault(e);
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPassword: function() {
      var pass1 = document.getElementById("pass")
      var pass2 = document.getElementById("confpass");
      if (pass1 != pass2) {
        return true;
      }
    },
    stardPassword: function(pass){
      var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
      return re.test(pass);
    },
    validDate: function (date) {
      let today = new Date();
      today = new Date(today.getTime() - (today.getTimezoneOffset() * 60000)).toISOString();
      let parts = today.split('T')
      today = (parts[0]);
      return date <= today ? true : false
    },
  },
  components: {
    Header2,
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

#pass {
  width: 85% !important;
}

#confpass {
  width: 85% !important;
}
.cards {
  margin-top: 2% !important;
  width: 55% !important;
  /* height: 40% !important; */
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
