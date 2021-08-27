<template>
  <div id="example">
  <carousel-3d  :controls-visible="true" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" 
               :controls-width="30" :controls-height="60" :clickable="false">
    <slide v-for="(slide, i) in slides" :key="i">
      <figure>
        <img src="https://placehold.it/360x270">
      </figure>
    </slide>
  </carousel-3d>
</div>
</template>

<script>
export default {
 el: '#example',
  data: {
    slides: 7
  },
  components: {
    'carousel-3d': window['carousel-3d'].Carousel3d,
    'slide': window['carousel-3d'].Slide
  }
}
</script>

<style>

</style>