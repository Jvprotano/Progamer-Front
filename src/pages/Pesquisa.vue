<template>
  <form @submit.prevent="salvar()">
    <div id="components">
      <div id="login">
        <div class="card-body">
          <b-container class="login-main">
            <b-row class="login-header">
              <h2 class="text-black">Pesquisa</h2>  
            </b-row>
            <b-row class="user">
              <label class="font-500">Nome</label>
            </b-row>
            <div class="form-group">
              <input
                type="text"
                v-model="form.name"
                class="form-control"
                placeholder="Nome"
              />
            </div>
            <b-row class="ano">
              <label class="font-500">Ano</label>
            </b-row>
            <b-col sm="12">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Ano"
                  class="form-control"
                  v-model="form.year"
                />
              </div>
            </b-col>
            <b-row>
            </b-row>
            <button class="btn-login">Confirmar</button>
            <b-row class="confirm">
   
            </b-row>
          </b-container>     
        </div>
        
      </div>
      <div class="list">
      
       <b-col sm="3"> 
            <h3>Pesquisas</h3>
            </b-col>
           
            <b-row>
             <b-col sm="3"> 
                <h6>Nome: {{form.name}}
              {{form.year}} </h6>
            </b-col>
            <b-col sm="3"> 
                <h6>Ano: </h6>
             </b-col>
             <b-col sm="3"> 
                <button class="danger" v-on:click="pesquisaDelete">Deletar</button>
            </b-col>
             <b-col sm="3"> 
                <button class="edit" v-on:click="edit">Editar</button>
            </b-col>
            </b-row>
             </div>
    </div>
  </form>
</template>
<script>

import Pesquisa from "../services/pesquisa";
export default {
  data: () => ({
    form: {
      name: "",
      year: "", 
    },
  }),
  methods: {
    //    remover() {
    //       Pesquisa.pesquisaDelete(pesquisa).then(res => {
    //           console.log(res.pesquisa)
    //        }).catch(error)
    //    },
   
    listar(){
        Pesquisa.pesquisaList().then(res => {
            this.form = res.data
        })
    },
    editar(){
        Pesquisa.editar().then(res => {
            this.form = res
        })
    },

    //   salvar(){
    // if(!this.form.id) {
    //     Pesquisa.salvar(this.form).then(res => {
    //         this.forms = {}
    //         alert('salvo')
    //         this.listar();
    //     })
    // }
    //   .catch(error => this.errors.push(error.response.data.Message));
    //   }
    // }
  },
};
</script>
<style scoped>
.edit {
  background-color: #8351dc !important;
  color: #fff !important;
  font-weight: bold !important;
  width: 60px !important;
  border-radius: 10px !important;
  border: 0px solid transparent !important;

}
.danger {
    margin-left: 100px !important;
  background-color: #FF0000 !important;
  color: #fff !important;
  font-weight: bold !important;
  width: 70px !important;
  border-radius: 10px !important;
  border: 0px solid transparent !important;
  
  border-radius: 10px !important;
  border: 0px solid transparent !important;
 
}
.list {
  margin-top: 100px !important;
  height: 400px !important;
  margin: auto;
  background-color: #f7f7f8 !important;
  color: #0e0e10;
  border-radius: 20px;
  border: solid 0.5px;
}
h2, h5{
    padding: 10px;
}
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

.ano {
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
