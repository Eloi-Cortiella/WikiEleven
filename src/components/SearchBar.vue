<template>
  <main>
    <div id="main-buscador">
      <form>
        <input name="query" placeholder="Buscar personaje/es..." v-model="searchQuery">
      </form>
    </div>
    <div id="query-results">
      <h2>LISTA DE JUGADORES</h2>
      <div class="players-container">
        <DataView :value="filteredPlayers" paginator :rows="5">
          <template #list="slotPlayers">
            <template v-if="slotPlayers.items.length > 0">
              <div v-for="(section, index) in chunkPlayers(slotPlayers.items, 2)" :key="index">
                <div class="players-section">
                  <div v-for="(player, playerIndex) in section" :key="playerIndex" class="col-6">
                    <div class="player-card">
                      <img :src="player.Sprite" :alt="player.EnglishName" class="player-image">
                      <div class="player-details">
                        <div class="player-name">{{ player.EnglishName }}</div>
                        <div class="player-info">
                          <img :src="player.Gender" :alt="player.Gender" class="player-gender">
                          <img :src="player.Position" :alt="player.Position" class="player-position">
                          <img :src="player.Element" :alt="player.Element" class="player-element">
                          <!--<div class="japanese-name-div"><strong>Nombre japonés:</strong> {{ player.JapaneseName }}</div>-->
                          <div class="team-div">
                            <img :src="player.TeamSprite" :alt="player.TeamSprite" class="player-teamsprite">
                            <img :src="player.Game" :alt="player.Game" class="player-game">
                          </div>
                          <!--<div><strong>Equipo japonés:</strong> {{ player.JapaneseTeam }}</div>-->
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </template>
        </DataView>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import { players } from "@/assets/players";
import DataView from "primevue/dataview";

const searchQuery = ref('');

const filteredPlayers = computed(() => {
    if (!searchQuery.value) {
        return players;
    }
    const query = searchQuery.value.toLowerCase();
    return players.filter(player =>
        player.EnglishName.toLowerCase().includes(query) ||
        player.JapaneseName.toLowerCase().includes(query)
    );
});

const update = (event) => {
    searchQuery.value = event.target.value;
    validateInput();
}

const validateInput = () => {
    if (searchQuery.value.length > 20) {
        alert('El contenido del campo de búsqueda es demasiado largo.');
        // Aquí podrías tomar alguna acción adicional, como limpiar el input o mostrar un mensaje de error en la interfaz de usuario.
    }
    // Puedes agregar más validaciones según tus necesidades.
}

const chunkPlayers = (arr, size) => {
    return arr.reduce((acc, _, i) => (i % size === 0 ? acc.push(arr.slice(i, i + size)) : null, acc), []);
}

</script>

<style scoped>
  
#main-buscador form input {
      margin-top: 20px;
      margin-bottom: 20px;
      margin-left: 20px;
      width: 300px;
      height: 40px;
      background-color: rgba(0, 255, 255, 0.822);
      border-radius: 40px;
      border-width: 4px;
      border-color: blue;
      text-align: center;
      font-size: large;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
}
  
#query-results h2 {
      color: black;
      font-size: 40px;
}

.players-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.players-section {
    display: flex;
    justify-content: center;
    width: 100%;
}

.player-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    background-color: black;
    display: flex;
    align-items: center;
    width: 100%;
    width: 400px;
    box-sizing: border-box;
    background-image: url("/src/img/pagina/card.png");
}

.player-image {
    width: 100px;
    height: 100px;
    margin-right: 20px;
}

.player-details {
    flex-grow: 1;
}

.player-name {
  font-size: 20px;
  font-weight: bold;
  height: 30px;
  margin-bottom: 10px;
  background-image: url("/src/img/base/player-name-background.png");
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.player-info div {
    margin-bottom: 5px;
}

.japanese-name-div {
  color: white;
}

.player-teamsprite {
  width: 60px;
}

.player-game {
  width: 160px;
}

</style>
  