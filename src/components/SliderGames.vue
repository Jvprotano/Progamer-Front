<template>
  <div class="box">
    <h3>Cursos em destaque</h3>
    <carousel-3d
      :disable3d="true"
      :space="375"
      :clickable="true"
      :controls-visible="true"
      :loop="true"
    >
      <slide v-for="(slide, i) in slides" :index="i" :key="i" v-on:click="idCourse = 77">
        <router-link to="infoCourse" id="buttonCourse">
          <img :src="slide.src" />
          <div class="infos">
          <b-row>
            <b-col sm="12">
              <h4>CURSO DE ALGUMA COISA</h4>
            </b-col>
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
          </div>
        </router-link>
      </slide>
    </carousel-3d>
  </div>
</template>

<script scoped>
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
      "https://media.contentapi.ea.com/content/dam/apex-legends/common/season-5/apex-section-bg-season-5-keyart-xl.jpg.adapt.crop191x100.1200w.jpg",
  },
  {
    title: "Slide 6",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.",
    src:
      "https://s2.glbimg.com/Q-2m5_2D6dkYBDdsaaF2V5NAdWU=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/T/h/y7T8ZUTT6NwVBCCZYRvQ/apex-legends-keyart.jpg",
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
      idCourse: 1,
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
  margin-left: 7%;
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

.infos{
  padding: 4% !important;
}
</style>
