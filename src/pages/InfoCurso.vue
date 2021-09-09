<template>
  <div id="components">
    <Header />
    <div id="info-curso">
      <b-container class="info-main">
        <b-row>
          <b-col cols="6">
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
              <b-form-rating
                id="rating-main"
                class="rating"
                inline
                value
                v-model="value"
                readonly
                precision="1"
                show-value
              ></b-form-rating>
            </b-row>
            <b-row>
              <b-col class="price">
                <h4>Valor R$</h4>
              </b-col>
              <b-col class="buy">
                <b-button>Comprar</b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="description">
        <b-row>
          <b-col>
            <h4>Descrição</h4>
            <p>
              Esse curso é muito legal, voce vai aprender a dar varias balas nos
              nubs e nerdolas!!! Esse curso é muito legal, voce vai aprender a
              dar varias balas nos nubs e nerdolas!!! Esse curso é muito legal,
              voce vai aprender a dar varias balas nos nubs e nerdolas!!! Esse
              curso é muito legal, voce vai aprender a dar varias balas nos nubs
              e nerdolas!!! Esse curso é muito legal, voce vai aprender a dar
              varias balas nos nubs e nerdolas!!! Esse curso é muito legal, voce
              vai aprender a dar varias balas nos nubs e nerdolas!!! Esse curso
              é muito legal, voce vai aprender a dar varias balas nos nubs e
              nerdolas!!! Esse curso é muito legal, voce vai aprender a dar
              varias balas nos nubs e nerdolas!!! Esse curso é muito legal, voce
              vai aprender a dar varias balas nos nubs e nerdolas!!! Esse curso
              é muito legal, voce vai aprender a dar varias balas nos nubs e
              nerdolas!!! Esse curso é muito legal, voce vai aprender a dar
              varias balas nos nubs e nerdolas!!! Esse curso é muito legal, voce
              vai aprender a dar varias balas nos nubs e nerdolas!!! Esse curso
              é muito legal, voce vai aprender a dar varias balas nos nubs e
              nerdolas!!! Esse curso é muito legal, voce vai aprender a dar
              varias balas nos nubs e nerdolas!!! Esse curso é muito legal, voce
              vai aprender a dar varias balas nos nubs e nerdolas!!! Esse curso
              é muito legal, voce vai aprender a dar varias balas nos nubs e
              nerdolas!!!
            </p>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="comments-ratings">
        <b-row>
          <b-col>
            <h4 class="title-cr">Comentários e avaliações</h4>
            <b-row>
              <h6>Lucas França</h6>
            </b-row>
            <b-row>
              <b-form-rating
                id="rating-main"
                class="rating"
                inline
                value
                v-model="value_comment"
                readonly
                precision="1"
              ></b-form-rating>
            </b-row>
            <p class="comment">
              Esse curso é muito legal, dei muita bala nos nerdolas hehe.
            </p>
            <b-row>
              <h6>Lucas Nakasima</h6>
            </b-row>
            <b-row>
              <b-form-rating
                id="rating-main"
                class="rating"
                inline
                value
                v-model="value_comment"
                readonly
                precision="1"
              ></b-form-rating>
            </b-row>
            <p class="comment">
              O professor é muito gente boa.
            </p>
            <b-row>
              <h6>Gustavo Sumi</h6>
            </b-row>
            <b-row>
              <b-form-rating
                id="rating-main"
                class="rating"
                inline
                value
                v-model="value_comment"
                readonly
                precision="1"
              ></b-form-rating>
            </b-row>
            <p class="comment">
              Depois desse curso eu virei profissional, recomendo muito.
            </p>
            <b-row>
              <h6>Gustavo Boroski</h6>
            </b-row>
            <b-row>
              <b-form-rating
                id="rating-main"
                class="rating"
                inline
                value
                v-model="value_comment"
                readonly
                precision="1"
              ></b-form-rating>
            </b-row>
            <p class="comment">
              Eu achei q sabia pouco, mas deepois q assisti a esse curso,
              percebi que sabia mais que o professor. !@#@!#@@
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  data() {
    return {
      value: 3.5,
      value_comment: 4.0,
    };
  },
  components: {
    Header,
  },
};
</script>

<style scoped>
.info-main {
  color: #0e0e10;
  border-radius: 10px;
  background-color: #f7f7f8;
  margin-top: 30px;
  padding: 30px !important;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);
}

.description {
  color: #0e0e10;
  border-radius: 10px;
  background-color: #f7f7f8;
  margin-top: 30px;
  padding: 30px !important;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);
}

.info-main {
  margin-top: 2%;
}

.figure-img {
  margin-top: 2%;
  border: solid 0.5px;
}

.title {
  margin-top: 2% !important;
  padding-left: 1px;
}



.b-icon {
  color: /* #ffc400;  */ #ffd900;
  border: none;
}

.b-rating-value {
  color: #0e0e10;
}

.category {
  padding-left: 2px;
}

.instructor-name {
  padding-left: 2px;
}

.price {
  margin-top: 20% !important;
  padding-left: 2px;
  padding-top: 10px;
}

.buy {
  margin-top: 20% !important;
  padding-left: 2px;
  text-align: center !important;
  border: none !important;
}

.btn {
  background-color: #8351dc !important;
  color: #fff !important;
  width: 200px;
  height: 60px;
  font-weight: bold !important;
  border-color: #f7f7f7 !important;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);
}

.btn:hover {
  background-color: #772ce8 !important;
}

.btn:active {
  border: none !important;
}

.comments-ratings {
  color: #0e0e10;
  border-radius: 10px;
  background-color: #f7f7f8;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 30px !important;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);
}

#rating-main {
  background-color: #f7f7f8 !important;
  pointer-events: none;
  border: none !important;
}

.comment {
  padding-bottom: 15px;
}

.title-cr {
  padding-bottom: 10px;
}
</style>
