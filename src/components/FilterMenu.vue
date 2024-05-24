<script setup>
import PanelMenu from 'primevue/panelmenu';
import Menubar from 'primevue/menubar';
</script>

<template>
    <div>
        <Menubar :model="items">
            <template #start>z
                <div class="logo-container">
                    <span class="logo-span">Filtrar por categorias</span>
                    <img src="/src/img/base/players/ie1/raimon/MarkEvans.png" alt="Logo" />
                    <!-- Your menu items here -->
                </div>
            </template>
        </Menubar>
    </div>
</template>

<style scoped>

.logo-container {
    display:inline-block;
}

.logo-span {
    font-size: 30px;
    color: black;
}
</style>