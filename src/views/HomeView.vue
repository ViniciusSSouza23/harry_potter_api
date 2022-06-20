<template>
  <div class="home-view container">
    <div class="text-center">
      <img
        width="300"
        src="../assets/img/home/logowobg.png"
        alt="Harry Potter"
      />
    </div>
    <div class="line w-100"></div>
    <div class="row py-5">
      <div class="col-lg-6 order-lg-1 order-2">
        <div class="line py-5 px-5">
          <h3 class="pb-4 title">Bem vindo a Harry Potter Wiki</h3>
          <p>
            Nessa Wiki você vai poder conehcer um pouco mais sobre os
            personagens de Harry Potter, desde estudantes, trabalhadores da
            escola, e os demais personagens, também será possivel filtrar os
            personagens pela sua casa favorita.
          </p>
          <p>
            Todos os dados dos personagens foram consumidos através da API
            publica do Harry Potter, nela contém todos os personagens dos livros
            de Harry potter.
          </p>
          <p>
            Fique a vontade para explorar a aplicação e se divertir conhecendo
            mais do mundo magico de Harry Potter.
          </p>
        </div>
      </div>
      <div class="col-lg-6 order-lg-2 order-1">
        <div class="text-center line py-4 px-5">
          <img
          src="../assets/img/home/brasaowbg.png"
          alt="Brasão"
          class="img-fluid"
        />
        <div class="pb-3"></div>
        <div class="pb-1"></div>
        </div>
      </div>
    </div>
    <div class="line w-100"></div>
  </div>
</template>
<style lang="scss" scoped>
.home-view {
  .line {
    border: 1px solid goldenrod;
    
  }
  
}
</style>