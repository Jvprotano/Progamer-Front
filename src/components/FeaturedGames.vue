<template>
  <div class="box">
    <h3>Cursos em destaque</h3>
    <carousel-3d
      :disable3d="true"
      :space="370"
      :clickable="false"
      :controls-visible="true"
      :loop="false"
    >
      <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <router-link to="curso" id="buttonCourse">
          <img :src="slide.src" />

          <b-row>
            <h4>CURSO DE ALGUMA COISA</h4>
          </b-row>
          <b-row>
            <b-col sm="12">
              <h5>Lucas</h5>
            </b-col>
            <b-col sm="12">
              <p>Curso de alguma coisa</p>
              <p>Ou sei lá</p>
            </b-col>
          </b-row>
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnjWwG4MnRCD7vZ_mQvG5uS0Tern03U20sg&usqp=CAU",
  },
  {
    title: "Slide 2",
    desc: "Lorem ipsum dolor sit amet ",
    src: "https://midias.jb.com.br/_midias/jpg/2021/03/11/csgo-586394.jpg",
  },
  {
    title: "Slide 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    src: "https://i.ytimg.com/vi/icBEmeEJV3M/maxresdefault.jpg",
  },
  {
    title: "Slide 4",
    desc: "Lorem ipsum dolor sit amet,  Enim, maxime.",
    src: "https://img.olhardigital.com.br/wp-content/uploads/2021/04/csgo.png",
  },
  {
    title: "Slide 5",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.",
    src:
      "data:image/jpeg;base64,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",
  },
  {
    title: "Slide 6",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.",
    src:
      "data:image/png;base64,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",
  },
  {
    title: "Slide 7",
    desc: "Lorem ipsum dolor sit amet ",
    src:
      "https://emtodolugarnet.files.wordpress.com/2021/04/cs-go-wallpaper-hd-logo-2_hu7e9aa276d7f2c7d722eb3f6f162399c3_189916_1920x1080_resize_q75_box.jpg",
  },
  {
    title: "Slide 8",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    src:
      "https://i2.wp.com/manualdosgames.com/wp-content/uploads/2020/07/StatTrak_AK47_Fire_Serpent_eh_a_skin.png",
  },
  {
    title: "Slide 9",
    desc: "Lorem ipsum dolor sit amet,  Enim, maxime.",
    src:
      "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/06/csgo-time-mais-velho-da-ucrania.jpg",
  },
  {
    title: "Slide 10",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.",
    src:
      "https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/07/apex-legends-emergence-patch-notes-thumbnail.jpg.adapt.crop191x100.628p.jpg",
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
      slideCount: 10,
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
img {
  box-shadow: 0 0 40px rgb(0 0 0 / 15%) !important;
  object-fit: cover !important;
  box-sizing: border-box !important;
  width: 100% !important;
  height: 68%;
  margin: 1px black !important;
  border: solid !important;
}
.carousel-3d-slide {
  background-color: #8351dc;
  box-shadow: 0 0 40px rgb(0 0 0 / 65%) !important;
  height: 100% !important;
}
#buttonCourse {
  text-decoration: none !important;
  color: black;
}
#buttonCourse:hover {
  color: white !important;
  font-size: 1.2em;
  color: black;
}
h3 {
  margin-left: 7%;
}
h3,
h4,
h5,
p {
  color: honeydew;
}
</style>
