<template>
<div class="carousel">
  <div>
    <h1>DEEPWEB SITE</h1>
  </div>
  <splide :options="options">
    
    <splide-slide>
      <b-card>
      <img src="https://img.redbull.com/images/c_crop,x_288,y_0,h_675,w_787/c_fill,w_650,h_540/q_auto,f_auto/redbullcom/2021/7/13/qcmg7aaz9yn153jogvko/games-counter-strike-global-offensive">
      </b-card>
    </splide-slide>
    <splide-slide>
      <b-card>
      <img src="https://s2.glbimg.com/pNs-qBykHRMapHzDUV1PEoi3NKM=/0x0:695x391/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/9/Y/vKorkqTcOZfmutlwGE7Q/1.jpg">
      </b-card>
    </splide-slide>
    <splide-slide>
      <b-card>
      <img src="https://i.ytimg.com/vi/icBEmeEJV3M/maxresdefault.jpg">
      </b-card>
    </splide-slide>
  </splide>
  </div>
</template>

<script>
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
  export default { 
    
    data() {
      return {
        options: {
          rewind : true,
          width  : 2000,
          gap    : 'rem',
        },
      };
    },
  }
</script>
<style scoped>
img {
  width: 100% !important;
  height: 500px !important;
   object-fit: cover;
    box-shadow: 0 0 40px rgb(0 0 0 / 15%);
    
}
</style>