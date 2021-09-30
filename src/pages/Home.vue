<template>
  <div id="home">
    <Header />
    <CarouselGames />
    <SliderGames />
    <SliderGames />
    <SliderGames />
    <router-view />
  </div>
</template>

<script>
/*import FeaturedGames from "../components/FeaturedGames";*/
import Header from "../components/Header";
import CarouselGames from "../components/CarouselGames";
import SliderGames from "../components/SliderGames";

export default {
  name: "Home",
  components: {
    Header,
    SliderGames,
    CarouselGames,
    /*FeaturedGames,*/
  },
};
</script>

<style scoped>

#home{
  margin-bottom: 120px;
}

</style>
