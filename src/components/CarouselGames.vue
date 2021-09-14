<template>
  <div class="box">
    <carousel-3d :controls-visible="true" :space="400">
      <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <router-link to="curso" id="carousel">
          <b-card class="card-carousel">
            <img class="image-carousel" :src="slide.src" />
          </b-card>
        </router-link>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import Carousel3d from "@/carousel-3d/Carousel3d";
import Slide from "@/carousel-3d/Slide";

const slides = [
  {
    title: "Slide 1",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.",
    src:
      "https://theclutch.com.br/wp-content/uploads/2021/03/csgo-capa-cts.jpg",
  },
  {
    title: "Slide 2",
    desc: "Lorem ipsum dolor sit amet ",
    src:
      "https://s2.glbimg.com/y6nngNdKtYKEZx9QiZIa-bW4cq4=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/E/T/z4H0MFRxKrUlZijtEnAQ/20190522035739-1200-675-league-of-legends.jpg",
  },
  {
    title: "Slide 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    src:
      "https://www.mobilegamer.com.br/wp-content/uploads/2021/02/global-offensive-mobile.jpg",
  },
  {
    title: "Slide 4",
    desc: "Lorem ipsum dolor sit amet,  Enim, maxime.",
    src:
      "https://s2.glbimg.com/ztYuyapZXTARyNT5vw_b9lnhArs=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/j/U/iLO5YCRBmGHUsDwBIBHA/valorant-closed-beta-1200x675.png",
  },
  {
    title: "Slide 5",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.",
    src:
      "https://image.api.playstation.com/vulcan/img/rnd/202106/0806/7KJILbdp9AEmmrELwJCMJqc2.png?w=440",
  },
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
    };
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
</style>
