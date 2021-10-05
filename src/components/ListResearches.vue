<template>
    <div id="home-i"> 
        <Header />
            <router-link :to="{path:'/registerResearch'}">
            <button class="Create">New</button>
            </router-link>
        <b-container>
            <b-container class="bv-example-row">
                <b-row v-for="i in researches" :key="i.id">
                    <b-media>
                        <template v-slot:aside>        
                            <b-row>
                                <b-col cols="1" class="pr-0">
                                </b-col>
                                <b-col cols="11" class="text pl-0">
                                    <b-row><h2><strong>{{i.nome}}</strong></h2>
                                    <p>{{i.ano}}</p>
                                    <router-link :to="{name:'showResearch', params: {id: i.id}}">
                                    <button class="Read">See</button>
                                    </router-link>
                                    <button class="Delete">Delete</button>
                                    <button class="Edit">Edit</button>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <hr>
                        </template>
                    </b-media>
                    
                </b-row>
            </b-container>
        </b-container>
    </div>
</template>

<script>
import Research from '../services/research'
import Header from "../components/Header";
export default {
    name: "ListResearches",

     data() {
    return {
        researches: [],
      }
},
 mounted(){
    Research.ListResearches().then(apiResponse => {
      this.researches = apiResponse.data
    })
  },

  methods: {
      See(){
           this.$router.push({path:'/showResearch/', params:  10  })
      }
  },
  components:{
      Header
  }
}
</script>

<style scoped>
button{
    width: auto;
    height: 33px;
    color: white;
    
}
button:hover{
    background-color: rgb(255, 255, 255);
    color: black;
    
}
.Read{
    background-color: rgb(94, 196, 94);
}
.Delete{
    background-color: rgb(177, 5, 5);
}
.Edit{
    background-color: rgb(168, 168, 168);
}
.Create{
    background-color: blue;
    margin-top: 14px;
    margin-left: 190px;
    position: absolute;
}

.media-aside{
    display: inline !important;
}

.text{
    text-align: left;
    line-height: 10px;
    color: white;
}
.home-i{
    padding: 15px;
}
.bv-example-row{
    margin-top: 50px;
}
</style>