<template>
  <div id="menu">
    <nav id="menu-h">
      <b-row>
        <b-col class="home">
          <router-link id="pageHome" to="/">
            <b-row>
              <b-col class="div-logo" cols="6"
                ><img class="logo mg-0" src="../assents/game-console.png"
              /></b-col>
              <b-col class="div-home" cols="6"
                ><h5 id="linkhome" class="mb-0 text-white">ProGamer</h5></b-col
              >
            </b-row>
          </router-link>
        </b-col>
      </b-row>
    </nav>
  </div>
</template>

<script scoped>
export default {
  name: "Menu",
};
</script>

<style scoped>
#menu {
  width: 100% !important;
}

#menu-h {
  background-color: #533784;
  color: #fff !important;
  padding: 14px;
  width: 100% !important;
}

#formulario {
  background-color: #fff;
  margin: 0;
  text-align: center;
}

#pageHome {
  float: left;
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
