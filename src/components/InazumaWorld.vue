<script setup>

</script>

<template>
  <div class="header-app">
      <video loop autoplay muted plays-inline class="video-background">
        <source src="/src/img/pagina/backgrounds/victory-road-teaser1.mp4#t=6" type="video/mp4">
      </video>
      <div class="header-navigation">
        <nav>
          <img alt="Inazuma logo" src="/src/img/pagina/logo_bate-test_start.png" width="170" height="170" />
          <ul>
            <li><a><RouterLink to="/">Inicio</RouterLink></a></li>
            <li><a><RouterLink to="/characters">Personajes</RouterLink></a></li>
            <li><a><RouterLink to="/characters">Supertecnicas</RouterLink></a></li>
            <li><a><RouterLink to="/characters">Historia</RouterLink></a></li>
          </ul>
        </nav>
      </div>
      <div class="contingut">
        <h1>WIKI ELEVEN</h1>
        <a href="https://github.com/Eloi-Cortiella/Vueproject">Mas información</a>
      </div>
  </div>
  <div class="contingut-principal">
    <div class="introduccio">
      <div class="introduccio-presentacio">
        <h1>Todo sobre tus personajes favoritos de <strong>Inazuma Eleven</strong></h1>
        <h2>En tributo al a los 15 años de Inazuma Eleven, he decidido hacer esta Wiki.</h2>
        <a href="https://github.com/Eloi-Cortiella">Soy este</a>
      </div>
      <div class="introduccio-llista">
        <h1>TODA LA INFORMACION SOBRE:</h1>
        <ul>
         <li><a><RouterLink to="/characters">Información Personajes</RouterLink></a><img alt="Caracteristicas principales" height="330px" src="/src/img/pagina/backgrounds/all-characters-1.png"/></li> 
         <li><a href="#">Supertecnicas/tácticas (in progress)</a><img alt="Supertecnicas"  height="330px" src="/src/img/pagina/backgrounds/Inazuma Eleven (Los Super Once) - Death Spear - HD 60FPS E2 (720p60) (online-video-cutter.com).gif"/></li> 
         <li><a href="#">Historia (in progress)</a><img href="#personajes" alt="Historia" height="330px" src="/src/img/pagina/backgrounds/backgrounds1.jpg"/></li> 
        </ul>
        <h2>Y mucho más!</h2>
      </div>
    </div>
  </div>
  <div class="social-media">
    <img alt="Logo Wiki Eleven" src="/src/img/pagina/logo_bate-test_start.png">
    <h2>¡Ayúdanos a seguir adelante con este proyecto!</h2>
    <a href="https://www.inazuma.jp/" class="social-media-link">
        <img alt="github" src="/src/img/pagina/github.png">
        Más sobre nuestro proyecto
    </a>
    <h2>Sigue nuestras redes sociales</h2>
    <div class="social-media-nav">
        <ul>
            <li>
                <a href="https://twitter.com/inazuma_project" class="social-media-link">
                    <img alt="twitter x logo" src="/src/img/pagina/twitter.png">
                    Twitter
                </a>
            </li>
            <li>
                <a href="https://www.inazuma.jp/" class="social-media-link">
                    <img alt="web oficial logo" src="/src/img/pagina/discord.png">
                    Discord
                </a>
            </li>
            <li>
                <a href="https://www.inazuma.jp/" class="social-media-link">
                    <img alt="web oficial logo" src="/src/img/pagina/youtube.png">
                    YouTube
                </a>
            </li>
        </ul>
    </div>
</div>
</template>

<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* CONTINGUT HEADER*/

