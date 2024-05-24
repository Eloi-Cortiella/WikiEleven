<script setup>
import SearchBar from "@/components/SearchBar.vue"
</script>

<template>
    <header>
      <div class="header-app">
        <nav>
          <img alt="Inazuma logo" src="/src/img/pagina/logo_bate-test_start.png" width="170" height="170" />
          <ul>
            <li><a><RouterLink to="/">Inicio</RouterLink></a></li>
            <li><a><RouterLink to="/characters">Personajes</RouterLink></a></li>
            <li><a><RouterLink to="/characters">Historia</RouterLink></a></li>
            <li><a><RouterLink to="/characters">Supertecnicas</RouterLink></a></li>
          </ul>
        </nav>
      </div>
    </header>

    <body class="characters-body">
        <main>
            <div class="characters-div-inici">
                <h1>PERSONAJES</h1>
                <h3>BUSCA A TUS PERSONAJES FAVORITOS DE LA SAGA!</h3>
                <div id="characters-div-content">
                <!--UN MENUBAR PER ALS FILTRES (POTSER A UN ALTRE COMPONENT)-->
                <!--FILTRES PER AL BUSCADOR (POTSER A UN ALTRE COMPONENT)-->
                <!--<FilterMenu />-->
                    <div class="characters-div-buscador">
                        <SearchBar />
                    </div>
                </div>
            </div>
        </main>
    </body>
</template>

<style scoped>

.header-app {
  width: 100%;
  height: 20vh;
  background-color: rgba(0, 195, 255, 0.726);
  position: relative;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-app nav {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 8%;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Para alinear el nav a la derecha */
}

.header-app nav ul li{
  list-style: none;
  /*border-left: 1px solid var(--color-border);*/
  display: inline-block;
  margin-left: 20px;
  margin-right: 20px;
}

.header-app nav li:first-of-type {
  border: 0;
}

.header-app nav ul li a {
  font-size: 30px;
  text-decoration: none;
  color: rgb(243, 247, 18);
  transition: 0.4s;
}

.header-app nav li a.router-link-exact-active {
  color: #fff;
}

.header-app h1 {
  font-size: 100px;
  color: #fff;
}

.characters-body {
    background-image: url("/src/img/pagina/backgrounds/victory-road.jpeg");
    background-size: cover; /* Ajusta la imagen al tamaño del body */ /* Centra la imagen */
    background-position: center;
    background-repeat: no-repeat;
    margin: 0;
    padding-top: 60px;
}

.characters-div-inici {
    background-color: rgba(0, 0, 0, 0.774);
    margin-left: 50px;
    margin-right: 50px;
    text-align: center;
}

.characters-div-inici h1{
    padding-top: 50px;
    font-size: 35px;
    color: yellow;
}

.characters-div-inici h3{
    font-size: 20px;
    color: white;
    margin-bottom: 50px;
}

#characters-div-content {
    height: 1000px;
    background-image: url("/src/img/base/background-3.png");
    background-position: center;
}

</style>