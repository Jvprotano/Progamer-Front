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
        <b-row>
          <b-col sm="12">
            <h4>Começe a dar aulas ao vivo</h4>
          </b-col>
        </b-row>
   
    <b-form  v-on:submit.prevent="submitForm" @reset="onReset" v-if="show">
      
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
        ></b-form-input>
      </b-form-group>

       

<b-form-group id="input-group-2" label="Valor:" label-for="valor">
<b-form-input
  type="text"
  max="10"
  maxlenght="9" id="valor" v-on:keyup="formatarMoeda">


> </b-form-input>
</b-form-group>


      <b-form-group id="input-group-2" label="Horas:"  label-for="input-2">
        <b-form-input
        type="number"
      
        min="1"
        max="100"
          id="input-2"
          v-model="form.hours"
          placeholder="ex: 2 horas"
        ></b-form-input>
      </b-form-group>
<b-row>
  <b-col sm="6">
      <b-form-group id="input-group-3" label="Categoria" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          
        ></b-form-select>
          </b-form-group>
          </b-col>
          <b-col sm="6">
         <b-form-group id="input-group-3" label="Jogo" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.game"
          :options="games"
          
        ></b-form-select>
      </b-form-group>
      </b-col>
      </b-row>

      
  
    <b-form-textarea
      id="textarea"
      maxlength="400"
      v-model="form.textarea"
      placeholder="Descreva o seu curso.
      Ex: Curso de react com foco em .... "
      rows="1"
      max-rows="1"
    ></b-form-textarea>
 <p v-if="errors.length">
    <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
    <ul>
<li v-for="error in errors" :key="error">{{error}} </li>
    </ul>
  </p>
    
      
      <b-button type="reset" variant="danger">Limpar</b-button>
      <b-button type="submit" variant="primary">Criar Curso</b-button>
    </b-form>
  
  </div>
   
  </b-container>
  </div>
</template>

<script>
import Header from '../components/Header'

  export default {
    components: { 
      Header, 
    },
    data() {
      return {
        errors: [],
        form: {
          value: '',
          title: '',
          food: null,
          hours: '',
          game: null,
          textarea: '',
          
        },
      
        games: [{ text: 'Selecione um jogo', value: null}, 'A', 'B', 'C'],
        foods: [{ text: 'Selecione uma categoria', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
        formatarMoeda: function() {
        var elemento = document.getElementById('valor');
        var valor = elemento.value;

        valor = valor + '';
        valor = parseInt(valor.replace(/[\D]+/g, ''));
        valor = valor + '';
        valor = valor.replace(/([0-9]{2})$/g, ",$1");

        if (valor.length > 6) {
            valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
					
        }

        elemento.value = valor;
				this.form.value= elemento.value;
        if(valor == 'NaN') elemento.value = '';
    },
      submitForm: function() {
        this.errors = [];
        
        if(!this.form.title) {
          this.errors.push('É necessário inserir um título ao curso')
        }else{
          console.log('valido')
					
        }
        
        if(!this.form.value) {
          this.errors.push('É necessário inserir um valor')
					console.log('inválido')
					

        }else {
          console.log(this.form.value)
					console.log('valido irmao')
        }
				
				if(!this.form.hours) {
					this.errors.push('É necessário informar o tempo do curso')
				}
				else {
					console.log('Horas válidas')
				}

				if(!this.form.textarea) {
					this.errors.push('É necessário inserir uma descrição')
				}
				if(!this.form.game) {
					this.errors.push('É necessário selecionar um jogo')
				}

			
        
        
      },
    
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.title = ''
        this.form.hours = ''
        this.form.game = ''
        this.form.textarea = ''
        this.form.value = ''
        this.form.food = null
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
.form-control {
  margin: 1px;
  width: 70%;
}
.cards{
   box-shadow: 0 0 40px rgb(0 0 0 / 15%) !important;
  width: 50%;
  padding: 4%;
   margin-top: 10% !important;
  width: 80% !important;
  height: 2% !important;

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
.custom-select {
  width: 50% !important;
}
h1, h4{
  text-align: center;
 
}
button {
height: 10% !important;
width: 20% !important;
padding: 5px;
margin-left: 10px;
border: none;
 

}
li {
list-style: none;
padding: 1px;
color: red;


}
</style>