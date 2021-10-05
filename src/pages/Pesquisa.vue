<template>
  <div id="components">
    <b-container class="cards">
      <div>
        <b-row>
          <h2 class="form-title">Pesquisa</h2>
        </b-row>
        <b-form v-on:submit.prevent="submitForm" v-if="show">

          <!-- UUID -->
          <b-row>       
            <b-col class="col-12 col-sm-2 col-md-12">
              <b-form-group
                class="pad-top-cod"
                id="cod"
                label="ID"
                label-for="cod"
              >
                {{ uuid }}
              </b-form-group>
            </b-col>
          </b-row>

          <!-- NOME -->
          <b-row>
            <b-col class="col-12 col-sm-12 col-md-12">
              <b-form-group
                class="pad-top"
                id="name"
                label="Nome"
                label-for="name"
              >
                <b-form-input
                  id="name"
                  v-model="form.name"
                  placeholder="Gustavo M Boroski"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <!-- ANO -->
          <b-row>      
            <b-col class="col-12 col-sm-2 col-md-4">
              <b-form-group
                class="pad-top-pass"
                id="pass"
                label="Ano"
                label-for="pass"
              >
                <b-form-input
                  id="pass"
                  v-model="form.pass"
                  type="password"
                  placeholder="2021"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          
            <b-row class="content-center">
              <b-col sm="6"><b-button class="cadastrar">Cadastrar</b-button></b-col>
              <b-col sm="6"><b-button class="editar">Editar</b-button></b-col>
            </b-row>
            <b-row class="content-center">
              <b-col sm="6"><b-button class="excluir">Excluir</b-button></b-col>
              <b-col sm="6"><b-button class="pesquisar">Pesquisar</b-button></b-col>
            </b-row>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
import { uuid } from 'vue-uuid';
export default {
  data() {
    return {
        uuid: uuid.v1(), 
        form: {
        cod: "",
        name: "",
        pass: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
    },
    onReset(event) {
      event.preventDefault();
      this.form.cod = "";
      this.form.name = "";
      this.form.pass = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
.pesquisar{
  background-color: gray !important;
}
.editar{
  background-color: blue !important;
}
.cadastrar{
  background-color: green !important;
}
.excluir{
  background-color: red !important;
}

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
  border: 10px;

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
