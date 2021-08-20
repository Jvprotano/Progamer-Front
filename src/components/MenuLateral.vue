<template>
  <div class="side-menu">
    <ul class="pl-0 pt-menu">
      <li class=" mb-li-menu">
        <a href="#">
          <h5 class="text-menu ">Início</h5>
        </a>
      </li>
      <li class="mb-li-menu">
        <a href="#">
          <h5 class="text-menu">Meus Cursos</h5>
        </a>
      </li>
      <li class="mb-li-menu">
        <a href="#">
          <h5 class="text-menu">Meu perfil</h5>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h5 {
  color: #fff;
}
.side-menu {
  background-color: #31204d;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 12%;
  height: 100vh;
}
.pl-0 {
  padding-left: 0px !important;
}
.pt-menu {
  padding-top: 20px;
}
.mb-li-menu {
  margin-bottom: 4px;
}
.text-menu:hover {
  background-color: #180930 !important;
  color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) !important;
  
}
</style>
