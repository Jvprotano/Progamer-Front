<template>
    <b-container class="cards">
      <div>
        <b-row>
          <h2 class="form-title">Cadastro</h2>
        </b-row>

        <b-form @submit.prevent="salvar()" v-on:submit.prevent="submitForm" v-if="show">
          <b-row>
            <b-col class="col-12 col-sm-12 col-md-6">
              <b-form-group
                class="pad-top"
                id="nome"
                label="Nome:"
                label-for="name"
              >
                <b-form-input
                  id="nome"
                  v-model="form.nome"
                  placeholder="Nome"
                  type="text"
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
                  id="ano"
                  v-model="form.ano"
                  placeholder="Ano"
                  type="number"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        <b-row class="content-center" v-show="btnSubmit">
            <b-button type="submit" class="btn content-center" 
              >Enviar</b-button>
          </b-row>

        </b-form>
        <b-form v-if="show">
        <b-row>
          <h2 class="form-title">Pesquisa</h2>
        </b-row>
          
            <b-row class="col-12 col-sm-12 col-md-6">
               <h6>Nome:</h6>
               {{form.nome}}
               </b-row>
            <b-row class="col-12 col-sm-12 col-md-6">
               <h6>Ano:</h6>
               {{form.ano}}
          </b-row>
          <b-row>
        <b-col cols="6" class="content-center" v-show="btnEdit">
            <b-button type="submit" class="btn content-center" 
              >Editar</b-button>
          </b-col>
        <b-col cols="6" class="content-center" v-show="btnDelet">
            <b-button type="submit" class="btn content-center btn-delet" 
              >Deletar</b-button>
          </b-col>
          </b-row>
          
        </b-form>
      </div>
    </b-container>
</template>

<script>
import Prova from "../services/prova";
import Dados from "../services/prova";
export default {
  data() {
    return {
     form:{
         nome:"",
         ano:"",
     },
     show: true,
     btnSubmit: true,
     btnEdit: true,
     btnDelet: true,
      }
      
},
  methods: {
    onSubmit(event) {
      event.preventDefault();
    },
    onReset(event) {
      event.preventDefault();
      this.form.nome = "";
      this.form.ano = "";
      this.form.checked = [];
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    
    
    salvar(){
      let result = this.submitForm();
      //começo do spinner
      if (result){
        Prova.salvar(this.form).then(apiResponse => {
        console.log(apiResponse);
      })
      .catch(error => this.errors.push(error.response.data.Message));
      }
    }
      
  },
  mounted(){
    Dados.listar().then((apiResponse) => {
      this.gameData = apiResponse.data.listGame;
    });

    this.$delete(this.form, 'nome')
    this.$delete(this.form, 'ano')

  },
  components: {
  },
};
</script>

<style>
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

.btn-delet{
    background-color: red !important;
}

.btn1:hover{
      background-color: none !important;

}
</style>