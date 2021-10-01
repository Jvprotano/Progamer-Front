<template>
  <div id="components">
    <Header />
    <div id="info-course">
      <b-container class="info-main">
        <b-row>

          <b-col cols="6 pl-0">
            <img class="img-fluid thumb" :src= courses.imageUrl />
          </b-col>

          <b-col class="text-side" cols="6">
            <b-row class="mb">
              <h2 class="title-course">{{courses.title}}</h2>
              <b-form-rating
                id="rating-main"
                class="rating"
                inline
                value
                v-model="value"
                readonly
                precision="1"
              ></b-form-rating>
            </b-row>
            <b-row>
              <b-col cols="6">
                  <b-row class="instructor-name">
                    <h6><span class="font-bold">Instrutor:</span> {{courses.instructorFullName}}</h6>
                  </b-row>
              </b-col>
              <b-col cols="6">
                  <b-row class="instructor-name">
                    <h6><span class="font-bold">Game:</span> {{courses.instructorFullName}}</h6>
                  </b-row>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6">
                <b-row class="category">
                  <h6><span class="font-bold">Nível:</span> {{courses.categoryName}}</h6>
                </b-row>
              </b-col>
              <b-col cols="6">
                <b-row class="duration">
                  <h6><span class="font-bold">Duração:</span> {{courses.duration}} horas</h6>
                </b-row>
              </b-col>
            </b-row>
            <b-row>
              <h6><span class="font-bold">Data de criação:</span> {{courses.duration}} horas</h6>
            </b-row>
            <b-row class="mt-price">
              <b-col class="div-price">
                <h4><span class="font-bold">Preço:</span> <span class="font-600">R${{courses.value}},90</span></h4>
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
              {{courses.description}}
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
import Course from "../services/courses";
export default {
  data() {
    return {
      value: 3.5,
      value_comment: 4.0,
      courses: [],
    };
  },
  components: {
    Header,
  },
  mounted(){
    Course.infoCourse().then(apiResponse => {
      this.courses = apiResponse.data
      console.log(this.courses)
    })
  }
};
</script>

<style scoped>

.info-main {
  color: #0e0e10;
  border-radius: 16px;
  background-color: #f7f7f8;
  margin-top: 30px;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);
}

.description {
  color: #0e0e10;
  border-radius: 16px;
  background-color: #f7f7f8;
  margin-top: 30px;
  padding: 30px !important;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);
}

.info-main {
  margin-top: 9%;
}

.b-rating-star {
  color: /* #ffc400;  */ #ffd900;
  border: none;
}

.b-rating-value {
  color: #0e0e10;
}

.category {
  padding-left: 2px;
}

.duration {
  padding-left: 2px;
}

.instructor-name {
  padding-left: 2px;
}

.mt-price {
  margin-top: 3rem;
}

.buy {
  padding-left: 2px;
  text-align: center !important;
  border: none !important;
}

.btn {
  padding: 0.7rem;
  border: 0px solid transparent !important;
  padding-right: 3rem;
  padding-left: 3rem;
  border-radius: 12px !important;
}

.btn:hover {
  background-color: #772ce8 !important;
}

.btn:active {
  border: none !important;
}

.comments-ratings {
  color: #0e0e10;
  border-radius: 16px;
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

h1, h2, h3, h4, h5, h6, p{
   color: #0E0E10;
}

.text-side{
  padding: 18px;
}

.title-course{
  font-weight: bold;
  font-size: 1.75rem;
  margin-bottom: 3px;
}

.thumb{
  border-radius: 13px 0px 0px 13px !important;
}

.mb {
  margin-bottom: 1.6rem;
}

h6 {
  font-size: 1rem;
}

.div-price {
  align-items: center;
  display: flex;
}

.text-price{
  font-weight: bold;
  font-size: 1.6rem;
}

</style>
