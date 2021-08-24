<template>
  <div id="menu">
    <nav id="menu-h">
      <b-row>
        <b-col class="home">
          <router-link id="pageHome" to="/home">
            <b-row>
              <b-col class="div-logo" cols="6"><img class="logo mg-0" src="../assents/game-console.png" /></b-col>
              <b-col class="div-home" cols="6"><h5 class="mb-0">ProGamer</h5></b-col>
            </b-row>
          </router-link>
        </b-col>
        <b-col>
          <b-input-group size="sm" class="bar-search">
            <b-input-group-prepend is-text>
              <div class="cursor-pointer">
                <b-icon icon="search"></b-icon>
              </div>
            </b-input-group-prepend>
            <b-form-input type="search" placeholder="Buscar"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col class="login">
          <router-link id="pageLogin" to="/login"
            ><div class="mb-0">Entrar</div></router-link
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
#menu-h {
  background-color: #533784;
  color: #fff !important;
  padding: 14px;
}

#pageHome {
  float: left;
}

.bar-search {
  font-family: "Open Sans", sans-serif;
  width: 380px !important;
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
