<template>

<div id="register"> 
  <Header />
  <div id="titulo">
    <h1>Seja um instrutor, dê aulas</h1>
  </div>
   <b-container class="cards">
    <FormulateForm class="login-form" v-model="formValues">
      <b-container class="bv-example-row">
        <b-row>
          <b-col sm="12">
            <h2 class="form-title">Cadastro de curso</h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12">
        <FormulateInput
          name="name"
          type="text"
          label="Título do curso"
          placeholder="ex: Curso de Cs"
          validation="required"
        /></b-col>
        </b-row>
        <FormulateInput
          v-model="value"
          :options="{
            first: 'First',
            second: 'Second',
            third: 'Third',
            fourth: 'Fourth',
          }"
          type="select"
          placeholder="Selecione uma categoria"
          label="Categoria do curso"
        />
        <FormulateInput
          v-model="value"
          :options="{
            first: 'First',
            second: 'Second',
            third: 'Third',
            fourth: 'Fourth',
          }"
          type="select"
          placeholder="Selecione uma categoria"
          label="Categoria do curso"
        />
        <FormulateInput
          type="textarea"
          v-model="value"
          label="Descreva seu curso"
          validation="required|max:50,length"
          validation-name="tweet"
          error-behavior="live"
          :help="`Insira pelo menos ${50 - value.length} caracteres.`"
        />

        <FormulateInput type="submit" label="Register" />
      </b-container>

      <pre class="code" v-text="formValues" />
    </FormulateForm>
  </b-container>
  </div>

</template>

<script>
import Header from '../components/Header'
export default {
  data() {
    return {
      formValues: {},
      value: [],
    };
  },
  components:{
    Header,
  }
};
</script>

<style scoped>

.login-form {
  margin-top: 10%;
  margin-left: 30%;
  padding: 2em !important;
  border: 1px solid #a8a8a8;
  border-radius: 0.5em;
  box-sizing: border-box;
   max-width: 500px;
  background-color: #f7f7f8 !important;
}
.form-title {
  margin-top: 0;
}
.login-form::v-deep .formulate-input .formulate-input-element {
  max-width: none;
}
@media (min-width: 420px) {
  .double-wide {
    display: flex;
  }
  .double-wide .formulate-input {
    flex-grow: 1;
    width: calc(50% - 0.5em);
  }
  .double-wide .formulate-input:first-child {
    margin-right: 0.5em;
  }
  .double-wide .formulate-input:last-child {
    margin-left: 0.5em;
  }
}
h1{
  text-align: center;
  color: #f7f7f8;
}
</style>
