<template>
  <div id="components">
    <Header2 />
    <FormulateForm class="register-form cards" v-model="formValues">
      <b-container>
        <h2 class="form-title">Cadastra-se agora</h2>
        <p>
          Falta apenas alguns passos para você se tornar membro dessa enorme
          comunidade!
        </p>
        <div>
          <b-row class="name">
            <b-col cols="6">
              <FormulateInput
                name="Campo"
                type="text"
                label="Primeiro nome"
                placeholder="Gabriel"
                validation="required"
              />
            </b-col>
            <b-col cols="6">
              <FormulateInput
                name="Campo"
                type="text"
                label="Último nome"
                placeholder="Neves"
                validation="required"
              />
            </b-col>
          </b-row>
        </div>
        <div>
          <b-row>
            <b-col cols="12">
          <FormulateInput
            class="email"
            name="Campo"
            type="email"
            label="Email"
            placeholder="usuario@hotmail.com"
            validation="required|email"
          />
          </b-col>
          </b-row>
        </div>
        <div>
          <b-row class="password">
            <b-col cols="6">
          <FormulateInput
            name="Campo"
            type="password"
            label="Senha"
            placeholder=""
            validation="required"
          />
            </b-col>
            <b-col cols="6">
          <FormulateInput
            name="Campo"
            type="password"
            label="Confirme sua senha"
            placeholder=""
            validation="required|confirm"
            validation-name="Confirmation"
          />
            </b-col>
          </b-row>
        </div>
        <div class="date">
          <FormulateInput
            type="date"
            name="Campo"
            label="Data de nascimento"
            validation="required|before:2021-01-01"
            min="1900-01-01"
            max="2021-09-14"
            error-behavior="live"
          />
        </div>
        <div>
          <b-row class="content-center">
            <b-button class="btn-register btn">Cadstrar</b-button>
          </b-row>
        </div>
      </b-container>
    </FormulateForm>
  </div>
</template>

<script>
import Header2 from "../components/Header2";
export default {
  data() {
    return {
      formValues: {},
    };
  },
  components: {
    Header2,
  },
};
</script>

<style scoped>
.register-form {
  margin-top: 5%;
  padding: 2em;
  border-radius: 0.5em;
  width: 25%;
  box-sizing: border-box;
}
/* @media (min-width: 420px) {
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
} */
.btn {
  width: 45%;
  height: 45%;
}

.name{
  padding-top: 2%;
}

.email{
  width: 700px !important;
}
</style>
