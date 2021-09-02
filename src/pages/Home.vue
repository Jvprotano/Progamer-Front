<template>
  <div id="home">
    <Header />
    <CarouselGames />
    <SliderGames />
    <FeaturedGames />

    <router-view />
  </div>
</template>

<script>
import FeaturedGames from "../components/FeaturedGames";
import Header from "../components/Header";
import CarouselGames from "../components/CarouselGames";
import SliderGames from "../components/SliderGames";


export default {
  name: "Home",
  components: {
    Header,
    SliderGames,
    CarouselGames,
    FeaturedGames,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
