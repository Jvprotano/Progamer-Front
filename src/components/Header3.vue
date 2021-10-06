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
        <b-col class="login" cols="">
          <b-dropdown
            id="dropdown-right"
            right
            size="lg"
            toggle-class="text-decoration-none"
            no-caret
          >
            <template #button-content>
              <img class="logo mg-0" src="../assents/profile.png" />
            </template>
            <b-dropdown-item class="text-center">Configurações</b-dropdown-item>
            <b-dropdown-item class="text-center"
              >Página do aluno</b-dropdown-item
            >
            <b-dropdown-item class="text-center"  to="/courseInstructor"
              >Página do instrutor</b-dropdown-item
            >
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item class="text-center"  to="/">Logout</b-dropdown-item>
          </b-dropdown>
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
  padding: 7px;
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

.btn {
  background-color: #fff !important;
}

.btn:hover {
  text-decoration: none !important;
}

.btn-profile {
  background-color: #533784 !important;
}


</style>
