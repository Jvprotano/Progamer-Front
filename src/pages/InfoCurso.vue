<template>
  <div id="info-curso">
    <b-container class="info-main">
      <b-row>
        <b-col cols="6">
          <!-- <b-card
              class="img-fluid"
              img-src="https://revista-images.querobolsa.com.br/revista/post_images/14993/8b0c620256405b6b2705b140391800b1d8a501da.png?1550093429"
              img-alt="Card image"
            >
            </b-card> -->
          <img
            class="figure-img img-fluid rounded"
            src="https://revista-images.querobolsa.com.br/revista/post_images/14993/8b0c620256405b6b2705b140391800b1d8a501da.png?1550093429"
          />
        </b-col>
        <b-col class="text-side" cols="6">
          <b-row class="title">
            <h2>Curso de dar muita bala</h2>
          </b-row>
          <b-row class="instructor-name">
            <h6>Nome do Instrutor</h6>
          </b-row>
          <b-row class="category">
            <h6>Categoria</h6>
          </b-row>
          <b-row>
            <b-form-rating class="rating" inline value v-model="value" readonly precision="1" show-value></b-form-rating>
          </b-row>
          <b-row>
            <b-col class="cost">
            <h4>Valor R$</h4>
            </b-col>
            <b-col class="buy">
            <b-button variant="outline-primary">Comprar</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      </b-container>
      <b-container class="description" >
      <b-row>
        <b-col>
          <h4>Descrição</h4>
          <p>Esse curso é muito legal, voce vai aprender a dar varias balas nos nubs e nerdolas!!!
            Esse curso é muito legal, voce vai aprender a dar varias balas nos nubs e nerdolas!!!
            Esse curso é muito legal, voce vai aprender a dar varias balas nos nubs e nerdolas!!!
            Esse curso é muito legal, voce vai aprender a dar varias balas nos nubs e nerdolas!!!
          </p>
        </b-col>
      </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
  data() {
      return {
        value: 3.5
      }
    }
};
</script>

<style>
/* .img-curso {
  width: 200px;
  height: 100px;
  margin-bottom: 40%;
} */

.info-main{
  color:  #fff;
  border:solid 0.5px;
  border-radius: 10px;
  background-color: #141434;
  box-shadow: #141434;
  margin-top: 30px;
}
.text-side {
  color: #fff;
}

.rating {
  background-color: #0f0c1d;
}

.description{
  color:  #fff;
  border:solid 0.5px;
  border-radius: 10px;
  background-color: #141434;
  box-shadow: #141434;
  margin-top: 30px;
}

</style>
