<template>
  <div id="menu">
    <nav id="menu-h">
      <b-row>
        <b-col> <router-link id="pageHome" to="/">Home</router-link></b-col>
        <b-col>
          <b-input-group size="sm" class="barsearch">
            <b-input-group-prepend is-text>
              <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="search" placeholder="Buscar"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col><router-link to="/register">Cadastre-se</router-link></b-col>
        <b-col><router-link to="/">Quem somos</router-link></b-col>
        <b-col><router-link to="/">Entrar</router-link></b-col>
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
  padding: 14px;
}

#pageHome {
  float: left;
}

.barsearch {
  background-color: wheat;
}
</style>
