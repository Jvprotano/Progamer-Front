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
      <b-form-group>
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
        <b-row>
        <b-col sm="6">
        <b-form-group id="input-group-2" label="Valor:" label-for="valor">
          <b-form-input
            placeholder="R$:"
            type="text"
            max="10"
            maxlenght="9" id="valor" v-on:keyup="formatarMoeda">
>     </b-form-input>
        </b-form-group>
        </b-col >
        <b-col sm="6">
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
      </b-col>
      </b-row>
     <label for="textarea">Insira uma descrição do seu curso</label>
    <b-form-textarea
    label="Insira uma descrição do curso"
      id="textarea"
      maxlength="400"
      v-model="form.textarea"
      placeholder="Descreva o seu curso.
      Ex: Curso de react com foco em .... "
      rows="1"
      max-rows="1"
    ></b-form-textarea>

<div class="cardsImg">
 <b-container class="bv-example-row">
  <b-row>
    <b-col cols="12">
  <label for="myFile">Insira uma capa para o curso</label>
  </b-col>
  </b-row>  
   <input type="file"  @change="fileChange" id="myFile" name="image" accept="image/png,image/jpeg"  style="width: 147px;" onchange="this.style.width = '100%';" />
   <div class="card-img">
   <h5>Pré Visualização</h5>
   
   <img  :src="image" id="imgPrev"  name="image"  class="hidden"/>
</div>

</b-container>
</div>
   
 <p v-if="errors.length">
    <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
    <ul>
<li v-for="error in errors" :key="error">{{error}} </li>
    </ul>
  </p>
      <b-button type="reset" id="resetInputs" >Limpar</b-button>
      <b-button type="submit" >Criar Curso</b-button>
    </b-form>
  
  </div>
   
  </b-container>
  </div>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
import Header from '../components/Header'

  export default {
    components: { 
      Header, 
    },
    data() {
      return {
        imagePreview : '../assents/game-console.png',
        
        image: null,
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
     checkfiles: function() {
    var fup = document.getElementById('filename');
    var fileName = fup.value;
    var ext = fileName.substring(fileName.lastIndexOf('.') + 1);

    if(ext =="jpeg" || ext=="png"){
        return true;
    }
    else{
        return false;
    }
},
      
    fileChange: function(e) {
 const file =e.target.files[0]
 this.image= URL.createObjectURL(file)
    },

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
          this.errors.push('É necessário inserir um título ao curso');
        }else{
          console.log('valido');
					
        }
        if(!this.image) {
          this.errors.push("É necessário inserir uma imagem para o curso");
        }
         
        
        if(!this.form.value) {
          this.errors.push('É necessário inserir um valor');
					console.log('inválido')
				
        } 
        
        else {
          console.log(this.form.value)
					console.log('valido irmao');
        }
				
				if(!this.form.hours) {
					this.errors.push('É necessário informar o tempo do curso');
				}
				else {
					console.log('Horas válidas');
				}
				if(!this.form.textarea) {
					this.errors.push('É necessário inserir uma descrição');
				}
				if(!this.form.game) {
					this.errors.push('É necessário selecionar um jogo');
				}
        if(!this.form.food) {
          this.errors.push('É necessário selecionar uma categoria');
        }

        
      },
    
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Método para limpar os inputs
        this.image = null,
        this.form.title = ''
        this.form.hours = ''
        this.form.game = null
        this.form.textarea = ''
        this.form.value = ''
        this.form.food = null
       
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
  width: 62%;
}
.cards{
   box-shadow: 0 0 40px rgb(0 0 0 / 15%) !important;
  padding: 2%;
   margin-top: 10% !important;
  width: 50% !important;
  height: 2% !important;
  margin: auto;
  background-color: #f7f7f8 !important;
  color: #0e0e10;
  border-radius: 10px;
  border: solid 0.5px;
  
}
#resetInputs{
 background-color: #AF5FE8 !important;
  box-shadow: 0 0 40px rgb(0 0 0 / 10%) !important;
}
.card-img {
 
 width: 50% !important;
 margin-top: 10px;
 
}
#imgPrev {
 box-shadow: 0 0 40px rgb(0 0 0 / 10%) !important;
object-fit: cover !important;
box-sizing: border-box !important;
padding: 10px !important;
max-height: 250px !important;
max-width: 350px;
width: 100% !important;
height: 100% !important;
}
input {
  padding: 10px;
  margin-top: 10px !important;
}
#input-1, #input-2, #input-3 {
  box-shadow: 0 0 40px rgb(0 0 0 / 10%) !important;
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
  width: 65% !important;
  margin-bottom: 12px;
}
#input-group-3 {
  padding: 10px;
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
margin-top: 10px;
padding: 8px;
margin-left: 10px;
border: none;
}

li {
list-style: none;
padding: 1px;
color: red;
}
#valor, #input-2 {
  width: 110%;
}

#textarea {
  width: 100%;
  background-color: #f7f7f8;
  box-shadow: 0 0 40px rgb(0 0 0 / 15%) !important;
  margin-bottom: 10px;
}
</style>