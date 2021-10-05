<template>
  <div id="components">
    <Header2 />
    <b-container class="cards">
      <div>
        <b-row>
          <h2 class="form-title">Registrar pesquisa</h2>
          <p class="form-phrase">
            
          </p>
        </b-row>

        <b-form @submit.prevent="salvar()" v-on:submit.prevent="submitForm" v-if="show">
          <b-row>
            <b-col class="col-12 col-sm-12 col-md-6">
              <b-form-group
                class="pad-top"
                id="name"
                label="Nome:"
                label-for="name"
              >
                <b-form-input
                  id="name"
                  v-model="form.name"
                  placeholder="Nome"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col class="col-12 col-sm-12 col-md-6">
              <b-form-group
                class="pad-top"
                id="ano" 
                label="Ano:"
                label-for="ano"
              >
                <b-form-input
                  id="lname"
                  v-model="form.ano"
                  placeholder="Ano"
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
export default {
  data() {
    return {
      errors: [],
        form:{
        name: "",
        ano: "",
        },
        show: true,
        spinner: false,
        btnSubmit: true,
      }
      
},


  
  methods: {
    onSubmit(event) {
      event.preventDefault();
    },
    onReset(event) {
      event.preventDefault();
      this.form.name = "";
      this.form.ano = "";
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
      
      if (!this.form.ano) {
        this.errors.push("O último nome é obrigatório.");
      }
      if (!this.errors.length) {
        return true;
      }
      e.preventDefault();
    },

   
    salvar(){
      let result = this.submitForm();
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
