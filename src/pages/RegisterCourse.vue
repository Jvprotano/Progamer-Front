<template>
  <div id="header">
    <Header />
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="12">
          <h2>Cadastro Curso</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12">
          <h6>Seja um instrutor, dê aulas ao vivo</h6>
        </b-col>
      </b-row>

      <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form">
        <b-row>
          <b-form-group id="input-group-1" label-for="input-1">
            <b-col sm="12">
              <p>Título do curso</p>
            </b-col>
            <b-row>
              <b-col sm="12">
                <b-form-input
                  id="input-1"
                  v-model="form.name"
                  type="text"
                  placeholder="Título do curso"
                  required
                ></b-form-input>
              </b-col>
            </b-row>
          </b-form-group>
        </b-row>
        <b-row>
          <b-col sm="6">
            <b-form-group id="input-group-3" label="Jogo" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="form.food"
                :options="foods"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group
              id="input-group-3"
              label="Categoria"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="form.food"
                :options="foods"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          
        <p>Duração</p>
      
        <b-form-group id="input-group-2" label-for="input-2">
           <b-col sm="6">
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Alguma coisa"
            required
          ></b-form-input>
        </b-col>
        </b-form-group>
        
        </b-row>

        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-row>
          
          <b-col sm="6"><b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
          >
          </b-form-checkbox-group>
          <b-input-group size="sm" prepend="R$">
            <b-form-input value="100" class="text-right"></b-form-input>
          </b-input-group>
      </b-col>
      </b-row>
        </b-form-group>

        
        <router-link tag="button" to="/registercourses/name"
          >Voltar</router-link
        >
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      form: {
        course: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Selecione um jogo", value: null },
        "LOL",
        "CS GO",
        "VALORANT",
        "FORTNITE",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
form {
  text-align: left;
  border: 1px solid;
  position: relative;
  width: 100% !important;
  margin: 5px auto;
  background-color: white;
  padding: 5px;
  border-radius: 10px;
}

input {
  background-color: #f7f7f8;
  padding: 0.375rem 0.75rem;
}
button {
  background: #0066a2 !important;
  color: white !important;
  border-style: outset;
  border-color: #0066a2;
  padding: 10px !important;
  font: bold 15px arial, sans-serif;
  text-shadow: none;
  width: 100px !important;
  height: 40px !important;
  margin: 10px !important;
}
h2,
h6 {
  color: antiquewhite;
  width: 100%;
  text-align: center;
}
.form-group {
  padding: 10px;
  width: 50%;
  box-sizing: border-box;
}
#input-group-4 {
  height: 20% !important;
}
</style>
