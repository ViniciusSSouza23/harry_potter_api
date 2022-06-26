<template>
  <div class="house-view">
    <div class="container">
      <h2 class="text-center title">Escolha a casa que deseja saber mais</h2>
      <div class="my-4 line"></div>
      <div class="row my-5">
        <div class="col-lg-3 col-md-6">
          <router-link to="/grifinoria">
            <img src="@/assets/img/houses/grifinoria.png" alt="" class="img-fluid">
          </router-link>
        </div>
        <div class="col-lg-3 col-md-6">
          <router-link to="/lufa-lufa">
            <img src="@/assets/img/houses/lufa-lufa.png" alt="" class="img-fluid">
          </router-link>
        </div>
        <div class="col-lg-3 col-md-6">
           <router-link to="/corvinal">
            <img src="@/assets/img/houses/raven_claw.png" alt="" class="img-fluid px-2 py-2">
          </router-link>
        </div>
        <div class="col-lg-3 col-md-6">
           <router-link to="/sonserine">
            <img  src="@/assets/img/houses/sonserine.png" alt="" class="img-fluid">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.house-view{
  img{
    transition: all 0.5s;
    &:hover{
      filter: brightness(80%);
      border: 2px solid goldenrod;
      
    }
  }
}
</style>