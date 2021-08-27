<template>
  <div id="app">
    <Header/>
    <CoursesList/>
    <CardCourses/>
    
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
import CoursesList from './components/CoursesList'
import CardCourses from './components/CardCourses'

export default {
  name: 'App',
  components:{
    Header,
    CardCourses,
    CoursesList,

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
