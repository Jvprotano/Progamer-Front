<template>
  <div id="app">
    <vue-glide>
      <vue-glide-slide v-for="i in 10" :key="i">
        <img id="imgGame" src="https://s2.glbimg.com/btDsdKAb7R9NsomF5cvsF8IIBwg=/0x0:795x597/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/r/D/0my8teTCWaRrTLpQfNZg/7.jpg"/>
        Slide {{ i }}
        
      </vue-glide-slide>
    </vue-glide>
  </div>
</template>
 
<script>
  import { Glide, GlideSlide } from 'vue-glide-js'
 
  export default {
    components: {
      [Glide.name]: Glide,
      [GlideSlide.name]: GlideSlide
    }
  }
</script> 
<style scoped>

</style>