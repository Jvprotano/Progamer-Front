<template>
  <div class="box">
    <div class="mainCarousel">
      <carousel-3d :controls-visible="true" :space="400">
        <slide v-for="(slide, i) in slideCount" :index="i" :key="i">
          <template  v-if=" i < gameData.length">
          <router-link to="InfoCourse" id="carousel">
            <b-card class="card-carousel">
              <img class="image-carousel" :src= gameData[i].imageUrl />
            </b-card>
          </router-link>
          </template>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
import Carousel3d from "@/carousel-3d/Carousel3d";
import Slide from "@/carousel-3d/Slide";
import Games from "../services/courses"

const slides = [
  {
    title: "",
    desc: "",
    src: "",
  }
];

export default {
  name: "App",
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      slides: slides,
      slideCount: 5,
      gameData: [],
    };
  },
  mounted(){
    Games.homeLoadData().then(apiResponse =>{
      this.gameData = apiResponse.data.listGame
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
      console.log("onMainSlideClick Callback Triggered");
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
.carousel-3d-slider {
  position: relative !important;
}
#carousel {
  background-color: blueviolet !important;
}
img {
  box-shadow: 0 0 40px rgb(0 0 0 / 15%) !important;
  height: 300px;
  object-fit: cover !important;
  box-sizing: border-box !important;
  width: 100% !important;
  height: 100% !important;
}
.row {
  margin-top: 10px !important;
  margin-bottom: 10px !important;
  object-fit: cover !important;
}

.carousel-3d-container {
  padding: 5px;
  box-shadow: 0 0 40px rgb(0 0 0 / 95%);
  height: 300px;
  object-fit: cover;
  border-radius: 10px !important;
  box-sizing: border-box;
  height: 450px !important;
}
.carousel-3d-slider {
  box-shadow: 0 0 40px rgb(0 0 0 / 15%) !;
  height: 500px;
  object-fit: cover;
  border-radius: 10px !important;
  box-sizing: border-box;
}
.carousel-3d-slide {
  height: 440px !important;
  border-width: 0px !important;
  box-shadow: 0 0 40px rgb(0 0 0 / 25%) !important;
  border-radius: 4px !important;
}
.card-carousel {
  margin: 0px !important;
}
.card {
  border: 0px !important;
}

.card-body {
  padding: 0px;
  height: 500px;
  object-fit: cover;
  border-radius: 10px !important;
  box-sizing: border-box;
}
h3 {
  margin-left: 30px;
}
#alo {
  position: absolute !important;
}
</style>
