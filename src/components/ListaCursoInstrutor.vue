<template>
    <div id="home-i"> 
        <b-container>
            <b-container class="bv-example-row">
                <b-row>
                    <b-media>
                        <template v-slot:aside>        
                            <b-row>
                                <b-col cols="1" class="pr-0">
                                    <div class="size-img">
                                        <b-img blank blank-color="#690000" width="100" alt="My placeholder"></b-img>
                                    </div>
                                </b-col>
                                <b-col cols="11" class="text pl-0">
                                    <b-row><h2><strong>Como chegar no ferro 4 em 4 partidas teste</strong></h2></b-row>
                                    <b-row><p>Game: League of legends</p></b-row>
                                    <b-row><p>Data: 16/09/2021 Ativo: Sim</p></b-row>
                                    <b-row><p>Avaliação: XXXX</p></b-row>
                                </b-col>
                            </b-row>
                            <hr>
                        </template>
                    </b-media>
                </b-row>
                <b-row>
                    <b-media>
                        <template v-slot:aside>        
                            <b-row>
                                <b-col cols="1" class="pr-0">
                                    <div class="size-img">
                                        <b-img blank blank-color="#3c53f5" width="100" alt="My placeholder"></b-img>
                                    </div>
                                </b-col>
                                <b-col cols="11" class="text pl-0">
                                    <b-row><h2><strong>Como morrer mais rapido</strong></h2></b-row>
                                    <b-row><p>Game: CSGO</p></b-row>
                                    <b-row><p>Data: 16/09/2021 Ativo: Sim</p></b-row>
                                    <b-row><p>Avaliação: XXXX</p></b-row>
                                </b-col>
                            </b-row>
                            <hr>
                        </template>
                    </b-media>
                </b-row>
                <b-row>
                    <b-media>
                        <template v-slot:aside>        
                            <b-row>
                                <b-col cols="1" class="pr-0">
                                    <div class="size-img">
                                        <b-img blank blank-color="#3cf5ec" width="100" alt="My placeholder"></b-img>
                                    </div>
                                </b-col>
                                <b-col cols="11" class="text pl-0">
                                    <b-row><h2><strong>Como sobreviver a um ataque zombie</strong></h2></b-row>
                                    <b-row><p>Game: The Walking Dead</p></b-row>
                                    <b-row><p>Data: 20/09/2021 Ativo: Não</p></b-row>
                                    <b-row><p>Avaliação: XXXX</p></b-row>
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
/* import Courses from "../services/courses" */
export default {
    name: "ListaCursoInstrutor",
}
</script>

<style scoped>
.media-aside{
    display: inline !important;
}
.size-img{
    text-align: left;
}
.text{
    text-align: left;
    line-height: 10px;
}
.home-i{
    padding: 15px;
}
.bv-example-row{
    margin-top: 50px;
}
</style>