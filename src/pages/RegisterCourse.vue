<template>
<div class="app">
  <Header />
  <b-container class="bv-example-row">
  <div class="cards">
    
      <b-row>
        <b-col sm="12">
          <h1>Cadastro de curso</h1>
        </b-col>
        </b-row>
   
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      
      <b-form-group
        id="input-group-1"
        label="Título"
        label-for="input-1"
        description="Pense em um bom título para atrair alunos!"
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          placeholder="Insira um título para o curso"
          required
        ></b-form-input>
      </b-form-group>
      

      <b-form-group id="input-group-2" label="Horas:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.hours"
          placeholder="ex: 2 horas"
          required
        ></b-form-input>
      </b-form-group>
<b-row>
  <b-col sm="6">
      <b-form-group id="input-group-3" label="Categoria" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
          </b-form-group>
          </b-col>
          <b-col sm="6">
         <b-form-group id="input-group-3" label="Categoria" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>
      </b-col>
      </b-row>

      
  
    <b-form-textarea
      id="textarea"
      v-model="form.text"
      placeholder="Descreva o seu curso.
      Ex: Curso de react com foco em .... "
      rows="3"
      max-rows="6"
    ></b-form-textarea>

    <pre class="mt-3 mb-0">{{ text }}</pre>
      

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="RESULTADOS DO SUBMIT">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
     
  </div>
  </b-container>
  </div>
</template>

<script>
import Header from '../components/Header'
  export default {
    components: { Header, 
    },
    data() {
      return {
        form: {
          value: '',
          title: '',
          food: null,
          text: '',
          checked: []
        },
        foods: [{ text: 'Selecione uma categoria', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.title = ''
        this.form.text = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style scoped>
.cards{
  background-color: aqua !important;
  width: 50%;
  padding: 20px;
   margin-top: 100px !important;
  width: 500px !important;
  height: 700px !important;

  margin: auto;
  background-color: #f7f7f8 !important;
  color: #0e0e10;
  border-radius: 10px;
  border: solid 0.5px;
  
}
input {
  padding: 10px;
  border-radius: 10px;
}
#input-3 {
  margin-bottom: 10px;
  border-radius: 4px;
  margin-right: 10px;
}

#input-group-1 {
  width: 80% !important;
}
#input-group-2 {
  width: 25% !important;
}
h1{
  text-align: center;
}
button {
height: 10% !important;
width: 20% !important;
padding: 5px;
margin-left: 10px;

}
</style>