<template>
  <div id="app">
    <Header/>
    <CoursesList/>
    <CardCourses/>
    <FeaturedGames/>
    
    <router-view/>
  </div>
</template>

<script>
import FeaturedGames from './components/FeaturedGames'
import Header from './components/Header'
import CoursesList from './components/CoursesList'
import CardCourses from './components/CardCourses'

export default {
  name: 'App',
  components:{
    Header,
    CardCourses,
    CoursesList,
    FeaturedGames,

  }
}
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
