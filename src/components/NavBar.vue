<template>
  <nav class="navbar-view navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand  d-block" to="/"
        ><img width="150" src="../assets/img/home/logowobg.png"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse mx-lg-4" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item px-lg-3">
            <router-link class="nav-link" to="/staff">Staff</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/students"
              >Estudantes</router-link
            >
          </li>
          <li class="nav-item px-lg-3">
            <router-link class="nav-link" to="/allperson">Todos os personagens</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/house">Personagens por casas</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
.navbar-view {
  background: transparent;
  .nav-link {
    color: white;
    font-size: 19px;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>