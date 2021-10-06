<template>
  <div class="box">
    <h3>Cursos em destaque</h3>
    <carousel-3d
      :disable3d="true"
      :space="375"
      :clickable="true"
      :on-main-slide-click="onMainSlideClick"
      :controls-visible="true"
      :loop="true"
    >
      <slide v-for="(slide, i) in slideCount" :index="i" :key="i">
        <template  v-if=" i < homeData.length">
        <router-link :to="{name: 'infoCourse', params: { id: homeData[i].id } }" id="buttonCourse">
          <img :src= homeData[i].imageUrl />
          <div class="infos">
          <b-row>
            <b-col sm="12">
              <h4>{{ homeData[i].title }}</h4>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <h5>{{ homeData[i].instructorName }}</h5>
            </b-col>
            <b-col sm="12">
              <p>{{ homeData[i].description }}</p>
            </b-col>
          </b-row>
          </div>
        </router-link>
        </template>
      </slide>
    </carousel-3d>
  </div>
</template>

<script scoped>
import Carousel3d from "@/carousel-3d/Carousel3d";
import Slide from "@/carousel-3d/Slide";
import Courses from '../services/courses';

const slides = [
  {
    title: "",
    desc: "",
    src: "",
  },
];

export default {
  name: "App",
  idCourse: 1,
  
  components: {
    Carousel3d,
    Slide,
    },
    data() {
    return {
      
      slides: slides,
      slideCount: 12,
      homeData: [],
      id: ''
    };
  },
  mounted(){
    Courses.homeLoadData().then(apiResponse => {
      this.homeData = apiResponse.data.listCourseRecommended
    })
  },
  
  methods: {
    onSlideChanged(index) {
      console.log("onSlideChanged Callback Triggered", "Slide Index " + index);
    },
    onLastSlide(index) {
      console.log("onLastSlide Callback Triggered", "Slide Index " + index);
    },
    onMainSlideClick() {
    },
    onAfterSlideChanged(index) {
      console.log(
        "@after-slide-changed Callback Triggered",
        "Slide Index " + index
      );
    },
    onSlideChange(index) {
      console.log(
        "@before-slide-change Callback Triggered",
        "Slide Index " + index
      );
    },
    addSlide() {
      this.slideCount++;
    },
    removeSlide() {
      if (this.slideCount > 1) {
        this.slideCount--;
      }
    },
  },
};
</script>

<style scoped>
img {
  box-shadow: 0 0 40px rgb(0 0 0 / 15%) !important;
  object-fit: cover !important;
  box-sizing: border-box !important;
  width: 100% !important;
  height: 60%;
  border: solid !important;
}
.carousel-3d-slider {
  height: 500px !important;
  width: 500px !important;
}
.carousel-3d-container {
  padding: 10px !important;
  height: 400px !important;
  width: 97.8% !important;
  box-shadow: 0 0 40px rgb(0 0 0 / 95%) !important;
}
.carousel-3d-slide {
  background-color: #0f0c1d;
  height: 140% !important;
}
#buttonCourse {
  text-decoration: none !important;
  color: black;
}
#buttonCourse:hover {
  color: #533784 !important;
  font-size: 1.1em;
  color: black;
}
h3 {
  margin-left: 1.5%;
}
h3,
h4,
h5,
p {
  color: white;
}
a {
  color: #0f0c1d !important;
}

.infos {
  padding: 4% !important;
}
</style>