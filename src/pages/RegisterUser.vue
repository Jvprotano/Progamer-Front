<template>
  <div id="components">
    <Header2 />
    <b-container class="cards">
      <div>
        <b-row>
          <h2 class="form-title">Cadastre-se agora</h2>
          <p class="form-phrase">
            Falta apenas alguns passos para você se tornar membro dessa enorme
            comunidade!
          </p>
        </b-row>
        <b-form @submit="onSubmit" v-if="show">
          <b-row>
            <b-col>
              <b-form-group
                class="pad-top"
                id="input-group-1"
                label="Primeiro nome:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.name"
                  placeholder="Primeiro nome"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                class="pad-top"
                id="input-group-2"
                label="Último nome:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.lname"
                  placeholder="Último nome"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-form-group
              class="pad-top"
              id="input-group-3"
              label="Email:"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="form.email"
                type="email"
                placeholder="usuario@hotmail.com"
                required
              ></b-form-input>
            </b-form-group>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group
                class="pad-top"
                id="input-group-4"
                label="Senha:"
                label-for="input-4"
              >
                <b-form-input
                  id="input-4"
                  v-model="form.pass"
                  type="password"
                  placeholder=""
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                class="pad-top"
                id="input-group-5"
                label="Confirme a senha:"
                label-for="input-5"
              >
                <b-form-input
                  id="input-5"
                  v-model="form.confpass"
                  type="password"
                  placeholder=""
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
              <b-form-group
                class="pad-top"
                id="input-group-6"
                label="Data de nascimento:"
                label-for="input-6"
              >
                <b-form-input
                  id="input-6"
                  v-model="form.date"
                  type="date"
                  placeholder=""
                  required
                ></b-form-input>
              </b-form-group>
            </b-row>
          <b-row>
            <b-button type="submit" class="btn content-center"
              >Cadastrar</b-button
            >
          </b-row>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
import Header2 from "../components/Header2";
export default {
  data() {
    return {
      form: {
        name: "",
        lname: "",
        email: "",
        pass: "",
        confpass: "",
        date: "",
        checked: [],
      },
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
      this.form.name = "";
      this.form.lname = "";
      this.form.email = "";
      this.form.pass = "";
      this.form.confpass = "";
      this.form.date = "";
      this.form.checked = [];
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  components: {
    Header2,
  },
};
</script>

<style scoped>
.cards {
  margin-top: 2% !important;
  width: 50% !important;
  height: 50% !important;
}

.form-title {
  text-align: center;
}
.form-phrase {
  text-align: center;
}

.pad-top{
  padding-top: 1% !important;
}

.btn{
  margin-top: 3% !important;
}
</style>
