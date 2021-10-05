<template>
  <div id="components">
    <Header2 />
    <b-container class="cards">
      <div>
        <b-row>
          <h2 class="form-title">Pesquisa</h2>
          <p class="form-phrase">
            
          </p>
        </b-row>

        <b-form @submit.prevent="voltar()" v-on:submit.prevent="submitForm" v-if="show">
          <b-row>
            <b-col class="col-12 col-sm-12 col-md-6">
              <b-form-group
                class="pad-top"
                id="name"
                label="Nome:"
                label-for="name"
              >
                <b-form-input readonly
                  id="name"
                  v-model="form.name"
                  :placeholder= this.research.nome
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
                <b-form-input readonly
                  id="lname"
                  v-model="form.ano"
                  :placeholder= this.research.ano
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row class="content-center" v-show="btnSubmit">
            <b-button type="submit" class="btn content-center" 
              >Voltar</b-button>
          </b-row>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
import Header2 from "../components/Header2";
import GetResearch from "../services/research";
export default {
  data() {
    return {
        form:{
        name: "",
        ano: ""
        },
        research: [],
        show: true,
        btnSubmit: true,
      }
},
 mounted(){
   var id = this.$route.params.id
    GetResearch.GetResearch(id).then(apiResponse => {
      this.research = apiResponse.data
    })
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
    },
    submitForm: function(e) {
      e.preventDefault();
    },
   
    voltar(){
      this.$router.push({name:'listResearches'})
      this.btnSubmit = false;
    }
      
  },

  components: {
    Header2
  },
};

</script>

<style scoped>
#name {
  width: 85% !important;
}

#ano{
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
