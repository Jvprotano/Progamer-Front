<template>
  <div id="components">
    <Header />
    <div id="info-course">
      <b-container class="info-main">
        <b-row>
          <b-col cols="6">
            <img
              class="figure-img img-fluid rounded"
              :src= courses.imageUrl
              />
          </b-col>
          <b-col class="text-side" cols="6">
            <b-row class="title">
              <h2>{{courses.title}}</h2>
            </b-row>
            <b-row class="instructor-name">
              <h6>Instrutor: {{courses.instructorFullName}}</h6>
            </b-row>
            <b-row class="category">
              <h6>Nível: {{courses.categoryName}}</h6>
            </b-row>
            <b-row class="duration">
              <h6>Duração: {{courses.duration}} horas</h6>
            </b-row>
            <b-row>
              <b-form-rating
                id="rating-main"
                class="rating"
                inline
                value
                v-model="courses.ratingTotal"
                readonly
                precision="1"
                show-value
              ></b-form-rating>
            </b-row>
            <b-row>
              <b-col class="price">
                <h4>Valor R$ {{courses.value}}</h4>
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
        <h4 class="title-cr">Comentários e avaliações</h4>
        <b-row v-for=" i in courses.listRating" :key="i.id">
          <b-col>
            <b-row>
              <h6>{{i.userFullName}}</h6>
            </b-row>
            <b-row>
              <b-form-rating
                id="rating-main"
                class="rating"
                inline
                value
                v-model="i.note"
                readonly
                precision="1"
              ></b-form-rating>
            </b-row>
            <p class="comment">
              {{i.comment}}
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
      courses: [],
      value: 0,
      value_comment: 1
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
  width: 200px;
  height: 60px;
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