.header-app {
  width: 100%;
  height: 100vh;
  background-color: transparent;
  position: relative;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-navigation nav {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 8%;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Para alinear el nav a la derecha */
}

.header-navigation nav ul li{
  list-style: none;
  display: inline-block;
  margin-left: 10px;
  margin-right: 20px;
}

.header-navigation nav ul li a {
  font-size: 35px;
  text-decoration: none;
  color: rgb(243, 247, 18);
  transition: 0.4s;
  transition: font-size 1s;
}

.header-navigation nav ul li a:hover {
  font-size: 40px;
}

.header-navigation nav ul li a.router-link-exact-active {
  color: #fff;
}

.contingut {
  text-align: center;
  z-index: 1;
}

.contingut h1 {
  font-size: 150px;
  color: #fff;
  font-weight: 600;
}

.contingut a {
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  border: 2px solid #d7ee0b;
  padding: 14px 70px;
  border-radius: 50px;
  margin-top: 20px;
  transition: background-color 1s;
  transition: color 1s;
  transition: font-size 0.5s;
}

.contingut a:hover {
  background-color: #d7ee0b;
  color: black;
  font-size: 30px;
}

.video-background {
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 0.5;
}

/* CONTINGUT PRINCIPAL*/

.contingut-principal {
  width: 100%;
  min-height: 100vh; /* Cambiado para asegurar que el contenido ocupe al menos la altura de la ventana */
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/src/img/pagina/backgrounds/inazuma_eleven_campo.jpg");
  background-blend-mode: soft-light;
  background-color: rgb(61, 59, 59);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column; /* Añadido para mejorar el diseño en pantallas pequeñas */
  padding: 20px; /* Añadido padding para un mejor margen interno */
}

.introduccio {
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%; /* Asegurar que ocupe todo el ancho del contenedor */
}

.introduccio-presentacio {
  margin-bottom: 40px;
  height: auto; /* Cambiado a auto para que se ajuste al contenido */
}

.introduccio-presentacio h1 {
  font-size: 4rem; /* Cambiado a unidad relativa */
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: white;
}

.introduccio-presentacio h1 strong {
  color: orange;
}

.introduccio-presentacio h2 {
  font-size: 2rem; /* Cambiado a unidad relativa */
  font-style: italic;
  color: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.introduccio-llista {
  width: 100%; /* Asegurar que ocupe todo el ancho del contenedor */
  margin-top: 40px;
}

.introduccio-llista h1 {
  margin-bottom: 20px;
  color: white;
  font-size: 2.5rem; /* Cambiado a unidad relativa */
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.introduccio-llista ul {
  display: flex;
  flex-wrap: wrap; /* Permitir que los elementos se envuelvan */
  list-style-type: none;
  padding: 0;
  justify-content: center; /* Centrar los elementos */
}

.introduccio-llista ul li {
  display: flex;
  padding-left: 20px;
  flex-direction: column;
  align-items: center;
  margin: 10px; /* Ajusta el margen según sea necesario */
  transition: transform 0.8s;
  flex-basis: calc(33.333% - 40px); /* Ajustar el ancho para ser responsive */
  box-sizing: border-box;
}

.introduccio-llista ul li:hover {
  transform: scale(1.1);
}

.introduccio-llista ul li a {
  font-size: 1.5rem; /* Cambiado a unidad relativa */
  font-family: fantasy;
  color: yellow;
  text-decoration: none;
  transition: transform 1s;
}

.introduccio-llista ul li:hover a {
  font-size: 1.75rem; /* Cambiado a unidad relativa */
}

.introduccio-llista ul li img {
  border-radius: 5%;
  border: 2px solid rgb(9, 25, 78);
  max-width: 100%; /* Asegurar que las imágenes no excedan el ancho del contenedor */
  height: auto; /* Mantener la proporción de la imagen */
}

.introduccio-llista h2 {
  font-size: 2.5rem; /* Cambiado a unidad relativa */
  color: wheat;
  margin-top: 60px;
}

/* CONTINGUT SOCIAL MEDIA*/

.social-media {
  width: 100%;
  min-height: 100vh; /* Cambiado para asegurar que el contenido ocupe al menos la altura de la ventana */
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinear los elementos al inicio (izquierda) */
  justify-content: center;
  background-image: url("/src/img/pagina/backgrounds/victory-road-intro.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px; /* Añadir padding para separar del borde */
  color: white; /* Cambiado a blanco para mejor contraste */
}

.social-media img {
  height: 30vh;
  width: auto;
}

.social-media h2 {
  color: black; /* Cambiado a blanco para mejor contraste */
  font-size: 2.5rem; /* Cambiado a unidad relativa */
  font-weight: 600;
  margin: 20px 0;
  text-align: left; /* Alineación a la izquierda */
}

.social-media-link {
  text-decoration: none;
  color: yellow; /* Asegúrate de que el color del texto sea visible */
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 1.5rem; /* Tamaño de fuente ajustado para mejor visibilidad */
  font-weight: 700;
  transition: font-size 1s;
}

.social-media-link:hover {
  font-size: 1.75rem; /* Cambiado a unidad relativa */
}

.social-media-link img {
  height: 60px;
  width: auto;
  margin-right: 10px; /* Espacio entre la imagen y el texto */
}

.social-media-nav {
  width: 100%;
  display: flex;
  justify-content: flex-start; /* Alinear al inicio (izquierda) */
  flex-wrap: wrap; /* Añadir para que los elementos se envuelvan */
}

.social-media-nav ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap; /* Añadir para que los elementos se envuelvan */
  list-style-type: none;
}

.social-media-nav ul li {
  margin: 10px; /* Espacio entre los elementos de la lista */
}
/* RESPONSIVE */

@media (max-width: 1020px){
  .header-app {
    height: 50vh;
  }

  .video-background{
    width: 100%;
    top: 0;
  }

  .contingut h1 {
  font-size: 70px;
  color: #fff;
  font-weight: 600;
  }

  .contingut a {
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  border: 2px solid #d7ee0b;
  padding: 14px 70px;
  border-radius: 50px;
  margin-top: 20px;
  }

  .header-navigation {
    background: url("/src/img/pagina/logo_bate-test_start.png");
  }

}

@media (max-width: 768px) {
  .header-app {
    height: 28vh;
  }


  .header-navigation nav ul li a {
    font-size: 1.25rem; /* Reducir tamaño de fuente */
  }

  .header-navigation nav ul li a:hover {
    font-size: 23px;
  }

  .header-navigation nav ul li {
    margin: 10px 10px; /* Añadir margen entre elementos */
  }
  
  .contingut h1 {
    margin-top: 7rem;
    font-size: 2rem; /* Reducir tamaño de fuente */
  }

  .contingut a {
    font-size: 1rem; /* Reducir tamaño de fuente */
    padding: 10px 20px; /* Ajustar padding */
  }

  .contingut a:hover {
  font-size: 1.1rem;
  }

  .introduccio-presentacio h1 {
    font-size: 3rem; /* Reducir tamaño de fuente */
  }

  .introduccio-presentacio h2 {
    font-size: 1.5rem; /* Reducir tamaño de fuente */
  }

  .introduccio-llista h1 {
    font-size: 2rem; /* Reducir tamaño de fuente */
  }

  .introduccio-llista ul li {
    flex-basis: calc(50% - 40px); /* Ajustar el ancho para ser responsive */
  }

  .introduccio-llista ul li a {
    font-size: 1.25rem; /* Reducir tamaño de fuente */
  }

  .introduccio-llista ul li:hover a {
    font-size: 1.5rem; /* Reducir tamaño de fuente */
  }

  .introduccio-llista h2 {
    font-size: 2rem; /* Reducir tamaño de fuente */
  }

  .social-media h2 {
    font-size: 36px; /* Ajustar tamaño de fuente en pantallas más pequeñas */
  }

  .social-media-link {
    font-size: 20px; /* Ajustar tamaño de fuente en pantallas más pequeñas */
  }

  .social-media {
    padding: 10px; /* Ajustar padding para pantallas medianas */
    align-items: center; /* Centrar los elementos para pantallas medianas */
    background-position: center;
  }

  .social-media img {
    height: 20vh; /* Reducir altura de la imagen para pantallas medianas */
  }

  .social-media h2 {
    font-size: 2rem; /* Reducir tamaño de fuente para pantallas medianas */
    text-align: center; /* Centrar el texto para pantallas medianas */
  }

  .social-media-link {
    font-size: 1.25rem; /* Reducir tamaño de fuente para pantallas medianas */
  }

  .social-media-link img{
    height: 10vh; /* Reducir tamaño de fuente para pantallas medianas */
  }

  .social-media-link:hover {
    font-size: 1.5rem; /* Reducir tamaño de fuente al hover para pantallas medianas */
  }

  .social-media-nav ul {
    justify-content: center; /* Centrar los elementos de la lista para pantallas medianas */
  }

  .social-media-nav ul li a{
    color: black; /* Reducir el margen entre los elementos de la lista para pantallas pequeñas */
  }
}

@media (max-width: 480px) {
  .header-navigation nav {
    padding: 10px 5%;
  }

  .header-navigation nav img {
    padding: 10px 5%;
  }

  .header-navigation nav ul li a {
    font-size: 1rem; /* Reducir aún más tamaño de fuente */
  }

  .contingut h1 {
    font-size: 2rem; /* Reducir aún más tamaño de fuente */
  }

  .contingut a {
    font-size: 1rem; /* Reducir aún más tamaño de fuente */
    padding: 8px 40px; /* Ajustar padding */
  }

  .introduccio-presentacio h1 {
    font-size: 2rem; /* Reducir tamaño de fuente */
  }

  .introduccio-presentacio h2 {
    font-size: 1rem; /* Reducir tamaño de fuente */
  }

  .introduccio-llista h1 {
    font-size: 1.5rem; /* Reducir tamaño de fuente */
  }

  .introduccio-llista ul li {
    flex-basis: calc(100% - 40px); /* Ajustar el ancho para ser responsive */
  }

  .introduccio-llista ul li a {
    font-size: 1rem; /* Reducir tamaño de fuente */
  }

  .introduccio-llista ul li:hover a {
    font-size: 1.25rem; /* Reducir tamaño de fuente */
  }

  .introduccio-llista h2 {
    font-size: 1.5rem; /* Reducir tamaño de fuente */
  }

  .social-media {
    padding: 5px; /* Ajustar padding para pantallas pequeñas */
    align-items: center; /* Centrar los elementos para pantallas pequeñas */
  }

  .social-media img {
    height: 15vh; /* Reducir altura de la imagen para pantallas pequeñas */
  }

  .social-media h2 {
    font-size: 1.5rem; /* Reducir tamaño de fuente para pantallas pequeñas */
    text-align: center; /* Centrar el texto para pantallas pequeñas */
  }

  .social-media-link {
    font-size: 1rem; /* Reducir tamaño de fuente para pantallas pequeñas */
  }

  .social-media-link img {
    height: 4vh
  }

  .social-media-link:hover {
    font-size: 1.25rem; /* Reducir tamaño de fuente al hover para pantallas pequeñas */
  }

  .social-media-nav ul {
    justify-content: center; /* Centrar los elementos de la lista para pantallas pequeñas */
  }

  .social-media-nav ul li {
    margin: 5px; /* Reducir el margen entre los elementos de la lista para pantallas pequeñas */
  }

  .social-media-nav ul li a{
    color: white; /* Reducir el margen entre los elementos de la lista para pantallas pequeñas */
  }
}

</style>