<template>
  <div id="menu">
    <nav id="menu-h">
      <b-row id="menu-h">
        <b-col class="home">
          <router-link id="pageHome" to="/">
            <b-row>
              <b-col class="div-logo text-center" cols="col-6 col-sm-6 col-md-6">
                <img class="logo mg-0" src="../assents/game-console.png"/>
              </b-col>
              <b-col class="div-home" cols="col-6 col-sm-6 col-md-6">
                <h5 id="linkhome" class="mb-0 text-white">ProGamer</h5>
              </b-col>
            </b-row>
          </router-link>
        </b-col>
        <b-col cols="col-4 col-sm-4 col-md-4" class="content-center bar-search">
          <b-input-group size="sm" class="bar-search">
            <b-input-group-prepend is-text>
              <div class="cursor-pointer">
                <b-icon icon="search"></b-icon>
              </div>
            </b-input-group-prepend>
            <b-form-input type="search" placeholder="Buscar"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col class="login" cols="">
          <router-link id="pageLogin" to="/login"
            ><div class="mb-0 text-white font-600">Entrar</div></router-link
          >
        </b-col>
      </b-row>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped>
#menu{
  width: 100% !important;
}

@media (max-width: 750px)
{
  .bar-search
   {
    display: none !important;
   }

   .div-logo{
     padding-right: 50% !important;
   }
}

#menu-h {
  background-color: #533784;
  color: #fff !important;
  width: 100% !important;
  padding: 5px;
}

#formulario {
  background-color: #fff;
  margin: 0;
  text-align: center;
}

#pageHome {
  float: left;
}

.bar-search {
  font-family: "Open Sans", sans-serif;
}

.login {
  align-items: center;
  display: flex;
  justify-content: flex-end;
  font-weight: 500;
  margin-right: 15px;
}

.home {
  align-items: center;
  display: flex;
  justify-content: flex-start;
  font-weight: 500;
  margin-left: 15px;
  width: 40%;
}

.logo {
  width: 38px;
}

.div-logo {
  padding-right: 0;
}

.div-home {
  align-items: center;
  display: flex;
  padding-left: 0;
}
</style>
