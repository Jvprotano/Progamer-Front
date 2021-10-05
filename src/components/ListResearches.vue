<template>
    <div id="home-i"> 
        <b-container>
            <b-container class="bv-example-row">
                <b-row>
                    <b-media>
                        <template v-slot:aside>        
                            <b-row>
                                <b-col cols="1" class="pr-0">
                                </b-col>
                                <b-col cols="11" class="text pl-0">
                                    <b-row><h2><strong>Pesquisa 1</strong></h2>
                                    <p>Ano pesquisa 1</p>
                                    <button class="See">See</button>
                                    <button class="Del">Delete</button>
                                    <button class="Del">Edit</button>
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
export default {
    name: "ListResearch",
}
</script>

<style scoped>
.See{
    width: auto;
    height: auto;
    background-color: rgb(94, 196, 94);
}
.Del{
    width: auto;
    height: auto;
    background-color: rgb(177, 5, 5);

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