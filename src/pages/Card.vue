<template>
  <div id="components">
    <Header2 />
    <b-container class="cards">
      <div>
        <b-row>
          <h2 class="form-title">Cadastre seu cartão</h2>
        </b-row>
        <b-form v-on:submit.prevent="submitForm" v-if="show">


          <!-- campo codigo cartao -->
          <b-row>
            <b-col class="col-12 col-sm-12 col-md-12">
              <b-form-group
                class="pad-top-cod"
                id="cod"
                label="Código do cartão"
                label-for="cod"
              >
                <b-form-input
                  v-mask="'#### #### #### ####'"
                  id="cod"
                  v-model="form.cod"
                  type="text"
                  placeholder="XXXX XXXX XXXX XXXX"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>


          <!-- campo nome -->
          <b-row>
            <b-col class="col-12 col-sm-12 col-md-12">
              <b-form-group
                class="pad-top"
                id="name"
                label="Nome titular:"
                label-for="name"
              >
                <b-form-input
                  id="name"
                  v-model="form.name"
                  placeholder="João S. Barbosa"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <!-- data cartao -->
          <b-row>
            <b-col class="col-12 col-sm-12 col-md-8">
            <b-form-group
              class="pad-top"
              id="date"
              label="Válidade:"
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
          

          <!-- CVV -->
            <b-col class="col-12 col-sm-2 col-md-3">
              <b-form-group
                class="pad-top-pass"
                id="pass"
                label="CVV"
                label-for="pass"
              >
                <b-form-input
                  v-mask="'###'"
                  id="pass"
                  v-model="form.pass"
                  type="password"
                  placeholder="XXX"
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
            <b-button type="submit" class="btn content-center">Cadastrar</b-button>
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
        cod: "",
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
  // computed:{
  //   validation() {
  //     this.userId= ''
  //     return this.userId.length > 2 && this.userId.length < 15
  //   }
  // },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      /* alert(JSON.stringify(this.form)); */
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.cod = "";
      this.form.name = "";
      this.form.pass = "";
      this.form.date = "";
      this.form.checked = [];
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    submitForm: function(e) {
      this.errors = [];
      
      if (!this.form.cod) {
        this.errors.push("O código do cartão é obrigatório.");
      } else if (!this.stardCod(this.form.cod)) {
        this.errors.push("Código deve ter no maximo 16 digitos.");
      }
      if (!this.form.name) {
        this.errors.push("Nome do titular é obrigatório.");
      }
      if (!this.form.pass) {
        this.errors.push("O código CVV é obrigatório.");
      } else if (!this.stardPassword(this.form.pass)) {
        this.errors.push("CVV iválido.");
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
    validPassword: function() {
      var pass1 = document.getElementById("pass")
      if (pass1 != null) {
        return true;
      }
    },
    validCod: function() {
      var cod1 = document.getElementById("cod")
      if (cod1 != null) {
        return true;
      }
    },
    stardPassword: function(pass){
      var re = /^(?=.*?[0-9])[0-9\d]{3,3}$/
      return re.test(pass);
    },
    stardCod: function(cod){
      var re = /^(?=.*?[0-9])[0-9\d]{16,16}$/
      return re.test(cod);
    },
    // validDate: function (date) {
    //   let today = new Date();
    //   today = new Date(today.getTime() - (today.getTimezoneOffset() * 60000)).toISOString();
    //   let parts = today.split('T')
    //   today = (parts[0]);
    //   return date <= today ? true : false
    // },
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

#date {
  width: 78% !important;
}

.cards {
  margin-top: 2% !important;
  width: 29% !important;
  /* height: 40% !important; */
  padding: 3% !important;
}

.form-title {
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

</style>
